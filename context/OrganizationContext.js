import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_ORGANIZATION,
  fetchOrganization,
  formatCityCountry,
  formatLocation,
  phoneDisplay,
  phoneTelHref,
  phoneWhatsAppNumber,
} from "@/lib/organization";

const OrganizationContext = createContext({
  organization: DEFAULT_ORGANIZATION,
  loading: true,
  locationLabel: formatCityCountry(DEFAULT_ORGANIZATION),
  fullAddress: formatLocation(DEFAULT_ORGANIZATION),
  phoneLabel: phoneDisplay(DEFAULT_ORGANIZATION.phone),
  phoneHref: `tel:${phoneTelHref(DEFAULT_ORGANIZATION.phone)}`,
  email: DEFAULT_ORGANIZATION.email,
  whatsappNumber: phoneWhatsAppNumber(DEFAULT_ORGANIZATION.phone),
  whatsappUrl: (message) => {
    const number = phoneWhatsAppNumber(DEFAULT_ORGANIZATION.phone);
    if (!message) return `https://wa.me/${number}`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  },
});

export function OrganizationProvider({ children }) {
  const [organization, setOrganization] = useState(DEFAULT_ORGANIZATION);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchOrganization()
      .then((data) => {
        if (active) setOrganization(data);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(() => {
    const whatsappNumber = phoneWhatsAppNumber(organization.phone);

    return {
      organization,
      loading,
      locationLabel: formatCityCountry(organization),
      fullAddress: formatLocation(organization),
      phoneLabel: phoneDisplay(organization.phone),
      phoneHref: `tel:${phoneTelHref(organization.phone)}`,
      email: organization.email,
      whatsappNumber,
      whatsappUrl: (message) => {
        if (!message) return `https://wa.me/${whatsappNumber}`;
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      },
    };
  }, [organization, loading]);

  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  );
}

export function useOrganization() {
  return useContext(OrganizationContext);
}

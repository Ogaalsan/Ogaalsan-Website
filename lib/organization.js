import { fetchPublicJson } from "./api";

export const DEFAULT_ORGANIZATION = {
  name: "OgaalSan Consultancy",
  email: "ogaalsancon@gmail.com",
  phone: "770904045",
  address: null,
  city: "Mogadishu",
  postal_code: null,
  country: "Somalia",
  website_url: null,
  logo_url: null,
  logo_dark_url: null,
  icon_url: null,
};

export function mapOrganization(data = {}) {
  return {
    name: data.name || DEFAULT_ORGANIZATION.name,
    email: data.email || DEFAULT_ORGANIZATION.email,
    phone: data.phone || DEFAULT_ORGANIZATION.phone,
    address: data.address || null,
    city: data.city || DEFAULT_ORGANIZATION.city,
    postal_code: data.postal_code || null,
    country: data.country || DEFAULT_ORGANIZATION.country,
    website_url: data.website_url || null,
    logo_url: data.logo_url || null,
    logo_dark_url: data.logo_dark_url || null,
    icon_url: data.icon_url || null,
  };
}

export function formatLocation(organization) {
  const parts = [
    organization?.address,
    organization?.city,
    organization?.country,
  ].filter(Boolean);

  return parts.join(", ") || "Mogadishu, Somalia";
}

export function formatCityCountry(organization) {
  const parts = [organization?.city, organization?.country].filter(Boolean);
  return parts.join(", ") || "Mogadishu, Somalia";
}

/** Digits only for tel: links */
export function phoneTelHref(phone) {
  if (!phone) return "";
  const digits = String(phone).replace(/[^\d+]/g, "");
  return digits.startsWith("+") ? digits : digits;
}

/** Digits only for WhatsApp (wa.me), with Somalia default country code if missing */
export function phoneWhatsAppNumber(phone) {
  if (!phone) return "252770904045";
  let digits = String(phone).replace(/\D/g, "");
  if (digits.startsWith("00")) {
    digits = digits.slice(2);
  }
  // Local Somalia mobile without country code (e.g. 770904045 or 0615280901)
  if (digits.length <= 9) {
    digits = `252${digits.replace(/^0/, "")}`;
  } else if (digits.length === 10 && digits.startsWith("0")) {
    digits = `252${digits.slice(1)}`;
  }
  return digits;
}

export function phoneDisplay(phone) {
  return phone || DEFAULT_ORGANIZATION.phone;
}

export async function fetchOrganization() {
  try {
    const { payload } = await fetchPublicJson("/api/v1/public/organization");
    return mapOrganization(payload?.data || {});
  } catch {
    return { ...DEFAULT_ORGANIZATION };
  }
}

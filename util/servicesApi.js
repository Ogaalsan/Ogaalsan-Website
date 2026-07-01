import { fetchPublicJson } from "./api";
import { resolveMediaUrl } from "./media";

export function mapApiService(service, apiBaseUrl) {
  return {
    id: service.id,
    slug: service.slug,
    title: service.title,
    icon: service.icon || "flaticon-briefcase",
    image: resolveMediaUrl(
      service.featured_image_url || service.featured_image,
      apiBaseUrl
    ),
    shortDescription: service.short_description || "",
    description: service.detailed_description || service.short_description || "",
    highlights: service.highlights || [],
    isActive: service.is_active,
    raw: service,
  };
}

export async function fetchActiveServices() {
  const { payload, apiBaseUrl } = await fetchPublicJson("/api/v1/public/services");
  const services = payload.data || [];

  return services.map((service) => mapApiService(service, apiBaseUrl));
}

export async function fetchActiveService(identifier) {
  try {
    const { payload, apiBaseUrl } = await fetchPublicJson(
      `/api/v1/public/services/${identifier}`
    );
    return mapApiService(payload.data, apiBaseUrl);
  } catch {
    return null;
  }
}

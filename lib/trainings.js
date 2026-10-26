import { fetchPublicJson, getApiBaseUrlCandidates } from "./api";
import { resolveMediaUrl } from "./media";

const DEFAULT_IMAGE = "/assets/img/ogalsan/training.jpg";

function mapTraining(training, apiBaseUrl) {
  if (!training) return null;

  return {
    id: training.id,
    slug: training.slug,
    title: training.title,
    image:
      resolveMediaUrl(training.image_url || training.image, apiBaseUrl) ||
      DEFAULT_IMAGE,
    duration: training.duration || "",
    level: training.level || "",
    modes: Array.isArray(training.modes) ? training.modes : ["online", "offline"],
    summary: training.summary || "",
    description: training.description || "",
    topics: Array.isArray(training.topics) ? training.topics : [],
    isActive: training.is_active !== false,
    sortOrder: training.sort_order ?? 0,
  };
}

/**
 * Fetches active trainings from the admin backend only (no static fallback).
 */
export async function fetchTrainings() {
  try {
    const { payload, apiBaseUrl } = await fetchPublicJson(
      "/api/v1/public/trainings"
    );
    const data = payload?.data ?? [];
    if (!Array.isArray(data)) return [];
    return data.map((item) => mapTraining(item, apiBaseUrl)).filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Fetches a single training by slug from the admin backend only.
 */
export async function fetchTrainingBySlug(slug) {
  if (!slug) return null;
  try {
    const { payload, apiBaseUrl } = await fetchPublicJson(
      `/api/v1/public/trainings/${encodeURIComponent(slug)}`
    );
    return mapTraining(payload?.data, apiBaseUrl);
  } catch {
    return null;
  }
}

/**
 * Submits a training or course registration to the Laravel admin backend.
 */
export async function submitTrainingRegistration(data) {
  const candidates = getApiBaseUrlCandidates();
  let lastError = null;

  for (const baseUrl of candidates) {
    try {
      const response = await fetch(
        `${baseUrl}/api/v1/public/training-registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        const error = new Error(
          payload.message || `Request failed (${response.status})`
        );
        error.errors = payload.errors || {};
        error.status = response.status;
        throw error;
      }

      return payload;
    } catch (error) {
      lastError = error;
      if (error.status && error.status >= 400 && error.status < 500) {
        break;
      }
    }
  }

  throw lastError || new Error("Unable to submit registration");
}

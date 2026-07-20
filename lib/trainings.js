import { getApiBaseUrlCandidates } from "./api";
import {
  trainings as staticTrainings,
  getTrainingBySlug as staticGetTrainingBySlug,
} from "./data/trainings";

async function getJson(path) {
  const candidates = getApiBaseUrlCandidates();
  let lastError = null;

  for (const baseUrl of candidates) {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} from ${baseUrl}${path}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(`Failed to fetch ${path}`);
}

/**
 * Fetches active trainings from the admin backend.
 * Falls back to the bundled static list if the API is unavailable.
 */
export async function fetchTrainings() {
  try {
    const payload = await getJson("/api/v1/public/trainings");
    const data = payload?.data ?? [];
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
    return staticTrainings;
  } catch {
    return staticTrainings;
  }
}

/**
 * Fetches a single training by slug from the admin backend.
 * Falls back to the bundled static data if the API is unavailable.
 */
export async function fetchTrainingBySlug(slug) {
  try {
    const payload = await getJson(
      `/api/v1/public/trainings/${encodeURIComponent(slug)}`
    );
    return payload?.data ?? null;
  } catch {
    return staticGetTrainingBySlug(slug);
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
        throw error;
      }

      return payload;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("Unable to submit registration");
}

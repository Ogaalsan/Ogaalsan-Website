import { getApiBaseUrlCandidates } from "./api";
import {
  trainings as staticTrainings,
  getTrainingBySlug as staticGetTrainingBySlug,
} from "./trainingsData";

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
  } catch (error) {
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
  } catch (error) {
    return staticGetTrainingBySlug(slug);
  }
}

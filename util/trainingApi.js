import { getApiBaseUrlCandidates } from "./api";

/**
 * Submits a training or course registration to the Laravel admin backend.
 * The backend saves it, emails the participant, and notifies the admin.
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

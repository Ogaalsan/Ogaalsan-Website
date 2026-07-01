import { getApiBaseUrl } from "./media";

const CACHE_TTL_MS = 60 * 1000;
const inflightRequests = new Map();
const responseCache = new Map();

export function getApiBaseUrlCandidates() {
  const configured =
    process.env.OGAALSAN_API_URL ||
    process.env.NEXT_PUBLIC_OGAALSAN_API_URL;

  const candidates = [
    configured,
    "http://127.0.0.1:9000",
    "http://localhost:9000",
    "http://127.0.0.1:8000",
    "http://localhost:8000",
  ]
    .filter(Boolean)
    .map((url) => url.replace(/\/$/, ""));

  return [...new Set(candidates)];
}

async function fetchPublicJsonOnce(path) {
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

      const payload = await response.json();
      return { payload, apiBaseUrl: baseUrl };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(`Failed to fetch ${path}`);
}

export async function fetchPublicJson(path) {
  const cached = responseCache.get(path);
  if (cached && Date.now() - cached.time < CACHE_TTL_MS) {
    return cached.value;
  }

  if (inflightRequests.has(path)) {
    return inflightRequests.get(path);
  }

  const request = fetchPublicJsonOnce(path)
    .then((result) => {
      responseCache.set(path, { value: result, time: Date.now() });
      return result;
    })
    .finally(() => {
      inflightRequests.delete(path);
    });

  inflightRequests.set(path, request);
  return request;
}

export function clearPublicApiCache(path) {
  if (path) {
    responseCache.delete(path);
    inflightRequests.delete(path);
    return;
  }

  responseCache.clear();
  inflightRequests.clear();
}

export function getResolvedApiBaseUrl() {
  return getApiBaseUrl().replace(/\/$/, "");
}

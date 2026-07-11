import { getApiBaseUrl } from "./media";

const TOKEN_KEY = "ogaalsan_auth_token";
const USER_KEY = "ogaalsan_auth_user";

function getAuthBaseUrl() {
  return getApiBaseUrl().replace(/\/$/, "");
}

async function authRequest(path, options = {}) {
  const { method = "GET", body, token } = options;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${getAuthBaseUrl()}/api/v1/auth${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || payload.success === false) {
    const error = new Error(payload.message || "Request failed");
    error.status = response.status;
    error.errors = payload.errors || {};
    throw error;
  }

  return payload;
}

export function getStoredToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function persistAuth(token, user) {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAuth() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export async function loginUser({ email, password }) {
  const payload = await authRequest("/login", {
    method: "POST",
    body: { email, password },
  });

  const { user, token } = payload.data;
  persistAuth(token, user);
  return { user, token };
}

export async function registerUser({
  name,
  email,
  password,
  password_confirmation,
  country,
  city,
  district,
  whatsapp_phone,
}) {
  const payload = await authRequest("/register", {
    method: "POST",
    body: {
      name,
      email,
      password,
      password_confirmation,
      country,
      city,
      district,
      whatsapp_phone,
    },
  });

  const { user, token } = payload.data;
  if (token && user) {
    persistAuth(token, user);
  }

  return { user, token };
}

export async function verifyEmail({ email, verification_code }) {
  const payload = await authRequest("/verify", {
    method: "POST",
    body: { email, verification_code },
  });

  return payload.data?.user || payload.data;
}

export async function resendVerification(email) {
  return authRequest("/resend-verification", {
    method: "POST",
    body: { email },
  });
}

export async function fetchCurrentUser() {
  const token = getStoredToken();
  if (!token) return null;

  const payload = await authRequest("/me", { token });
  const user = payload.data?.user || payload.data;
  persistAuth(token, user);
  return user;
}

export async function logoutUser() {
  const token = getStoredToken();
  if (token) {
    try {
      await authRequest("/logout", { method: "POST", token });
    } catch {
      // Clear local session even if API fails
    }
  }
  clearAuth();
}

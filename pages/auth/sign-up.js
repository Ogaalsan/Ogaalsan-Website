import Layout from "@/components/layout/Layout";
import AuthCard, { AuthFooterLink } from "@/components/auth/AuthCard";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const { register, isAuthenticated, loading: authLoading } = useAuth();
  const [form, setForm] = useState({
    name: "",
    country: "",
    city: "",
    district: "",
    email: "",
    whatsapp_phone: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const redirectTo = (() => {
    const raw =
      typeof router.query.redirect === "string"
        ? router.query.redirect
        : "/student-dashboard";
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  })();

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [authLoading, isAuthenticated, redirectTo, router]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setFieldErrors({});
    setSubmitting(true);

    try {
      await register(form);
      router.push(redirectTo);
    } catch (err) {
      setError(err.message || "Unable to create account. Please try again.");
      if (err.errors) setFieldErrors(err.errors);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldMessage = (name) => {
    const value = fieldErrors[name];
    if (!value) return null;
    return Array.isArray(value) ? value[0] : value;
  };

  return (
    <Layout>
      <AuthCard
        title="Create your account"
        subtitle="Join to enroll and track your learning"
        footer={
          <AuthFooterLink
            href={`/auth/sign-in${
              typeof router.query.redirect === "string"
                ? `?redirect=${encodeURIComponent(router.query.redirect)}`
                : ""
            }`}
          >
            Already have an account? Sign in
          </AuthFooterLink>
        }
      >
        {error ? (
          <div className="auth-alert auth-alert--error">{error}</div>
        ) : null}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="sign-up-name">Full name</label>
            <input
              id="sign-up-name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            {fieldMessage("name") ? (
              <span className="auth-field-error">{fieldMessage("name")}</span>
            ) : null}
          </div>

          <div className="auth-form__grid">
            <div className="auth-field">
              <label htmlFor="sign-up-country">Country</label>
              <input
                id="sign-up-country"
                type="text"
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                required
                autoComplete="country-name"
              />
              {fieldMessage("country") ? (
                <span className="auth-field-error">
                  {fieldMessage("country")}
                </span>
              ) : null}
            </div>
            <div className="auth-field">
              <label htmlFor="sign-up-city">City</label>
              <input
                id="sign-up-city"
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                autoComplete="address-level2"
              />
              {fieldMessage("city") ? (
                <span className="auth-field-error">{fieldMessage("city")}</span>
              ) : null}
            </div>
          </div>

          <div className="auth-form__grid">
            <div className="auth-field">
              <label htmlFor="sign-up-district">District</label>
              <input
                id="sign-up-district"
                type="text"
                name="district"
                placeholder="District"
                value={form.district}
                onChange={handleChange}
                required
                autoComplete="address-level3"
              />
              {fieldMessage("district") ? (
                <span className="auth-field-error">
                  {fieldMessage("district")}
                </span>
              ) : null}
            </div>
            <div className="auth-field">
              <label htmlFor="sign-up-phone">WhatsApp phone</label>
              <input
                id="sign-up-phone"
                type="tel"
                name="whatsapp_phone"
                placeholder="+252 ..."
                value={form.whatsapp_phone}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
              {fieldMessage("whatsapp_phone") ? (
                <span className="auth-field-error">
                  {fieldMessage("whatsapp_phone")}
                </span>
              ) : null}
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="sign-up-email">Email address</label>
            <input
              id="sign-up-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            {fieldMessage("email") ? (
              <span className="auth-field-error">{fieldMessage("email")}</span>
            ) : null}
          </div>

          <div className="auth-form__grid">
            <div className="auth-field">
              <label htmlFor="sign-up-password">Password</label>
              <input
                id="sign-up-password"
                type="password"
                name="password"
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
                autoComplete="new-password"
              />
              {fieldMessage("password") ? (
                <span className="auth-field-error">
                  {fieldMessage("password")}
                </span>
              ) : null}
            </div>
            <div className="auth-field">
              <label htmlFor="sign-up-password-confirm">Confirm password</label>
              <input
                id="sign-up-password-confirm"
                type="password"
                name="password_confirmation"
                placeholder="Repeat password"
                value={form.password_confirmation}
                onChange={handleChange}
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="ogaalsan-btn ogaalsan-btn--primary auth-form__submit"
            disabled={submitting || authLoading}
          >
            {submitting ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </AuthCard>
    </Layout>
  );
}

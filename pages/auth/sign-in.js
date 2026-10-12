import Layout from "@/components/layout/Layout";
import AuthCard, { AuthFooterLink } from "@/components/auth/AuthCard";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const { login, isAuthenticated, loading: authLoading } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
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
    setSubmitting(true);

    try {
      await login(form);
      router.push(redirectTo);
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to continue learning"
        footer={
          <AuthFooterLink
            href={`/auth/sign-up${
              typeof router.query.redirect === "string"
                ? `?redirect=${encodeURIComponent(router.query.redirect)}`
                : ""
            }`}
          >
            Don&apos;t have an account? Create one
          </AuthFooterLink>
        }
      >
        {error ? (
          <div className="auth-alert auth-alert--error">{error}</div>
        ) : null}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="sign-in-email">Email address</label>
            <input
              id="sign-in-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="auth-field">
            <label htmlFor="sign-in-password">Password</label>
            <input
              id="sign-in-password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="ogaalsan-btn ogaalsan-btn--primary auth-form__submit"
            disabled={submitting || authLoading}
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </AuthCard>
    </Layout>
  );
}

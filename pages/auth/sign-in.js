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

  const redirectTo =
    typeof router.query.redirect === "string" ? router.query.redirect : "/";

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
    <Layout breadcrumbTitle="Sign In">
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to access your Ogaalsan account, courses, and updates."
        footer={
          <>
            <AuthFooterLink
              href={`/auth/sign-up${
                typeof router.query.redirect === "string"
                  ? `?redirect=${encodeURIComponent(router.query.redirect)}`
                  : ""
              }`}
            >
              Don&apos;t have an account? Create one
            </AuthFooterLink>
          </>
        }
      >
        {error && (
          <div className="auth-alert auth-alert--error">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-grp">
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="form-grp">
            <input
              type="password"
              name="password"
              placeholder="Password *"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-three"
            disabled={submitting || authLoading}
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </AuthCard>
    </Layout>
  );
}

import Layout from "@/components/layout/Layout";
import AuthCard, { AuthFooterLink } from "@/components/auth/AuthCard";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function VerifyEmail() {
  const router = useRouter();
  const { verify, resendCode } = useAuth();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (router.isReady && typeof router.query.email === "string") {
      setEmail(router.query.email);
    }
  }, [router.isReady, router.query.email]);

  const handleVerify = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setSubmitting(true);

    try {
      await verify({ email, verification_code: code });
      setMessage("Email verified! You can now sign in.");
      setTimeout(() => router.push("/auth/sign-in"), 1500);
    } catch (err) {
      setError(err.message || "Verification failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setError("Enter your email address first.");
      return;
    }

    setError("");
    setMessage("");
    setResending(true);

    try {
      await resendCode(email);
      setMessage("A new verification code has been sent to your email.");
    } catch (err) {
      setError(err.message || "Could not resend code. Please try again.");
    } finally {
      setResending(false);
    }
  };

  return (
    <Layout breadcrumbTitle="Verify Email">
      <AuthCard
        title="Verify your email"
        subtitle="Enter the 4-digit code we sent to your email address."
        footer={
          <AuthFooterLink href="/auth/sign-in">
            Back to sign in
          </AuthFooterLink>
        }
      >
        {error && (
          <div className="auth-alert auth-alert--error">{error}</div>
        )}
        {message && (
          <div className="auth-alert auth-alert--success">{message}</div>
        )}
        <form onSubmit={handleVerify}>
          <div className="form-grp">
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="text"
              name="code"
              placeholder="Verification code *"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={4}
              inputMode="numeric"
              pattern="[0-9]{4}"
            />
          </div>
          <button
            type="submit"
            className="btn btn-three"
            disabled={submitting}
          >
            {submitting ? "Verifying..." : "Verify Email"}
          </button>
        </form>
        <button
          type="button"
          className="btn btn-two mt-15"
          onClick={handleResend}
          disabled={resending}
        >
          {resending ? "Sending..." : "Resend code"}
        </button>
      </AuthCard>
    </Layout>
  );
}

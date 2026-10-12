import Link from "next/link";

export default function AuthCard({ title, subtitle, children, footer }) {
  return (
    <section className="auth-page">
      <div className="container">
        <div className="auth-layout">
          <div className="auth-layout__intro">
            <Link href="/" className="auth-shell__logo">
              <img
                src="/assets/img/logo/logo-ogalsan.png"
                alt="OgaalSan Consultancy"
              />
            </Link>
            <p className="auth-layout__brand">OgaalSan Learn</p>
            <h1 className="auth-shell__title">{title}</h1>
            {subtitle ? (
              <p className="auth-shell__subtitle">{subtitle}</p>
            ) : null}
          </div>

          <div className="auth-shell auth-shell--form-only">
            <div className="auth-shell__panel">
              <div className="auth-shell__body">{children}</div>
              {footer ? (
                <div className="auth-card-footer">{footer}</div>
              ) : null}
            </div>
          </div>

          <p className="auth-back-link">
            <Link href="/">Back to main site</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export function AuthFooterLink({ href, children }) {
  return (
    <p className="auth-footer-link mb-0">
      <Link href={href}>{children}</Link>
    </p>
  );
}

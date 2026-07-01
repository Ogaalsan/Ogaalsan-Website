import Link from "next/link";

export default function AuthCard({
  title,
  subtitle,
  children,
  footer,
}) {
  return (
    <section className="inner-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="inner-contact-info">
              <h2 className="title">{title}</h2>
              {subtitle && <p>{subtitle}</p>}
              <div className="contact-form contact-form-inner">{children}</div>
              {footer && <div className="auth-card-footer mt-20">{footer}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AuthFooterLink({ href, children }) {
  return (
    <p className="mb-0 text-center">
      <Link href={href} style={{ color: "#3FA9F5", fontWeight: 600 }}>
        {children}
      </Link>
    </p>
  );
}

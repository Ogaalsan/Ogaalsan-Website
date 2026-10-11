import Link from "next/link";

/**
 * Light page header (no dark banner). crumbs: [{ href?, label }]
 */
export default function PageIntro({
  crumbs = [],
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <header
      className={`ogaalsan-page-intro${
        align === "center" ? " ogaalsan-page-intro--center" : ""
      }`}
    >
      {crumbs.length > 0 ? (
        <nav className="ogaalsan-page-intro__crumbs" aria-label="Breadcrumb">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`} className="ogaalsan-page-intro__crumb">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      ) : null}
      {eyebrow ? (
        <span className="ogaalsan-page-intro__eyebrow">{eyebrow}</span>
      ) : null}
      {title ? <h1 className="ogaalsan-page-intro__title">{title}</h1> : null}
      {description ? (
        <p className="ogaalsan-page-intro__desc">{description}</p>
      ) : null}
    </header>
  );
}

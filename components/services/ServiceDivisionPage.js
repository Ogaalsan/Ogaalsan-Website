import Layout from "@/components/layout/Layout";
import PageIntro from "@/components/layout/PageIntro";
import Link from "next/link";
import Image from "next/image";
import { SERVICE_DIVISIONS } from "@/lib/serviceDivisions";

export default function ServiceDivisionPage({ division }) {
  if (!division) return null;

  return (
    <Layout headTitle={division.title}>
      <section className="ogaalsan-page ogaalsan-service-detail">
        <div className="container">
          <PageIntro
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: division.shortTitle || division.title },
            ]}
            eyebrow={division.eyebrow || "For organisations"}
            title={division.title}
            description={division.summary}
          />

          <div className="ogaalsan-service-detail__grid">
            <div className="ogaalsan-service-detail__main">
              <div className="ogaalsan-service-detail__media">
                <Image
                  src={division.image}
                  alt={division.title}
                  width={900}
                  height={520}
                  priority
                />
              </div>

              <div className="ogaalsan-service-detail__content">
                <p>{division.description}</p>

                <h2>What we deliver</h2>
                <ul className="ogaalsan-service-detail__list">
                  {division.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Outcomes for your organisation</h2>
                <div className="ogaalsan-service-detail__outcomes">
                  {division.outcomes.map((item) => (
                    <div key={item.title} className="ogaalsan-service-detail__outcome">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="ogaalsan-service-detail__actions">
                  <Link
                    href="/contact"
                    className="ogaalsan-btn ogaalsan-btn--primary"
                  >
                    Talk to an expert
                  </Link>
                  <Link href="/services" className="ogaalsan-services__link">
                    All services
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <aside className="ogaalsan-service-detail__aside">
              <h3>Service areas</h3>
              <ul>
                {SERVICE_DIVISIONS.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className={
                        item.slug === division.slug ? "is-active" : undefined
                      }
                    >
                      {item.shortTitle || item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="ogaalsan-service-detail__aside-cta">
                <h4>Need a tailored plan?</h4>
                <p>Tell us your goals and we will recommend the right approach.</p>
                <Link href="/contact" className="ogaalsan-services__link">
                  Contact us
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}

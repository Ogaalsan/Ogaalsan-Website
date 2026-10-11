import Layout from "@/components/layout/Layout";
import PageIntro from "@/components/layout/PageIntro";
import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";
import ContentLoader from "@/components/common/ContentLoader";
import { fetchActiveServices } from "@/lib/services";
import { SERVICE_DIVISIONS } from "@/lib/serviceDivisions";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function Services() {
  const { data: services = [], loading } = useClientFetch(
    fetchActiveServices,
    []
  );

  return (
    <Layout headTitle="Our Services">
      <section className="ogaalsan-page ogaalsan-services">
        <div className="container">
          <PageIntro
            crumbs={[
              { href: "/", label: "Home" },
              { label: "Services" },
            ]}
            eyebrow="For organisations"
            title="ICT & digital consultancy services"
            description="Three core areas we deliver for businesses, institutions, and development partners."
          />

          <div className="ogaalsan-services__divisions">
            {SERVICE_DIVISIONS.map((division) => (
              <article
                key={division.slug}
                className="ogaalsan-services__division"
              >
                <span className="ogaalsan-services__division-label">
                  {division.eyebrow || "Service area"}
                </span>
                <h2 className="ogaalsan-services__division-title">
                  <Link href={`/services/${division.slug}`}>
                    {division.shortTitle || division.title}
                  </Link>
                </h2>
                <p>{division.summary}</p>
                <Link
                  href={`/services/${division.slug}`}
                  className="ogaalsan-services__link"
                >
                  Learn more
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          {loading ? (
            <ContentLoader message="Loading services..." />
          ) : services.length > 0 ? (
            <div className="ogaalsan-services__catalog">
              <div className="ogaalsan-services__catalog-head">
                <h2>Service catalog</h2>
                <p>Additional offerings from the OgaalSan admin catalog.</p>
              </div>
              <div className="ogaalsan-services__catalog-grid">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}

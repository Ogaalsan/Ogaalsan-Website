import Layout from "@/components/layout/Layout";
import PageIntro from "@/components/layout/PageIntro";
import ContentLoader from "@/components/common/ContentLoader";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  fetchActiveService,
  fetchActiveServices,
} from "@/lib/services";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function ServiceDetails() {
  const router = useRouter();
  const slug = router.query.slug;
  const ready = router.isReady && Boolean(slug);

  const { data: service, loading: serviceLoading } = useClientFetch(
    () => fetchActiveService(slug),
    [slug],
    { enabled: ready, initialData: null }
  );
  const { data: services = [], loading: listLoading } = useClientFetch(
    fetchActiveServices,
    []
  );

  if (!ready || serviceLoading || listLoading) {
    return (
      <Layout headTitle="Service Details">
        <section className="ogaalsan-page">
          <div className="container">
            <ContentLoader message="Loading service..." />
          </div>
        </section>
      </Layout>
    );
  }

  if (!service) {
    return (
      <Layout headTitle="Service Details">
        <section className="ogaalsan-page">
          <div className="container">
            <PageIntro
              crumbs={[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { label: "Not found" },
              ]}
              title="Service not found"
              description="This service may be unpublished or the link is incorrect."
            />
            <Link href="/services" className="ogaalsan-services__link">
              Back to services
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout headTitle={service.title}>
      <section className="ogaalsan-page ogaalsan-service-detail">
        <div className="container">
          <PageIntro
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: service.title },
            ]}
            eyebrow="Service catalog"
            title={service.title}
            description={service.shortDescription || undefined}
          />

          <div className="ogaalsan-service-detail__grid">
            <div className="ogaalsan-service-detail__main">
              <div className="ogaalsan-service-detail__media">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={520}
                  loading="lazy"
                />
              </div>

              <div className="ogaalsan-service-detail__content">
                <p>{service.description}</p>

                {service.highlights?.length > 0 ? (
                  <>
                    <h2>What we do</h2>
                    <ul className="ogaalsan-service-detail__list">
                      {service.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

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
              <h3>More services</h3>
              <ul>
                {services.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/services/${item.slug}`}
                      className={
                        item.slug === service.slug ? "is-active" : undefined
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}

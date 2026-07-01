import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  fetchActiveService,
  fetchActiveServices,
} from "@/util/servicesApi";
import { useClientFetch } from "@/util/useClientFetch";

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
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Service Details">
        <ContentLoader message="Loading service..." />
      </Layout>
    );
  }

  if (!service) {
    return (
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Service Details">
        <section className="pt-120 pb-120 text-center">
          <div className="container">
            <h2>Service not found.</h2>
            <Link href="/services" className="btn mt-30">
              Back to Services
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Service Details">
      <section className="services-details-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-71 order-0 order-lg-2">
              <div className="services-details-wrap">
                <div className="services-details-thumb">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="services-details-content">
                  <h2 className="title">{service.title}</h2>
                  <p>{service.description}</p>

                  {service.highlights?.length > 0 && (
                    <>
                      <h3 className="title-two">What we do</h3>
                      <ul className="list-wrap mb-20">
                        {service.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="company-benefit-wrap">
                    <h2 className="title-two">Why Choose Ogaalsan</h2>
                    <div className="accordion-wrap-three">
                      <Accordion />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-29">
              <aside className="services-sidebar">
                <div className="services-cat-list mb-30">
                  <ul className="list-wrap">
                    {services.map((item) => (
                      <li
                        key={item.id}
                        className={item.slug === service.slug ? "active" : ""}
                      >
                        <Link href={`/services/${item.slug}`}>
                          {item.title}{" "}
                          <i className="flaticon-right-arrow" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

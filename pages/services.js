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
      <section className="ogaalsan-page">
        <div className="container">
          <PageIntro
            crumbs={[
              { href: "/", label: "Home" },
              { label: "Services" },
            ]}
            eyebrow="For organisations"
            title="ICT & digital consultancy services"
            description="Explore our three core service areas — ICT Solutions, Business Development, and Capacity Building."
          />

          <div className="row justify-content-center mb-50 align-items-stretch">
            {SERVICE_DIVISIONS.map((division) => (
              <div key={division.slug} className="col-lg-4 col-md-6 mb-30 d-flex">
                <div className="services-item w-100">
                  <div className="services-content h-100 d-flex flex-column">
                    <div className="content-top">
                      <div className="icon">
                        <i className={division.icon} />
                      </div>
                      <h2 className="title">
                        <Link href={`/services/${division.slug}`}>
                          {division.title}
                        </Link>
                      </h2>
                    </div>
                    <p className="flex-grow-1">{division.summary}</p>
                    <Link
                      href={`/services/${division.slug}`}
                      className="btn transparent-btn mt-auto"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {loading ? (
            <ContentLoader message="Loading services..." />
          ) : services.length > 0 ? (
            <>
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center mb-40">
                  <h3 className="title">More from our service catalog</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}

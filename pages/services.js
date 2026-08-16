import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/services/ServiceCard";
import ContentLoader from "@/components/common/ContentLoader";
import { fetchActiveServices } from "@/lib/services";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function Services() {
  const { data: services = [], loading } = useClientFetch(
    fetchActiveServices,
    []
  );

  return (
    <Layout breadcrumbTitle="Our Services">
      <section
        className="services-area-five inner-services-bg"
        data-background="/assets/img/bg/inner_services_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title-two text-center mb-50">
                <h2 className="title">Our ICT &amp; Digital Consultancy Services</h2>
                <p>
                  OgaalSan focuses on three core areas — ICT Solutions,
                  Business Development, and Training &amp; Capacity Building —
                  combining international best practices with local expertise.
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <ContentLoader message="Loading services..." />
          ) : services.length > 0 ? (
            <div className="row justify-content-center">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h3>No services available yet</h3>
                <p>Add services in the Ogaalsan admin panel to display them here.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

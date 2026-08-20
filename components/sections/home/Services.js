import Link from "next/link";
import Image from "next/image";

export default function Services({ services = [], loading = false }) {
  if (loading) {
    return (
      <section className="services-area-two services-bg-two py-80">
        <div className="container text-center">
          <p>Loading services...</p>
        </div>
      </section>
    );
  }

  if (!services.length) {
    return (
      <section className="services-area-two services-bg-two py-80">
        <div className="container text-center">
          <p>Services are loading from the admin API. Start the Ogaalsan admin server if this message persists.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="services-area-two services-bg-two"
      data-background="/assets/img/bg/services_bg02.jpg"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-title-two mb-60 tg-heading-subheading animation-style3">
              <span className="sub-title">ICT &amp; Digital Innovation Solutions</span>
              <h2 className="title tg-element-title">
                We plan, build &amp; grow your digital business
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="view-all-btn text-end mb-30">
              <Link href="/services" className="btn">
                See All Service
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-stretch">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-8 d-flex"
            >
              <div className="services-item-two w-100">
                <div className="services-thumb-two">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={350}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="services-content-two">
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <h2 className="title">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h2>
                  <p>{service.shortDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

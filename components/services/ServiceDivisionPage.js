import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { SERVICE_DIVISIONS } from "@/lib/serviceDivisions";

export default function ServiceDivisionPage({ division }) {
  if (!division) return null;

  return (
    <Layout breadcrumbTitle={division.title} headTitle={division.title}>
      <section className="services-details-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-71 order-0 order-lg-2">
              <div className="services-details-wrap">
                <div className="services-details-thumb mb-40">
                  <Image
                    src={division.image}
                    alt={division.title}
                    width={900}
                    height={520}
                    priority
                    style={{ width: "100%", height: "auto", borderRadius: 10 }}
                  />
                </div>
                <div className="services-details-content">
                  <span className="sub-title">{division.eyebrow}</span>
                  <h2 className="title">{division.title}</h2>
                  <p>{division.description}</p>

                  <h3 className="title-two">What we deliver</h3>
                  <ul className="list-wrap mb-30">
                    {division.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="title-two">Outcomes for your organization</h3>
                  <div className="row mb-40">
                    {division.outcomes.map((item) => (
                      <div key={item.title} className="col-md-4 mb-20">
                        <h4 className="title" style={{ fontSize: 18 }}>
                          {item.title}
                        </h4>
                        <p style={{ marginBottom: 0 }}>{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-3">
                    <Link href="/contact" className="btn">
                      Talk to an Expert
                    </Link>
                    <Link href="/services" className="btn border-btn">
                      All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-29">
              <aside className="services-sidebar">
                <div className="services-cat-list mb-30">
                  <ul className="list-wrap">
                    {SERVICE_DIVISIONS.map((item) => (
                      <li
                        key={item.slug}
                        className={item.slug === division.slug ? "active" : ""}
                      >
                        <Link href={`/services/${item.slug}`}>
                          {item.shortTitle}{" "}
                          <i className="flaticon-right-arrow" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/services">
                        View all services{" "}
                        <i className="flaticon-right-arrow" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="services-widget">
                  <h4 className="title" style={{ marginBottom: 12 }}>
                    Need a tailored plan?
                  </h4>
                  <p style={{ marginBottom: 16 }}>{division.summary}</p>
                  <Link href="/contact" className="btn">
                    Contact Us
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

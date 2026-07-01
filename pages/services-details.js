import Accordion from "@/components/elements/Accordion";
import VideoPopup from "@/components/elements/PopupVideo";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetails() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Service Details">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <Image
                        src="/assets/img/ogalsan/person.jpg"
                        alt="ICT Strategy & Consulting"
                        width={800}
                        height={600}
                        loading="lazy"
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">ICT Strategy &amp; Consulting</h2>
                      <p>
                        We help organizations assess ICT systems, identify gaps,
                        and design practical digital roadmaps.
                      </p>
                      <h3 className="title-two">Consulting focus</h3>
                      <ul className="list-wrap mb-20">
                        <li>
                          Aligning your ICT plans with your business goals
                        </li>
                        <li>
                          Reviewing current systems and highlighting key risks
                        </li>
                        <li>Recommending clear next steps for improvement</li>
                      </ul>

                      <div className="company-benefit-wrap">
                        <h2 className="title-two">Why Choose Us</h2>
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
                        <li className="active">
                          <Link href="/services-details">
                            ICT Strategy &amp; Consulting{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details-2">
                            Training &amp; Capacity Building{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details-3">
                            Digital Business Development{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details-4">
                            Digital Marketing &amp; Growth{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* services-details-area-end */}
          {/* brand-area */}
          <div className="brand-area-seven">
            <div className="container">{/* <BrandSlider /> */}</div>
          </div>
        </div>
      </Layout>
    </>
  );
}

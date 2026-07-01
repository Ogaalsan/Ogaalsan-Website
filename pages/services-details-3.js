import Accordion from "@/components/elements/Accordion";
import VideoPopup from "@/components/elements/PopupVideo";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import Link from "next/link";

export default function ServiceDetails3() {
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
                      <img
                        src="/assets/img/ogalsan/person.jpg"
                        alt="Digital Business Development"
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">
                        Digital Business Development for Somali Organisations
                      </h2>
                      <p>
                        We help organisations use simple digital tools to improve
                        services, streamline processes, and create new
                        opportunities for growth.
                      </p>
                      <h3 className="title-two">What we do</h3>
                      <ul className="list-wrap mb-20">
                        <li>Improve key processes with digital tools</li>
                        <li>Support new digital products and services</li>
                        <li>Guide teams through change and adoption</li>
                      </ul>
                      <div className="company-benefit-wrap">
                        <h2 className="title-two">
                          Why Choose OgaalSan for Digital Business Development
                        </h2>
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
                        <li>
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
                        <li className="active">
                          <Link href="/services-details-3">
                            Digital Business Development{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details">
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

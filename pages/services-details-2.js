import Accordion from "@/components/elements/Accordion";
import VideoPopup from "@/components/elements/PopupVideo";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetails2() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Service Details">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <div className="services-details-thumb mb-30">
                        <Image
                          src="/assets/img/ogalsan/training.jpg"
                          alt="Training & Capacity Building"
                          width={800}
                          height={600}
                          loading="lazy"
                        />
                      </div>
                      <h2 className="title">
                        Training &amp; Capacity Building for Somali Teams
                      </h2>
                      <p>
                        We offer simple, practical ICT and digital skills
                        trainings so your team can use the tools they need every
                        day with confidence.
                      </p>
                      <h3 className="title-two">What we do</h3>
                      <ul className="list-wrap mb-20">
                        <li>Short, focused training sessions</li>
                        <li>Hands-on practice with real tools</li>
                        <li>Support to apply new skills at work</li>
                      </ul>
                      <div className="company-benefit-wrap">
                        <h2 className="title-two">
                          Why Choose OgaalSan for Training
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
                        <li className="active">
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

import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetails4() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="Service Details">
                <div>
                    <section className="services-details-area pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-71 order-0 order-lg-2">
                                    <div className="services-details-wrap">
                                        <div className="services-details-content">
                                            <div className="sd-inner-wrap-four">
                        <div className="services-details-thumb mb-30">
                          <Image
                            src="/assets/img/ogalsan/digital-1.jpg"
                            alt="Digital Marketing &amp; Growth"
                            width={800}
                            height={600}
                            loading="lazy"
                          />
                                                    </div>
                                                        <div className="content">
                          <h2 className="title">
                            Digital Marketing &amp; Growth
                          </h2>
                          <p>
                            We plan and run simple, effective online campaigns
                            so your services are visible on the channels your
                            audience already uses.
                          </p>
                          <h3 className="title-two">What we do</h3>
                                                <ul className="list-wrap">
                                                    <li>
                              Plan your digital marketing goals and target
                              audience
                            </li>
                            <li>
                              Create and schedule content for social media and
                              other channels
                            </li>
                            <li>
                              Set up and optimise simple campaigns and landing
                              pages
                                                    </li>
                                                    <li>
                              Track results and share easy-to-read reports
                                                    </li>
                                                </ul>
                                            </div>
                                                    </div>
                      <div className="company-benefit-wrap mt-40">
                        <h2 className="title-two">
                          Why Choose OgaalSan for Digital Marketing &amp; Growth
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
                                        <div className="services-cat-list services-cat-list-two mb-30">
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
                        <li>
                          <Link href="/services-details-3">
                            Digital Business Development{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li className="active">
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

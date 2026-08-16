import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Layout breadcrumbTitle="About Us">
        <div>
          <section className="about-area-seven pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                  <div className="about-img-seven-wrap">
                    <Image
                      src="/assets/img/ogalsan/person.jpg"
                      alt=""
                      width={600}
                      height={800}
                      style={{ maxWidth: "100%", height: "auto" }}
                      data-aos="fade-right"
                      data-aos-delay={0}
                      loading="lazy"
                    />
                    <Image
                      src="/assets/img/ogalsan/creative.jpg"
                      alt=""
                      width={300}
                      height={400}
                      style={{ maxWidth: "300px", height: "auto" }}
                      data-aos="fade-up"
                      data-aos-delay={300}
                      loading="lazy"
                    />
                    <Image
                      src="/assets/img/images/inner_about_shape01.png"
                      alt=""
                      width={200}
                      height={200}
                      className="shape"
                      data-aos="zoom-in"
                      data-aos-delay={500}
                      loading="lazy"
                    />
                    <div
                      className="experience-wrap"
                      data-aos="fade-left"
                      data-aos-delay={0}
                    >
                      <h2 className="title">25</h2>
                      <p>Years Of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content-seven">
                    <div className="section-title mb-30">
                      <span className="sub-title">Who We Are</span>
                      <h2 className="title">
                        Transforming Ideas Into Sustainable Solutions
                      </h2>
                    </div>
                    <p>
                      OgaalSan Consultancy is a multidisciplinary consulting
                      firm providing integrated Business Development,
                      Information and Communication Technology (ICT),
                      Professional Training, Research &amp; Consultancy, and
                      Legal Advisory services — empowering entrepreneurs,
                      businesses, government institutions, development
                      partners, educational institutions, and communities to
                      thrive in an increasingly digital and
                      knowledge-driven economy.
                    </p>
                    <div className="success-wrap-two">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-investment" />
                          </div>
                          <div className="content">
                            <h2 className="count">
                              <CounterUp count={500} />+
                            </h2>
                            <p>Professionals trained</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-business-presentation" />
                          </div>
                          <div className="content">
                            <h2 className="count">
                              <CounterUp count={98} />%
                            </h2>
                            <p>Client satisfaction</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <p className="info-two">
                      The name "OgaalSan", derived from the Somali word{" "}
                      <em>Ogaal</em> — knowledge, wisdom, and awareness —
                      reflects our commitment to delivering evidence-based
                      solutions that create measurable impact, combining
                      international best practices with local expertise.
                    </p>
                    <Link href="/contact" className="btn btn-three">
                      Contact With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-area-end */}
          {/* features-area */}
          <section
            className="features-area-five features-bg ogaalsan-vmv"
            data-background="/assets/img/bg/features_bg.jpg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="section-title text-center mb-50">
                    <span className="sub-title">Vision, Mission &amp; Values</span>
                    <h2 className="title">
                      What Drives Our Work Every Day
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="features-item">
                    <div className="features-content">
                      <div className="content-top">
                        <div className="icon">
                          <i className="flaticon-inspiration" />
                        </div>
                        <h2 className="title">Our Vision</h2>
                      </div>
                      <p>
                        To be the leading multidisciplinary consultancy in
                        Africa, empowering individuals, businesses, and
                        institutions through innovation, knowledge,
                        technology, and sustainable development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="features-item">
                    <div className="features-content">
                      <div className="content-top">
                        <div className="icon">
                          <i className="flaticon-puzzle-piece" />
                        </div>
                        <h2 className="title">Our Mission</h2>
                      </div>
                      <p>
                        To provide high-quality consultancy, technology,
                        research, legal, and capacity-building services that
                        strengthen organizations, promote entrepreneurship,
                        accelerate digital transformation, and contribute to
                        inclusive economic growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="features-item">
                    <div className="features-content">
                      <div className="content-top">
                        <div className="icon">
                          <i className="flaticon-profit" />
                        </div>
                        <h2 className="title">Our Core Values</h2>
                      </div>
                      <p>
                        Integrity, Innovation, Excellence, Professionalism,
                        Collaboration, Accountability, Sustainability, and
                        Knowledge — the principles behind every engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-shape-wrap">
              <Image
                src="/assets/img/images/features_shape01.png"
                alt=""
                width={150}
                height={150}
                loading="lazy"
              />
              <Image
                src="/assets/img/images/features_shape02.png"
                alt=""
                width={150}
                height={150}
                loading="lazy"
              />
            </div>
          </section>
          {/* features-area-end */}
        </div>
      </Layout>
    </>
  );
}

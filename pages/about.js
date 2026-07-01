import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About Us">
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
                        ICT &amp; Digital Innovation Partner For Your
                        Organization
                      </h2>
                    </div>
                    <p>
                      We are an ICT and digital innovation company helping
                      organizations plan, build, and scale modern technology
                      solutions that drive real business results.
                    </p>
                    <div className="success-wrap-two">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-investment" />
                          </div>
                          <div className="content">
                            <h2 className="count">
                              <CounterUp count={152} />K
                            </h2>
                            <p>Total revenue</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-business-presentation" />
                          </div>
                          <div className="content">
                            <h2 className="count">
                              <CounterUp count={95} />%
                            </h2>
                            <p>Increase in sales</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <p className="info-two">
                      From infrastructure and cloud to applications, data, and
                      digital marketing, we combine strategy, engineering, and
                      training to accelerate your digital transformation.
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
            className="features-area-five features-bg"
            data-background="/assets/img/bg/features_bg.jpg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="section-title text-center mb-50">
                    <span className="sub-title">Core Features</span>
                    <h2 className="title">
                      Amazing Features For Business Solutions
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
                          <i className="flaticon-puzzle-piece" />
                        </div>
                        <h2 className="title">Quality Services</h2>
                      </div>
                      <p>
                        eiusmod temporincididunt ut labore magna aliqua Quisery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="features-item">
                    <div className="features-content">
                      <div className="content-top">
                        <div className="icon">
                          <i className="flaticon-inspiration" />
                        </div>
                        <h2 className="title">Innovation Ideas</h2>
                      </div>
                      <p>
                        eiusmod temporincididunt ut labore magna aliqua Quisery.
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
                        <h2 className="title">Business Growth</h2>
                      </div>
                      <p>
                        eiusmod temporincididunt ut labore magna aliqua Quisery.
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
          {/* testimonial-area */}
          <section
            className="testimonial-area testimonial-bg"
            data-background="/assets/img/bg/testimonial_bg.jpg"
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-5 col-md-8">
                  <div className="testimonial-img">
                    <Image
                      src="/assets/img/images/testimonial_img.jpg"
                      alt=""
                      width={500}
                      height={600}
                      loading="lazy"
                    />
                    <div className="review-wrap">
                      <Image
                        src="/assets/img/icons/rating.svg"
                        alt=""
                        width={100}
                        height={20}
                        loading="lazy"
                      />
                      <div className="content">
                        <h2 className="title">15k</h2>
                        <p>
                          Positive <br /> Review
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="testimonial-item-wrap">
                    <TestimonialSlider1 />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* testimonial-area-end */}
        </div>
      </Layout>
    </>
  );
}

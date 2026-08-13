import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="about-area-seven pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about-img-seven-wrap">
              <Image
                src="/assets/img/ogalsan/person.jpg"
                alt=""
                width={600}
                height={365}
                style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
                data-aos="fade-right"
                data-aos-delay={0}
                loading="lazy"
              />
              <Image
                src="/assets/img/ogalsan/creative.jpg"
                alt=""
                width={300}
                height={200}
                style={{ maxWidth: "300px", height: "auto", objectFit: "cover" }}
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
                <Link href="/about" className="sub-title">
                  About
                </Link>
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
              <Link href="/about" className="btn btn-three">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

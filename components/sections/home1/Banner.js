import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <section
        className="banner-area-two banner-bg-two"
        data-background="/assets/img/banner/h2_banner_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="banner-content-two">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  ICT &amp; Digital Innovation Experts
                </span>
                <h2 className="title" data-aos="fade-up" data-aos-delay={300}>
                  Smart Digital <span className="text-primary">Solutions</span>
                  <br />
                  For Your Business
                </h2>
                <p className="mb-25" data-aos="fade-up" data-aos-delay={500}>
                  We plan, design, and implement modern ICT systems, digital
                  products, and data-driven strategies that help organisations
                  work smarter and grow faster.
                </p>
                <ul
                  className="list-wrap banner-feature-list"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <li>End-to-end ICT &amp; infrastructure support</li>
                  <li>Hands-on training &amp; capacity building</li>
                  <li>Digital marketing &amp; growth strategies</li>
                </ul>
                <div
                  className="banner-btn d-flex align-items-center gap-3 mt-30"
                  data-aos="fade-up"
                  data-aos-delay={700}
                >
                  <Link href="/services" className="btn">
                    Our Services
                  </Link>
                  <Link href="/contact" className="btn border-btn">
                    Talk to an Expert
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="banner-img-wrap"
                data-aos="fade-left"
                data-aos-delay={400}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/assets/img/ogalsan/hero-4.png"
                  alt="Digital Innovation"
                  width={600}
                  height={500}
                  priority
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-wrap">
          <Image
            src="/assets/img/banner/h2_banner_shape01.png"
            alt=""
            width={100}
            height={100}
            loading="lazy"
          />
          <Image
            src="/assets/img/banner/h2_banner_shape02.png"
            alt=""
            width={100}
            height={100}
            loading="lazy"
          />
          <Image
            src="/assets/img/banner/h2_banner_shape03.png"
            alt=""
            width={100}
            height={100}
            loading="lazy"
            data-aos="zoom-in-up"
            data-aos-delay={800}
          />
        </div>
      </section>
    </>
  );
}


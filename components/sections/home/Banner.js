import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      className="banner-area-two banner-bg-two ogaalsan-hero"
      data-background="/assets/img/banner/h2_banner_bg.jpg"
    >
      <div className="container">
        <div className="row align-items-center ogaalsan-hero__row">
          <div className="col-lg-6 col-md-6">
            <div className="banner-content-two ogaalsan-hero__content">
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Consultancy &bull; ICT &bull; Training &bull; Business
              </span>
              <h1 className="title" data-aos="fade-up" data-aos-delay={200}>
                Transforming Ideas Into <span>Sustainable Solutions</span>
              </h1>
              <p
                className="ogaalsan-hero__lead"
                data-aos="fade-up"
                data-aos-delay={350}
              >
                OgaalSan Consultancy delivers ICT solutions, training, and
                business development support — helping organisations across
                Somalia and East Africa work smarter and grow with confidence.
              </p>
              <ul
                className="list-wrap ogaalsan-hero__features"
                data-aos="fade-up"
                data-aos-delay={450}
              >
                <li>
                  <i className="fas fa-check" aria-hidden="true" />
                  ICT systems, infrastructure &amp; digital tools
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true" />
                  Hands-on training &amp; capacity building
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true" />
                  Business development &amp; digital growth
                </li>
              </ul>
              <div
                className="banner-btn d-flex align-items-center gap-3 ogaalsan-hero__actions"
                data-aos="fade-up"
                data-aos-delay={550}
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
              className="ogaalsan-hero__media"
              data-aos="fade-left"
              data-aos-delay={300}
            >
              <Image
                src="/assets/img/ogalsan/hero-4.png"
                alt="OgaalSan digital innovation solutions"
                width={600}
                height={561}
                priority
                className="ogaalsan-hero__image"
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
  );
}

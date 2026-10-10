import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="ogaalsan-hero" aria-label="Introduction">
      <div className="ogaalsan-hero__atmosphere" aria-hidden="true" />
      <div className="ogaalsan-hero__grain" aria-hidden="true" />

      <div className="container ogaalsan-hero__container">
        <div className="row align-items-center ogaalsan-hero__row">
          <div className="col-lg-6">
            <div className="ogaalsan-hero__copy">
              <p
                className="ogaalsan-hero__brand"
                data-aos="fade-up"
                data-aos-delay={80}
              >
                OgaalSan
              </p>
              <h1
                className="ogaalsan-hero__title"
                data-aos="fade-up"
                data-aos-delay={160}
              >
                Transforming ideas into sustainable solutions
              </h1>
              <p
                className="ogaalsan-hero__lead"
                data-aos="fade-up"
                data-aos-delay={240}
              >
                ICT, training, and business development for organisations
                across Somalia and East Africa.
              </p>
              <div
                className="ogaalsan-hero__actions"
                data-aos="fade-up"
                data-aos-delay={320}
              >
                <Link
                  href="/services"
                  className="ogaalsan-btn ogaalsan-btn--primary ogaalsan-hero__btn"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="ogaalsan-btn ogaalsan-btn--outline ogaalsan-hero__btn"
                >
                  Talk to an expert
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="ogaalsan-hero__media"
              data-aos="fade-left"
              data-aos-delay={220}
            >
              <Image
                src="/assets/img/ogalsan/hero-4.png"
                alt="OgaalSan digital and consulting solutions"
                width={640}
                height={600}
                priority
                className="ogaalsan-hero__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

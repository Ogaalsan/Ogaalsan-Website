export default function Choose() {
  return (
    <section className="ogaalsan-choose pt-120 pb-120">
      <div className="choose-shape" aria-hidden="true">
        <img
          src="/assets/img/images/choose_shape.png"
          alt=""
          data-aos="fade-right"
          data-aos-delay={0}
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                <h2 className="title tg-element-title">
                  We&apos;ll Ensure You Always Get the Best Multidisciplinary
                  Consultancy Support.
                </h2>
              </div>
              <p>
                OgaalSan Consultancy delivers integrated Business
                Development, ICT, Training, Research, and Legal Advisory
                services that strengthen organizations and drive
                sustainable growth.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="skill-wrap skill-wrap--choose"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <div className="section-title-two mb-15">
                <span className="sub-title">Why Choose OgaalSan</span>
              </div>
              <p>
                We combine international best practices with local
                expertise to help clients improve performance, embrace
                innovation, strengthen governance, and achieve sustainable
                growth.
              </p>
              <div className="progress-wrap">
                <div className="progress-item">
                  <h6 className="title">Training &amp; Capacity Building</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Training and capacity building"
                    aria-valuenow={88}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-delay=".2s"
                      style={{ width: "88%" }}
                    >
                      <span>88%</span>
                    </div>
                  </div>
                </div>
                <div className="progress-item">
                  <h6 className="title">ICT Solutions</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="ICT solutions"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-delay=".1s"
                      style={{ width: "95%" }}
                    >
                      <span>95%</span>
                    </div>
                  </div>
                </div>
                <div className="progress-item">
                  <h6 className="title">Business Development</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Business development"
                    aria-valuenow={92}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-delay=".3s"
                      style={{ width: "92%" }}
                    >
                      <span>92%</span>
                    </div>
                  </div>
                </div>
                <div className="progress-item">
                  <h6 className="title">Research &amp; Consultancy</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Research and consultancy"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-delay=".4s"
                      style={{ width: "90%" }}
                    >
                      <span>90%</span>
                    </div>
                  </div>
                </div>
                <div className="progress-item">
                  <h6 className="title">Legal Advisory</h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Legal advisory"
                    aria-valuenow={87}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar wow slideInLeft"
                      data-wow-delay=".5s"
                      style={{ width: "87%" }}
                    >
                      <span>87%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

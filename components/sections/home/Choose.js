export default function Choose() {
  return (
    <section className="ogaalsan-choose pt-120 pb-120">
      <div className="choose-shape" aria-hidden="true">
        <img src="/assets/img/images/choose_shape.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-content">
              <div className="section-title-two mb-20">
                <h2 className="title">
                  We&apos;ll Ensure You Always Get the Best ICT &amp; Digital
                  Consultancy Support.
                </h2>
              </div>
              <p>
                OgaalSan Consultancy delivers ICT solutions, training, and
                business development support that help organizations work
                smarter and grow with confidence.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skill-wrap skill-wrap--choose">
              <div className="section-title-two mb-15">
                <span className="sub-title">Why Choose OgaalSan</span>
              </div>
              <p>
                We combine international best practices with local expertise to
                help clients improve performance, embrace innovation, strengthen
                governance, and achieve sustainable growth.
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
                    <div className="progress-bar" style={{ width: "88%" }}>
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
                    <div className="progress-bar" style={{ width: "95%" }}>
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
                    <div className="progress-bar" style={{ width: "92%" }}>
                      <span>92%</span>
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

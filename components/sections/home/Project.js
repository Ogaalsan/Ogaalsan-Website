import Link from "next/link";

export default function Project() {
  return (
    <>
      <section className="project-area-two project-bg-two" data-background="/assets/img/bg/project_bg02.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="section-title-two mb-40 tg-heading-subheading animation-style3">
                <span className="sub-title">Our Expertise</span>
                <h2 className="title tg-element-title">
                  ICT &amp; Digital <br /> Consultancy Services
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="project-content-top">
                <p>
                  We provide ICT solutions, training, and business
                  development support to help your organization thrive in
                  the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <img
                    src="/assets/img/ogalsan/servers.jpg"
                    alt="ICT Solutions"
                  />
                </div>
                <div className="project-content-two">
                  <h2 className="title">
                    <Link href="/services">
                      ICT Solutions
                    </Link>
                  </h2>
                  <span>Technology Infrastructure & Systems</span>
                  <Link href="/services" className="link-btn">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <img
                    src="/assets/img/ogalsan/training-2.jpg"
                    alt="Training & Capacity Building"
                  />
                </div>
                <div className="project-content-two">
                  <h2 className="title">
                    <Link href="/services">
                      Training & Capacity Building
                    </Link>
                  </h2>
                  <span>Professional Development Programs</span>
                  <Link href="/services" className="link-btn">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <img
                    src="/assets/img/ogalsan/marketing.jpg"
                    alt="Business Development"
                  />
                </div>
                <div className="project-content-two">
                  <h2 className="title">
                    <Link href="/services">
                      Business Development
                    </Link>
                  </h2>
                  <span>From Idea to Expansion (GYB&ndash;SYB&ndash;IYB&ndash;EYB)</span>
                  <Link href="/services" className="link-btn">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

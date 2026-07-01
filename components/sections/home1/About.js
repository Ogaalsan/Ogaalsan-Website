export default function About() {
  return (
    <>
      <section className="about-area-three">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="about-img-wrap-three">
                <img
                  src="/assets/img/ogalsan/consultant.jpg"
                  alt=""
                  data-aos="fade-down-right"
                  data-aos-delay={0}
                />
                <img
                  src="/assets/img/ogalsan/blue.jpg"
                  alt=""
                  data-aos="fade-left"
                  data-aos-delay={400}
                />
                <div
                  className="experience-wrap"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <h2 className="title">
                    10 <span>Years</span>
                  </h2>
                  <p>Of Experience in ICT &amp; Digital Innovation.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-three">
                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                  <span className="sub-title">Get To Know Us</span>
                  <h2 className="title tg-element-title">
                    Driving Growth Through ICT &amp; Digital Innovation
                  </h2>
                </div>
                <p className="info-one">
                  OgaalSan Consultancy helps organizations design and implement
                  modern ICT systems, digital products, and data-driven
                  strategies that unlock new opportunities and improve
                  performance.
                </p>
                <div className="about-list-two">
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-arrow-right" />
                      ICT solutions that modernise and secure your systems
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Training &amp; capacity building for your teams
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Business development and digital product support
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Digital marketing to grow your online presence
                    </li>
                  </ul>
                </div>
                <p>
                  From initial discovery to delivery and ongoing optimisation,
                  we work as your long-term partner to ensure technology truly
                  supports your mission and the communities you serve.
                </p>
                <div className="about-author-info">
                  <div className="thumb">
                    <img src="/assets/img/images/about_author.png" alt="" />
                  </div>
                  <div className="content">
                    <h2 className="title">OgaalSan Leadership</h2>
                    <span>ICT &amp; Digital Innovation Consultants</span>
                  </div>
                  <div className="signature">
                    <img src="/assets/img/images/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-wrap-two">
          <img src="/assets/img/images/h2_about_shape01.png" alt="" />
          <img src="/assets/img/images/h2_about_shape02.png" alt="" />
          <img
            src="/assets/img/images/h2_about_shape03.png"
            alt=""
            data-aos="fade-left"
            data-aos-delay={500}
          />
        </div>
      </section>
    </>
  );
}

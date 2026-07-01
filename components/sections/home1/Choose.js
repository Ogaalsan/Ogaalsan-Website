export default function Choose() {
    return (
        <>
            <section className="choose-area jarallax choose-bg" data-background="/assets/img/ogalsan/sure.jpg">
                <div className="choose-shape">
                    <img src="/assets/img/images/choose_shape.png" alt="" data-aos="fade-right" data-aos-delay={0} />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="section-title-two white-title mb-20 tg-heading-subheading animation-style3">
                                    <h2 className="title tg-element-title">We'll Ensure You Always Get the Best ICT Solutions & Digital Innovation Support.</h2>
                                </div>
                                <p>OgaalSan Consultancy delivers cutting-edge ICT strategies, comprehensive training programs, and digital transformation solutions that drive business growth and innovation.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skill-wrap wow fadeInRight" data-wow-delay=".2s">
                                <div className="section-title-two mb-15">
                                    <span className="sub-title">Why Choose OgaalSan</span>
                                    {/* <h2 className="title">Expert ICT & Digital Innovation Solutions</h2> */}
                                </div>
                                <p>We combine deep technical expertise with practical business insights to deliver ICT solutions that transform organizations and drive digital innovation.</p>
                                <div className="progress-wrap">
                                <div className="progress-item">
                                        <h6 className="title">Training & Capacity Building</h6>
                                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar wow slideInLeft" data-wow-delay=".2s" style={{ width: '88%' }}><span>88%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <h6 className="title">ICT Solutions</h6>
                                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar wow slideInLeft" data-wow-delay=".1s" style={{ width: '95%' }}><span>95%</span></div>
                                        </div>
                                    </div>
                                   
                                    <div className="progress-item">
                                        <h6 className="title">Digital Marketing</h6>
                                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar wow slideInLeft" data-wow-delay=".3s" style={{ width: '92%' }}><span>92%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

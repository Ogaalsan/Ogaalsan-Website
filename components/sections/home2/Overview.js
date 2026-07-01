export default function Overview() {
    return (
        <>
            <section className="overview-area-two">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="overview-img-two">
                                <div className="mask-img-two">
                                    <img src="/assets/img/images/h3_overview_img01.jpg" alt="" />
                                </div>
                                <img src="/assets/img/images/h3_overview_img02.jpg" alt="" className="img-two" data-parallax="{&quot;y&quot; : 100 }" />
                                <div className="overview-shape-wrap">
                                    <img src="/assets/img/images/h3_overview_shape01.png" alt="" />
                                    <img src="/assets/img/images/h3_overview_shape02.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="overview-content-two">
                                <div className="section-title-two mb-30 tg-heading-subheading animation-style1">
                                    <span className="sub-title tg-element-title">Company Overview</span>
                                    <h2 className="title tg-element-title">We Prepare An Effective Strategy For Companies</h2>
                                </div>
                                <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture.</p>
                                <div className="progress-wrap">
                                    <div className="progress-item">
                                        <h6 className="title">Consulting</h6>
                                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar wow slideInLeft" data-wow-delay=".1s" style={{ width: '85%' }}><span>85%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <h6 className="title">Investment</h6>
                                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={76} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar wow slideInLeft" data-wow-delay=".2s" style={{ width: '76%' }}><span>76%</span></div>
                                        </div>
                                    </div>
                                    <div className="progress-item">
                                        <h6 className="title">Investment</h6>
                                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar wow slideInLeft" data-wow-delay=".3s" style={{ width: '90%' }}><span>90%</span></div>
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

import Link from "next/link"

export default function Features() {
    return (
        <>
            <section className="features-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title-two text-center mb-40 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">What We Do For You</span>
                                <h2 className="title tg-element-title">The features that make our Service unique</h2>
                            </div>
                        </div>
                    </div>
                    <div className="features-item-wrap-two">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        <i className="flaticon-inspiration" />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Finance Planning</h2>
                                        <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                        <Link href="/services-details" className="link-btn">See Details <img src="/assets/img/icons/right-arrow.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        <i className="flaticon-layers" />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Business Consulting</h2>
                                        <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                        <Link href="/services-details" className="link-btn">See Details <img src="/assets/img/icons/right-arrow.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        <i className="flaticon-calculator" />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Tax Advisory</h2>
                                        <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                        <Link href="/services-details" className="link-btn">See Details <img src="/assets/img/icons/right-arrow.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        <i className="flaticon-investment" />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Business Audit</h2>
                                        <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                        <Link href="/services-details" className="link-btn">See Details <img src="/assets/img/icons/right-arrow.svg" alt="" /></Link>
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

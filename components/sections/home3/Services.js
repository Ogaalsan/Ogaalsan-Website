import Link from "next/link"

export default function Services() {
    return (
        <>
            <section className="services-area-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section-title-two mb-50 tg-heading-subheading animation-style2">
                                <span className="sub-title tg-element-title">Our Expertise Areas</span>
                                <h2 className="title tg-element-title">We Make Better Insurance For Everyone</h2>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-4">
                            <div className="view-all-btn text-end mb-30">
                                <Link href="/services" className="btn transparent-btn-two">See All Service</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item-three">
                                <div className="services-thumb-three">
                                    <Link href="/services-details"><img src="/assets/img/services/h4_services_img01.jpg" alt="" /></Link>
                                </div>
                                <div className="services-content-three">
                                    <div className="services-icon">
                                        <i className="flaticon-healthcare" />
                                    </div>
                                    <h4 className="title"><Link href="/services-details">Health Insurance</Link></h4>
                                    <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                    <div className="overlay-icon">
                                        <i className="flaticon-healthcare" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item-three">
                                <div className="services-thumb-three">
                                    <Link href="/services-details"><img src="/assets/img/services/h4_services_img02.jpg" alt="" /></Link>
                                </div>
                                <div className="services-content-three">
                                    <div className="services-icon">
                                        <i className="flaticon-protection" />
                                    </div>
                                    <h4 className="title"><Link href="/services-details">Vehicle Insurance</Link></h4>
                                    <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                    <div className="overlay-icon">
                                        <i className="flaticon-protection" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item-three">
                                <div className="services-thumb-three">
                                    <Link href="/services-details"><img src="/assets/img/services/h4_services_img03.jpg" alt="" /></Link>
                                </div>
                                <div className="services-content-three">
                                    <div className="services-icon">
                                        <i className="flaticon-ship" />
                                    </div>
                                    <h4 className="title"><Link href="/services-details">Cargo Insurance</Link></h4>
                                    <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                    <div className="overlay-icon">
                                        <i className="flaticon-ship" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item-three">
                                <div className="services-thumb-three">
                                    <Link href="/services-details"><img src="/assets/img/services/h4_services_img04.jpg" alt="" /></Link>
                                </div>
                                <div className="services-content-three">
                                    <div className="services-icon">
                                        <i className="flaticon-house" />
                                    </div>
                                    <h4 className="title"><Link href="/services-details">Fire Insurance</Link></h4>
                                    <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                    <div className="overlay-icon">
                                        <i className="flaticon-house" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-shape-four">
                    <img src="/assets/img/services/h4_services_shape.png" alt="" data-aos="fade-left" data-aos-delay={200} />
                </div>
            </section>
        </>
    )
}

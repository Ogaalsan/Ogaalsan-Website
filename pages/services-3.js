import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"
import Image from "next/image"

export default function Service3() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="services-area-seven pt-120 pb-90">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-7">
                                    <div className="section-title-two text-center mb-50">
                                        <span className="sub-title">What We Do For You</span>
                                        <h2 className="title">The features that make our Service unique</h2>
                                        <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor amet, consectetuolor sit amet, consectetu.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="features-item-three">
                                        <div className="features-icon-three">
                                            <i className="flaticon-inspiration" />
                                        </div>
                                        <div className="features-content-three">
                                            <h2 className="title">Finance Planning</h2>
                                            <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                            <Link href="/services-details" className="link-btn">See Details <Image src="/assets/img/icons/right-arrow.svg" alt="" width={20} height={20} loading="lazy" /></Link>
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
                                            <Link href="/services-details" className="link-btn">See Details <Image src="/assets/img/icons/right-arrow.svg" alt="" width={20} height={20} loading="lazy" /></Link>
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
                                            <Link href="/services-details" className="link-btn">See Details <Image src="/assets/img/icons/right-arrow.svg" alt="" width={20} height={20} loading="lazy" /></Link>
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
                                            <Link href="/services-details" className="link-btn">See Details <Image src="/assets/img/icons/right-arrow.svg" alt="" width={20} height={20} loading="lazy" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="features-item-three">
                                        <div className="features-icon-three">
                                            <i className="flaticon-business-presentation" />
                                        </div>
                                        <div className="features-content-three">
                                            <h2 className="title">BAudit  Evaluation</h2>
                                            <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                            <Link href="/services-details" className="link-btn">See Details <Image src="/assets/img/icons/right-arrow.svg" alt="" width={20} height={20} loading="lazy" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="features-item-three">
                                        <div className="features-icon-three">
                                            <i className="flaticon-report-1" />
                                        </div>
                                        <div className="features-content-three">
                                            <h2 className="title">Customer Experience</h2>
                                            <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                            <Link href="/services-details" className="link-btn">See Details <Image src="/assets/img/icons/right-arrow.svg" alt="" width={20} height={20} loading="lazy" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="features-item-three">
                                        <div className="features-icon-three">
                                            <i className="flaticon-development" />
                                        </div>
                                        <div className="features-content-three">
                                            <h2 className="title">Project Management</h2>
                                            <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                            <Link href="/services-details" className="link-btn">See Details <Image src="/assets/img/icons/right-arrow.svg" alt="" width={20} height={20} loading="lazy" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="features-item-three">
                                        <div className="features-icon-three">
                                            <i className="flaticon-piggy-bank" />
                                        </div>
                                        <div className="features-content-three">
                                            <h2 className="title">Investment Planning</h2>
                                            <p>Morem ipsum dolor sittemet consectetur adipiscing elitflorai psum dolor.</p>
                                            <Link href="/services-details" className="link-btn">See Details <Image src="/assets/img/icons/right-arrow.svg" alt="" width={20} height={20} loading="lazy" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-area-end */}
                    {/* cta-area */}
                    <section className="cta-area-five">
                        <div className="container">
                            <div className="cta-inner-wrap-two" data-background="/assets/img/bg/cta_bg02.jpg">
                                <div className="row align-items-center">
                                    <div className="col-lg-9">
                                        <div className="cta-content">
                                            <div className="cta-info-wrap">
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    <span>Call For More Info</span>
                                                    <Link href="tel:0123456789">+123 8989 444</Link>
                                                </div>
                                            </div>
                                            <h2 className="title">Let’s Request a Schedule For Free Consultation</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="cta-btn text-end">
                                            <Link href="/contact" className="btn btn-three">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* cta-area-end */}
                    {/* brand-area */}
                    <div className="brand-area-six pt-80 pb-80">
                        <div className="container">
                            <BrandSlider />
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}
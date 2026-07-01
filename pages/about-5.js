import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"

export default function About5() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                    <section className="about-area-eleven">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                                    <div className="about-img-wrap-eleven">
                                        <Image src="/assets/img/images/inner_about_img05.png" alt="" width={600} height={700} loading="lazy" />
                                        <Image src="/assets/img/images/inner_about_shape01.png" alt="" className="shape-one" width={150} height={150} loading="lazy" />
                                        <Image src="/assets/img/images/inner_about_shape02.png" alt="" className="shape-two" width={150} height={150} loading="lazy" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content-eleven">
                                        <div className="section-title mb-30">
                                            <span className="sub-title">Who we are</span>
                                            <h2 className="title">Best Digital Solution <br /> Provider Agency</h2>
                                        </div>
                                        <p>when an unknown printer took a galley of type and scrambled it ake a type specimen book. when an unknown printer took a galley of type and scrambled it ake.</p>
                                        <div className="about-list-two">
                                            <ul className="list-wrap">
                                                <li><i className="fas fa-arrow-right" />Digital Creative Agency</li>
                                                <li><i className="fas fa-arrow-right" />Professional Problem Solutions</li>
                                                <li><i className="fas fa-arrow-right" />Web Design  Development</li>
                                            </ul>
                                        </div>
                                        <Link href="/services" className="btn btn-three">Take our Service</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}
                    {/* about-area */}
                    <section className="about-area-six about-area-twelve">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-10">
                                    <div className="about-img-six about-img-twelve">
                                        <Image src="/assets/img/images/h5_about_img.png" alt="" width={600} height={700} loading="lazy" />
                                        <Image src="/assets/img/images/inner_about_shape03.png" alt="" width={150} height={150} loading="lazy" />
                                        <Image src="/assets/img/images/h5_about_shape02.png" alt="" width={150} height={150} loading="lazy" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content-six">
                                        <div className="section-title section-title-three mb-30">
                                            <span className="sub-title">Expertise areas</span>
                                            <h2 className="title">Consulting Digital Agency specializing in This Field</h2>
                                        </div>
                                        <p>Advice on comprehensive legal solutions and legal planning on all aspects of business, including issues</p>
                                        <div className="progress-wrap">
                                            <div className="progress-item">
                                                <h6 className="title">Child Insurance</h6>
                                                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                                    <div className="progress-bar wow slideInLeft" data-wow-delay=".1s" style={{ width: '55%' }}><span>55%</span></div>
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <h6 className="title">Insurance Claim</h6>
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
                    {/* about-area-end */}
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
                    {/* team-area */}
                    <section className="team-area-six">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title section-title-three text-center mb-50">
                                        <span className="sub-title">Meet Our Team</span>
                                        <h2 className="title">Experience Team Members</h2>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to minddestmentor area</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item-five">
                                        <div className="team-thumb-five">
                                            <Image src="/assets/img/team/h5_team_img01.png" alt="" width={300} height={400} loading="lazy" />
                                        </div>
                                        <div className="team-content-five">
                                            <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team-social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item-five">
                                        <div className="team-thumb-five">
                                            <img src="/assets/img/team/h5_team_img02.png" alt="" />
                                        </div>
                                        <div className="team-content-five">
                                            <h2 className="title"><Link href="/team-details">Jenny Wilson</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team-social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item-five">
                                        <div className="team-thumb-five">
                                            <img src="/assets/img/team/h5_team_img03.png" alt="" />
                                        </div>
                                        <div className="team-content-five">
                                            <h2 className="title"><Link href="/team-details">Wade Warren</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team-social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item-five">
                                        <div className="team-thumb-five">
                                            <img src="/assets/img/team/h5_team_img04.png" alt="" />
                                        </div>
                                        <div className="team-content-five">
                                            <h2 className="title"><Link href="/team-details">Marvin McKinney</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team-social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team-area-end */}
                    {/* request-area */}
                    <section className="request-area request-bg" data-background="/assets/img/bg/request_bg.jpg">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="request-content">
                                        <h2 className="title">Let’s Request A Schedule For <br /> Free Consultation</h2>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="request-content-right">
                                        <div className="request-contact">
                                            <div className="icon">
                                                <i className="flaticon-phone-call" />
                                            </div>
                                            <div className="content">
                                                <span>Hotline 24/7</span>
                                                <Link href="tel:0123456789">+123 8989 444</Link>
                                            </div>
                                        </div>
                                        <div className="request-btn">
                                            <Link href="/contact" className="btn">Request a Schedule</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="request-shape">
                            <Image src="/assets/img/images/request_shape.png" alt="" width={200} height={200} loading="lazy" />
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
import CounterUp from "@/components/elements/CounterUp"
import SocialToggle from "@/components/elements/SocialToggle"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function About3() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                    <section className="about-area-nine pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-7 col-md-10 order-0 order-lg-2">
                                    <div className="about-img-wrap-four">
                                        <div className="mask-img-wrap">
                                            <Image src="/assets/img/images/h3_about_img01.jpg" alt="" width={600} height={700} loading="lazy" />
                                        </div>
                                        <div className="icon"><i className="flaticon-business-presentation" /></div>
                                        <Image src="/assets/img/images/h3_about_img02.jpg" alt="" className="img-two" width={300} height={400} loading="lazy" />
                                        <div className="about-shape-wrap-three">
                                            <Image src="/assets/img/images/h3_about_shape01.png" alt="" width={150} height={150} loading="lazy" />
                                            <Image src="/assets/img/images/h3_about_shape02.png" alt="" width={150} height={150} loading="lazy" />
                                            <Image src="/assets/img/images/h3_about_shape03.png" alt="" width={150} height={150} loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="about-content-four">
                                        <div className="section-title-two mb-30">
                                            <span className="sub-title">Get To know US</span>
                                            <h2 className="title">We are the next gen Business experience</h2>
                                        </div>
                                        <p>With over 25 years of experience, we have crafted thousands of Strategic discovery process that enables us to peel back which enable us to understand.</p>
                                        <div className="about-list-three">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-profit" />
                                                    </div>
                                                    <div className="content">
                                                        <h2 className="title">Business Growth</h2>
                                                        <p>eiusmod temporincididunt ut labore magna aliqua Quisery.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-mission" />
                                                    </div>
                                                    <div className="content">
                                                        <h2 className="title">Target Audience</h2>
                                                        <p>eiusmod temporincididunt ut labore magna aliqua Quisery.</p>
                                                    </div>
                                                </li>
                                            </ul>
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
                    {/* counter-area */}
                    <section className="counter-area-four">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="counter-content-four">
                                        <div className="section-title-two mb-30">
                                            <span className="sub-title">Top Features</span>
                                            <h2 className="title">Consulting is a law firm specializing in corporate finance work</h2>
                                        </div>
                                        <p>Advice on comprehensive legal solutions and legal planning on all aspects of business, including: issues under Company Law  Exchange Control Regulations</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="counter-item-wrap-four">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="counter-item-three">
                                                    <div className="counter-icon">
                                                        <i className="flaticon-trophy" />
                                                    </div>
                                                    <div className="counter-content">
                                                        <h2 className="count"><CounterUp count={23} />k</h2>
                                                        <p>Best Awards</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter-item-three">
                                                    <div className="counter-icon">
                                                        <i className="flaticon-rating" />
                                                    </div>
                                                    <div className="counter-content">
                                                        <h2 className="count"><CounterUp count={223} />k</h2>
                                                        <p>Happy Clients</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter-item-three">
                                                    <div className="counter-icon">
                                                        <i className="flaticon-folder-1" />
                                                    </div>
                                                    <div className="counter-content">
                                                        <h2 className="count"><CounterUp count={98} />k</h2>
                                                        <p>Projects Done</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter-item-three">
                                                    <div className="counter-icon">
                                                        <i className="flaticon-round-table" />
                                                    </div>
                                                    <div className="counter-content">
                                                        <h2 className="count"><CounterUp count={22} />k</h2>
                                                        <p>Expert People</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inner-counter-shape">
                            <Image src="/assets/img/images/inner_counter_shape.png" alt="" width={200} height={200} data-aos="fade-left" data-aos-delay={0} loading="lazy" />
                        </div>
                    </section>
                    {/* counter-area-end */}
                    {/* team-area */}
                    <section className="team-area-four pt-120 pb-90">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title-two text-center mb-50">
                                        <span className="sub-title">Expert People</span>
                                        <h2 className="title">Dedicated Team Members</h2>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind?
                                            Oftentimes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item-four">
                                        <div className="team-thumb-four">
                                            <Image src="/assets/img/team/h4_team_img01.jpg" alt="" width={300} height={400} loading="lazy" />
                                            <SocialToggle />
                                        </div>
                                        <div className="team-content-four">
                                            <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                            <span>Finance Advisor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item-four">
                                        <div className="team-thumb-four">
                                            <img src="/assets/img/team/h4_team_img02.jpg" alt="" />
                                            <SocialToggle />
                                        </div>
                                        <div className="team-content-four">
                                            <h2 className="title"><Link href="/team-details">Jerome Bell</Link></h2>
                                            <span>Finance Advisor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item-four">
                                        <div className="team-thumb-four">
                                            <img src="/assets/img/team/h4_team_img03.jpg" alt="" />
                                            <SocialToggle />
                                        </div>
                                        <div className="team-content-four">
                                            <h2 className="title"><Link href="/team-details">Kathryn Murphy</Link></h2>
                                            <span>Finance Advisor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="team-item-four">
                                        <div className="team-thumb-four">
                                            <img src="/assets/img/team/h4_team_img04.jpg" alt="" />
                                            <SocialToggle />
                                        </div>
                                        <div className="team-content-four">
                                            <h2 className="title"><Link href="/team-details">Guy Hawkins</Link></h2>
                                            <span>Finance Advisor</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team-area-end */}
                    {/* pricing-area */}
                    <section className="pricing-area-three">
                        <div className="pricing-shape">
                            <Image src="/assets/img/images/pricing_shape.png" alt="" width={200} height={200} data-aos="fade-left" data-aos-delay={200} loading="lazy" />
                        </div>
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title-two mb-50">
                                        <span className="sub-title">Flexible Pricing Plan</span>
                                        <h2 className="title">We’ve offered the best <br /> pricing for you</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-10">
                                    <div className="section-top-content mb-30">
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-item-wrap">
                                <div className={`pricing-tab ${isToggled ? "selected" : ""}`}>
                                    <span className={`tab-btn monthly_tab_title ${isToggled ? "active" : ""}`}>Monthly</span>
                                    <span className={`pricing-tab-switcher ${isToggled ? "active" : ""}`} onClick={handleToggle} />
                                    <span className={`tab-btn annual_tab_title ${isToggled ? "active" : ""}`}>Yearly</span>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-10">
                                        <div className="pricing-box-three">
                                            <div className="pricing-icon">
                                                <i className="flaticon-rocket" />
                                            </div>
                                            <div className="pricing-plan">
                                                <h4 className="title">Basic Plan</h4>
                                            </div>
                                            <div className="pricing-price-two">
                                                <h2 className="price"><strong>$</strong>{isToggled ? "119" : "19"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <ul className="list-wrap">
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />5000 User Activities</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />Unlimited Access</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />No Hidden Charge</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />03 Time Updates</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />Figma Source File</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn-two">
                                                <Link href="/contact" className="btn transparent-btn-two">Get The Plan Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-10">
                                        <div className="pricing-box-three">
                                            <div className="pricing-icon">
                                                <i className="flaticon-inspiration" />
                                            </div>
                                            <div className="pricing-plan">
                                                <h4 className="title">Standard</h4>
                                            </div>
                                            <div className="pricing-price-two">
                                                <h2 className="price"><strong>$</strong>{isToggled ? "339" : "39"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <ul className="list-wrap">
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />5000 User Activities</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />Unlimited Access</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />No Hidden Charge</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />03 Time Updates</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />Figma Source File</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn-two">
                                                <Link href="/contact" className="btn transparent-btn-two">Get The Plan Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-10">
                                        <div className="pricing-box-three">
                                            <div className="pricing-icon">
                                                <i className="flaticon-briefcase-1" />
                                            </div>
                                            <div className="pricing-plan">
                                                <h4 className="title">Enterprise</h4>
                                            </div>
                                            <div className="pricing-price-two">
                                                <h2 className="price"><strong>$</strong>{isToggled ? "899" : "89"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <ul className="list-wrap">
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />5000 User Activities</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />Unlimited Access</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />No Hidden Charge</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />03 Time Updates</li>
                                                    <li><Image src="/assets/img/icons/check_icon03.svg" alt="" width={20} height={20} loading="lazy" />Figma Source File</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn-two">
                                                <Link href="/contact" className="btn transparent-btn-two">Get The Plan Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
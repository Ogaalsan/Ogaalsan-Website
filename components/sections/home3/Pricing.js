import Link from "next/link"
import { useState } from "react"

export default function Pricing() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <section className="pricing-area-three">
                <div className="pricing-shape">
                    <img src="/assets/img/images/pricing_shape.png" alt="" data-aos="fade-left" data-aos-delay={200} />
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two mb-50 tg-heading-subheading animation-style2">
                                <span className="sub-title tg-element-title">Flexible Pricing Plan</span>
                                <h2 className="title tg-element-title">We’ve offered the best <br /> pricing for you</h2>
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
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />5000 User Activities</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />Unlimited Access</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />No Hidden Charge</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />03 Time Updates</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />Figma Source File</li>
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
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />5000 User Activities</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />Unlimited Access</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />No Hidden Charge</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />03 Time Updates</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />Figma Source File</li>
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
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />5000 User Activities</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />Unlimited Access</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />No Hidden Charge</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />03 Time Updates</li>
                                            <li><img src="/assets/img/icons/check_icon03.svg" alt="" />Figma Source File</li>
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
        </>
    )
}

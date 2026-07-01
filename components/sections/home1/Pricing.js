import Link from "next/link"
import { useState } from "react"

export default function Pricing() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <section className="pricing-area-two">
                <div className="pricing-shape">
                    <img src="/assets/img/images/pricing_shape.png" alt="" data-aos="fade-left" data-aos-delay={200} />
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">Flexible Pricing Plan</span>
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
                                <div className="pricing-box-two">
                                    <div className="pricing-head-two">
                                        <h4 className="title">Basic Plan</h4>
                                        <div className="pricing-price-two">
                                            <h2 className="price"><strong>$</strong>{isToggled ? "119" : "19"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                        </div>
                                    </div>
                                    <div className="pricing-bottom">
                                        <div className="pricing-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />5000 User Activities</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Unlimited Access</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />No Hidden Charge</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />03 Time Updates</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Figma Source File</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Many More Facilities</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-btn-two">
                                            <Link href="/contact" className="btn">Get The Plan Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="pricing-box-two">
                                    <span className="popular">Popular</span>
                                    <div className="pricing-head-two">
                                        <h4 className="title">Team Plan</h4>
                                        <div className="pricing-price-two">
                                        <h2 className="price"><strong>$</strong>{isToggled ? "499" : "49"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                        </div>
                                    </div>
                                    <div className="pricing-bottom">
                                        <div className="pricing-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />5000 User Activities</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Unlimited Access</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />No Hidden Charge</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />03 Time Updates</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Figma Source File</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Many More Facilities</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-btn-two">
                                            <Link href="/contact" className="btn">Get The Plan Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="pricing-box-two">
                                    <div className="pricing-head-two">
                                        <h4 className="title">Enterprise Plan</h4>
                                        <div className="pricing-price-two">
                                        <h2 className="price"><strong>$</strong>{isToggled ? "999" : "99"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                        </div>
                                    </div>
                                    <div className="pricing-bottom">
                                        <div className="pricing-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />5000 User Activities</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Unlimited Access</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />No Hidden Charge</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />03 Time Updates</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Figma Source File</li>
                                                <li><img src="/assets/img/icons/check_icon02.svg" alt="" />Many More Facilities</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-btn-two">
                                            <Link href="/contact" className="btn">Get The Plan Now</Link>
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

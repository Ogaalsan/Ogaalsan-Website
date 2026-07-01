import Link from "next/link"
import { useState } from "react"

export default function Pricing() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <section className="pricing-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center mb-60 tg-heading-subheading animation-style2">
                                <span className="sub-title tg-element-title">Pricing Chart</span>
                                <h2 className="title tg-element-title">Best Pricing Plane For You</h2>
                                <p>Ever find yourself staring at your computer screen a good consulting <br /> slogan to come to mind? Oftentimes.</p>
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
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="pricing-box">
                                    <div className="pricing-head">
                                        <h2 className="title">Basic Plan</h2>
                                        <p>Ever find yourself staring at your follow computer screen a good</p>
                                    </div>
                                    <div className="pricing-price">
                                    <h2 className="price"><strong>$</strong>{isToggled ? "119" : "19"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                    </div>
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
                                    <div className="pricing-btn">
                                        <Link href="/contact" className="btn">Get The Plan Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="pricing-box active">
                                    <span className="popular-tag">Popular</span>
                                    <div className="pricing-head">
                                        <h2 className="title">Standard Plan</h2>
                                        <p>Ever find yourself staring at your follow computer screen a good</p>
                                    </div>
                                    <div className="pricing-price">
                                    <h2 className="price"><strong>$</strong>{isToggled ? "339" : "39"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                    </div>
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
                                    <div className="pricing-btn">
                                        <Link href="/contact" className="btn">Get The Plan Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-9">
                                <div className="pricing-box">
                                    <div className="pricing-head">
                                        <h2 className="title">Business Plan</h2>
                                        <p>Ever find yourself staring at your follow computer screen a good</p>
                                    </div>
                                    <div className="pricing-price">
                                    <h2 className="price"><strong>$</strong>{isToggled ? "899" : "99"}<span>/{isToggled ? "year" : "month"}</span></h2>
                                    </div>
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
                                    <div className="pricing-btn">
                                        <Link href="/contact" className="btn">Get The Plan Now</Link>
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

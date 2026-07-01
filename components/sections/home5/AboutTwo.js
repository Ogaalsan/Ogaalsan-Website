import VideoPopup from "@/components/elements/PopupVideo"
import Link from "next/link"

export default function AboutTwo() {
    return (
        <>
            <section className="about-area-two pt-110 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 col-md-9 order-0 order-lg-2">
                            <div className="about-img-two">
                                <div className="main-img">
                                    <img src="/assets/img/images/about_img02.jpg" alt="" />
                                    <VideoPopup style={3}/>
                                </div>
                                <img src="/assets/img/images/about_img03.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-content-two">
                                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">Who We are</span>
                                    <h2 className="title tg-element-title">Building Your Own Startup Has Been Simpler</h2>
                                </div>
                                <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture.Borem ipsum dolor sit amet, consectetur adipiscing elita florai psum.</p>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />100% Better results</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Valuable Ideas</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Budget Friendly Theme</li>
                                        <li><img src="/assets/img/icons/check_icon.svg" alt="" />Happy Customers</li>
                                    </ul>
                                </div>
                                <div className="success-wrap">
                                    <ul className="list-wrap">
                                        <li>
                                            <h2 className="count">+150,000</h2>
                                            <p>Total revenue in 1 year</p>
                                        </li>
                                        <li>
                                            <h2 className="count">90%</h2>
                                            <p>Increase in sales</p>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn transparent-btn">Get Started With Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-wrap">
                    <img src="/assets/img/images/about_shape01.png" alt="" />
                    <img src="/assets/img/images/about_shape02.png" alt="" />
                </div>
            </section>
        </>
    )
}

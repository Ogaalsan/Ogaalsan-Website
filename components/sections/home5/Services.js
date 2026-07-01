import Link from "next/link"
import Slider from "react-slick"

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}

export default function Services() {
    return (
        <>
            <section className="services-area services-bg" data-background="/assets/img/bg/services_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title white-title text-center mb-50 tg-heading-subheading animation-style2">
                                <span className="sub-title tg-element-title">Our Dedicated Services</span>
                                <h2 className="title tg-element-title">Spotlight Some Most <br /> Important Features We Have</h2>
                                <p>Borem ipsum dolor sit amet consectetur adipiscing elita</p>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings} className="row services-active">
                        <div className="col-lg-4">
                            <div className="services-item">
                                <div className="services-content">
                                    <div className="content-top">
                                        <div className="icon">
                                            <i className="flaticon-briefcase" />
                                        </div>
                                        <h2 className="title">Business Analysis</h2>
                                    </div>
                                    <div className="services-thumb">
                                        <img src="/assets/img/services/services_img01.jpg" alt="" />
                                        <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                    </div>
                                    <ul className="list-wrap">
                                        <li>seusmeyd tempose atidim area</li>
                                        <li>aliquam duhipsum is simply free</li>
                                        <li>Get Life Time Access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-item">
                                <div className="services-content">
                                    <div className="content-top">
                                        <div className="icon">
                                            <i className="flaticon-taxes" />
                                        </div>
                                        <h2 className="title">Tax Strategy</h2>
                                    </div>
                                    <div className="services-thumb">
                                        <img src="/assets/img/services/services_img02.jpg" alt="" />
                                        <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                    </div>
                                    <ul className="list-wrap">
                                        <li>seusmeyd tempose atidim area</li>
                                        <li>aliquam duhipsum is simply free</li>
                                        <li>Get Life Time Access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-item">
                                <div className="services-content">
                                    <div className="content-top">
                                        <div className="icon">
                                            <i className="flaticon-money" />
                                        </div>
                                        <h2 className="title">Financial Advice</h2>
                                    </div>
                                    <div className="services-thumb">
                                        <img src="/assets/img/services/services_img03.jpg" alt="" />
                                        <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                    </div>
                                    <ul className="list-wrap">
                                        <li>seusmeyd tempose atidim area</li>
                                        <li>aliquam duhipsum is simply free</li>
                                        <li>Get Life Time Access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-item">
                                <div className="services-content">
                                    <div className="content-top">
                                        <div className="icon">
                                            <i className="flaticon-taxes" />
                                        </div>
                                        <h2 className="title">Tax Strategy</h2>
                                    </div>
                                    <div className="services-thumb">
                                        <img src="/assets/img/services/services_img02.jpg" alt="" />
                                        <Link href="/services-details" className="btn transparent-btn">Our Services</Link>
                                    </div>
                                    <ul className="list-wrap">
                                        <li>seusmeyd tempose atidim area</li>
                                        <li>aliquam duhipsum is simply free</li>
                                        <li>Get Life Time Access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

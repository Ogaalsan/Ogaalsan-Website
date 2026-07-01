import Link from "next/link"
import Slider from "react-slick"

const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    fade: true,
    arrows: false,
    responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
    ]
}

export default function MainSlider() {
    return (
        <>
            <section className="slider-area">
                <Slider {...settings} className="slider-active">
                    <div className="single-slider slider-bg" data-background="/assets/img/banner/banner_bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <span className="sub-title" data-animation="fadeInUp" data-delay=".2s">We Are Expert In This Field</span>
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".4s">Grow Your Business More Efficiently</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Agilos helps you to convert your data into a strategic asset and get top-notch business insights.</p>
                                        <Link href="/services" className="btn" data-animation="fadeInUp" data-delay=".8s">Our Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-shape">
                            <img src="/assets/img/banner/banner_shape.png" alt="" data-animation="zoomIn" data-delay=".8s" />
                        </div>
                    </div>
                    <div className="single-slider slider-bg" data-background="/assets/img/banner/banner_bg02.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <span className="sub-title" data-animation="fadeInUp" data-delay=".2s">We Are Expert In This Field</span>
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".4s">Grow Your Business More Efficiently</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Agilos helps you to convert your data into a strategic asset and get top-notch business insights.</p>
                                        <Link href="/services" className="btn" data-animation="fadeInUp" data-delay=".8s">Our Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-shape">
                            <img src="/assets/img/banner/banner_shape.png" alt="" data-animation="zoomIn" data-delay=".8s" />
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    )
}

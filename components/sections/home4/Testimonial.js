import { useRef } from "react"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
}

export default function Testimonial() {

    const sliderRef = useRef(null)

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }
    return (
        <>
            <section className="testimonial-area-five">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="testimonial-img-five">
                                <img src="/assets/img/images/h5_testimonial_img.png" alt="" />
                                <img src="/assets/img/images/h5_testimonial_shape01.png" alt="" className="shape-one" />
                                <img src="/assets/img/images/h5_testimonial_shape02.png" alt="" className="shape-two" />
                                <img src="/assets/img/images/h5_testimonial_shape03.png" alt="" className="shape-three" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-content-five">
                                <div className="section-title title-three mb-50 tg-heading-subheading animation-style1">
                                    <span className="sub-title tg-element-title">Our Testimonials</span>
                                    <h2 className="title tg-element-title">What our awesome customers say</h2>
                                </div>
                                <div className="testimonial-item-wrap-five">
                                    <Slider ref={sliderRef} {...settings} className="testimonial-active-five">
                                        <div className="testimonial-item">
                                            <div className="testimonial-content">
                                                <div className="content-top">
                                                    <div className="rating">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="testimonial-quote">
                                                        <img src="/assets/img/icons/quote.svg" alt="" />
                                                    </div>
                                                </div>
                                                <p>“ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor sit amet, consecteture.Borem ipsum dolor sit amet, consectetur.</p>
                                                <div className="testimonial-avatar">
                                                    <div className="avatar-thumb">
                                                        <img src="/assets/img/images/testi_avatar01.png" alt="" />
                                                    </div>
                                                    <div className="avatar-info">
                                                        <h2 className="title">Mr.Robey Alexa</h2>
                                                        <span>CEO, Gerow Agency</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-item">
                                            <div className="testimonial-content">
                                                <div className="content-top">
                                                    <div className="rating">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="testimonial-quote">
                                                        <img src="/assets/img/icons/quote.svg" alt="" />
                                                    </div>
                                                </div>
                                                <p>“ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor sit amet, consecteture.Borem ipsum dolor sit amet, consectetur.</p>
                                                <div className="testimonial-avatar">
                                                    <div className="avatar-thumb">
                                                        <img src="/assets/img/images/testi_avatar02.png" alt="" />
                                                    </div>
                                                    <div className="avatar-info">
                                                        <h2 className="title">Mr.Robey Alexa</h2>
                                                        <span>CEO, Gerow Agency</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                    <div className="testimonial-nav-five">
                                        <button type="button" className="slick-prev slick-arrow" onClick={previous}>
                                            <i className="flaticon-right-arrow" /></button>
                                        <button type="button" className="slick-next slick-arrow" onClick={next}>
                                            <i className="flaticon-right-arrow" />
                                        </button>
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

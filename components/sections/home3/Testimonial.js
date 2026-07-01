import { useRef } from "react"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
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
            <section className="testimonial-area-four testimonial-bg-four" data-background="/assets/img/bg/h4_testimonial_bg.jpg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 col-md-8">
                            <div className="testimonial-img-four">
                                <img src="/assets/img/images/h4_testimonial_img.png" alt="" />
                                <div className="icon">
                                    <img src="/assets/img/icons/quote02.svg" alt="" />
                                </div>
                                <img src="/assets/img/images/h4_testimonial_img_shape.png" alt="" className="shape" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonial-item-wrap-four">
                                <Slider ref={sliderRef} {...settings} className="testimonial-active-four">
                                    <div className="testimonial-item-four">
                                        <div className="testimonial-content-four">
                                            <div className="rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <p>“ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor sit amet, consecteture.Borem ipsum consectetur adipiscinsit consectetur adipiscing.”</p>
                                            <div className="testimonial-info">
                                                <h2 className="title">Mr.Robey Alexa</h2>
                                                <span>CEO, Gerow Agency</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item-four">
                                        <div className="testimonial-content-four">
                                            <div className="rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <p>“ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor sit amet, consecteture.Borem ipsum consectetur adipiscinsit consectetur adipiscing.”</p>
                                            <div className="testimonial-info">
                                                <h2 className="title">Mr.Robey Alexa</h2>
                                                <span>CEO, Gerow Agency</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className="testimonial-nav-four">
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
                <div className="testimonial-shape-wrap-four">
                    <img src="/assets/img/images/h4_testimonial_shape01.png" alt="" data-aos="fade-up-right" data-aos-delay={200} />
                    <img src="/assets/img/images/h4_testimonial_shape02.png" alt="" data-aos="fade-down-left" data-aos-delay={200} />
                </div>
            </section>
        </>
    )
}

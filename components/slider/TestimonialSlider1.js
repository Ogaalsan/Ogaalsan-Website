import { useRef } from "react"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
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

export default function TestimonialSlider1() {

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
            <Slider ref={sliderRef} {...settings} className="testimonial-active">
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
                        <p>"OgaalSan transformed our ICT infrastructure with expert solutions. Their team delivered a comprehensive digital transformation that improved our operational efficiency and business growth significantly."</p>
                        <div className="testimonial-info" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <img src="/assets/img/ogalsan/image (8).png" alt="" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                            <div>
                                <h4 className="title">Ahmed Hassan</h4>
                                <span>IT Director, Tech Solutions Ltd</span>
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
                        <p>"The training and capacity building program from OgaalSan was exceptional. Our team gained valuable digital skills that have directly contributed to our organization's innovation and productivity."</p>
                        <div className="testimonial-info" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <img src="/assets/img/ogalsan/person.jpg" alt="" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                            <div>
                                <h4 className="title">Fatima Ali</h4>
                                <span>HR Manager, Digital Innovations Co.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="testimonial-nav">
                <button type="button" className="slick-prev slick-arrow" onClick={previous}>
                    <i className="flaticon-right-arrow" />
                </button>
                <button type="button" className="slick-next slick-arrow" onClick={next}>
                    <i className="flaticon-right-arrow" />
                </button>
            </div>
        </>
    )
}

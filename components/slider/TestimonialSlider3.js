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

export default function TestimonialSlider3() {

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
            <Slider ref={sliderRef} {...settings} className="testimonial-active-three">
                <div className="testimonial-item-three">
                    <div className="testimonial-content-three">
                        <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>“ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor sit amet, consecteture.Borem ipsum dolor sit amet, consectetur adipiscing elita Moremsit amet.</p>
                        <div className="testimonial-info">
                            <h2 className="title">Mr.Robey Alyaz</h2>
                            <span>CEO, Gerow Agency</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item-three">
                    <div className="testimonial-content-three">
                        <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>“ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor sit amet, consecteture.Borem ipsum dolor sit amet, consectetur adipiscing elita Moremsit amet.</p>
                        <div className="testimonial-info">
                            <h2 className="title">Mr.Robey Alexa</h2>
                            <span>CEO, Gerow Agency</span>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="testimonial-nav-three">
                <button type="button" className="slick-prev slick-arrow" onClick={previous}>
                    <i className="flaticon-right-arrow" /></button>
                <button type="button" className="slick-next slick-arrow" onClick={next}>
                    <i className="flaticon-right-arrow" />
                </button>
            </div>
        </>
    )
}

import { useRef, useEffect } from "react"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
}

export default function Testimonial() {
    const sliderRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        // Initialize background image for dynamically loaded component
        const initBackground = () => {
            if (sectionRef.current) {
                const bgUrl = sectionRef.current.getAttribute('data-background')
                if (bgUrl) {
                    // Set background image with all necessary properties
                    sectionRef.current.style.backgroundImage = `url(${bgUrl})`
                    sectionRef.current.style.backgroundSize = 'cover'
                    sectionRef.current.style.backgroundPosition = 'center'
                    sectionRef.current.style.backgroundRepeat = 'no-repeat'
                }
            }
        }
        
        // Run immediately and also after a small delay to ensure DOM is ready
        initBackground()
        const timer = setTimeout(initBackground, 100)
        
        return () => clearTimeout(timer)
    }, [])

    const focusAreas = [
        "ICT Strategy",
        "Digital Innovation",
        "Training & Development",
        "Business Growth",
        "Technology Solutions",
        "Digital Transformation"
    ]

    return (
        <>
            <section ref={sectionRef} className="brand-area-two pt-120 pb-120" data-background="/assets/img/bg/h2_testimonial_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title-two white-title text-center mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title">What We Do</span>
                                <h2 className="title tg-element-title">Our Focus Areas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="brand-item-wrap">
                        <Slider ref={sliderRef} {...settings} className="row brand-active-two">
                            {focusAreas.map((area, index) => (
                                <div key={index} className="col-lg-12">
                                    <div className="brand-item-two" style={{ padding: '0 10px' }}>
                                        <div className="focus-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '30px 25px',
                                            minHeight: '140px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                                        }}>
                                            <h4 style={{ 
                                                color: '#fff', 
                                                fontSize: '20px', 
                                                fontWeight: '500',
                                                margin: 0,
                                                textAlign: 'center'
                                            }}>{area}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

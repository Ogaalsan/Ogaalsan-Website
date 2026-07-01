import TestimonialSlider1 from "@/components/slider/TestimonialSlider1"

export default function Testimonial() {
    return (
        <>
            <section className="testimonial-area testimonial-bg" data-background="/assets/img/bg/testimonial_bg.jpg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 col-md-8">
                            <div className="testimonial-img">
                                <img src="/assets/img/images/testimonial_img.jpg" alt="" />
                                <div className="review-wrap">
                                    <img src="/assets/img/icons/rating.svg" alt="" />
                                    <div className="content">
                                        <h2 className="title">15k</h2>
                                        <p>Positive <br /> Review</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonial-item-wrap">
                                <TestimonialSlider1 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

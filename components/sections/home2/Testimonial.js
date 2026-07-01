import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"

export default function Testimonial() {
    return (
        <>
            <section className="testimonial-area-three">
                <div className="container">
                    <div className="row g-0 align-items-end">
                        <div className="col-37">
                            <div className="testimonial-img-three">
                                <img src="/assets/img/images/h3_testimonial_img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-63">
                            <div className="testimonial-item-wrap-three" data-background="/assets/img/bg/h3_testimonial_bg.png">
                                <TestimonialSlider3 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

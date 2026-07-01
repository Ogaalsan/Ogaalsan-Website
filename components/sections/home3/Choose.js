import CircleProgress from "@/components/elements/CircleProgress"

export default function Choose() {
    return (
        <>
            <section className="choose-area-two">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="choose-img-two">
                                <img src="/assets/img/images/h4_choose_img.png" alt="" />
                                <img src="/assets/img/images/choose_img_shape01.png" alt="" />
                                <img src="/assets/img/images/choose_img_shape02.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-content-two">
                                <div className="section-title-two white-title mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">Why Choose Us</span>
                                    <h2 className="title tg-element-title">We’ll Ensure You Always Get the Best Guidance.</h2>
                                </div>
                                <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, consecteture.Borem.</p>
                                <div className="choose-circle-wrap">
                                    <CircleProgress />
                                    <CircleProgress />
                                    <CircleProgress />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-shape">
                    <img src="/assets/img/images/choose_shape.png" alt="" data-aos="fade-right" data-aos-delay={200} />
                </div>
            </section>
        </>
    )
}

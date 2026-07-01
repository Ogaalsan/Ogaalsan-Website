import Link from "next/link"

export default function Request() {
    return (
        <>
            <section className="request-area request-bg" data-background="/assets/img/bg/request_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="request-content tg-heading-subheading animation-style2">
                                <h2 className="title tg-element-title">Let’s Request A Schedule For <br /> Free Consultation</h2>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="request-content-right">
                                <div className="request-contact">
                                    <div className="icon">
                                        <i className="flaticon-phone-call" />
                                    </div>
                                    <div className="content">
                                        <span>Hotline 24/7</span>
                                        <Link href="tel:0123456789">+123 8989 444</Link>
                                    </div>
                                </div>
                                <div className="request-btn">
                                    <Link href="/contact" className="btn">Request a Schedule</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="request-shape">
                    <img src="/assets/img/images/request_shape.png" alt="" />
                </div>
            </section>
        </>
    )
}

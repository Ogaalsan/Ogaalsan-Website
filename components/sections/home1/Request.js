export default function Request() {
    return (
        <>
            <section className="request-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="request-content-two">
                                <div className="section-title-two white-title mb-15 tg-heading-subheading animation-style3">
                                    <h2 className="title tg-element-title">Request a Call Back</h2>
                                </div>
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="request-form-wrap">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Name *" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="email" placeholder="E-mail *" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="number" placeholder="Phone *" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="submit">Send Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="request-shape-wrap">
                    <img src="/assets/img/images/h2_request_shape01.png" alt="" />
                    <img src="/assets/img/images/h2_request_shape02.png" alt="" data-aos="fade-left" data-aos-delay={200} />
                </div>
            </section>
        </>
    )
}

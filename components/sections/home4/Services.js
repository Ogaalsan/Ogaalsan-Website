import Link from "next/link"

export default function Services() {
    return (
        <>
            <section className="services-area-four">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title section-title-three text-center mb-60 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">Our Expertise</span>
                                <h2 className="title tg-element-title">Provide Best Services</h2>
                                <p>Morem ipsum dolor sit amet consectetur adipiscingelita florai psumBoremipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item-four">
                                <div className="services-icon-four">
                                    <i className="flaticon-business-presentation" />
                                </div>
                                <div className="services-content-four">
                                    <h2 className="title"><Link href="/services-details">Marketing Strategy</Link></h2>
                                    <p>when an unknown printer took gerty galley types awecr erambled type specimen book.</p>
                                    <Link href="/services-details" className="btn transparent-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item-four">
                                <div className="services-icon-four">
                                    <i className="flaticon-rocket" />
                                </div>
                                <div className="services-content-four">
                                    <h2 className="title"><Link href="/services-details">SEO Consultancy</Link></h2>
                                    <p>when an unknown printer took gerty galley types awecr erambled type specimen book.</p>
                                    <Link href="/services-details" className="btn transparent-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item-four">
                                <div className="services-icon-four">
                                    <i className="flaticon-mission" />
                                </div>
                                <div className="services-content-four">
                                    <h2 className="title"><Link href="/services-details">Target Audience</Link></h2>
                                    <p>when an unknown printer took gerty galley types awecr erambled type specimen book.</p>
                                    <Link href="/services-details" className="btn transparent-btn-two">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

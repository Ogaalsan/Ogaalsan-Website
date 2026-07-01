import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"

export default function Service5() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="services-area-four services-area-seven">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title section-title-three text-center mb-60">
                                        <span className="sub-title">Our Expertise</span>
                                        <h2 className="title">Provide Best Services</h2>
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <i className="flaticon-megaphone" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Business Goal</Link></h2>
                                            <p>when an unknown printer took gerty galley types awecr erambled type specimen book.</p>
                                            <Link href="/services-details" className="btn transparent-btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <i className="flaticon-layers" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Project Data</Link></h2>
                                            <p>when an unknown printer took gerty galley types awecr erambled type specimen book.</p>
                                            <Link href="/services-details" className="btn transparent-btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <i className="flaticon-puzzle-piece" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Market Research</Link></h2>
                                            <p>when an unknown printer took gerty galley types awecr erambled type specimen book.</p>
                                            <Link href="/services-details" className="btn transparent-btn-two">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-area-end */}
                    {/* brand-area */}
                    <div className="brand-area-six pt-80 pb-80">
                        <div className="container">
                            <BrandSlider />
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}
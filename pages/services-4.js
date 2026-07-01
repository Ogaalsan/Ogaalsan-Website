import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"
import Image from "next/image"

export default function Service4() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="services-area-three">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-8">
                                    <div className="section-title-two mb-50">
                                        <span className="sub-title">Our Expertise Areas</span>
                                        <h2 className="title">We Make Better Insurance For Everyone</h2>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-4">
                                    <div className="view-all-btn text-end mb-30">
                                        <Link href="/services" className="btn transparent-btn-two">See All Service</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item-three">
                                        <div className="services-thumb-three">
                                            <Link href="/services-details"><Image src="/assets/img/services/h4_services_img01.jpg" alt="" width={400} height={300} loading="lazy" /></Link>
                                        </div>
                                        <div className="services-content-three">
                                            <div className="services-icon">
                                                <i className="flaticon-healthcare" />
                                            </div>
                                            <h4 className="title"><Link href="/services-details">Health Insurance</Link></h4>
                                            <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                            <div className="overlay-icon">
                                                <i className="flaticon-healthcare" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item-three">
                                        <div className="services-thumb-three">
                                            <Link href="/services-details"><img src="/assets/img/services/h4_services_img02.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content-three">
                                            <div className="services-icon">
                                                <i className="flaticon-protection" />
                                            </div>
                                            <h4 className="title"><Link href="/services-details">Vehicle Insurance</Link></h4>
                                            <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                            <div className="overlay-icon">
                                                <i className="flaticon-protection" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item-three">
                                        <div className="services-thumb-three">
                                            <Link href="/services-details"><img src="/assets/img/services/h4_services_img03.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content-three">
                                            <div className="services-icon">
                                                <i className="flaticon-ship" />
                                            </div>
                                            <h4 className="title"><Link href="/services-details">Cargo Insurance</Link></h4>
                                            <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                            <div className="overlay-icon">
                                                <i className="flaticon-ship" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item-three">
                                        <div className="services-thumb-three">
                                            <Link href="/services-details"><img src="/assets/img/services/h4_services_img04.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content-three">
                                            <div className="services-icon">
                                                <i className="flaticon-house" />
                                            </div>
                                            <h4 className="title"><Link href="/services-details">Fire Insurance</Link></h4>
                                            <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                            <div className="overlay-icon">
                                                <i className="flaticon-house" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item-three">
                                        <div className="services-thumb-three">
                                            <Link href="/services-details"><img src="/assets/img/services/h4_services_img05.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content-three">
                                            <div className="services-icon">
                                                <i className="flaticon-travel-insurance" />
                                            </div>
                                            <h4 className="title"><Link href="/services-details">Travel Insurance</Link></h4>
                                            <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                            <div className="overlay-icon">
                                                <i className="flaticon-travel-insurance" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item-three">
                                        <div className="services-thumb-three">
                                            <Link href="/services-details"><img src="/assets/img/services/h4_services_img06.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content-three">
                                            <div className="services-icon">
                                                <i className="flaticon-life-insurance" />
                                            </div>
                                            <h4 className="title"><Link href="/services-details">Life Insurance</Link></h4>
                                            <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                            <div className="overlay-icon">
                                                <i className="flaticon-life-insurance" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item-three">
                                        <div className="services-thumb-three">
                                            <Link href="/services-details"><img src="/assets/img/services/h4_services_img07.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content-three">
                                            <div className="services-icon">
                                                <i className="flaticon-family-insurance" />
                                            </div>
                                            <h4 className="title"><Link href="/services-details">Family Insurance</Link></h4>
                                            <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                            <div className="overlay-icon">
                                                <i className="flaticon-family-insurance" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                                    <div className="services-item-three">
                                        <div className="services-thumb-three">
                                            <Link href="/services-details"><img src="/assets/img/services/h4_services_img08.jpg" alt="" /></Link>
                                        </div>
                                        <div className="services-content-three">
                                            <div className="services-icon">
                                                <i className="flaticon-briefcase-1" />
                                            </div>
                                            <h4 className="title"><Link href="/services-details">Fire Insurance</Link></h4>
                                            <p>when an unknown printeawr took galley Insurance type andey ollowing.</p>
                                            <div className="overlay-icon">
                                                <i className="flaticon-briefcase-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="services-shape-four">
                            <Image src="/assets/img/services/h4_services_shape.png" alt="" width={200} height={200} data-aos="fade-left" data-aos-delay={200} loading="lazy" />
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
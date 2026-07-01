import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"
import { useState } from 'react'
import Image from "next/image"

export default function Service2() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="Our Services">
                <div>
                    <section className="services-area-six">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="section-title-two mb-60">
                                        <span className="sub-title">What We Do For You</span>
                                        <h2 className="title">We can inspire and Offer Different Services</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="section-top-content mb-30">
                                        <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor amet, consectetuolor sit amet, consectetur adipiscing elita florai psum sit amet consecteturere.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                        <div className="services-thumb-two">
                                            <Image src="/assets/img/services/h2_services_img01.jpg" alt="" width={400} height={300} loading="lazy" />
                                            <div className="item-shape">
                                                <Image src="/assets/img/services/services_item_shape.png" alt="" width={100} height={100} loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <div className="icon">
                                                <i className="flaticon-piggy-bank" />
                                            </div>
                                            <h2 className="title"><Link href="/services-details">Finance Planning</Link></h2>
                                            <p style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                        <div className="services-thumb-two">
                                            <img src="/assets/img/services/h2_services_img02.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <div className="icon">
                                                <i className="flaticon-calculator" />
                                            </div>
                                            <h2 className="title"><Link href="/services-details">Tax File Audit</Link></h2>
                                            <p style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                        <div className="services-thumb-two">
                                            <img src="/assets/img/services/h2_services_img03.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <div className="icon">
                                                <i className="flaticon-money" />
                                            </div>
                                            <h2 className="title"><Link href="/services-details">Investment Idea</Link></h2>
                                            <p style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                        <div className="services-thumb-two">
                                            <img src="/assets/img/services/h2_services_img04.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <div className="icon">
                                                <i className="flaticon-layers" />
                                            </div>
                                            <h2 className="title"><Link href="/services-details">Risk Management</Link></h2>
                                            <p style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(5)} onMouseLeave={() => handleToggle(5)}>
                                        <div className="services-thumb-two">
                                            <img src="/assets/img/services/h2_services_img05.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <div className="icon">
                                                <i className="flaticon-taxes" />
                                            </div>
                                            <h2 className="title"><Link href="/services-details">Tax Consultancy</Link></h2>
                                            <p style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(6)} onMouseLeave={() => handleToggle(6)}>
                                        <div className="services-thumb-two">
                                            <img src="/assets/img/services/h2_services_img06.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <div className="icon">
                                                <i className="flaticon-investment" />
                                            </div>
                                            <h2 className="title"><Link href="/services-details">Audit  Assurance</Link></h2>
                                            <p style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(7)} onMouseLeave={() => handleToggle(7)}>
                                        <div className="services-thumb-two">
                                            <img src="/assets/img/services/h2_services_img07.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <div className="icon">
                                                <i className="flaticon-handshake" />
                                            </div>
                                            <h2 className="title"><Link href="/services-details">Business Strategy</Link></h2>
                                            <p style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(8)} onMouseLeave={() => handleToggle(8)}>
                                        <div className="services-thumb-two">
                                            <img src="/assets/img/services/h2_services_img08.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <div className="icon">
                                                <i className="flaticon-piggy-bank" />
                                            </div>
                                            <h2 className="title"><Link href="/services-details">Finance Planning</Link></h2>
                                            <p style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>Morem ipsum dolor ametey consectre adipiscing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
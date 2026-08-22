import CounterUp from "@/components/elements/CounterUp";
import Image from "next/image";

export default function Overview() {
    return (
        <>
            <section className="overview-area pt-120 pb-120">
                <div className="overview-shape" data-aos="fade-left" data-aos-delay={200} data-background="/assets/img/images/overview_shape.png" />
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="overview-img-wrap overview-img-wrap--illustration ogaalsan-overview-visual">
                                <div className="ogaalsan-overview-visual__glow" aria-hidden="true" />
                                <Image
                                    src="/assets/img/images/ict.png"
                                    alt="ICT and digital consultancy illustration"
                                    width={760}
                                    height={760}
                                    className="ogaalsan-overview-visual__img"
                                    loading="lazy"
                                />
                                <div className="icon ogaalsan-overview-visual__icon">
                                    <i className="flaticon-report-1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="overview-content">
                                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Company Overview</span>
                                    <h2 className="title tg-element-title">Focused ICT &amp; digital consultancy</h2>
                                </div>
                                <p className="info-one">OgaalSan Consultancy focuses on three core service areas — ICT Solutions, Business Development, and Training &amp; Capacity Building — that work together to help organizations grow digitally.</p>
                                <p className="info-two">We partner with you from strategy and systems to skills and growth, combining international best practice with local expertise.</p>
                                <div className="content-bottom">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-trophy" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp count={3} /></h2>
                                                <p>Core Service Areas</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-rating" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count">Business</h2>
                                                <p>Development &amp; growth support</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

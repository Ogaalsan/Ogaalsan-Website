import CounterUp from "@/components/elements/CounterUp"

export default function About() {
    return (
        <>
            <section className="about-area-five">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="about-img-wrap-five">
                                <img src="/assets/img/images/h4_about_img01.jpg" alt="" />
                                <img src="/assets/img/images/h4_about_img02.jpg" alt="" data-parallax="{&quot;y&quot; : 100 }" />
                                <div className="experience-wrap">
                                    <h2 className="title">25 <span>Years Of Experience</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="about-content-five">
                                <div className="section-title-two mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">Insurance Agency</span>
                                    <h2 className="title tg-element-title">Today, any health insurance deductible can feel like</h2>
                                </div>
                                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                <div className="about-content-bottom">
                                    <div className="about-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-arrow-right" />100% Better results</li>
                                            <li><i className="fas fa-arrow-right" />Suspe ndisse suscipit sagittis</li>
                                            <li><i className="fas fa-arrow-right" />promis timelineI guarantee</li>
                                            <li><i className="fas fa-arrow-right" />Review Credit Reports</li>
                                        </ul>
                                    </div>
                                    <div className="about-success-wrap">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-family" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp count={63} />%</h2>
                                                    <p>Insured Customers</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-trophy" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp count={95} />%</h2>
                                                    <p>Satisfied Award</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-five">
                    <img src="/assets/img/images/h4_about_shape.png" alt="" />
                </div>
            </section>
        </>
    )
}

import Link from "next/link"

export default function About() {
    return (
        <>
            <section className="about-area-six">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-img-six">
                                <img src="/assets/img/images/h5_about_img.png" alt="" />
                                <img src="/assets/img/images/h5_about_shape01.png" alt="" />
                                <img src="/assets/img/images/h5_about_shape02.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-six">
                                <div className="section-title section-title-three mb-30 tg-heading-subheading animation-style1">
                                    <span className="sub-title tg-element-title">Insurance Agency</span>
                                    <h2 className="title tg-element-title">We’re The Best Digital Marketing Company</h2>
                                </div>
                                <p>when an unknown printer took a galley of type and scrambled it ake a type specimen book. when an unknown printer took a galley of type and scrambled it ake.</p>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-arrow-right" />100% Better results</li>
                                        <li><i className="fas fa-arrow-right" />promis timelineI</li>
                                        <li><i className="fas fa-arrow-right" />ndisse suscipit sagittis</li>
                                        <li><i className="fas fa-arrow-right" />Review Credit Reports</li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn btn-three">Take our Service</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import Link from "next/link"

export default function Project() {
    return (
        <>
            <section className="project-area-four">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="section-title section-title-three mb-50 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">Case Studies</span>
                                <h2 className="title tg-element-title">We’ve Done Lot’s Of Work, Let’s Check Some From Here</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="view-all-btn text-end mb-30">
                                <Link href="/project-details" className="btn btn-three">See All Projects</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <img src="/assets/img/project/h5_project_img01.jpg" alt="" />
                                    <div className="project-link"><Link href="/project-details"><img src="/assets/img/icons/plus_icon.svg" alt="" /></Link></div>
                                </div>
                                <div className="project-content-four">
                                    <h4 className="title"><Link href="/project-details">Illustration Design</Link></h4>
                                    <span>Creative Work</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <img src="/assets/img/project/h5_project_img02.jpg" alt="" />
                                    <div className="project-link"><Link href="/project-details"><img src="/assets/img/icons/plus_icon.svg" alt="" /></Link></div>
                                </div>
                                <div className="project-content-four">
                                    <h4 className="title"><Link href="/project-details">Design  Development</Link></h4>
                                    <span>Planing</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <img src="/assets/img/project/h5_project_img03.jpg" alt="" />
                                    <div className="project-link"><Link href="/project-details"><img src="/assets/img/icons/plus_icon.svg" alt="" /></Link></div>
                                </div>
                                <div className="project-content-four">
                                    <h4 className="title"><Link href="/project-details">Marketing Consultancy</Link></h4>
                                    <span>Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <img src="/assets/img/project/h5_project_img04.jpg" alt="" />
                                    <div className="project-link"><Link href="/project-details"><img src="/assets/img/icons/plus_icon.svg" alt="" /></Link></div>
                                </div>
                                <div className="project-content-four">
                                    <h4 className="title"><Link href="/project-details">Digital Marketing</Link></h4>
                                    <span>Skill Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-item-four">
                                <div className="project-thumb-four">
                                    <img src="/assets/img/project/h5_project_img05.jpg" alt="" />
                                    <div className="project-link"><Link href="/project-details"><img src="/assets/img/icons/plus_icon.svg" alt="" /></Link></div>
                                </div>
                                <div className="project-content-four">
                                    <h4 className="title"><Link href="/project-details">Strategic Planning</Link></h4>
                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

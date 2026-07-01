import Link from "next/link"

export default function Project() {
    return (
        <>
            <section className="project-area-three pb-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-8">
                            <div className="section-title-two mb-40 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">Complete Projects</span>
                                <h2 className="title tg-element-title">A Complete Solution For Global Business</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-4">
                            <div className="view-all-btn text-end mb-30">
                                <Link href="/project-details" className="btn btn-three">See All Projects</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container custom-container-three">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="project-item-three">
                                <div className="project-thumb-three">
                                    <Link href="/project-details"><img src="/assets/img/project/h3_project_img01.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="project-item-three">
                                <div className="project-thumb-three">
                                    <Link href="/project-details"><img src="/assets/img/project/h3_project_img02.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="project-item-three">
                                <div className="project-thumb-three">
                                    <Link href="/project-details"><img src="/assets/img/project/h3_project_img03.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="project-item-three">
                                <div className="project-thumb-three">
                                    <Link href="/project-details"><img src="/assets/img/project/h3_project_img04.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import ProjectSlider from "@/components/slider/ProjectSlider"

export default function Project() {
    return (
        <>
            <section className="project-area project-bg" data-background="/assets/img/bg/project_bg.jpg">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="section-title mb-40 tg-heading-subheading animation-style2">
                                <span className="sub-title tg-element-title">Case Studies</span>
                                <h2 className="title tg-element-title">Keep Your Business Safe  Ensure High Availability.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-top-content">
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-item-wrap">
                        <div className="row">
                            <div className="col-12">
                                <div className="swiper-container project-active">
                                    <ProjectSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

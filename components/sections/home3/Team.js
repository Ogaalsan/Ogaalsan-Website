import SocialToggle from "@/components/elements/SocialToggle"
import Link from "next/link"

export default function Team() {
    return (
        <>
            <section className="team-area-four pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style2">
                                <span className="sub-title tg-element-title">Expert People</span>
                                <h2 className="title tg-element-title">Dedicated Team Members</h2>
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-four">
                                <div className="team-thumb-four">
                                    <img src="/assets/img/team/h4_team_img01.jpg" alt="" />
                                    <SocialToggle />
                                </div>
                                <div className="team-content-four">
                                    <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-four">
                                <div className="team-thumb-four">
                                    <img src="/assets/img/team/h4_team_img02.jpg" alt="" />
                                    <SocialToggle />
                                </div>
                                <div className="team-content-four">
                                    <h2 className="title"><Link href="/team-details">Jerome Bell</Link></h2>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-four">
                                <div className="team-thumb-four">
                                    <img src="/assets/img/team/h4_team_img03.jpg" alt="" />
                                    <SocialToggle />
                                </div>
                                <div className="team-content-four">
                                    <h2 className="title"><Link href="/team-details">Kathryn Murphy</Link></h2>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-four">
                                <div className="team-thumb-four">
                                    <img src="/assets/img/team/h4_team_img04.jpg" alt="" />
                                    <SocialToggle />
                                </div>
                                <div className="team-content-four">
                                    <h2 className="title"><Link href="/team-details">Guy Hawkins</Link></h2>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

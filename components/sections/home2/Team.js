import SocialToggle from "@/components/elements/SocialToggle"
import Link from "next/link"

export default function Team() {
    return (
        <>
            <section className="team-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">Expert People</span>
                                <h2 className="title tg-element-title">Dedicated Team Members</h2>
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="team-item-three">
                                <div className="team-thumb-three">
                                    <img src="/assets/img/team/h3_team_img01.png" alt="" />
                                    <SocialToggle />
                                </div>
                                <div className="team-content-three">
                                    <h4 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h4>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="team-item-three">
                                <div className="team-thumb-three">
                                    <img src="/assets/img/team/h3_team_img02.png" alt="" />
                                    <SocialToggle />
                                </div>
                                <div className="team-content-three">
                                    <h4 className="title"><Link href="/team-details">Jenny Wilson</Link></h4>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="team-item-three">
                                <div className="team-thumb-three">
                                    <img src="/assets/img/team/h3_team_img03.png" alt="" />
                                    <SocialToggle />
                                </div>
                                <div className="team-content-three">
                                    <h4 className="title"><Link href="/team-details">Ronald Richards</Link></h4>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="team-item-three">
                                <div className="team-thumb-three">
                                    <img src="/assets/img/team/h3_team_img04.png" alt="" />
                                    <SocialToggle />
                                </div>
                                <div className="team-content-three">
                                    <h4 className="title"><Link href="/team-details">Marvin McKinney</Link></h4>
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

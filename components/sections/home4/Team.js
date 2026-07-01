import Link from "next/link"

export default function Team() {
    return (
        <>
            <section className="team-area-five pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title section-title-three text-center mb-50 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">Meet Our Team</span>
                                <h2 className="title tg-element-title">Experience Team Members</h2>
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to minddestmentor area</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-five">
                                <div className="team-thumb-five">
                                    <img src="/assets/img/team/h5_team_img01.png" alt="" />
                                </div>
                                <div className="team-content-five">
                                    <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                    <span>Finance Advisor</span>
                                    <div className="team-social-four">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-five">
                                <div className="team-thumb-five">
                                    <img src="/assets/img/team/h5_team_img02.png" alt="" />
                                </div>
                                <div className="team-content-five">
                                    <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                    <span>Finance Advisor</span>
                                    <div className="team-social-four">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-five">
                                <div className="team-thumb-five">
                                    <img src="/assets/img/team/h5_team_img03.png" alt="" />
                                </div>
                                <div className="team-content-five">
                                    <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                    <span>Finance Advisor</span>
                                    <div className="team-social-four">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item-five">
                                <div className="team-thumb-five">
                                    <img src="/assets/img/team/h5_team_img04.png" alt="" />
                                </div>
                                <div className="team-content-five">
                                    <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                    <span>Finance Advisor</span>
                                    <div className="team-social-four">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

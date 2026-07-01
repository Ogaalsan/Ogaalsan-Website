import Link from "next/link"

export default function Team() {
    return (
        <>
            <section className="team-area-two">
                <div className="team-shape">
                    <img src="/assets/img/team/team_shape.png" alt="" data-aos="fade-right" data-aos-delay={200} />
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two mb-45 tg-heading-subheading animation-style3">
                                <span className="sub-title">Expert People</span>
                                <h2 className="title tg-element-title">Our Dedicated Team <br /> Members</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="section-top-content mb-30">
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="team-item-two">
                                <div className="team-thumb-two">
                                    <Link href="/team-details"><img src="/assets/img/team/h2_team_img01.jpg" alt="" /></Link>
                                    <div className="team-social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content-two">
                                    <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="team-item-two">
                                <div className="team-thumb-two">
                                    <Link href="/team-details"><img src="/assets/img/team/h2_team_img02.jpg" alt="" /></Link>
                                    <div className="team-social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content-two">
                                    <h2 className="title"><Link href="/team-details">Jenny Wilson</Link></h2>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="team-item-two">
                                <div className="team-thumb-two">
                                    <Link href="/team-details"><img src="/assets/img/team/h2_team_img03.jpg" alt="" /></Link>
                                    <div className="team-social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content-two">
                                    <h2 className="title"><Link href="/team-details">Wade Warren</Link></h2>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="team-item-two">
                                <div className="team-thumb-two">
                                    <Link href="/team-details"><img src="/assets/img/team/h2_team_img04.jpg" alt="" /></Link>
                                    <div className="team-social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content-two">
                                    <h2 className="title"><Link href="/team-details">Marvin McKinney</Link></h2>
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

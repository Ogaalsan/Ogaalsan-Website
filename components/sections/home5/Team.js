import Link from "next/link"

export default function Team() {
    return (
        <>
            <section className="team-area team-bg" data-background="/assets/img/bg/team_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style2">
                                <span className="sub-title tg-element-title">Skilled Team Members</span>
                                <h2 className="title tg-element-title">Meet Our Dedicated Team</h2>
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="/assets/img/team/team_img01.jpg" alt="" />
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h2>
                                    <span>Finance Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="/assets/img/team/team_img02.jpg" alt="" />
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link href="/team-details">Guy Hawkins</Link></h2>
                                    <span>Investment Department</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="/assets/img/team/team_img03.jpg" alt="" />
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link href="/team-details">Savannah Nguyen</Link></h2>
                                    <span>Business Consulting</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="/assets/img/team/team_img04.jpg" alt="" />
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link href="/team-details">Kristin Watson</Link></h2>
                                    <span>Marketing Head</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

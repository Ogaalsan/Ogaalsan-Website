import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Link from "next/link"
import Image from "next/image"

export default function About4() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                    <section className="about-area-ten">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-8">
                                    <div className="about-img-wrap-five about-img-wrap-ten">
                                        <Image src="/assets/img/images/h4_about_img01.jpg" alt="" width={600} height={700} loading="lazy" />
                                        <Image src="/assets/img/images/h4_about_img02.jpg" alt="" width={300} height={400} data-parallax="{&quot;y&quot; : 100 }" loading="lazy" />
                                        <div className="experience-wrap">
                                            <h2 className="title">25 <span>Years Of Experience</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content-five about-content-ten">
                                        <div className="section-title-two mb-30">
                                            <span className="sub-title">Get To know US</span>
                                            <h2 className="title">We are the next gen Business experience</h2>
                                        </div>
                                        <p>With over 25 years of experience, we have crafted thousands of Strategic discovery process that enables us to peel back which enable us to understand.</p>
                                        <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurieswhen an unknown printer took a galley of type and scrambled it to make specimen book</p>
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
                        <div className="about-shape-five">
                            <Image src="/assets/img/images/h4_about_shape.png" alt="" width={200} height={200} loading="lazy" />
                        </div>
                    </section>
                    {/* about-area-end */}
                    {/* features-area */}
                    <section className="features-area-six">
                        <div className="container">
                            <div className="features-item-wrap-four features-item-wrap-six">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="features-item-four">
                                            <div className="features-icon-four">
                                                <i className="flaticon-life-insurance" />
                                            </div>
                                            <div className="features-content-four">
                                                <h4 className="title">More coverage</h4>
                                                <p>Finance helps you to convert into a strategic asset get.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="features-item-four">
                                            <div className="features-icon-four">
                                                <i className="flaticon-handshake" />
                                            </div>
                                            <div className="features-content-four">
                                                <h4 className="title">Less hassle</h4>
                                                <p>Finance helps you to convert into a strategic asset get.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="features-item-four">
                                            <div className="features-icon-four">
                                                <i className="flaticon-money" />
                                            </div>
                                            <div className="features-content-four">
                                                <h4 className="title">Faster benefits</h4>
                                                <p>Finance helps you to convert into a strategic asset get.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* features-area-end */}
                    {/* features-area */}
                    <section className="features-area-seven">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="features-content-seven">
                                        <div className="section-title-two mb-30">
                                            <span className="sub-title">Top Features</span>
                                            <h2 className="title">Consulting Insurance firm specializing in This Field</h2>
                                        </div>
                                        <p>Advice on comprehensive legal solutions and legal planning on all aspects of business, including: issues under Company Law  Exchange Control Regulations</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="features-progress-wrap">
                                        <div className="progress-wrap">
                                            <div className="progress-item">
                                                <h6 className="title">Child Insurance</h6>
                                                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                                    <div className="progress-bar wow slideInLeft" data-wow-delay=".1s" style={{ width: '55%' }}><span>55%</span></div>
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <h6 className="title">Insurance Claim</h6>
                                                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={76} aria-valuemin={0} aria-valuemax={100}>
                                                    <div className="progress-bar wow slideInLeft" data-wow-delay=".2s" style={{ width: '76%' }}><span>76%</span></div>
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <h6 className="title">Investment</h6>
                                                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                                    <div className="progress-bar wow slideInLeft" data-wow-delay=".3s" style={{ width: '90%' }}><span>90%</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inner-features-shape">
                            <Image src="/assets/img/images/inner_features_shape.png" alt="" width={200} height={200} data-aos="fade-left" data-aos-delay={0} loading="lazy" />
                        </div>
                    </section>
                    {/* features-area-end */}
                    {/* team-area */}
                    <section className="team-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title-two text-center mb-50">
                                        <span className="sub-title">Expert People</span>
                                        <h2 className="title">Dedicated Team Members</h2>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="team-item-two">
                                        <div className="team-thumb-two">
                                            <Link href="/team-details"><Image src="/assets/img/team/h2_team_img01.jpg" alt="" width={300} height={400} loading="lazy" /></Link>
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
                    {/* team-area-end */}
                    {/* request-area */}
                    <section className="request-area-two">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="request-content-two">
                                        <div className="section-title-two white-title mb-15">
                                            <h2 className="title">Request a Call Back</h2>
                                        </div>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="request-form-wrap">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Phone *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="submit">Send Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="request-shape-wrap">
                            <Image src="/assets/img/images/h2_request_shape01.png" alt="" width={150} height={150} loading="lazy" />
                            <Image src="/assets/img/images/h2_request_shape02.png" alt="" width={150} height={150} data-aos="fade-left" data-aos-delay={200} loading="lazy" />
                        </div>
                    </section>
                    {/* request-area-end */}
                    {/* brand-area */}
                    <div className="brand-area-six pt-80 pb-80">
                        <div className="container">
                            <BrandSlider />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"
import Link from "next/link"
import Image from "next/image"

export default function About2() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                    {/* about-area */}
                    <section className="about-area-eight pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9">
                                    <div className="about-img-eight">
                                        <Image src="/assets/img/images/inner_about_img03.jpg" alt="" width={600} height={700} loading="lazy" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content-eight">
                                        <div className="section-title-two mb-30">
                                            <span className="sub-title">Get To Know More</span>
                                            <h2 className="title">We Have More Than 20+ Years Of Practical Finance Industries</h2>
                                        </div>
                                        <p>Morem ipsum dolor sit amet consectetur adipiscing elita florai psum dolor sit amet consecteture Borem ipsum dolor sitter consectetur adipiscing elita florai rem ipsum dolor sit amet consectetu.</p>
                                        <div className="about-content-inner">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-business-presentation" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Growing Business</h4>
                                                        <p>Finance helps you to convert into a strategic asset get.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-investment" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Finance Investment</h4>
                                                        <p>Finance helps you to convert into a strategic asset get.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="right-slide-img">
                                                <Image src="/assets/img/images/inner_about_img04.jpg" alt="" width={300} height={400} loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="about-content-bottom">
                                            <div className="services-btn">
                                                <Link href="/services" className="btn">Our Services</Link>
                                            </div>
                                            <div className="about-author-info">
                                                <div className="thumb">
                                                    <Image src="/assets/img/images/about_author.png" alt="" width={80} height={80} loading="lazy" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="title">Mark Stranger</h2>
                                                    <span>CEO, Gerow Finance</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}
                    {/* choose-area */}
                    <section className="choose-area-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="choose-content-three">
                                        <div className="section-title-two white-title mb-30">
                                            <span className="sub-title">What Specialty</span>
                                            <h2 className="title">Keep Your Business Safe  Ensure High Availability.</h2>
                                        </div>
                                        <p>Ever find yourself staring at your computer s good consulting slogan to come to mind? Oftentimes.</p>
                                        <div className="accordion-wrap-two">
                                            <Accordion />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="choose-img-three">
                                        <Image src="/assets/img/images/inner_choose_img.jpg" alt="" width={600} height={700} loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* choose-area-end */}
                    {/* team-area */}
                    <section className="team-area team-bg" data-background="/assets/img/bg/team_bg.jpg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="section-title text-center mb-50">
                                        <span className="sub-title">Skilled Team Members</span>
                                        <h2 className="title">Meet Our Dedicated Team</h2>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <Image src="/assets/img/team/team_img01.jpg" alt="" width={300} height={400} loading="lazy" />
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
                    {/* team-area-end */}
                    {/* testimonial-area */}
                    <section className="testimonial-area-three testimonial-area-six pt-120">
                        <div className="container">
                            <div className="row g-0 align-items-end">
                                <div className="col-37">
                                    <div className="testimonial-img-three">
                                        <Image src="/assets/img/images/h3_testimonial_img.jpg" alt="" width={500} height={600} loading="lazy" />
                                    </div>
                                </div>
                                <div className="col-63">
                                    <div className="testimonial-item-wrap-three" data-background="/assets/img/bg/h3_testimonial_bg.png">
                                        <TestimonialSlider3 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* testimonial-area-end */}
                    {/* brand-area */}
                    <div className="brand-area-six pt-80 pb-80">
                        <div className="container">
                            <BrandSlider />
                        </div>
                    </div>
                    {/* brand-area-end */}
                </div>

            </Layout>
        </>
    )
}
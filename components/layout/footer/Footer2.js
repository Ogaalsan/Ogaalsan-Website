import { useState } from "react"
import Link from "next/link"
import { useOrganization } from "@/context/OrganizationContext"

export default function Footer2() {
    const { phoneLabel, phoneHref, email, fullAddress, organization } = useOrganization()
    const [newsletterEmail, setNewsletterEmail] = useState("")
    const [newsletterStatus, setNewsletterStatus] = useState(null) // null | "success" | "error"

    const handleNewsletterSubmit = (e) => {
        e.preventDefault()
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)
        if (!isValidEmail) {
            setNewsletterStatus("error")
            return
        }
        setNewsletterStatus("success")
        setNewsletterEmail("")
    }

    return (
        <>
            <footer>
                <div className="footer-area-two footer-bg-two" data-background="/assets/img/bg/h2_footer_bg.jpg">
                    <div className="footer-top-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <div className="fw-logo">
                                            <Link href="/"><img src="/assets/img/logo/ogaalsan version 4-03.png" alt="OgaalSan Consultancy Logo" /></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p>OgaalSan Consultancy provides ICT solutions, training & capacity building, business development, and digital marketing services to help organizations grow and innovate.</p>
                                            <div className="footer-info">
                                                <ul className="list-wrap">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-phone-call" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href={phoneHref}>{phoneLabel}</Link>
                                                            {email ? (
                                                                <>
                                                                    <br />
                                                                    <Link href={`mailto:${email}`}>{email}</Link>
                                                                </>
                                                            ) : null}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-location" />
                                                        </div>
                                                        <div className="content">
                                                            <p>{fullAddress}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-clock" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Mon – Sat: 8 am – 5 pm, <br /> Friday: <span>CLOSED</span></p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Services</h4>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/services">ICT Solutions</Link></li>
                                                <li><Link href="/services">Training & Capacity Building</Link></li>
                                                <li><Link href="/services">Business Development</Link></li>
                                                <li><Link href="/services">Digital Marketing</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Quick Links</h4>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/about">About Us</Link></li>
                                                <li><Link href="/services">Our Services</Link></li>
                                                <li><Link href="/blog">Our Blog</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                                <li><Link href="/contact">Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Our Newsletter</h4>
                                        <div className="footer-newsletter">
                                            <p>Sign up to {organization.name}&apos;s newsletter to get the latest updates on ICT solutions, digital innovation, and technology trends.</p>
                                            <form onSubmit={handleNewsletterSubmit} noValidate>
                                                <input
                                                    type="email"
                                                    placeholder="enter your e-mail"
                                                    value={newsletterEmail}
                                                    onChange={(e) => {
                                                        setNewsletterEmail(e.target.value)
                                                        if (newsletterStatus) setNewsletterStatus(null)
                                                    }}
                                                    required
                                                />
                                                <button type="submit">Subscribe</button>
                                            </form>
                                            {newsletterStatus === "success" && (
                                                <p style={{ marginTop: "10px", marginBottom: 0, color: "#3fa9f5", fontSize: "14px" }}>
                                                    Thank you for subscribing!
                                                </p>
                                            )}
                                            {newsletterStatus === "error" && (
                                                <p style={{ marginTop: "10px", marginBottom: 0, color: "#ff6161", fontSize: "14px" }}>
                                                    Please enter a valid e-mail address.
                                                </p>
                                            )}
                                            <div className="footer-social footer-social-two">
                                                <ul className="list-wrap">
                                                    <li><Link href="https://www.facebook.com/profile.php?id=61552529542233" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="https://x.com/OgaalsanC" target="_blank" rel="noopener noreferrer"><span style={{fontWeight: 'bold', fontSize: '18px'}}>X</span></Link></li>
                                                    <li><Link href="https://www.instagram.com/ogaalsan.consultancy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="https://www.tiktok.com/@ogaalsanconsultancy" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text-two text-center">
                                        <p>Copyright © {organization.name} | All Right Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

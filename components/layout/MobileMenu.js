import Link from "next/link"
import { useState } from "react"
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation">
                <li className="active menu-item-has-children"><Link href="#">Home</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">Finance</Link></li>
                        <li><Link href="/index-2">Consulting</Link></li>
                        <li><Link href="/index-3">Insurance</Link></li>
                        <li><Link href="/index-4">Digital Agency</Link></li>
                        <li><Link href="/index-5">Business</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fas fa-angle-down" /></div></li>
                <li className="menu-item-has-children"><Link href="#">About Us</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/about">About One</Link></li>
                        <li><Link href="/about-2">About Two</Link></li>
                        <li><Link href="/about-3">About Three</Link></li>
                        <li><Link href="/about-4">About Four</Link></li>
                        <li><Link href="/about-5">About Five</Link></li>
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fas fa-angle-down" /></div></li>
                <li className="menu-item-has-children"><Link href="#">Pages</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li className="menu-item-has-children"><Link href="/services">Services</Link>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                <li><Link href="/services">Services One</Link></li>
                                <li><Link href="/services-2">Services Two</Link></li>
                                <li><Link href="/services-3">Services Three</Link></li>
                                <li><Link href="/services-4">Services Four</Link></li>
                                <li><Link href="/services-5">Services Five</Link></li>
                            </ul>
                            <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fas fa-angle-down" /></div></li>
                        <li className="menu-item-has-children"><Link href="/services-details">Services Details</Link>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                <li><Link href="/services-details">Services Details One</Link></li>
                                <li><Link href="/services-details-2">Services Details Two</Link></li>
                                <li><Link href="/services-details-3">Services Details Three</Link></li>
                                <li><Link href="/services-details-4">Services Details Four</Link></li>
                                <li><Link href="/services-details-5">Services Details Five</Link></li>
                            </ul>
                            <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fas fa-angle-down" /></div></li>
                        <li><Link href="/project-details">Portfolio Details</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/error">404 Error</Link></li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fas fa-angle-down" /></div></li>
                <li className="menu-item-has-children"><Link href="#">Blog</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link href="/blog">Our Blog</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fas fa-angle-down" /></div></li>
                <li><Link href="/contact">contacts</Link></li>
            </ul>
        </>
    )
}

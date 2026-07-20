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
                <li className="active"><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/training">Training</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li className="menu-item-has-children"><Link href="#">Resources</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/resources/course-resources">Course Resources</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fas fa-angle-down" /></div></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}

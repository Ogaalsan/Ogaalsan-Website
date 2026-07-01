
import Link from "next/link"
import { useState } from "react"
export default function SocialToggle() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className="team-social-three">
                <div className="social-toggle-icon" onClick={() => handleToggle()}>
                    <i className="fas fa-share-alt" />
                </div>
                <ul className="list-wrap" style={{ display: `${isToggled ? "block" : "none"}` }}>
                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                </ul>
            </div>
        </>
    )
}

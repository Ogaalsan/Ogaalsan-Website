import Link from "next/link"
import { useOrganization } from "@/context/OrganizationContext"

export default function OffcanvusMenu({ isOffcanvus, handleOffcanvus }) {
    const { fullAddress, phoneLabel, phoneHref, email } = useOrganization()

    return (
        <>
            <div className={`extra-info ${isOffcanvus ? "active" : ""}`}>
                <div className="close-icon menu-close" onClick={handleOffcanvus}>
                    <button><i className="far fa-window-close" /></button>
                </div>
                <div className="logo-side mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo-ogalsan.png" alt="OgaalSan Consultancy Logo" /></Link>
                </div>
                <div className="side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Office Address</h4>
                        <p>{fullAddress}</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Phone Number</h4>
                        <p>
                            <Link href={phoneHref}>{phoneLabel}</Link>
                        </p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p>
                            <Link href={`mailto:${email}`}>{email}</Link>
                        </p>
                    </div>
                </div>
             
                <div className="social-icon-right mt-30">
                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                    <Link href="#"><i className="fab fa-twitter" /></Link>
                    <Link href="#"><i className="fab fa-instagram" /></Link>
                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                </div>
            </div>
            <div className={`offcanvas-overly ${isOffcanvus ? "active" : ""}`} onClick={handleOffcanvus} />
        </>
    )
}

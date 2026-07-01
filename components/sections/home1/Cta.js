import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Cta() {
    const ctaRef = useRef(null)

    useEffect(() => {
        // Initialize background image for dynamically loaded component
        const initBackground = () => {
            if (ctaRef.current) {
                const bgUrl = ctaRef.current.getAttribute('data-background')
                if (bgUrl) {
                    // Set background image with all necessary properties
                    ctaRef.current.style.backgroundImage = `url(${bgUrl})`
                    ctaRef.current.style.backgroundSize = 'cover'
                    ctaRef.current.style.backgroundPosition = 'center'
                    ctaRef.current.style.backgroundRepeat = 'no-repeat'
                    // Ensure element is visible
                    ctaRef.current.style.minHeight = 'auto'
                }
            }
        }
        
        // Run immediately and also after a small delay to ensure DOM is ready
        initBackground()
        const timer = setTimeout(initBackground, 100)
        
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <section className="cta-area">
                <div className="container">
                    <div className="cta-inner-wrap" ref={ctaRef} data-background="/assets/img/bg/cta_bg.jpg">
                        <div className="row align-items-center">
                            <div className="col-lg-9">
                                <div className="cta-content">
                                    <div className="cta-info-wrap">
                                        <div className="icon">
                                            <i className="flaticon-phone-call" />
                                        </div>
                                        <div className="content">
                                            <span>Call For More Info</span>
                                            <Link href="tel:+252615280901">+252 61 5280901</Link>
                                        </div>
                                    </div>
                                    <h2 className="title">Let's Discuss Your ICT & Digital Innovation Needs</h2>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="cta-btn text-end">
                                    <Link href="/contact" className="btn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

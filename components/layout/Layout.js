
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import WhatsAppWidget from '../common/WhatsAppWidget'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import PageHead from './PageHead'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import SearchPopup from "./SearchPopup"

export default function Layout({ headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    }
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)
    const [isOffcanvus, setOffcanvus] = useState(false)
    const handleOffcanvus = () => setOffcanvus(!isOffcanvus)

    useEffect(() => {
        const loadWOW = async () => {
            const WOW = require('wowjs')
            window.wow = new WOW.WOW({
                live: false,
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false
            })
            window.wow.init()
        }
        
        if (typeof window !== 'undefined') {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(loadWOW, { timeout: 2000 })
            } else {
                setTimeout(loadWOW, 500)
            }
        }

        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollCheck = window.scrollY > 100
                    if (scrollCheck !== scroll) {
                        setScroll(scrollCheck)
                    }
                    ticking = false
                })
                ticking = true
            }
        }

        document.addEventListener("scroll", handleScroll, { passive: true })
        
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [scroll])

    return (
        <>
            <PageHead headTitle={headTitle} />
            <DataBg />

            <Header1
                scroll={scroll}
                isMobileMenu={isMobileMenu}
                handleMobileMenu={handleMobileMenu}
                isSearch={isSearch}
                handleSearch={handleSearch}
                isOffcanvus={isOffcanvus}
                handleOffcanvus={handleOffcanvus}
            />

            <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />

            <main className="fix">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>

            <Footer2 />

            <BackToTop />
            <WhatsAppWidget />
        </>
    )
}

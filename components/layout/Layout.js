
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import BackToTop from '../elements/BackToTop'
import WhatsAppWidget from '../common/WhatsAppWidget'
import DataBg from "../elements/DataBg"
import PageHead from './PageHead'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import SearchPopup from "./SearchPopup"

export default function Layout({ headTitle, children }) {
    const router = useRouter()
    const [scroll, setScroll] = useState(0)
    const [isMobileMenu, setMobileMenu] = useState(false)

    const closeMobileMenu = () => {
        setMobileMenu(false)
        document.body.classList.remove("mobile-menu-visible")
    }

    const handleMobileMenu = () => {
        setMobileMenu((open) => {
            const next = !open
            if (next) {
                document.body.classList.add("mobile-menu-visible")
            } else {
                document.body.classList.remove("mobile-menu-visible")
            }
            return next
        })
    }

    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)
    const [isOffcanvus, setOffcanvus] = useState(false)
    const handleOffcanvus = () => setOffcanvus(!isOffcanvus)

    useEffect(() => {
        const onRoute = () => closeMobileMenu()
        router.events.on("routeChangeStart", onRoute)
        return () => router.events.off("routeChangeStart", onRoute)
    }, [router.events])

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
                closeMobileMenu={closeMobileMenu}
                isSearch={isSearch}
                handleSearch={handleSearch}
                isOffcanvus={isOffcanvus}
                handleOffcanvus={handleOffcanvus}
            />

            <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />

            <main className="fix">
                {children}
            </main>

            <Footer2 />

            <BackToTop />
            <WhatsAppWidget />
        </>
    )
}

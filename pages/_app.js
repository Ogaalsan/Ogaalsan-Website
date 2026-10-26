import Preloader from "@/components/elements/Preloader"
import { AuthProvider } from "@/context/AuthContext"
import { OrganizationProvider } from "@/context/OrganizationContext"
import { ThemeProvider } from "@/context/ThemeContext"
import { useEffect, useState } from "react"
import AOS from "aos"

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 200)

    if (typeof window !== "undefined") {
      // Init immediately so [data-aos] elements are not left at opacity:0
      AOS.init({
        duration: 800,
        once: true,
        offset: 40,
        disable: () => window.matchMedia("(max-width: 767.98px)").matches,
      })
      AOS.refresh()
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AuthProvider>
        <OrganizationProvider>
          {!loading ? <Component {...pageProps} /> : <Preloader />}
        </OrganizationProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp

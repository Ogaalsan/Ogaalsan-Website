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
      const initAOS = () => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 100,
          disable: "mobile",
        })
      }

      if ("requestIdleCallback" in window) {
        requestIdleCallback(initAOS, { timeout: 2000 })
      } else {
        setTimeout(initAOS, 100)
      }
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

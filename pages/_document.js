import { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          href="/assets/img/logo/ogaalsan version 4-03.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/img/logo/ogaalsan version 4-03.png"
        />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=plus-jakarta-sans:300,400,500,600|urbanist:300,400,500,600,700,800"
          rel="stylesheet"
        />
        {/* Critical CSS - load first */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        {/* Additional CSS */}
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />
        <link rel="stylesheet" href="/assets/css/jarallax.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/courses.css" />
        <link rel="stylesheet" href="/assets/css/auth.css" />
        <link rel="stylesheet" href="/assets/css/whatsapp-widget.css" />
        <link rel="stylesheet" href="/assets/css/resources.css" />
        <link rel="stylesheet" href="/assets/css/ogaalsan-home.css" />
        <link rel="stylesheet" href="/assets/css/dark-mode.css" />
      </Head>
      <body>
        <Script
          id="ogaalsan-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='ogaalsan_theme';var t=localStorage.getItem(k);if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

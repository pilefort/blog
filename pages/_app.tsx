import '../styles/globals.css'

import Script from 'next/script'

import { useMediaQuery } from '../hooks/useMediaQuery'

import { DesktopHeader } from '../components/Layouts/Header/DesktopHeader'
import { SPHeader } from '../components/Layouts/Header/SP/SPHeader'
import Footer from '../components/Layouts/Footer'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const isDesktop = useMediaQuery()

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        defer
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script>
      {isDesktop ? (
        <>
          <DesktopHeader />
          <SPHeader />
          <div className="min-h-[calc(100vh-(80px+80px+128px+30px))]">
            <Component {...pageProps} />
          </div>
        </>
      ) : (
        <>
          <SPHeader />
          <div className="min-h-[calc(100vh-(30px+80px+128px))]">
            <Component {...pageProps} />
          </div>
        </>
      )}
      <Footer />
    </>
  )
}

export default MyApp

import '../styles/globals.css'

import Script from 'next/script'

import { Header } from '@components/Layouts/Header'
import { Footer } from '@components/Layouts/Footer'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
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
      <>
        <Header />
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
      </>
      <Footer />
    </>
  )
}

export default MyApp

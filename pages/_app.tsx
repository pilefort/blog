import '../styles/globals.css'

import Script from 'next/script'

import { Header } from '@components/Layouts/Header'
import { Footer } from '@components/Layouts/Footer'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import type { AppProps } from 'next/app'
import { FlagValues } from "@vercel/flags/react" 

if (typeof window !== 'undefined') {
  // checks that we are client-side
  posthog.init('phc_WYnf7GWtk4JERgIl29UUD6STVXAYRVSOeEzZpJJ9H20', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
    },
  })
}

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
          <PostHogProvider client={posthog}>
            <Component {...pageProps} />
          </PostHogProvider>
        </div>
        <FlagValues values={{ fasterCheckoutPage: true, landingPageRedesign: true }} />
      </>
      <Footer />
    </>
  )
}

export default MyApp

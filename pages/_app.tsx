import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Layouts/Footer'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { DesktopHeader } from '../components/Layouts/Header/DesktopHeader'
import { SPHeader } from '../components/Layouts/Header/SP/SPHeader'

function MyApp({ Component, pageProps }: AppProps) {
  const isDesktop = useMediaQuery()

  return (
    <>
      {isDesktop ? (
        <>
          <DesktopHeader />
          <SPHeader />
          <div className="min-h-[calc(100vh-(80px+80px+128px))]">
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

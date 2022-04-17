import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Layouts/Header'
import Footer from '../src/components/Layouts/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-(80px+80px))]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp

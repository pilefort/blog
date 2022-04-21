import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Layouts/Header'
import Footer from '../src/components/Layouts/Footer'
import { CustomHead } from '../src/components/Head/CustomHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      {/* TODO: ある程度完成したら内容を充実させる */}
      <CustomHead
        title=""
        description={'現在開発中の技術ブログです'}
      />
      <div className="min-h-[calc(100vh-(80px+80px+128px))]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp

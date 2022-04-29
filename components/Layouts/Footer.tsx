import { Sitemap } from './Footer/Sitemap'
import { LatestActivity } from './Footer/LatestActivity'
import { Introduction } from './Footer/Introduction'
import { FooterLinks } from './Footer/FooterLinks'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Footer = () => {
  const router = useRouter()
  const [isRoute, setIsRoute] = useState(false)

  useEffect(() => {
    if (!router.isReady) return

    const isRoute = router.asPath === '/'
    setIsRoute(isRoute)
  }, [router, router.isReady])

  return (
    <div>
      <FooterLinks />
      {/* NOTE: ページの表示を早くするために、トップページでは簡略版のフッターを表示する */}
      {isRoute ? (
        <></>
      ) : (
        <></>
        // <div className="h-auto bg-[#104359] text-white md:text-[24px]">
        //   <div className="p-[16px] md:p-[80px]">
        //     <div className="hr-with-title text-center md:w-[calc(100vw-160px)]">自己紹介</div>
        //     <div className="mt-[24px] md:w-[calc(100vw-180px)]">
        //       <Introduction />
        //       <div className="mt-[64px] md:mt-[112px]">
        //         <LatestActivity />
        //       </div>
        //     </div>
        //     <Sitemap />
        //   </div>
        // </div>
      )}
    </div>
  )
}

export default Footer

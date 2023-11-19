import { Sitemap } from './Footer/Sitemap'
import { Introduction } from './Footer/Introduction'
import { FooterLinks } from './Footer/FooterLinks'

export const Footer = () => {
  return (
    <div>
      <FooterLinks />
      <div className="h-auto bg-primary text-[white] md:text-h3">
        <div className="p-[16px] md:p-[80px]">
          <div className="hr-with-title text-center md:w-[calc(100vw-160px)]">自己紹介</div>
          <div className="mt-[24px] md:w-[calc(100vw-180px)]">
            <Introduction />
            {/* TODO: Twitterの最新投稿を載せるようにする */}
            {/* <div className="mt-[64px] md:mt-[112px]">
              <LatestActivity />
            </div> */}
          </div>
          <Sitemap />
        </div>
      </div>
    </div>
  )
}

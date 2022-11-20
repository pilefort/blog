import Link from 'next/link'
import Image from 'next/image'

import { CustomImage } from '../../CustomImage'

import OpenNewWindow from '../../../public/assets/OpenNewWindow.svg'
import TechDojin12Image from '../../../public/assets/tech-dojin/tech12.jpg'

export const LatestActivity = () => {
  return (
    <>
      <div className="hr-with-title text-center lg:w-[calc(100vw-160px)]">最近の活動</div>
      <div className="mt-[24px] lg:flex">
        <div className="lg:w-[calc(100%-350px)] xl:w-auto">
          <div className="font-bold">技術書典12 (2022.1.22 - 2022.1.30) で本を出しました。</div>
          <div className="mt-[24px]">
            2021年に登場したり、大幅なアップデートがあったWebサービスや開発ツール、ライブラリ、フレームワークを紹介した本です。
          </div>
          <div>TailwindCSSv3やRailway, Partytown, Nextjs12なんかの紹介やChrome DevToolsやChrome Extensions Manifest V3などの話を書いてます。</div>
          <div className="mt-[24px] text-[16px]">
            <div>
              <span>Sample: </span>
              <Link
                href="https://sample.pilefort.dev/"
                passHref
                target="_blank"
              >
                <span>https://sample.pilefort.dev/</span>
                <span className="ml-[8px]">
                  <Image
                    alt="open new window"
                    src={OpenNewWindow}
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </span>
              </Link>
            </div>
            <div className="mt-[8px]">
              <span>Booth: </span>
              <Link
                href="https://pilefort.booth.pm/items/3633323"
                passHref
                target="_blank"
              >
                <span>https://pilefort.booth.pm/items/3633323</span>
                <span className="ml-[8px]">
                  <Image
                    src={OpenNewWindow}
                    width={24}
                    height={24}
                    alt="open new window"
                    loading="lazy"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <CustomImage
          alt="うぇぶちぇんじろぐ2022"
          src={TechDojin12Image}
          width={350}
          height={495}
        />
      </div>
    </>
  )
}

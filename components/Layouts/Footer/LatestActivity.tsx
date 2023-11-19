import Link from 'next/link'
import Image from 'next/image'

import { CustomImage } from '../../MdxComponent/CustomImage'

import OpenNewWindow from '@public/assets/OpenNewWindow.svg'
import WebChangelog2022part1 from '@public/assets/tech_dojin/web_changelog_2022part1.jpg'
import WebChangelog2021 from '@public/assets/tech_dojin/web_changelog_2021.jpg'

export const LatestActivity = () => {
  return (
    <>
      <div className="hr-with-title text-center lg:w-[calc(100vw-160px)]">最近の活動</div>
      <WebChangeLog2022Part1 className="mt-[16px] lg:flex" />
      <XMind2Markdown className="mt-[128px] lg:flex" />
      <WebChangeLog2021 className="mt-[128px] lg:flex" />
    </>
  )
}

const WebChangeLog2022Part1 = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="mr-[32px] lg:w-[calc(100%-350px)] xl:w-auto">
        <div className="font-bold">技術書典13 (2022.9.10 - 2022.9.25) で本を出しました。</div>
        <div className="mt-[24px]">
          2022年の1月から8月ぐらいまでに登場したり、大幅なアップデートがあったWebサービスや開発ツール、ライブラリ、フレームワークを紹介した本です。
        </div>
        <div className="mt-[24px] text-h4">
          <div className="mt-[16px]">
            <span>Booth: </span>
            <Link
              href="https://booth.pm/ja/items/4157010"
              passHref
              target="_blank"
              className="flex"
            >
              <Image
                alt="open new window"
                className="mr-[4px]"
                src={OpenNewWindow}
                width={24}
                height={24}
                loading="lazy"
              />
              <span>https://booth.pm/ja/items/4157010</span>
            </Link>
          </div>
        </div>
      </div>
      <CustomImage
        alt="うぇぶちぇんじろぐ2022part1"
        src={WebChangelog2022part1}
        width={350}
        height={495}
      />
    </div>
  )
}

const XMind2Markdown = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="w-auto">
        <div className="font-bold">XMind8ファイルをMarkdownファイルに変換するツールを作りました。</div>
        <div className="mt-[24px] text-h4">
          <span>公式のxmind-sdk-jsのバージョンを下げて作ってます (最新版だと一部メソッドが削除されてるため)。</span>
          <div className="mt-[24px]">
            <div>
              <span>Sample: </span>
              <Link
                href="https://github.com/kusakabe-t/xmind2md"
                passHref
                target="_blank"
                className="flex"
              >
                <Image
                  alt="open new window"
                  className="mr-[4px]"
                  src={OpenNewWindow}
                  width={24}
                  height={24}
                  loading="lazy"
                />
                <span>https://github.com/kusakabe-t/xmind2md</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WebChangeLog2021 = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="mr-[32px] lg:w-[calc(100%-350px)] xl:w-auto">
        <div className="font-bold">技術書典12 (2022.1.22 - 2022.1.30) で本を出しました。</div>
        <div className="mt-[24px]">
          2021年に登場したり、大幅なアップデートがあったWebサービスや開発ツール、ライブラリ、フレームワークを紹介した本です。
        </div>
        <div className="mt-[24px] text-h4">
          <div>
            <span>Sample: </span>
            <Link
              href="https://sample.pilefort.dev/"
              passHref
              target="_blank"
              className="flex"
            >
              <Image
                alt="open new window"
                className="mr-[4px]"
                src={OpenNewWindow}
                width={24}
                height={24}
                loading="lazy"
              />
              <span>https://sample.pilefort.dev/</span>
            </Link>
          </div>
          <div className="mt-[16px]">
            <span>Booth: </span>
            <Link
              href="https://pilefort.booth.pm/items/3633323"
              passHref
              target="_blank"
              className="flex"
            >
              <Image
                alt="open new window"
                className="mr-[4px]"
                src={OpenNewWindow}
                width={24}
                height={24}
                loading="lazy"
              />
              <span>https://pilefort.booth.pm/items/3633323</span>
            </Link>
          </div>
        </div>
      </div>
      <CustomImage
        alt="うぇぶちぇんじろぐ2022"
        src={WebChangelog2021}
        width={350}
        height={495}
      />
    </div>
  )
}

import { MouseEventHandler, useEffect, useState, MouseEvent } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import TechDojin12Image from '../../../public/assets/tech-dojin/tech12.jpg'
import TechDojin12NoObiImage from '../../../public/assets/tech-dojin/tech12-no-obi.png'
import OpenNewWindow from '../../../public/assets/OpenNewWindow.svg'

type StaticImageData = {
  src: string
  height: number
  width: number
  placeholder?: string
}

const Footer = () => {
  const router = useRouter()
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    if (!router.isReady) return

    window.innerWidth >= 900 ? setIsDesktop(true) : setIsDesktop(false)
  }, [router.isReady])

  return <div>{isDesktop ? <DesktopFooter /> : <></>}</div>
}

const DesktopFooter = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [imageUrl, setImageUrl] = useState<StaticImageData>({ src: '', width: 0, height: 0 })
  const closeModalHandler = () => setIsShowModal(false)
  const setImageUrlHandler = (url: StaticImageData) => {
    setImageUrl(url)
    setIsShowModal(true)
  }

  return (
    <div className="hidden lg:block">
      {isShowModal && (
        <Modal
          image={imageUrl}
          closeModalHandler={closeModalHandler}
        />
      )}
      <div className="flex h-[80px] items-center justify-end bg-[#104359] text-[24px] text-[white]">
        <div className="mx-[24px] flex w-[500px] items-center justify-between">
          <Link
            href="https://github.com/pilefort"
            passHref
          >
            <a target="_blank">GitHub</a>
          </Link>
          <Link
            href="https://twitter.com/pilefort"
            passHref
          >
            <a target="_blank">Twitter</a>
          </Link>
          <Link
            href="https://zenn.dev/pilefort"
            passHref
          >
            <a target="_blank">Zenn</a>
          </Link>
          <Link
            href="https://techbookfest.org/organization/4806658536505344"
            passHref
          >
            <a target="_blank">技術書典</a>
          </Link>
          <Link
            href="https://pilefort.booth.pm/"
            passHref
          >
            <a target="_blank">Booth</a>
          </Link>
        </div>
      </div>
      <div className="h-auto bg-[#104359] text-[24px] text-[white]">
        <div className="p-[80px]">
          <div className="hr-with-title w-[calc(100vw-160px)] text-center">自己紹介</div>
          <div className="mt-[24px] w-[calc(100vw-180px)]">
            <div>はじめまして Pilefortです。</div>
            <div>東京でエソジニアをしてます。</div>
            <div className="mt-[24px]">
              興味のあるスタックは、JavaScript (React, Vue), TypeScript, Rust, WebAssembly, AWS, Pulumi, Serverless Frameworkです。
            </div>
            <div className="mt-[24px]">
              このブログでは、普段の業務や趣味で気になったことをまとめたり、フロントやAWS,
              GitHubやTwitterで見かけた面白い記事やニュースをまとめるためのものです。少しでも何かの役に立てば幸いです。
            </div>
            <div className="mt-[112px]">
              <div className="hr-with-title w-[calc(100vw-160px)] text-center">最近の活動</div>
              <div className="mt-[24px] flex">
                <div className="w-[calc(100%-350px)] xl:w-auto">
                  <div className="font-bold">技術書典12 (2022.1.22 - 2022.1.30) で本を出しました。</div>
                  <div className="mt-[24px]">
                    2021年に登場したり、大幅なアップデートがあったWebサービスや開発ツール、ライブラリ、フレームワークを紹介した本です。
                  </div>
                  <div>
                    TailwindCSSv3やRailway, Partytown, Nextjs12なんかの紹介やChrome DevToolsやChrome Extensions Manifest V3などの話を書いてます。
                  </div>
                  <div className="mt-[24px]">
                    <div>
                      <span>Sample: </span>
                      <Link
                        href="https://sample.pilefort.dev/"
                        passHref
                      >
                        <a target="_blank">
                          <span>https://sample.pilefort.dev/</span>
                          <span className="ml-[8px]">
                            <Image
                              src={OpenNewWindow}
                              width={24}
                              height={24}
                              alt="open new window"
                            />
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div className="mt-[8px]">
                      <span>Booth: </span>
                      <Link
                        href="https://pilefort.booth.pm/items/3633323"
                        passHref
                      >
                        <a target="_blank">
                          <span>https://pilefort.booth.pm/items/3633323</span>
                          <span className="ml-[8px]">
                            <Image
                              src={OpenNewWindow}
                              width={24}
                              height={24}
                              alt="open new window"
                            />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="ml-[32px] w-[350px] cursor-zoom-in"
                  onClick={() => setImageUrlHandler(TechDojin12Image)}
                >
                  <Image
                    src={TechDojin12Image}
                    alt={'web changelog'}
                    width={350}
                    height={495}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[112px]">
            <div className="hr-with-title w-[calc(100vw-160px)] text-center">サイトマップ</div>
            <div className="mt-[24px] grid grid-cols-2 gap-[10%] xl:grid-cols-4">
              <div>
                <Link
                  href="/notes"
                  passHref
                >
                  <a className="text-[32px] font-bold">Notes</a>
                </Link>
                <div className="mt-[8px]">業務や趣味での気づき・メモ</div>
              </div>
              <div>
                <Link
                  href="/scraps"
                  passHref
                >
                  <a className="text-[32px] font-bold">Scraps</a>
                </Link>
                <div className="mt-[8px]">雑記。ネットで見つけた面白い記事やニュース</div>
              </div>
              <div>
                <Link
                  href="/snippets"
                  passHref
                >
                  <a className="text-[32px] font-bold">Snippets</a>
                </Link>
                <div className="mt-[8px]">記事にするまでもないけど、便利なコマンドや豆知識</div>
              </div>
              <div>
                <Link
                  href="/works"
                  passHref
                >
                  <a className="text-[32px] font-bold">Works</a>
                </Link>
                <div className="mt-[8px]">作ったもの。同人誌やツールなど</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Modal = ({ image, closeModalHandler }: { image: StaticImageData; closeModalHandler: MouseEventHandler<HTMLDivElement> }) => {
  const stopPropagationHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    setIsDisableBookObi(!isDisableBookObi)
  }
  const [isDisableBookObi, setIsDisableBookObi] = useState(false)

  return (
    <div
      className="fixed top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-60"
      onClick={closeModalHandler}
    >
      <div
        className="relative cursor-alias"
        onClick={stopPropagationHandler}
      >
        {isDisableBookObi ? (
          <Image
            src={TechDojin12NoObiImage}
            width={700}
            height={990}
            alt="modal image"
          />
        ) : (
          <Image
            src={image.src}
            width={700}
            height={990}
            alt="modal image"
          />
        )}
      </div>
    </div>
  )
}

export default Footer

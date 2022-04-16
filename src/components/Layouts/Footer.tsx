import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

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
  return (
    <div className="hidden lg:block">
      <div className="flex h-[80px] items-center justify-end bg-[#104359] text-[24px] text-[white]">
        <div className="mx-[24px] flex w-[500px] items-center  justify-between">
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
      <div className="h-[calc(100vh-80px)] bg-[#104359] text-[24px] text-[white]">
        <div>hogehoge</div>
      </div>
    </div>
  )
}

export default Footer

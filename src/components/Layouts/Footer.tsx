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
        <div className="mx-[24px] flex w-[250px] items-center  justify-between">
          <Link
            href="https://github.com/pilefort"
            passHref
          >
            <a>GitHub</a>
          </Link>
          <Link
            href="https://twitter.com/pilefort"
            passHref
          >
            <a>Twitter</a>
          </Link>
          <Link
            href="https://zenn.dev/pilefort"
            passHref
          >
            <a>Zenn</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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
          <div>GitHub</div>
          <div>Twitter</div>
          <div>Zenn</div>
        </div>
      </div>
    </div>
  )
}

export default Footer

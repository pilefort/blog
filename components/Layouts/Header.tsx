import { DesktopHeader } from '@components/Layouts/Header/DesktopHeader'
import { SPHeader } from '@components/Layouts/Header/SPHeader'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const checkIsDesktop = () => {
      window.innerWidth >= 900 ? setIsDesktop(true) : setIsDesktop(false)
    }

    window.addEventListener('resize', checkIsDesktop)
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [router.isReady])

  return <>{isDesktop ? <DesktopHeader /> : <SPHeader />}</>
}

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const useMediaQuery = () => {
  const [isDesktop, setIsDesktop] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // if (!router.isReady) return

    window.innerWidth >= 900 ? setIsDesktop(true) : setIsDesktop(false)
  }, [])

  return isDesktop
}

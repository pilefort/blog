import { useEffect, useState } from 'react'

export const useMediaQuery = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkWindowWidth = () => {
      window.innerWidth >= 900 ? setIsDesktop(true) : setIsDesktop(false)
    }

    window.addEventListener('resize', checkWindowWidth)
    return () => window.removeEventListener('resize', checkWindowWidth)
  }, [])

  return isDesktop
}

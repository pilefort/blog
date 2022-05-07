import { useEffect, useState } from 'react'

export const useMediaQuery = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    window.innerWidth >= 900 ? setIsDesktop(true) : setIsDesktop(false)
  }, [])

  return isDesktop
}

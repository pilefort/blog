import { DesktopHeader } from './Header/DesktopHeader'
import { SPHeader } from './Header/SP/SPHeader'

import { useMediaQuery } from '../../hooks/useMediaQuery'

const Header = () => {
  const isDesktop = useMediaQuery()

  return (
    <div>
      {isDesktop ? (
        <>
          <DesktopHeader />
          <SPHeader />
        </>
      ) : (
        <SPHeader />
      )}
    </div>
  )
}

export default Header

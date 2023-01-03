import { DesktopHeader } from '@components/Layouts/Header/DesktopHeader'
import { SPHeader } from '@components/Layouts/Header/SPHeader'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export const Header = () => {
  const isDesktop = useMediaQuery()

  return <>{isDesktop ? <DesktopHeader /> : <SPHeader />}</>
}

import AccordionOpenIcon from '../../../public/assets/AccordionOpen.svg'
import AccordionCloseIcon from '../../../public/assets/AccordionClose.svg'
import Image from 'next/image'
import { useState, MouseEventHandler, useEffect } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    if (!router.isReady) return

    window.innerWidth >= 900 ? setIsDesktop(true) : setIsDesktop(false)
  }, [router.isReady])

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

const DesktopHeader = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex h-[80px] items-center justify-between p-[16px] pr-[24px]">
        <div className="text-[36px] text-[#104359]">Pilefort</div>
        <div className="flex items-center text-[32px] text-[#104359]">
          <div>Notes</div>
          <div className="ml-[24px]">Scraps</div>
          <div className="ml-[24px]">Snippets</div>
          <div className="ml-[24px]">Works</div>
        </div>
      </div>
      <hr className="border-t-[4px] border-[#104359]" />
    </div>
  )
}

const SPHeader = () => {
  const [toggleClass, setToggleClass] = useState('hidden')
  const setToggleCloseClass = () => setToggleClass('animate-slideOut')
  const setToggleOpenClass = () => setToggleClass('animate-slideIn block')

  return (
    <div className="lg:hidden">
      {
        <ToggleMenu
          toggleClass={toggleClass}
          setToggleCloseClass={setToggleCloseClass}
        />
      }
      <div className="flex h-[35px] items-center justify-between p-[8px]">
        <div className="text-[24px] text-[#104359]">Pilefort</div>
        <div onClick={setToggleOpenClass}>
          <Image
            src={AccordionOpenIcon}
            alt={'toggle open'}
          />
        </div>
      </div>
      <hr className="border-t-[2px] border-[#104359]" />
    </div>
  )
}

const ToggleMenu = ({ toggleClass, setToggleCloseClass }: { toggleClass: string; setToggleCloseClass: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div className={`fixed right-0 z-10 h-[100vh] w-[108px] ${toggleClass} bg-[#104359]`}>
      <div
        className="absolute right-0 p-[8px]"
        onClick={setToggleCloseClass}
      >
        <Image
          src={AccordionCloseIcon}
          alt={'toggle close'}
        />
      </div>
      <div className="flex h-[95%] flex-col justify-between p-[8px]">
        <div>
          <div className="mt-[16px] text-[white]">Notes</div>
          <div className="mt-[16px] text-[white]">Scraps</div>
          <div className="mt-[16px] text-[white]">Snippets</div>
          <div className="mt-[16px] text-[white]">Works</div>
        </div>
        <div>
          <div className="text-[white]">GitHub</div>
          <div className="mt-[16px] text-[white]">Twitter</div>
          <div className="mt-[16px] text-[white]">Zenn</div>
        </div>
      </div>
    </div>
  )
}

export default Header

import { useState, MouseEventHandler } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import AccordionOpenIcon from '../../../public/assets/AccordionOpen.svg'
import AccordionCloseIcon from '../../../public/assets/AccordionClose.svg'

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

const DesktopHeader = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex h-[80px] items-center justify-between p-[16px] pr-[24px]">
        <Link
          href="/"
          passHref
        >
          <a className="text-[36px] text-[#104359]">Pilefort</a>
        </Link>
        <div className="flex items-center text-[32px] text-[#104359]">
          <Link
            href="/notes"
            passHref
          >
            <a>Notes</a>
          </Link>

          <Link
            href="/scraps"
            passHref
          >
            <a className="ml-[24px]">Scraps</a>
          </Link>
          <Link
            href="/snippets"
            passHref
          >
            <a className="ml-[24px]">Snippets</a>
          </Link>
          <Link
            href="/works"
            passHref
          >
            <a className="ml-[24px]">Works</a>
          </Link>
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
        <Link
          href="/"
          passHref
        >
          <a className="text-[24px] text-[#104359]">Pilefort</a>
        </Link>
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
        <div className="mt-[24px] flex flex-col justify-between">
          <Link
            href="/notes"
            passHref
          >
            <a className="mt-[16px] text-[white]">Notes</a>
          </Link>
          <Link
            href="/scraps"
            passHref
          >
            <a className="mt-[16px] text-[white]">Scraps</a>
          </Link>
          <Link
            href="/snippets"
            passHref
          >
            <a className="mt-[16px] text-[white]">Snippets</a>
          </Link>
          <Link
            href="/works"
            passHref
          >
            <a className="mt-[16px] text-[white]">Works</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

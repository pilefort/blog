import { useState } from 'react'

import Link from 'next/link'

import { ToggleMenu } from './ToggleMenu'

export const SPHeader = () => {
  const [toggleClass, setToggleClass] = useState('hidden')
  const setToggleCloseClass = () => setToggleClass('animate-slideOut')
  const setToggleOpenClass = () => setToggleClass('animate-slideIn block')

  return (
    <div className="lg:hidden">
      {
        <ToggleMenu
          toggleClass={toggleClass}
          setToggleCloseClass={setToggleCloseClass}
          setToggleClass={setToggleClass}
        />
      }
      <div className="flex h-[35px] items-center justify-between p-[8px]">
        <Link
          href="/"
          passHref
          className="text-[24px] text-[#104359]"
        >
          Pilefort
        </Link>
        <div
          onClick={setToggleOpenClass}
          className="rotate-90"
        >
          <span className="border-[2px] border-[#104359]" />
          <span className="ml-[4px] border-[2px] border-[#104359]" />
          <span className="ml-[4px] border-[2px] border-[#104359]" />
        </div>
      </div>
      <hr className="border-t-[2px] border-[#104359]" />
    </div>
  )
}

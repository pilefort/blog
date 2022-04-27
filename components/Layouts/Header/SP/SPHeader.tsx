import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { ToggleMenu } from './ToggleMenu'

import AccordionOpenIcon from '../../../../public/assets/AccordionOpen.svg'

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

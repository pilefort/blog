import { MouseEvent, MouseEventHandler } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AccordionCloseIcon from '../../../../public/assets/AccordionClose.svg'

import { checkCurrentPathAndApplyStyles } from '../../../../libs/checkCurrentPathAndApplyStyles'

export const ToggleMenu = ({ toggleClass, setToggleCloseClass }: { toggleClass: string; setToggleCloseClass: MouseEventHandler<HTMLDivElement> }) => {
  const router = useRouter()
  const currentPagePath = router.pathname

  const stopPropagationHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div
      className={`${toggleClass} fixed right-0 z-10 h-screen w-screen bg-black bg-opacity-[80%]`}
      onClick={setToggleCloseClass}
    >
      <div
        className={`fixed right-0 z-10 h-[100vh] w-[108px] ${toggleClass} bg-[#104359]`}
        onClick={stopPropagationHandler}
      >
        <div
          className="absolute right-0 p-[8px]"
          onClick={setToggleCloseClass}
        >
          <Image
            src={AccordionCloseIcon}
            alt={'toggle close'}
            width={24}
            height={24}
            loading="lazy"
          />
        </div>
        <div className="flex h-[95%] flex-col justify-between p-[8px]">
          <div className="mt-[24px] flex flex-col justify-between">
            <Link
              href="/notes"
              passHref
            >
              <a className={`mt-[16px] text-[white] ${checkCurrentPathAndApplyStyles({ currentPagePath, targetPath: '/notes' })}`}>Notes</a>
            </Link>
            <Link
              href="/scraps"
              passHref
            >
              <a className={`mt-[16px] text-[white] ${checkCurrentPathAndApplyStyles({ currentPagePath, targetPath: '/scraps' })}`}>Scraps</a>
            </Link>
            <Link
              href="/snippets"
              passHref
            >
              <a className={`mt-[16px] text-[white] ${checkCurrentPathAndApplyStyles({ currentPagePath, targetPath: '/snippets' })}`}>Snippets</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

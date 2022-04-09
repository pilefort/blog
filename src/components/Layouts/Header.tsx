import AccordionOpenIcon from '../../../public/assets/AccordionOpen.svg'
import AccordionCloseIcon from '../../../public/assets/AccordionClose.svg'
import Image from 'next/image'
import { useState, MouseEventHandler } from 'react'

const Header = () => {
  const [toggleClass, setToggleClass] = useState('hidden')
  const setToggleCloseClass = () => setToggleClass('animate-slideOut')
  const setToggleOpenClass = () => setToggleClass('animate-slideIn block')

  return (
    <>
      {<ToggleMenu toggleClass={toggleClass} setToggleCloseClass={setToggleCloseClass} />}
      <div className="flex h-[35px] items-center justify-between p-[8px]">
        <div className="text-[16px] text-[#104359]">Pilefort</div>
        <div onClick={setToggleOpenClass}>
          <Image src={AccordionOpenIcon} alt={'toggle open'} />
        </div>
      </div>
      <hr className={'border-[2px] border-[#104359]'} />
    </>
  )
}

const ToggleMenu = ({ toggleClass, setToggleCloseClass }: { toggleClass: string; setToggleCloseClass: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div className={`fixed right-0 z-10 h-[100vh] w-[108px] ${toggleClass} bg-[#104359]`}>
      <div className="absolute right-0 p-[8px]" onClick={setToggleCloseClass}>
        <Image src={AccordionCloseIcon} alt={'toggle close'} />
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

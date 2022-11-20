import scrapsLists from '../../fetchData/scraps/scrapLists.json'

import { useState } from 'react'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { utcToJst } from '../../libs/date'

import Open from '../../public/assets/AccordionOpen.svg'
import Close from '../../public/assets/AccordionClose.svg'

export const ScrapLists = () => {
  const [isShowTOC, setIsShowTOC] = useState(false)
  const setToggleCloseClass = () => setIsShowTOC(false)
  const setToggleOpenClass = () => setIsShowTOC(true)

  const router = useRouter()
  const currentSlug = router.query.id
  const currentRoute = router.route

  return (
    <div className={`z-[20] h-auto w-[calc(100%)] bg-[#104359] text-[white]`}>
      <div className="mx-[16px] flex items-center justify-between">
        <div className="text-[32px]">Scraps一覧</div>
        <>
          {!isShowTOC ? (
            <div
              onClick={setToggleOpenClass}
              className="flex cursor-pointer items-center"
            >
              <Image
                src={Open}
                width={55}
                height={25}
                alt="Open TOC"
                loading="lazy"
              />
            </div>
          ) : (
            <>
              <div
                onClick={setToggleCloseClass}
                className="flex cursor-pointer items-center"
              >
                <Image
                  src={Close}
                  width={60}
                  height={60}
                  alt="Open TOC"
                  loading="lazy"
                />
              </div>
            </>
          )}
        </>
      </div>
      {isShowTOC && (
        <div className={`m-[16px] flex flex-col`}>
          {scrapsLists.map(({ id, createdAt, date }, index) => {
            const dateTime = utcToJst({ date: date || createdAt })

            return (
              <Link
                key={id}
                href={`/scraps/${id}`}
                id={id}
                className={`text-[18px] md:text-[24px] 
                ${currentRoute === '/scraps' && index === 0 ? 'bg-[#1ed3c6]' : ''} 
                ${currentSlug === id ? 'bg-[#1ed3c6]' : ''} 
                mx-[-16px] py-[4px] px-[16px] hover:bg-[#1ed3c6]`}
              >
                {dateTime}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

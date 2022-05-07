import scrapsListsData from '../../fetchData/scraps/demoWithScrapLists.json'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Open from '../../public/assets/AccordionOpen.svg'
import Close from '../../public/assets/AccordionClose.svg'
import { utcToJst } from '../../libs/date'
import Link from 'next/link'

export const ScrapLists = () => {
  const { contents: scrapsLists } = scrapsListsData

  const [isShowTOC, setIsShowTOC] = useState(false)
  const [scrollClass, setScrollClass] = useState('')
  const setToggleCloseClass = () => setIsShowTOC(false)
  const setToggleOpenClass = () => setIsShowTOC(true)
  const elementRef = useRef(null as null | HTMLDivElement)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (elementRef.current?.offsetTop && elementRef.current?.offsetTop < document.documentElement.scrollTop) {
      setScrollClass('fixed top-0 right-0 overflow-y-auto')
    }

    if (document.documentElement.scrollTop === 0) {
      setScrollClass('static')
    }
  }

  const router = useRouter()
  const currentSlug = router.query.id
  const currentRoute = router.route

  return (
    <div
      className={`z-[20] w-[calc(100%)] bg-[#104359] text-[white] ${isShowTOC ? 'h-auto' : 'h-[48px]'} ${scrollClass}`}
      onScroll={handleScroll}
    >
      <div className="mx-[16px] flex items-center justify-between">
        <div
          ref={elementRef}
          className="text-[32px]"
        >
          Scraps一覧
        </div>
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
              >
                <a
                  id={id}
                  className={`text-[18px] md:text-[24px] 
                ${currentRoute === '/scraps' && index === 0 ? 'bg-[#1ed3c6]' : ''} 
                ${currentSlug === id ? 'bg-[#1ed3c6]' : ''} 
                mx-[-16px] py-[4px] px-[16px] hover:bg-[#1ed3c6]`}
                >
                  {dateTime}
                </a>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'

import Image from 'next/image'

import Markdown from 'markdown-to-jsx'

import Open from '@public/assets/AccordionOpen.svg'
import Close from '@public/assets/AccordionClose.svg'

const components = {
  h1: ({ children }: { children: string }) => (
    <a
      className="mb-[12px] w-fit text-h3 hover:text-[gray]"
      href={`#${children}`}
    >
      {children}
    </a>
  ),
  h2: ({ children }: { children: string }) => (
    <a
      className="mb-[8px] ml-[28px] w-fit text-h3 hover:text-[gray]"
      href={`#${children}`}
    >
      {children}
    </a>
  ),
  h3: ({ children }: { children: string }) => (
    <a
      className="ml-[32px] w-fit text-h3 hover:text-[gray]"
      href={`#${children}`}
    >
      {children}
    </a>
  ),
  h4: ({ children }: { children: string }) => (
    <a
      className="ml-[32px] w-fit text-h3 hover:text-[gray]"
      href={`#${children}`}
    >
      {children}
    </a>
  ),
  ul: () => <></>,
  li: () => <></>,
  code: () => <></>,
  p: () => <></>,
  img: () => <></>,
  table: () => <></>,
}

export const TOC = ({ children }: { children: string }) => {
  const [isShowTOC, setIsShowTOC] = useState(false)
  const [scrollClass, setScrollClass] = useState('static')
  const setToggleCloseClass = () => setIsShowTOC(false)
  const setToggleOpenClass = () => setIsShowTOC(true)
  const elementRef = useRef(null as null | HTMLDivElement)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (elementRef.current?.offsetTop && elementRef.current?.offsetTop < document.documentElement.scrollTop) {
      setScrollClass('fixed top-0 right-0')
    }

    if (document.documentElement.scrollTop === 0) {
      setScrollClass('static')
    }
  }

  return (
    <div
      className={`z-[20] w-[calc(100%)] bg-primary text-[white] ${isShowTOC ? 'h-auto' : 'h-[60px]'} ${scrollClass}`}
      onScroll={handleScroll}
    >
      <div className="mx-[32px] flex items-center justify-between">
        <div
          ref={elementRef}
          className="text-h1"
        >
          目次
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
        <div
          className={`m-[32px] mt-[24px]`}
          onClick={() => setIsShowTOC(false)}
        >
          <Markdown
            options={{
              forceBlock: false,
              overrides: components,
            }}
            className="flex flex-col"
          >
            {children}
          </Markdown>
        </div>
      )}
    </div>
  )
}

import React from 'react'
import { useState, MouseEvent } from 'react'

import Image from 'next/image'

type ImagePropsType = {
  alt: string
  src: string
  width: number
  height: number
}

export const CustomImage = (props: ImagePropsType) => {
  const src = props.src.replace(/^\.\./, '')

  const [isShowModal, setIsShowModal] = useState(false)
  const stopPropagationHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()

    setIsDisableBookObi(!isDisableBookObi)
  }
  const [isDisableBookObi, setIsDisableBookObi] = useState(false)
  const closeModalHandler = () => setIsShowModal(false)

  return (
    <>
      <div
        className="cursor-zoom-in"
        onClick={() => setIsShowModal(true)}
      >
        <Image
          alt={props.alt}
          src={src}
          width={props.width}
          height={props.height}
        />
      </div>
      {isShowModal && (
        <div
          className="fixed top-0 left-0 z-[100] flex h-screen w-screen items-center justify-center bg-black bg-opacity-60 transition duration-500 ease-out xl:scale-[1.5]"
          onClick={closeModalHandler}
        >
          <div
            className="relative"
            onClick={stopPropagationHandler}
          >
            <Image
              alt={props.alt}
              src={src}
              width={props.width}
              height={props.height}
            />
          </div>
        </div>
      )}
    </>
  )
}

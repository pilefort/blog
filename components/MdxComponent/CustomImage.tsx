import React from 'react'
import { useState, MouseEvent } from 'react'

import Image from 'next/image'
import { StaticImageData } from 'next/image'

type ImagePropsType = {
  alt: string
  src: string | StaticImageData
  width: number
  height: number
}

export const CustomImage = (props: ImagePropsType) => {
  // TODO: 開発環境用の処理を追加
  // NOTE: typeof StaticImageData = {
  //   src: string
  //   height: number
  //   width: number
  //   blurDataURL: string
  // }
  const src = typeof props.src === 'string' ? props.src.replace(/^\.\./, '') : props.src.src

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)
  const stopPropagationHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()

    setIsDisableBookObi(!isDisableBookObi)
  }
  const [isDisableBookObi, setIsDisableBookObi] = useState(false)
  const closeModalHandler = () => setIsShowModal(false)

  return (
    <>
      <div
        className="my-[32px] w-fit cursor-zoom-in"
        onClick={() => setIsShowModal(true)}
      >
        <Image
          alt={props.alt}
          src={src}
          width={props.width ? props.width : 500}
          height={props.height ? props.height : 500}
          loading="lazy"
          decoding="async"
          className={`${isImageLoaded ? 'blur-none' : 'blur-sm'}`}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
      </div>
      {isShowModal && (
        <div
          className="fixed top-0 left-0 z-[100] flex h-screen w-screen items-center justify-center bg-[black] bg-opacity-60 transition duration-500 ease-out xl:scale-[1.5]"
          onClick={closeModalHandler}
        >
          <div
            className="relative"
            onClick={stopPropagationHandler}
          >
            <Image
              alt={props.alt}
              src={src}
              width={props.width * 1.5}
              height={props.height * 1.5}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}
    </>
  )
}

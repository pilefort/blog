import Image from 'next/image'
import React from 'react'

type ImagePropsType = {
  alt: string
  src: string
  width: number
  height: number
}

export const CustomImage = (props: ImagePropsType) => {
  const src = props.src.replace(/^\.\./, '')

  return (
    <Image
      alt={props.alt}
      src={src}
      width={props.width}
      height={props.height}
    />
  )
}

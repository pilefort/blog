import { useState } from 'react'

import Image from 'next/image'

import TagIcon from '../../../../public/assets/Tag.svg'

export const Tag = ({ id, title, description }: { id: string; title: string; description?: string }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      key={id}
      className="mr-[8px] flex items-center"
    >
      <Image
        src={TagIcon}
        alt="tag"
      />
      <span
        className="ml-[4px]"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {title}
      </span>
      {isHover && description && <div dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  )
}

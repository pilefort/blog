import Image from 'next/image'

import TagIcon from '@public/assets/Tag.svg'

export const Tag = ({ id, title }: { id: string; title: string }) => {
  return (
    <div
      key={id}
      className="mr-[8px] flex items-center"
    >
      <Image
        src={TagIcon}
        alt="tag"
        width={18}
        height={18}
        loading="lazy"
      />
      <span className="ml-[4px] text-h3">{title}</span>
    </div>
  )
}

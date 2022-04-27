import Image from 'next/image'
import Link from 'next/link'

import LinkIcon from '../../../public/assets/Link.svg'

export const CustomLink = ({ url }: { url: string }) => {
  return (
    <div className="mt-[8px] flex">
      <div className="mt-[2px] h-[24px] w-[24px]">
        <Image
          src={LinkIcon}
          width={24}
          height={24}
          alt="link"
        />
      </div>
      <Link
        href={url}
        passHref
      >
        <a className="ml-[8px] w-[calc(100%-40px)] text-[#10AFA4]">{url}</a>
      </Link>
    </div>
  )
}

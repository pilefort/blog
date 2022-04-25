import Image from 'next/image'
import Link from 'next/link'

import { useMediaQuery } from '../../../hooks/useMediaQuery'

import GitHubIcon from '../../../../public/assets/GitHubIcon.svg'

export const GitHubLink = ({ slug }: { slug: string }) => {
  const isDesktop = useMediaQuery()

  if (!isDesktop) return <></>

  return (
    <Link
      href={`https://github.com/pilefort/blog-resources${slug}.md`}
      passHref
    >
      <a
        className="absolute right-[16px] top-[100px] mt-[8px] mr-0 ml-auto flex w-[140px] border-[2px] border-black p-[8px] md:w-[250px] md:p-[24px]"
        target="_blank"
      >
        <Image
          src={GitHubIcon}
          alt="GitHub icon"
          width={30}
          height={30}
        />
        <span className="ml-[8px] text-[14px] md:text-[24px]">Edit on GitHub</span>
      </a>
    </Link>
  )
}

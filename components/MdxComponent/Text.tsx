import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import LinkIcon from '@public/assets/Link.svg'
import Link from 'next/link'

const formattedId = (id: string) => {
  return id.toLowerCase().replace(/ /g, '-')
}

export const H1 = ({ children }: { children: string[] }) => {
  const router = useRouter()
  const route = router.asPath
  const [isShowLink, setIsShowLink] = useState<boolean>(false)

  return (
    <Link
      href={`${route}/#${formattedId(children[0])}`}
      className="relative flex items-center border-l-[6px] border-[#104359] p-[8px] text-h2 md:text-h1"
    >
      <LinkIconComponent isShowLink={isShowLink} />
      <div
        id={formattedId(children[0])}
        className="font-bold"
        onMouseEnter={() => setIsShowLink(true)}
        onMouseLeave={() => setIsShowLink(false)}
      >
        {children}
      </div>
    </Link>
  )
}

export const H2 = ({ children }: { children: string[] }) => {
  const router = useRouter()
  const route = router.asPath
  const [isShowLink, setIsShowLink] = useState<boolean>(false)

  return (
    <Link
      href={`${route}/#${formattedId(children[0])}`}
      className="relative mt-[40px] flex items-center text-h3 md:text-h2"
    >
      <LinkIconComponent isShowLink={isShowLink} />
      <div
        id={formattedId(children[0])}
        className="font-bold"
        onMouseEnter={() => setIsShowLink(true)}
        onMouseLeave={() => setIsShowLink(false)}
      >
        {children}
      </div>
    </Link>
  )
}

export const H3 = ({ children }: { children: string[] }) => {
  const router = useRouter()
  const route = router.asPath
  const [isShowLink, setIsShowLink] = useState<boolean>(false)

  return (
    <a
      href={`${route}/#${formattedId(children[0])}`}
      className="relative mt-[40px] flex items-center text-h4 md:text-h3"
    >
      <LinkIconComponent isShowLink={isShowLink} />
      <div
        id={formattedId(children[0])}
        className="font-bold "
        onMouseEnter={() => setIsShowLink(true)}
        onMouseLeave={() => setIsShowLink(false)}
      >
        {children}
      </div>
    </a>
  )
}

export const P = ({ children }: { children: string[] }) => <p className="my-[24px] text-h4 md:indent-7 md:text-h3">{children}</p>

export const Span = ({ children }: { children: string[] }) => <span className="text-h4 md:text-h3">{children}</span>

// TODO: listのdictを作る
export const List = ({ children }: { children: string[] }) => <div className="text-h4 md:text-h3">・ {children}</div>

const LinkIconComponent = ({ isShowLink, customClass }: { isShowLink: boolean; customClass?: string }) => {
  return (
    <span className={`absolute left-[-24px] rotate-45 text-primary ${isShowLink ? 'opacity-1' : 'opacity-0'} ${customClass}`}>
      <Image
        src={LinkIcon}
        width={26}
        height={26}
        alt="link"
        loading="lazy"
      />
    </span>
  )
}

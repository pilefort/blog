import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import LinkIcon from '../../public/assets/Link.svg'

export const H1 = ({ children }: { children: string }) => {
  const router = useRouter()
  const route = router.asPath
  const [isShowLink, setIsShowLink] = useState<boolean>(false)

  return (
    <a
      href={`${route}/#${children}`}
      className="relative mt-[56px] flex items-center text-[32px] md:text-[48px]"
    >
      <LinkIconComponent isShowLink={isShowLink} />
      <h1
        id={children}
        className="font-bold"
        onMouseEnter={() => setIsShowLink(true)}
        onMouseLeave={() => setIsShowLink(false)}
      >
        {children}
      </h1>
    </a>
  )
}

export const H2 = ({ children }: { children: string }) => {
  const router = useRouter()
  const route = router.asPath
  const [isShowLink, setIsShowLink] = useState<boolean>(false)

  return (
    <a
      href={`${route}/#${children}`}
      className="relative mt-[40px] flex items-center text-[24px] md:text-[42px]"
    >
      <LinkIconComponent isShowLink={isShowLink} />
      <h2
        id={children}
        className="font-bold"
        onMouseEnter={() => setIsShowLink(true)}
        onMouseLeave={() => setIsShowLink(false)}
      >
        {children}
      </h2>
    </a>
  )
}

export const H3 = ({ children }: { children: string }) => {
  const router = useRouter()
  const route = router.asPath
  const [isShowLink, setIsShowLink] = useState<boolean>(false)

  return (
    <a
      href={`${route}/#${children}`}
      className="relative mt-[40px] flex items-center text-[16px] md:text-[36px]"
    >
      <LinkIconComponent isShowLink={isShowLink} />
      <h2
        id={children}
        className="font-bold"
        onMouseEnter={() => setIsShowLink(true)}
        onMouseLeave={() => setIsShowLink(false)}
      >
        {children}
      </h2>
    </a>
  )
}

export const P = ({ children }: { children: string }) => <p className="text-[16px] md:text-[24px]">{children}</p>

export const Span = ({ children }: { children: string }) => <span className="text-[16px] md:text-[24px]">{children}</span>

// TODO: listのdictを作る
export const List = ({ children }: { children: string }) => <div className="text-[16px] md:text-[24px]">・ {children}</div>

const LinkIconComponent = ({ isShowLink, customClass }: { isShowLink: boolean; customClass?: string }) => {
  return (
    <span className={`absolute left-[-24px] rotate-45 text-[#104359] ${isShowLink ? 'opacity-1' : 'opacity-0'} ${customClass}`}>
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

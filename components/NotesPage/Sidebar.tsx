import Link from 'next/link'
import { useRouter } from 'next/router'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import notesLists from '../../fetchData/notes/data.json'

export const Sidebar = () => {
  const isDesktop = useMediaQuery()

  return (
    <>
      {isDesktop ? (
        <>
          <Desktop notesLists={notesLists} />
          <SP />
        </>
      ) : (
        <SP />
      )}
    </>
  )
}

const Desktop = ({ notesLists }: { notesLists: { title: string; slug: string }[] }) => {
  const router = useRouter()
  const currentSlug = router.asPath

  return (
    <div className="w-[300px]">
      <div className="text-[32px]">Notes一覧</div>
      <div className="mt-[16px] flex flex-col">
        {notesLists.map(({ title, slug }) => {
          console.warn('s', slug)
          console.warn('c', currentSlug)
          return (
            <Link
              key={slug}
              href={slug}
            >
              <a className={`text-[24px] ${currentSlug === slug ? 'bg-[#1ed3c6]' : ''} ml-[-16px] py-[16px] pl-[16px] hover:bg-[#1ed3c6]`}>{title}</a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const SP = () => {
  return <div className="hidden" />
}

import { utcToJst } from '../../../libs/date'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { List } from './List'

import { ScrapsListType } from '../../../types/microCMS/Common'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

export const CustomSelectbox = ({ scrapsLists }: { scrapsLists: ScrapsListType }) => {
  const isDesktop = useMediaQuery()

  return (
    <>
      {isDesktop ? (
        <>
          <Desktop scrapsLists={scrapsLists} />
          <SP scrapsLists={scrapsLists} />
        </>
      ) : (
        <SP scrapsLists={scrapsLists} />
      )}
    </>
  )
}

const Desktop = ({ scrapsLists }: { scrapsLists: ScrapsListType }) => {
  const router = useRouter()
  const currentSlug = router.query.id

  return (
    <div className="w-[300px]">
      <div className="text-[32px]">Scraps一覧</div>
      <div className="mt-[16px] flex flex-col">
        {scrapsLists.map(({ id, createdAt, date }) => {
          const dateTime = utcToJst({ date: date || createdAt })

          return (
            <Link
              key={id}
              href={`/scraps/${id}`}
            >
              <a
                id={id}
                className={`text-[24px] ${currentSlug === id ? 'bg-[#1ed3c6]' : ''} ml-[-16px] py-[16px] pl-[16px] hover:bg-[#1ed3c6]`}
              >
                {dateTime}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const SP = ({ scrapsLists }: { scrapsLists: ScrapsListType }) => {
  return (
    <select
      className="hidden border-b-[4px] border-[#10AFA4] text-[24px]"
      name="scraps"
    >
      {scrapsLists.map(({ id, createdAt, date }) => {
        const dateTime = utcToJst({ date: date || createdAt })

        return (
          <List
            key={id}
            id={id}
            dateTime={dateTime}
          />
        )
      })}
    </select>
  )
}

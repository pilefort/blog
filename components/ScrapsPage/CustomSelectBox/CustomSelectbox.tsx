import { utcToJst } from '../../../libs/date'

import { List } from './List'

import { ScrapsListType } from '../../../types/microCMS/Common'

export const CustomSelectbox = ({ scrapsLists }: { scrapsLists: ScrapsListType }) => {
  return (
    <>
      <select
        className="border-b-[4px] border-[#10AFA4] text-[24px]"
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
    </>
  )
}

import scrapsListsData from '../../fetchData/scraps/demoWithScrapLists.json'

import { Sidebar } from './Sidebar/Sidebar'
import { Highlight } from './contents/Highlight'
import { Contents } from './contents/Contents'

import { ScrapsType } from '../../types/microCMS/Common'

export const CommonScrapsPage = ({ dateTime, highlight, scraps }: { dateTime: string; highlight?: string; scraps: ScrapsType }) => {
  const { contents: scrapsLists } = scrapsListsData

  return (
    <div className="p-[24px] md:flex">
      <Sidebar scrapsLists={scrapsLists} />
      <div className="ml-[32px]">
        <div className="text-[32px]">{dateTime}</div>
        {highlight && <Highlight highlight={highlight} />}
        <Contents scraps={scraps} />
      </div>
    </div>
  )
}

import { Highlight } from '../contents/Highlight'
import { Contents } from '../contents/Contents'

import { ScrapsType } from '../../../types/microCMS/Common'

export const DetailsPage = ({ dateTime, highlight, scraps }: { dateTime: string; highlight?: string; scraps: ScrapsType }) => {
  return (
    <div className="p-[24px]">
      <div className="mx-[8px] w-[auto]">
        <div className="text-h1">{dateTime}</div>
        {highlight && <Highlight highlight={highlight} />}
        <Contents scraps={scraps} />
      </div>
    </div>
  )
}

import { TOC } from '@components/MdxComponent/TOC'
import { Mdx } from '@components/MdxComponent/Mdx'

export const DetailsPage = ({ title, dateTime, content }: { title: string; dateTime: string; content: string }) => {
  return (
    <div className="flex">
      <div className="m-auto w-auto overflow-x-auto">
        <div className="m-[24px]">
          <div className="border-l-[6px] border-[#104359] p-[8px] text-h2 md:text-h1">
            <span>{title}</span>
          </div>
          <div className="mt-[8px] md:text-h3">{dateTime}</div>
          <TOC>{content}</TOC>
          <div className="mt-[10px]">
            <Mdx>{content}</Mdx>
          </div>
        </div>
      </div>
    </div>
  )
}

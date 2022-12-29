import { WorksTOC } from './WorksTOC'
import { Mdx } from '../MdxComponent/Mdx'

export const CommonWorksPage = ({
  content,
  TOCData,
  title,
}: {
  content: string
  TOCData: { topic: boolean; depth: number; title: string; url: string }[]
  title: string
}) => {
  return (
    <div className={'flex'}>
      <WorksTOC
        TOCData={TOCData}
        title={title}
        className={'h-screen min-w-[300px] overflow-scroll p-[32px]'}
      />
      <div className="m-[32px] w-auto overflow-x-auto">
        <Mdx>{content}</Mdx>
      </div>
    </div>
  )
}

import { Mdx } from '../../MdxComponent/Mdx'

export const ContentBody = ({ content }: { fieldId: string; content: string }) => {
  return (
    <div className="break-all">
      <Mdx>{content}</Mdx>
    </div>
  )
}

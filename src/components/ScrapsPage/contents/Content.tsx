import { Mdx } from '../../MdxComponent/Mdx'

export const ContentBody = ({ fieldId, content }: { fieldId: string; content: string }) => {
  return <div className="break-all">{fieldId === 'plainText' ? <Mdx>{content}</Mdx> : <div dangerouslySetInnerHTML={{ __html: content }} />}</div>
}

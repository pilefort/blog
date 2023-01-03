import { Tag } from '@components/ScrapsPage/contents/Tag'
import { Mdx } from '@components/MdxComponent/Mdx'

export const DetailsPage = ({ title, tags, createdAt, content }: { title: string; tags: string[]; createdAt: string; content: string }) => {
  return (
    <div className="m-[24px]">
      <div className="border-l-[6px] border-[#104359] p-[8px] text-h2 md:text-h1">
        <span>{title}</span>
      </div>
      <div className="flex">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className={`${index === 0 ? '' : 'ml-[8px]'}`}
            >
              <Tag
                id={tag}
                title={tag}
              />
            </span>
          )
        })}
      </div>
      <div className="mt-[8px] md:text-h3">{createdAt}</div>
      <div className="mt-[32px]">
        <Mdx>{content}</Mdx>
      </div>
    </div>
  )
}

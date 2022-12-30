import { utcToJst } from '../../../libs/date'

import { Tag } from './Tag'
import { CustomLink } from './CustomLink'

import { ScrapsType } from '../../../types/microCMS/Common'
import { Mdx } from '../../MdxComponent/Mdx'

export const Contents = ({ scraps }: { scraps: ScrapsType }) => {
  return (
    <div className="mt-[64px]">
      {scraps.map(({ id, title, tags, updatedAt, body, links }) => {
        const date = utcToJst({ date: updatedAt })

        return (
          <div
            className="mt-[52px]"
            key={id}
          >
            <div className="text-h1">{title}</div>
            <div>{date}</div>
            {tags &&
              tags.map(({ id, title }) => {
                return (
                  <Tag
                    key={id}
                    id={id}
                    title={title}
                  />
                )
              })}
            {links &&
              links.map(({ url }, index) => {
                return (
                  <CustomLink
                    key={index}
                    url={url}
                  />
                )
              })}
            {body && (
              <details className="mt-[8px] cursor-pointer text-h4">
                <summary>メモ</summary>
                <div className="mt-[16px]">
                  {body.map(({ content }, index) => {
                    return (
                      <div
                        key={index}
                        className="break-all"
                      >
                        <Mdx>{content}</Mdx>
                      </div>
                    )
                  })}
                </div>
              </details>
            )}
          </div>
        )
      })}
    </div>
  )
}

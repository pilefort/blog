import Link from 'next/link'
import { useRouter } from 'next/router'

export const SelectLists = ({ tags }: { tags: { slug: string; name: string }[] }) => {
  const router = useRouter()
  const currentPageTag = router.query.tag

  return (
    <>
      <div className="text-[24px] md:text-[32px]">タグ一覧</div>
      <div className="mt-[16px] flex">
        {tags.map(({ slug, name }, index) => {
          return (
            <SelectList
              key={index}
              slug={slug}
              name={name}
              index={index}
              currentPageTag={currentPageTag}
            />
          )
        })}
      </div>
    </>
  )
}

const SelectList = ({
  slug,
  name,
  currentPageTag,
  index,
}: {
  slug: string
  name: string
  currentPageTag: string | string[] | undefined
  index: number
}) => {
  return (
    <>
      {index === 0 && (
        <Link
          key="all"
          href="/snippets"
          passHref
        >
          <a className="md:text-[32px]">
            <span className={currentPageTag === undefined ? 'text-[red]' : ''}>すべて</span>
          </a>
        </Link>
      )}
      <Link
        key={slug}
        href={`/snippets/tag/${slug}`}
        passHref
      >
        <a className="ml-[16px] md:ml-[32px] md:text-[32px]">
          <span className={currentPageTag === slug ? 'text-[red]' : ''}>{name}</span>
        </a>
      </Link>
    </>
  )
}

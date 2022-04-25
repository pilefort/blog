import Link from 'next/link'
import { useRouter } from 'next/router'

export const CustomSelectBox = ({ tags }: { tags: { slug: string; name: string }[] }) => {
  const router = useRouter()
  const currentPageTag = router.query.tag
  console.warn('cpt', currentPageTag)

  return (
    <>
      <div className="text-[32px]">タグ一覧</div>
      <div className="flex">
        {tags.map(({ slug, name }, index) => {
          return (
            <>
              {index === 0 && (
                <Link
                  href="/snippets"
                  passHref
                >
                  <a className="text-[32px]">
                    <span className={currentPageTag === undefined ? 'text-[red]' : ''}>すべて</span>
                  </a>
                </Link>
              )}
              <Link
                key={slug}
                href={`/snippets?tag=${slug}`}
                passHref
              >
                <a className="ml-[32px] text-[32px]">
                  <span className={currentPageTag === slug ? 'text-[red]' : ''}>{name}</span>
                </a>
              </Link>
            </>
          )
        })}
      </div>
    </>
  )
}

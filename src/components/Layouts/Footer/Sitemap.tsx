import Link from 'next/link'

export const Sitemap = () => {
  return (
    <div className="mt-[64px] md:mt-[112px]">
      <div className="hr-with-title text-center md:w-[calc(100vw-160px)]">サイトマップ</div>
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 md:gap-[10%] xl:grid-cols-4">
        <div>
          <Link
            href="/notes"
            passHref
          >
            <a className="text-[32px] font-bold">Notes</a>
          </Link>
          <div className="mt-[8px]">業務や趣味での気づき・メモ</div>
        </div>
        <div className="mt-[32px]">
          <Link
            href="/scraps"
            passHref
          >
            <a className="text-[32px] font-bold">Scraps</a>
          </Link>
          <div className="mt-[8px]">雑記。ネットで見つけた面白い記事やニュース</div>
        </div>
        <div className="mt-[32px]">
          <Link
            href="/snippets"
            passHref
          >
            <a className="text-[32px] font-bold">Snippets</a>
          </Link>
          <div className="mt-[8px]">記事にするまでもないけど、便利なコマンドや豆知識</div>
        </div>
        <div className="mt-[32px]">
          <Link
            href="/works"
            passHref
          >
            <a className="text-[32px] font-bold">Works</a>
          </Link>
          <div className="mt-[8px]">作ったもの。同人誌やツールなど</div>
        </div>
      </div>
    </div>
  )
}

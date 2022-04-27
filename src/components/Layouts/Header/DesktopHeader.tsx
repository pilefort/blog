import Link from 'next/link'

export const DesktopHeader = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex h-[80px] items-center justify-between p-[16px] pr-[24px]">
        <Link
          href="/"
          passHref
        >
          <a className="text-[36px] text-[#104359]">Pilefort</a>
        </Link>
        <div className="flex items-center text-[32px] text-[#104359]">
          <Link
            href="/notes"
            passHref
          >
            <a>Notes</a>
          </Link>

          <Link
            href="/scraps"
            passHref
          >
            <a className="ml-[24px]">Scraps</a>
          </Link>
          <Link
            href="/snippets"
            passHref
          >
            <a className="ml-[24px]">Snippets</a>
          </Link>
          <Link
            href="/works"
            passHref
          >
            <a className="ml-[24px]">Works</a>
          </Link>
        </div>
      </div>
      <hr className="border-t-[4px] border-[#104359]" />
    </div>
  )
}

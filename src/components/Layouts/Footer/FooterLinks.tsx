import Link from 'next/link'

export const FooterLinks = () => {
  return (
    <div className="mt-[128px] flex h-[80px] items-center justify-end bg-[#104359] text-white md:text-[24px]">
      <div className="mx-[24px] flex w-full items-center justify-between md:w-[500px]">
        <Link
          href="https://github.com/pilefort"
          passHref
        >
          <a target="_blank">GitHub</a>
        </Link>
        <Link
          href="https://twitter.com/pilefort"
          passHref
        >
          <a target="_blank">Twitter</a>
        </Link>
        <Link
          href="https://zenn.dev/pilefort"
          passHref
        >
          <a target="_blank">Zenn</a>
        </Link>
        <Link
          href="https://techbookfest.org/organization/4806658536505344"
          passHref
        >
          <a target="_blank">技術書典</a>
        </Link>
        <Link
          href="https://pilefort.booth.pm/"
          passHref
        >
          <a target="_blank">Booth</a>
        </Link>
      </div>
    </div>
  )
}

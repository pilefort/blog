import Link from 'next/link'

export const FooterLinks = () => {
  return (
    <div className="mt-[128px] flex h-[80px] items-center justify-end bg-primary text-[white] md:text-h3">
      <div className="mx-[24px] flex w-full items-center justify-between md:w-[500px]">
        <Link
          href="https://github.com/kusakabe-t"
          passHref
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          href="https://twitter.com/pilefort"
          passHref
          target="_blank"
        >
          Twitter
        </Link>
        <Link
          href="https://zenn.dev/pilefort"
          passHref
          target="_blank"
        >
          Zenn
        </Link>
        <Link
          href="https://techbookfest.org/organization/4806658536505344"
          passHref
          target="_blank"
        >
          技術書典
        </Link>
        <Link
          href="https://pilefort.booth.pm/"
          passHref
          target="_blank"
        >
          Booth
        </Link>
      </div>
    </div>
  )
}

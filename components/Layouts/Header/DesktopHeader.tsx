import Link from 'next/link'
import { useRouter } from 'next/router'

import { checkCurrentPathAndApplyStyles } from '../../../libs/checkCurrentPathAndApplyStyles'

export const DesktopHeader = ({ className }: { className: string }) => {
  const router = useRouter()
  const currentPagePath = router.pathname

  return (
    <div className={className}>
      <div className="flex h-[80px] items-center justify-between p-[16px] pr-[24px]">
        <Link
          href="/"
          className="text-h1 text-primary"
        >
          Pilefort
        </Link>
        <div className="flex items-center text-h1 text-primary">
          <Link
            href="/notes"
            passHref
            className={`${checkCurrentPathAndApplyStyles({ currentPagePath, targetPath: '/notes' })}`}
          >
            Notes
          </Link>

          <Link
            href="/works"
            passHref
            className={`ml-[24px] ${checkCurrentPathAndApplyStyles({ currentPagePath, targetPath: '/works' })}`}
          >
            Works
          </Link>

          <Link
            href="/snippets"
            passHref
            className={`ml-[24px] ${checkCurrentPathAndApplyStyles({ currentPagePath, targetPath: '/snippets' })}`}
          >
            Snippets
          </Link>
        </div>
      </div>
      <hr className="border-t-[4px] border-[#104359]" />
    </div>
  )
}

import Link from 'next/link'
import { useRouter } from 'next/router'

import { checkCurrentPathAndApplyStyles } from '../../../libs/checkCurrentPathAndApplyStyles'

export const DesktopHeader = () => {
  const router = useRouter()
  const currentPagePath = router.pathname

  return (
    <div className="hidden lg:block">
      <div className="flex h-[30px] items-center justify-center bg-[#104359] text-[20px] text-white">工事中</div>
      <div className="flex h-[80px] items-center justify-between p-[16px] pr-[24px]">
        <Link
          href="/"
          passHref
          className="text-[36px] text-[#104359]"
        >
          Pilefort
        </Link>
        <div className="flex items-center text-[32px] text-[#104359]">
          <Link
            href="/notes"
            passHref
            className={`${checkCurrentPathAndApplyStyles({ currentPagePath, targetPath: '/notes' })}`}
          >
            Notes
          </Link>

          <Link
            href="/scraps"
            passHref
            className={`ml-[24px] ${checkCurrentPathAndApplyStyles({ currentPagePath, targetPath: '/scraps' })}`}
          >
            Scraps
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

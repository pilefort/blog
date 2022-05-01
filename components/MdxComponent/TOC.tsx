import React from 'react'

import Link from 'next/link'

import MDX from '@mdx-js/runtime'

export const TOC = ({ children }: { children: string }) => {
  const components = {
    h1: ({ children }: { children: string }) => (
      <a
        className="text-[28px]"
        href={`#${children}`}
      >
        {children}
      </a>
    ),
    h2: ({ children }: { children: string }) => (
      <a
        className="ml-[28px] text-[24px]"
        href={`#${children}`}
      >
        {children}
      </a>
    ),
    h3: ({ children }: { children: string }) => <a href={`#${children}`}>{children}</a>,
    h4: ({ children }: { children: string }) => <div>{children}</div>,
    ul: () => <></>,
    li: () => <></>,
    code: () => <></>,
    p: () => <></>,
  }

  return (
    <div className="w-[600px]">
      <div className="text-[32px]">目次</div>
      <MDX components={components}>{children}</MDX>
    </div>
  )
}

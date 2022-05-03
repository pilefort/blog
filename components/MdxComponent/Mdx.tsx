import React from 'react'

import MDX from '@mdx-js/runtime'

import { CodeBlock } from './CodeBlock'
import { CustomImage } from '../CustomImage'
import { H1, H2, P, List } from './Text'

export const Mdx = ({ children }: { children: string }) => {
  const components = {
    code: CodeBlock,
    h1: H1,
    h2: H2,
    img: CustomImage,
    p: P,
    li: List,
    Pending: ({ children }: { children: string }) => (
      <>
        <div className="text-center text-[80px] font-bold">準備中</div>
        <div className="blur-sm">{children}</div>
      </>
    ),
  }

  return <MDX components={components}>{children}</MDX>
}

import React from 'react'

import MDX from '@mdx-js/runtime'

import { CodeBlock } from './CodeBlock'
import { CustomImage } from './CustomImage'
import { H1, H2, P, List } from './Text'

export const Mdx = ({ children }: { children: string }) => {
  const components = {
    code: CodeBlock,
    h1: H1,
    h2: H2,
    img: CustomImage,
    p: P,
    li: List,
  }

  return <MDX components={components}>{children}</MDX>
}

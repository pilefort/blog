import { join } from 'path'
import { globby } from 'globby'
import * as fs from 'fs'
import matter from 'gray-matter'

export const getAllContentPaths = async ({ target, depth }: { target: string; depth?: number }) => {
  const searchPath = join('contents', target)

  const targetFullFilePaths: string[] = await globby([searchPath], {
    expandDirectories: {
      extensions: ['md'],
    },
    absolute: false,
    deep: depth || Infinity,
  })

  return targetFullFilePaths.map((targetFullFilePath) => {
    return targetFullFilePath.replace(/^contents/, '').replace(/\.md$/, '')
  })
}

export const getContentBySlug = (slug: string, fields: string[]) => {
  const fullFilePath = join(process.cwd(), '/contents', slug + '.md')
  // NOTE: mdの中身を取得
  const fileContent = fs.readFileSync(fullFilePath, { encoding: 'utf-8' })

  // NOTE: `---`で囲った部分をdata, それ以外をcontentとして分けて取得
  // data => {
  //   title: '画像の拡張子や色空間を変換する方法',
  //   tags: 'shell,image',
  //   date: '2021-03-07 16:52:01',
  //   category: 'Shell',
  //   metaTitle: 'This is the title tag of this page',
  //   metaDescription: 'This is the meta description'
  // }
  // content =>
  // -colorspace で色空間を指定できます。
  //
  // ```bash
  // $ convert -colorspace RGB original.jpg converted.png
  // ```
  // ...
  const { data, content } = matter(fileContent)

  const items: {
    title: string
    slug: string
    description: string
    content: string
    date: string
    tags: string[]
  } = {
    title: '',
    slug: '',
    description: '',
    content: '',
    date: '',
    tags: [''],
  }

  fields.forEach((field) => {
    field === 'title' && (items.title = data.title)
    field === 'slug' && (items.slug = slug)
    field === 'description' && (items.description = data.description)
    field === 'content' && (items.content = content)
    field === 'date' && (items.date = data.date)
    field === 'tags' && (items.tags = data.tags)
  })

  return items
}

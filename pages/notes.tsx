import { join } from 'path'
import { InferGetStaticPropsType, NextPage } from 'next'
import { globby } from 'globby'
import * as fs from 'fs'
import matter from 'gray-matter'

const NotesIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ contents }) => {
  console.warn('contents index page', contents)
  return <div>Notesページです！</div>
}

export const getStaticProps: () => Promise<{ props: { contents: { title: string; content: string }[] } }> = async () => {
  const contents = [
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
  ]

  const slugs = await globby(['content/notes/**/*.md'])
  console.warn('slugs', slugs)

  // const fields = ['title', 'date']
  // const posts = slugs
  //   .map((slug) => getPostBySlug(slug, fields))
  //   // sort posts by date in descending order
  //   .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  // ======

  const slug = 'content/notes/shell/quick-find-repository.md'
  const realSlug = slug.replace(/\.md$/, '')
  const fileContents = fs.readFileSync('content/notes/shell/quick-find-repository.md', 'utf8')
  const { data, content } = matter(fileContents)

  // console.warn('data', data)
  // console.warn('content', content)
  // console.warn('realSlug', realSlug)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  items['title'] = data.title
  items['description'] = data.description
  items['date'] = data.date
  items['slug'] = realSlug
  items['content'] = content

  return {
    props: {
      contents,
    },
  }
}

export default NotesIndexPage

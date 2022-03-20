import { InferGetStaticPropsType, NextPage } from 'next'

const NotesDetailsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ contents }) => {
  console.warn('contents', contents)

  return <div>詳細ページです</div>
}

export const getStaticProps: () => Promise<{ props: { contents: { title: string; content: string }[] } }> = async () => {
  const contents = [
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
    { title: 'ここにタイトル！', content: 'ここに内容を書く！' },
  ]

  return {
    props: {
      contents,
    },
  }
}

export default NotesDetailsPage

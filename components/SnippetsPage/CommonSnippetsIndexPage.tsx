import { SelectLists } from './SelectLists'
import tags from '@data/snippets/tags.json'
import { SnippetsLists } from './SnippetsLists'

export const CommonSnippetsIndexPage = ({ allContents }: { allContents: { slug: string; title: string; tags: string[]; date: string }[] }) => {
  return (
    <div className="p-[16px]">
      <SelectLists tags={tags} />
      <SnippetsLists allContents={allContents} />
    </div>
  )
}

export const CustomSelectBox = ({ tags }: { tags: { slug: string; name: string }[] }) => {
  return (
    <>
      <div>タグ一覧</div>
      <select>
        <option value="all">すべて</option>
        {tags.map((tag, index) => {
          return (
            <option
              key={tag.slug}
              className={`${index === 0 ? '' : 'ml-[8px]'}`}
            >
              <a href={`/snippets?tags=${tag.slug}`}>
                <span>{tag.name}</span>
              </a>
            </option>
          )
        })}
      </select>
    </>
  )
}

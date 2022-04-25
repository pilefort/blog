export const Highlight = ({ highlight }: { highlight: string }) => {
  return (
    <div>
      <div className="mt-[24px] w-[120px] rounded-[10px_10px_0_0px] border-[5px_5px_0_5px] border-[#1ED3C6] text-center text-[18px]">ハイライト</div>
      <div
        className={'border-[5px] border-[#1ED3C6] p-[8px]'}
        dangerouslySetInnerHTML={{ __html: highlight }}
      />
    </div>
  )
}

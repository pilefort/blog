export const List = ({ id, dateTime }: { id: string; dateTime: string }) => {
  return (
    <option
      className="text-[24px]"
      key={id}
      value={id}
    >
      {dateTime}
    </option>
  )
}

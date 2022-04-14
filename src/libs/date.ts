export const utcToJst = ({ date }: { date: string }) => {
  return new Date(date).toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

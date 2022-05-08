import fs from 'fs'

export const createJsonFile = ({ folder, filename, content }: { folder: string; filename: string; content: string }) => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder)

  fs.writeFileSync(filename, content)
}

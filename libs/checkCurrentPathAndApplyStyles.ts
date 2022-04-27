export const checkCurrentPathAndApplyStyles = ({ currentPagePath, targetPath }: { currentPagePath: string; targetPath: string }) => {
  return currentPagePath.includes(targetPath) ? 'font-bold underline' : ''
}

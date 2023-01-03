import { CustomHead } from '@components/MetaHead/CustomHead'
import { IndexPage } from '@components/WorksPage/Layouts/IndexPage'

const WorksPage = () => {
  return (
    <>
      <CustomHead
        title={'同人作品'}
        description={'同人作品一覧'}
      />
      <IndexPage />
    </>
  )
}

export default WorksPage

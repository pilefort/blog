import { CustomHead } from '@components/MetaHead/CustomHead'
import { IndexPage } from '@components/WatchListPage/Layouts/IndexPage'

const WorksPage = () => {
  return (
    <>
      <CustomHead
        title={'Watch List'}
        description={'定期的に見るサイトたち'}
      />
      <IndexPage />
    </>
  )
}

export default WorksPage

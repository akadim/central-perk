import { Container } from '@mui/material'
import CategoriesList from './CategoriesList'
import RewardsList from './RewardsList'

const RewardsPage = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <CategoriesList />
      <RewardsList />
    </Container>
  )
}

export default RewardsPage

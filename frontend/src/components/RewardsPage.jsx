import { Container } from '@mui/material'
import CategoriesList from './CategoriesList'
import RewardsList from './RewardsList'
import { RewardModal } from './modals/RewardModal'
import { useCallback, useState } from 'react'

const RewardsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')
  const [selectedReward, setSelectedReward] = useState(null)

  const showRewardForm = useCallback(reward => {
    setModalMode(reward ? 'update' : 'add')
    setSelectedReward(reward)
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedReward(null)
  }, [])

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <CategoriesList />
      <RewardsList onShowModalForm={showRewardForm} />
      <RewardModal
        open={isModalOpen}
        onClose={handleCloseModal}
        mode={modalMode}
        initialData={selectedReward}
      />
    </Container>
  )
}

export default RewardsPage

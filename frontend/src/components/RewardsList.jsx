import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import { Settings as SettingsIcon } from '@mui/icons-material'
import { rewardsData } from '../data/mockData'
import { useState } from 'react'
import { RewardModal } from './modals/RewardModal'

const RewardsList = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')
  const [selectedReward, setSelectedReward] = useState(null)

  const showRewardForm = reward => {
    setModalMode(reward ? 'update' : 'add')
    setSelectedReward(reward ?? null)
    setModalOpen(true)
  }

  return (
    <Box>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        mb={3}
      >
        <Typography variant='h5' component='h2'>
          Manage Rewards
        </Typography>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Button variant='text' color='primary'>
            View all
          </Button>
          <Button
            variant='contained'
            color='primary'
            startIcon={<span>+</span>}
            sx={{ borderRadius: 10 }}
            onClick={() => showRewardForm()}
          >
            Add Rewards
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          '& > *': {
            minWidth: {
              xs: '100%',
              sm: 'calc(33.33% - 16px)',
              md: 'calc(20% - 16px)'
            }
          }
        }}
      >
        {rewardsData.map(reward => (
          <Card
            key={reward.id}
            sx={{
              position: 'relative',
              borderRadius: 2,
              bgcolor: '#FFF8E1',
              '&:hover': {
                cursor: 'pointer',
                bgcolor: '#FFE0B2'
              }
            }}
          >
            <IconButton
              size='small'
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                bgcolor: 'background.paper'
              }}
              onClick={() => showRewardForm(reward)}
            >
              <SettingsIcon fontSize='small' />
            </IconButton>
            <CardMedia
              component='img'
              height='140'
              image={reward.image}
              alt={reward.title}
              sx={{
                objectFit: 'contain',
                p: 2
              }}
            />
            <CardContent>
              <Typography variant='body2' align='center'>
                {reward.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <RewardModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        initialData={selectedReward}
      />
    </Box>
  )
}

export default RewardsList

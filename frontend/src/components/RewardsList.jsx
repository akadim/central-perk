import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import RewardCard from './ui/RewardCard'
import { useSelector } from 'react-redux'
import { selectRewards } from '../store/rewardsSlice'
import { memo } from 'react'

const RewardsList = memo(({ onShowModalForm }) => {
  const rewards = useSelector(selectRewards)

  console.log('Rewards = ', rewards)

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
        mb={3}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant='h5' component='h2' fontWeight={'bold'}>
            Manage Rewards
          </Typography>
          <Typography
            component='span'
            sx={{
              fontWeight: 'bold',
              color: 'primary.dark',
              cursor: 'pointer',
              fontSize: 18
            }}
          >
            View all
          </Typography>
        </Box>
        <Box sx={{ mt: { xs: 2, sm: 0 } }}>
          {' '}
          <Button
            variant='contained'
            startIcon={<AddCircle />}
            sx={{ backgroundColor: 'primary.dark', borderRadius: 10 }}
            onClick={() => onShowModalForm(null)}
          >
            Add Rewards
          </Button>
        </Box>
      </Stack>
      <Grid container spacing={2} sx={{ width: '100%' }}>
        {' '}
        {rewards.map(reward => (
          <Grid item xs={12} sm={6} md={2.4} key={reward.id}>
            {' '}
            <RewardCard
              reward={reward}
              editMode={true}
              onShowModalForm={onShowModalForm}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
})

RewardsList.displayName = 'RewardsList'

export default RewardsList

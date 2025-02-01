import { Box, Typography, Stack, Button, Container, Grid } from '@mui/material'
import RewardCard from './ui/RewardCard'
import { useSelector } from 'react-redux'
import { selectRewards } from '../store/rewardsSlice'

function PopularRewards () {
  const rewards = useSelector(selectRewards)
  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Stack direction='row' spacing={3} sx={{ ml: 3, mb: 2 }}>
          <Typography variant='h6' fontWeight='bold'>
            Popular Rewards
          </Typography>
          <Button sx={{ color: 'primary.dark' }}>
            <Typography fontWeight='bold'>View all</Typography>
          </Button>
        </Stack>

        <Grid container spacing={2} sx={{ width: '100%' }}>
          {rewards.map(reward => (
            <Grid item xs={12} sm={6} md={2.4} key={reward.id}>
              {' '}
              {/* Adjust breakpoints as needed */}
              <RewardCard reward={reward} editMode={false} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default PopularRewards

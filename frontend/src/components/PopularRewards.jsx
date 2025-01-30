import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button
} from '@mui/material'

// Mock data, it will be populated later with Backend data
const rewards = [
  {
    id: 1,
    name: 'Iced Mocha',
    image: '/iced-mocha.png'
  },
  {
    id: 2,
    name: 'Cookie Duo Black',
    image: '/cookie.png'
  },
  {
    id: 3,
    name: 'Double Espresso',
    image: '/double-espresso.png'
  },
  {
    id: 4,
    name: 'French Croissant',
    image: '/croissant.png'
  },
  {
    id: 5,
    name: 'Espresso',
    image: '/espresso.png'
  }
]

function PopularRewards () {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', mb: 2, gap: 2 }}>
        <Typography variant='h6' fontWeight='bold'>
          Popular Rewards
        </Typography>
        <Button color='primary'>
          <Typography fontWeight='bold'>View All</Typography>
        </Button>
      </Box>

      <Grid container spacing={2}>
        {rewards.map(reward => (
          <Grid item xs={6} sm={4} md={2.4} key={reward.id}>
            <Card
              sx={{
                backgroundColor: 'var(--color-background)',
                borderRadius: 2,
                '&:hover': {
                  boxShadow: 3
                }
              }}
            >
              <CardMedia
                component='img'
                height='140'
                image={reward.image}
                alt={reward.name}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent
                sx={{ textAlign: 'center', pt: 1, pb: '16px !important' }}
              >
                <Typography variant='body2'>{reward.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PopularRewards

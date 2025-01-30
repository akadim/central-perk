import { Box, Typography, Avatar, Button, Grid } from '@mui/material'

// Mock data for the Loyal Customers, it will be populated later
const customers = [
  {
    id: 1,
    name: 'Mike',
    avatar: '/mike-avatar.jpg'
  },
  {
    id: 2,
    name: 'Emily',
    avatar: '/emily-avatar.jpg'
  },
  {
    id: 3,
    name: 'Rachel',
    avatar: '/rachel-avatar.jpg'
  },
  {
    id: 4,
    name: 'Chandler',
    avatar: '/chandler-avatar.jpg'
  }
]

function LoyalCustomers () {
  return (
    <Box>
      <Box sx={{ display: 'flex', mb: 2, gap: 2 }}>
        <Typography variant='h6' fontWeight={'bold'}>
          Loyal Customers
        </Typography>
        <Button color='primary'>
          <Typography fontWeight='bold'>View All</Typography>
        </Button>
      </Box>

      <Grid container spacing={5}>
        {customers.map(customer => (
          <Grid item key={customer.id}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src={customer.avatar}
                sx={{
                  width: 64,
                  height: 64,
                  mb: 1,
                  border: 2,
                  borderColor: '#4CAF50'
                }}
                alt={customer.name}
              />
              <Typography variant='body2'>{customer.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default LoyalCustomers

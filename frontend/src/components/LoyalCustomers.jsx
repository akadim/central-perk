import {
  Box,
  Typography,
  Avatar,
  Button,
  Stack,
  Container
} from '@mui/material'
import { useSelector } from 'react-redux'
import { selectCustomers } from '../store/customersSlice'

function LoyalCustomers () {
  const customers = useSelector(selectCustomers)

  return (
    <Container>
      <Box sx={{ ml: 3 }}>
        <Box sx={{ display: 'flex', mb: 2, gap: 2 }}>
          <Typography variant='h6' fontWeight={'bold'}>
            Loyal Customers
          </Typography>
          <Button sx={{ color: 'primary.dark' }}>
            <Typography fontWeight='bold'>View all</Typography>
          </Button>
        </Box>

        <Stack
          direction='row'
          spacing={0}
          sx={{
            flexWrap: 'wrap',
            mx: { xs: -1, sm: -5 },
            '& > *': {
              padding: { xs: 1, sm: 0.5 },
              width: {
                xs: '50%',
                sm: '10%'
              }
            },
            pl: 3
          }}
        >
          {customers.map(customer => (
            <Box
              key={customer.id}
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar
                src={customer.image}
                sx={{
                  width: 56,
                  height: 56,
                  mb: 1,
                  border: 2,
                  borderColor: 'success.light'
                }}
                alt={customer.name}
              />
              <Typography
                variant='body2'
                sx={{
                  fontWeight: 'bold',
                  color: 'text.secondary'
                }}
              >
                {customer.name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

export default LoyalCustomers

import { Card, styled } from '@mui/material'

export const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 5
}))

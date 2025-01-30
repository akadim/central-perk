import { Button, styled } from '@mui/material'

export const RoundedButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: '100%'
}))

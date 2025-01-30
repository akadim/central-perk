import {
  Box,
  Card,
  CircularProgress,
  Stack,
  styled,
  Tooltip,
  Typography
} from '@mui/material'
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts'

// Mock data for the sales chart, it will be populated later
const salesData = [
  { month: '01', sales: 4000 },
  { month: '02', sales: 4500 },
  { month: '03', sales: 4200 },
  { month: '04', sales: 4800 },
  { month: '05', sales: 4600 },
  { month: '06', sales: 5000 },
  { month: '07', sales: 5200 },
  { month: '08', sales: 5400 },
  { month: '09', sales: 5800 },
  { month: '10', sales: 6000 }
]

const IndicatorWrapper = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius
}))

const ProgressWrapper = styled(Box)({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const PointsText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.success.main,
  fontWeight: 600
}))

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'var(--color-background)',
  margin: 5
}))

const RewardCharts = () => {
  return (
    <Stack
      direction={'row'}
      spacing={3}
      sx={{
        p: 2,
        backgroundColor: '#4CAF50',
        color: 'white',
        borderRadius: 4,
        mb: 4
      }}
    >
      <Box>
        <Stack direction='column'>
          <StyledCard>
            <IndicatorWrapper>
              <Typography
                variant='body2'
                sx={theme => ({
                  color: theme.palette.success.main,
                  fontWeight: 500
                })}
              >
                Redeem Points this week
              </Typography>
              <ProgressWrapper>
                <CircularProgress
                  variant='determinate'
                  value={75} // Adjust this value to change the progress
                  size={48}
                  thickness={4}
                  sx={theme => ({
                    color: theme.palette.success.main,
                    '.MuiCircularProgress-circle': {
                      strokeLinecap: 'round'
                    }
                  })}
                />
                <PointsText variant='body1'>450</PointsText>
              </ProgressWrapper>
            </IndicatorWrapper>
          </StyledCard>
          <StyledCard>
            <IndicatorWrapper>
              <Typography
                variant='body2'
                sx={theme => ({
                  color: theme.palette.success.main,
                  fontWeight: 500
                })}
              >
                Redeem Points this week
              </Typography>
              <ProgressWrapper>
                <CircularProgress
                  variant='determinate'
                  value={75} // Adjust this value to change the progress
                  size={48}
                  thickness={4}
                  sx={theme => ({
                    color: theme.palette.success.main,
                    '.MuiCircularProgress-circle': {
                      strokeLinecap: 'round'
                    }
                  })}
                />
                <PointsText variant='body1'>450</PointsText>
              </ProgressWrapper>
            </IndicatorWrapper>
          </StyledCard>
        </Stack>
      </Box>
      {/* Sales Chart */}
      <Box>
        <Card sx={{ height: 200 }}>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={salesData}
              width={500}
              height={200}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey='month' tickLine={false} axisLine={false} />
              <Tooltip />
              <Line type='monotone' dataKey='sales' strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Box>
    </Stack>
  )
}

export default RewardCharts

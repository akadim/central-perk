import { Box, Card, Stack, styled, Typography, useTheme } from '@mui/material'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

import LoyaltyIcon from '@mui/icons-material/Loyalty'
import SalesChart from './SalesChart'

const IndicatorWrapper = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius
}))

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  margin: 5,
  flex: 1
}))

const RewardCharts = () => {
  const theme = useTheme()

  const redeemedPoints = 450
  const rewardedPoints = 950

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={3}
      sx={{
        p: 2,
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        borderRadius: 1,
        mb: 4
      }}
    >
      <Box display={'flex'}>
        <Stack direction='column'>
          <StyledCard>
            <IndicatorWrapper>
              <Typography
                variant='body2'
                sx={theme => ({
                  color: 'primary.dark',
                  textWrap: 'normal'
                })}
              >
                Redeem Points this week
              </Typography>
              <Box style={{ width: 75, height: 75 }}>
                <CircularProgressbarWithChildren
                  value={(redeemedPoints / 1500) * 100}
                  styles={{
                    path: {
                      stroke: theme.palette.primary.dark,
                      strokeLinecap: 'round'
                    },
                    trail: {
                      stroke: theme.palette.primary.light
                    },
                    text: {
                      fill: theme.palette.mainRed.main
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      color: theme.palette.primary.dark,
                      fontWeight: 'regular'
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        marginTop: -5
                      }}
                    >
                      <span>{redeemedPoints}</span>
                    </div>
                    <LoyaltyIcon sx={{ fontSize: 18 }} />
                  </Box>
                </CircularProgressbarWithChildren>
              </Box>
            </IndicatorWrapper>
          </StyledCard>
          <StyledCard>
            <IndicatorWrapper>
              <Typography
                variant='body2'
                sx={theme => ({
                  color: theme.palette.mainRed.light,
                  fontWeight: 500
                })}
              >
                Rewarded Points this week
              </Typography>
              <Box style={{ width: 75, height: 75 }}>
                <CircularProgressbarWithChildren
                  value={(rewardedPoints / 1500) * 100}
                  styles={{
                    path: {
                      stroke: theme.palette.mainRed.light,
                      strokeLinecap: 'round'
                    },
                    trail: {
                      stroke: theme.palette.mainRed.light,
                      opacity: 0.2
                    },
                    text: {
                      fill: theme.palette.mainRed.light
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      color: theme.palette.mainRed.main,
                      fontWeight: 'regular'
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        marginTop: -5
                      }}
                    >
                      <span>{rewardedPoints}</span>
                    </div>
                    <LoyaltyIcon sx={{ fontSize: 18 }} />
                  </Box>
                </CircularProgressbarWithChildren>
              </Box>
            </IndicatorWrapper>
          </StyledCard>
        </Stack>
      </Box>
      {/* Sales Chart */}
      <Box sx={{ flex: 1 }}>
        <StyledCard sx={{ height: 'calc(100% - 10px)' }}>
          <SalesChart />
        </StyledCard>
      </Box>
    </Stack>
  )
}

export default RewardCharts

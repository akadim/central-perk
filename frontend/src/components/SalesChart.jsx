import {
  Box,
  Container,
  Stack,
  styled,
  Typography,
  useTheme
} from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

// Mock data for the sales chart
const salesData = [
  { month: '01', sales: 4000, variance: '0%' },
  { month: '02', sales: 4500, variance: '+10%' },
  { month: '03', sales: 4200, variance: '-5%' },
  { month: '04', sales: 4800, variance: '+10%' },
  { month: '05', sales: 4600, variance: '5%' },
  { month: '06', sales: 5000, variance: '+6%' },
  { month: '07', sales: 5200, variance: '+5%' },
  { month: '08', sales: 5400, variance: '+5%' },
  { month: '09', sales: 5800, variance: '+10%' },
  { month: '10', sales: 6000, variance: '+4%' }
].map(item => ({
  ...item,
  sales: `${item.sales}`
}))

const TooltipBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mainText.main,
  padding: theme.spacing(1.5),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: theme.shadows[4],
  minWidth: 70
}))

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipBox>
        <Typography
          variant='body2'
          sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 0.5 }}
        >
          ${payload[0].value.toLocaleString()}
        </Typography>
        <Typography variant='h6' sx={{ color: '#fff', fontSize: '1rem' }}>
          {payload[0].payload.variance.toLocaleString()}
        </Typography>
      </TooltipBox>
    )
  }
  return null
}

const StyledTag = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.light,
  padding: '2px 10px'
}))

const SalesChart = () => {
  const [activePoint, setActivePoint] = useState(null)
  const theme = useTheme()
  const isInitialRender = useRef(true)

  useEffect(() => {
    isInitialRender.current = false
  }, [])

  // Avoid unnecessary re-rendering of the charts when the mouse hover over it, while working with ReferenceLine
  const handleMouseMove = data => {
    if (data && data.activePayload) {
      setActivePoint(data.activePayload[0].payload)
    }
  }

  const handleMouseLeave = () => {
    setActivePoint(null)
  }

  const memoizedReferenceLine = useMemo(() => {
    if (activePoint) {
      return (
        <ReferenceLine
          x={activePoint.month}
          stroke={theme.palette.primary.light}
          strokeWidth={50}
          strokeOpacity={0.2}
          isFront={true}
        />
      )
    }
    return null
  }, [activePoint, theme.palette.primary.light])

  const chart = useMemo(
    () => (
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={salesData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <XAxis
            dataKey='month'
            tickLine={false}
            axisLine={false}
            interval={0}
            tick={{ fill: '#666', fontSize: 12 }}
          />

          <Tooltip content={<CustomTooltip />} />
          {memoizedReferenceLine}
          <Line
            type='monotone'
            dataKey='sales'
            stroke={theme.palette.primary.main}
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    ),
    [memoizedReferenceLine, salesData, theme.palette.primary.main]
  )

  return (
    <Container>
      <Box sx={{ pt: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Typography variant='subtitle1' fontWeight='bold'>
            Sales Per Months
          </Typography>
          <StyledTag variant='subtitle1' fontWeight='bold'>
            +24.24
          </StyledTag>
        </Box>
        <Box sx={{ height: '160px' }}>{chart}</Box>
      </Box>
    </Container>
  )
}

export default SalesChart

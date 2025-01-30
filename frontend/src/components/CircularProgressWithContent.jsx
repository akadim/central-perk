import { CircularProgress } from '@mui/material'

const CircularProgressWithContent = ({ value, size, thickness, children }) => {
  return (
    <div className='relative inline-flex items-center justify-center'>
      <CircularProgress
        variant='determinate'
        value={value}
        size={size}
        thickness={thickness}
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

export default CircularProgressWithContent

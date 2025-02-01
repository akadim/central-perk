import Sidebar from './Sidebar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Sidebar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: { xs: 0, md: '280px' }, // Match sidebar width
          width: { xs: '100%', md: 'calc(100% - 280px)' }, // Adjust width to account for sidebar
          minHeight: '100vh',
          overflow: 'auto' // Enable scrolling if content is too long
        }}
      >
        <Box
          sx={{
            // Add top spacing for mobile menu button on small screens
            mt: { xs: '64px', md: 0 }
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default Layout

import Sidebar from './Sidebar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout

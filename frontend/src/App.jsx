import { CssBaseline, ThemeProvider, Box, createTheme } from '@mui/material'

import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router'

import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import RewardsPage from './components/RewardsPage'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
          index: true
        },
        {
          path: '/rewards',
          element: <RewardsPage />
        }
      ]
    }
  ])
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2E8B57'
      }
    },
    shape: {
      borderRadius: 16
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  )
}

export default App

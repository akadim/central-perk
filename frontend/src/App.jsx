import { CssBaseline, ThemeProvider, Box, createTheme } from '@mui/material'

import './App.css'
import './styles/theme-style.css'

import { createBrowserRouter, RouterProvider } from 'react-router'

import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import RewardsPage from './components/RewardsPage'

import 'react-circular-progressbar/dist/styles.css'

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
        // Green variants
        main: '#90EE90',
        dark: '#2e8b57',
        light: '#AFF4C6',
        contrastText: '#FFF'
      },
      secondary: {
        // Brown variants
        main: '#FFF5E1',
        dark: '#6F4E37',
        contrastText: '#FFF'
      },
      mainRed: {
        main: '#8B0000',
        light: '#FF5151'
      },
      mainText: {
        main: '#434D56'
      }
    },
    shape: {
      borderRadius: 16
    },
    typography: {
      fontFamily: `"Arial", "Georgia", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      button: {
        textTransform: 'none'
      }
    },
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            boxShadow: 'none !important',
            '&:hover': {
              boxShadow: 'none !important'
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none !important',
            '&:hover': {
              boxShadow: 'none !important'
            }
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none !important',
            '&:hover': {
              boxShadow: 'none !important'
            }
          }
        }
      }
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

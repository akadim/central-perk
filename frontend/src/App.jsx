import { CssBaseline, ThemeProvider, Box, createTheme } from '@mui/material'

import './App.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PopularRewards from './components/PopularRewards'

function App () {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2E8B57'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <PopularRewards />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App

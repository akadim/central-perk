import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import {
  Home,
  CardGiftcard,
  History,
  BarChart,
  Logout,
  Menu as MenuIcon
} from '@mui/icons-material'

import gunther from '../assets/images/gunther.png'
import centralperk from '../assets/images/central-perk.png'
import { useState } from 'react'
import '../styles/theme-style.css'
import { useNavigate } from 'react-router'

const IconWrapper = styled(Box)(({ selected }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  transition: 'all 0.2s ease'
}))

const StyledLogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',
  padding: 5,
  flex: 3
}))

const StyledLogo = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: '0 auto',
  mb: 1
}))

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  paddingLeft: '10px',
  marginBottom: theme.spacing(0.5),
  borderRadius: 70,
  transition: 'background-color 0.2s ease',
  textWrap: 'nowrap',
  backgroundColor: selected ? 'var(--color-primary)' : 'transparent',
  cursor: 'pointer',

  '& .MuiListItemText-root': {
    marginLeft: theme.spacing(2),
    '& .MuiTypography-root': {
      fontSize: '0.9rem',
      color: selected
        ? 'var(--color-icon-selected)'
        : 'var(--color-text-primary)'
    }
  },

  '& .icon-wrapper': {
    backgroundColor: 'var(--color-background)'
  },

  '&:hover': {
    backgroundColor: 'var(--color-primary)',
    '& .icon-wrapper': {
      backgroundColor: 'var(--color-background)'
    },
    '& .MuiListItemIcon-root': {
      color: 'var(--color-icon-default)'
    },
    '& .MuiListItemText-root': {
      '& .MuiTypography-root': {
        color: 'var(--color-icon-selected)'
      }
    }
  },

  '& .MuiListItemIcon-root': {
    minWidth: 'auto',
    color: 'var(--color-icon-default)'
  }
}))

const HamburgerButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  },
  position: 'fixed',
  top: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: theme.zIndex.drawer + 1
}))

const SidebarContent = ({ selectedIndex, handleListItemClick }) => {
  const menuItems = [
    { text: 'Home', link: '/', icon: <Home />, selected: true },
    { text: 'Rewards', link: '/rewards', icon: <CardGiftcard /> },
    { text: 'Order History', link: '', icon: <History /> },
    { text: 'Statistics', link: '', icon: <BarChart /> }
  ]

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-background)',
        width: { xs: 280, md: 'auto' }
      }}
    >
      <StyledLogoWrapper>
        <StyledLogo src={gunther} alt='Owner' />
        <Typography variant='h6' color='primary' fontWeight='bold'>
          Gunther
        </Typography>
        <Typography variant='body2' color='var(--color-text-secondary)'>
          Owner
        </Typography>
      </StyledLogoWrapper>

      <List
        sx={{
          pt: 5,
          flexGrow: 1,
          margin: '0 auto'
        }}
      >
        {menuItems.map((menuItem, index) => (
          <StyledListItem
            key={menuItem.text}
            button
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(menuItem.link, index)}
          >
            <IconWrapper
              className='icon-wrapper'
              selected={selectedIndex === index}
            >
              <ListItemIcon
                sx={{
                  color:
                    selectedIndex === index
                      ? 'var(--color-icon-selected)'
                      : 'var(--color-icon-default)',
                  fontSize: 20
                }}
              >
                {menuItem.icon}
              </ListItemIcon>
            </IconWrapper>
            <ListItemText primary={menuItem.text} />
          </StyledListItem>
        ))}
      </List>

      <Box sx={{ p: 2, textAlign: 'center' }}>
        <img
          src={centralperk}
          alt='Coffee Shop Logo'
          style={{ width: 100, marginBottom: 16 }}
        />
        <Button
          variant='contained'
          startIcon={<Logout />}
          fullWidth
          sx={{
            backgroundColor: 'var(--color-secondary)',
            borderRadius: 50,
            '&:hover': {
              backgroundColor: 'var(--color-secondary-hover)'
            }
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  )
}

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()

  const handleListItemClick = (link, index) => {
    setSelectedIndex(index)
    if (isMobile) {
      setMobileOpen(false)
    }
    navigate(link)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      {isMobile && (
        <HamburgerButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            left: 16,
            top: 16,
            zIndex: theme.zIndex.drawer + 1
          }}
        >
          <MenuIcon />
        </HamburgerButton>
      )}

      {isMobile ? (
        <Drawer
          variant='temporary'
          anchor='left'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280
            }
          }}
        >
          <SidebarContent
            selectedIndex={selectedIndex}
            handleListItemClick={handleListItemClick}
          />
        </Drawer>
      ) : (
        <Box
          component='nav'
          sx={{
            width: { md: 280 },
            flexShrink: { md: 0 }
          }}
        >
          <SidebarContent
            selectedIndex={selectedIndex}
            handleListItemClick={handleListItemClick}
          />
        </Box>
      )}
    </>
  )
}

export default Sidebar

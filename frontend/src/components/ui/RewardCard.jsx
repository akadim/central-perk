import {
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'
import { StyledCard } from './StyledCard'
import { styled } from '@mui/system'
import { Settings as SettingsIcon } from '@mui/icons-material'
import { useState } from 'react'

const StyledSettingsButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`

const RewardCard = ({ reward, editMode, onShowModalForm }) => {
  const [menuEl, setMenuEl] = useState(null)
  const open = Boolean(menuEl)

  const handleClick = event => {
    setMenuEl(event.currentTarget) // Set anchor to the clicked icon
  }

  const handleClose = () => {
    setMenuEl(null) // Close the menu
  }

  return (
    <StyledCard
      key={reward.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
          cursor: 'pointer',
          bgcolor: '#FFE0B2'
        }
      }}
    >
      {editMode && (
        <>
          <StyledSettingsButton size='small' onClick={handleClick}>
            <SettingsIcon fontSize='small' />
          </StyledSettingsButton>
          <Menu
            anchorEl={menuEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'settings-button'
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose()
                onShowModalForm(reward)
              }}
            >
              Update
            </MenuItem>
          </Menu>
        </>
      )}
      <CardMedia
        component='img'
        height='140'
        image={reward.image}
        alt={reward.title}
        sx={{
          objectFit: 'fill',
          pt: 1,
          width: '94%'
        }}
      />
      <CardContent
        sx={{ padding: 0.5, '&:last-child': { paddingBottom: 0.5 } }}
      >
        <Typography variant='body2' align='center'>
          {reward.title}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

export default RewardCard

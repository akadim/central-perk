import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  Stack
} from '@mui/material'
import { Close as CloseIcon, Height } from '@mui/icons-material'
import { useState } from 'react'
import UploadImage from './UploadImage'
import { RoundedButton } from '../ui/RoundedButton'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 800,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4
}

const inputStyle = {
  bgcolor: '#FFF8E1',
  Height: '100px',
  borderRadius: 1,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none'
    }
  }
}

export function RewardModal ({
  open,
  onClose,
  mode = 'add',
  initialData = null
}) {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      category: '',
      price: '',
      description: '',
      image: null
    }
  )

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData)
    onClose()
  }

  const handleDelete = () => {
    // Handle deletion
    console.log('Deleting reward:', formData.title)
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} aria-labelledby='reward-modal-title'>
      <Box sx={modalStyle}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          mb={3}
        >
          <Typography id='reward-modal-title' variant='h6' component='h2'>
            {mode === 'add' ? 'Add New reward' : 'Update reward'}
          </Typography>
          <IconButton onClick={onClose} size='small'>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Typography variant='subtitle1' mb={2}>
          Reward Details
        </Typography>

        <Stack direction='row' gap={5} sx={{ width: '100%' }}>
          <Box sx={{ flex: 1 }}>
            <Stack display={'flex'} flexDirection={'column'} gap={2}>
              <TextField
                fullWidth
                name='title'
                value={formData.title}
                onChange={handleChange}
                placeholder={mode === 'add' ? 'Reward Title' : ''}
                sx={inputStyle}
              />

              <Select
                fullWidth
                name='category'
                value={formData.category}
                onChange={handleChange}
                displayEmpty
                sx={inputStyle}
              >
                <MenuItem value='' disabled>
                  {mode === 'add' ? 'Reward Category' : ''}
                </MenuItem>
                <MenuItem value='coffee'>Coffee</MenuItem>
                <MenuItem value='snacks'>Snacks</MenuItem>
                <MenuItem value='merch'>Merch</MenuItem>
              </Select>

              <TextField
                fullWidth
                name='price'
                value={formData.price}
                onChange={handleChange}
                placeholder='Reward Price'
                sx={inputStyle}
              />

              <TextField
                fullWidth
                multiline
                rows={4}
                name='description'
                value={formData.description}
                onChange={handleChange}
                placeholder='Reward Description'
                sx={inputStyle}
              />
            </Stack>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Stack flexDirection={'column'}>
              <UploadImage
                currentImage={formData.image}
                onImageChange={image => setFormData({ ...formData, image })}
              />

              <Stack
                direction='row'
                spacing={2}
                justifyContent='flex-end'
                mt={2}
              >
                {mode === 'update' && (
                  <RoundedButton
                    variant='contained'
                    color='error'
                    onClick={handleDelete}
                    sx={{ bgcolor: '#FF4444', color: 'white' }}
                  >
                    Delete
                  </RoundedButton>
                )}
                {mode === 'add' && (
                  <RoundedButton
                    variant='contained'
                    color='inherit'
                    onClick={onClose}
                    sx={{ bgcolor: '#E0E0E0' }}
                  >
                    Cancel
                  </RoundedButton>
                )}
                <RoundedButton
                  variant='contained'
                  color='primary'
                  onClick={handleSubmit}
                  sx={{
                    bgcolor: mode === 'add' ? '#2E7D32' : '#8B4513'
                  }}
                >
                  {mode === 'add' ? 'Save' : 'Update'}
                </RoundedButton>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Modal>
  )
}

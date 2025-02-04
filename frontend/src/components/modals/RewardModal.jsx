import {
  Modal,
  Box,
  Typography,
  TextField,
  IconButton,
  Select,
  MenuItem,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { memo, useEffect, useState } from 'react'
import UploadImage from './UploadImage'
import { RoundedButton } from '../ui/RoundedButton'
import { useDispatch, useSelector } from 'react-redux'
import {
  addReward,
  removeReward,
  selectRewards,
  updateReward
} from '../../store/rewardsSlice'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 800,
  maxHeight: '90vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: { xs: 2, sm: 4 }
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

export const RewardModal = memo(
  ({ open, onClose, mode = 'add', initialData }) => {
    const dispatch = useDispatch()
    const rewards = useSelector(selectRewards)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const [formData, setFormData] = useState({
      title: '',
      category: '',
      price: '',
      description: '',
      image: null
    })

    useEffect(() => {
      if (initialData && Object.keys(initialData).length > 0) {
        setFormData(initialData)
      } else if (mode === 'add') {
        setFormData({
          title: '',
          category: '',
          price: '',
          description: '',
          image: null
        })
      }
    }, [initialData, mode])

    const handleChange = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = () => {
      if (mode === 'add') {
        const newReward = {
          id: rewards.length > 0 ? Math.max(...rewards.map(r => r.id)) + 1 : 1,
          ...formData
        }
        dispatch(addReward(newReward))
        setFormData({
          title: '',
          category: '',
          price: '',
          description: '',
          image: null
        })
      } else if (mode === 'update') {
        dispatch(updateReward({ ...formData }))
      }
      onClose()
    }

    const handleDelete = () => {
      dispatch(removeReward(formData.id))
      onClose()
    }

    return (
      <Modal open={open} onClose={onClose} aria-labelledby='reward-modal-title'>
        <Box sx={modalStyle}>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            mb={2}
          >
            <Typography
              id='reward-modal-title'
              variant='h6'
              component='h2'
              sx={{
                color: mode === 'add' ? 'primary.dark' : 'mainRed.main',
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}
            >
              {mode === 'add' ? 'Add New reward' : 'Update reward'}
            </Typography>
            <IconButton onClick={onClose} size='small'>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Typography variant='subtitle1' mb={2}>
            Reward Details
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            gap={{ xs: 2, sm: 5 }}
            sx={{ width: '100%' }}
          >
            {/* Form Fields Section */}
            <Box sx={{ flex: 1, width: '100%' }}>
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
                  <MenuItem value='Coffee'>Coffee</MenuItem>
                  <MenuItem value='Snacks'>Snacks</MenuItem>
                  <MenuItem value='Merch'>Merch</MenuItem>
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

            {/* Image Upload and Buttons Section */}
            <Box sx={{ flex: 1, width: '100%' }}>
              <Stack flexDirection={'column'} gap={2}>
                <UploadImage
                  currentImage={formData.image}
                  onImageChange={image => setFormData({ ...formData, image })}
                />

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent={{ xs: 'stretch', sm: 'flex-end' }}
                  mt={2}
                >
                  {mode === 'update' && (
                    <RoundedButton
                      fullWidth={isMobile}
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
                      fullWidth={isMobile}
                      variant='contained'
                      color='inherit'
                      onClick={onClose}
                      sx={{ bgcolor: '#E0E0E0' }}
                    >
                      Cancel
                    </RoundedButton>
                  )}
                  <RoundedButton
                    fullWidth={isMobile}
                    variant='contained'
                    color='primary'
                    onClick={handleSubmit}
                    sx={{
                      bgcolor:
                        mode === 'add' ? 'primary.dark' : 'secondary.dark'
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
)

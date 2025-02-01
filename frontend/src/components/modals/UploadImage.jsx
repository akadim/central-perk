import { Box, Typography, IconButton } from '@mui/material'
import {
  IosShare,
  PhotoOutlined,
  Close as CloseIcon
} from '@mui/icons-material'
import { useRef } from 'react'

export default function UploadImage ({ currentImage, onImageChange }) {
  const fileInputRef = useRef(null)

  const handleImageChange = e => {
    const file = e.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        onImageChange(reader.result)
      }
      reader.onerror = () => {
        alert('Error reading file')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = e => {
    e.stopPropagation()
    onImageChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 150, sm: 200 },
        bgcolor: '#FFF8E1',
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: '#FFF3CD'
        }
      }}
      component='label'
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {currentImage && (
          <>
            <Box
              component='img'
              src={currentImage}
              alt='Selected reward'
              sx={{
                width: '100%',
                height: '70%',
                objectFit: 'contain',
                p: 2
              }}
            />
            <IconButton
              onClick={handleRemoveImage}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </>
        )}

        <Box
          sx={{
            mt: currentImage ? 1 : 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: currentImage ? '30%' : '100%'
          }}
        >
          {!currentImage && (
            <Box>
              <PhotoOutlined
                sx={{
                  fontSize: { xs: 40, sm: 50 },
                  color: 'primary.dark'
                }}
              />
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <IosShare
              color='primary'
              sx={{
                mb: { xs: 0, sm: 1 },
                fontSize: { xs: 20, sm: 24 }
              }}
            />
            <Typography
              color='textSecondary'
              align='center'
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              Upload image
            </Typography>
          </Box>
          {!currentImage && (
            <Typography
              color='textSecondary'
              align='center'
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                mt: 1,
                px: 2
              }}
            >
              Upload a cover image for your product.
            </Typography>
          )}
        </Box>
      </Box>
      <input
        type='file'
        accept='image/*'
        hidden
        onChange={handleImageChange}
        ref={fileInputRef}
      />
    </Box>
  )
}

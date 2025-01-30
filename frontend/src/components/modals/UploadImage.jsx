import { Box, Typography } from '@mui/material'
import { Upload as UploadIcon } from '@mui/icons-material'

export default function UploadImage ({ currentImage, onImageChange }) {
  const handleImageChange = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onImageChange(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: 200,
        bgcolor: '#FFF8E1',
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      component='label'
    >
      {currentImage ? (
        <Box
          component='img'
          src={currentImage}
          alt='Selected reward'
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      ) : (
        <>
          <UploadIcon color='primary' sx={{ mb: 1 }} />
          <Typography color='textSecondary' align='center'>
            Upload a cover image for your product.
          </Typography>
        </>
      )}
      <input type='file' accept='image/*' hidden onChange={handleImageChange} />
    </Box>
  )
}

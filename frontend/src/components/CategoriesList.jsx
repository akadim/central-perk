import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from '@mui/material'
import { useSelector } from 'react-redux'
import { selectCategories } from '../store/categoriesSlice'

const CategoriesList = () => {
  const categories = useSelector(selectCategories)

  return (
    <Box mb={6}>
      <Typography variant='h5' component='h2' fontWeight={'bold'} gutterBottom>
        Categories
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ width: '100%' }}
      >
        {categories.map(category => (
          <Card
            key={category.id}
            sx={{
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              flex: 1,
              '&:hover': {
                cursor: 'pointer',
                opacity: 0.9
              }
            }}
          >
            <CardMedia
              component='img'
              height='200'
              image={category.image}
              alt={category.title}
              sx={{
                filter: 'brightness(0.7)'
              }}
            />
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                color: 'white'
              }}
            >
              <Typography variant='h6'>{category.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}

export default CategoriesList

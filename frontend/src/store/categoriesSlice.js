import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [
    {
      id: 1,
      title: 'Coffee',
      image: 'images/coffee-category.png',
      link: '/coffee'
    },
    {
      id: 2,
      title: 'Snacks',
      image: 'images/snacks-category.png',
      link: '/snacks'
    },
    {
      id: 3,
      title: 'Merch',
      image: 'images/merch-category.png',
      link: '/merch'
    }
  ],
  status: 'idle',
  error: null
}

const categoriesSlice = createSlice({
  name: 'categopries',
  initialState,
  reducers: {}
})

export const selectCategories = state => state.categories.categories
export default categoriesSlice.reducer

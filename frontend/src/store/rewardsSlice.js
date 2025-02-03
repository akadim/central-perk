import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rewards: [
    {
      id: 1,
      title: 'Iced Mocha',
      image: 'images/iced-mocha.jpg',
      category: 'Coffee',
      price: 15,
      description:
        'A refreshing blend of espresso, milk, chocolate syrup, and ice. Perfect for a hot day.'
    },
    {
      id: 2,
      title: 'Cookie Duo Black',
      image: 'images/cookie-duo-black.jpg',
      category: 'Snacks',
      price: 10,
      description:
        'Two decadent black cocoa cookies with a creamy filling. A sweet treat to satisfy your cravings.'
    },
    {
      id: 3,
      title: 'Double Espresso',
      image: 'images/double-espresso.jpg',
      category: 'Coffee',
      price: 12,
      description:
        'A powerful and invigorating double shot of our finest espresso. For those who need an extra boost.'
    },
    {
      id: 4,
      title: 'French Croissant',
      image: 'images/french-croissant.jpg',
      category: 'Snacks',
      price: 8,
      description:
        'A flaky and buttery French croissant, freshly baked. A classic pastry to enjoy with your coffee.'
    },
    {
      id: 5,
      title: 'Espresso',
      image: 'images/espresso.jpg',
      category: 'Coffee',
      price: 10,
      description:
        'A single shot of our rich and aromatic espresso. The perfect pick-me-up anytime.'
    }
  ],
  status: 'idle',
  error: null
}

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    addReward: (state, action) => {
      state.rewards = [...state.rewards, action.payload]
    },
    removeReward: (state, action) => {
      state.rewards = state.rewards.filter(
        reward => reward.id !== action.payload
      )
    },
    updateReward: (state, action) => {
      state.rewards = state.rewards.map(reward =>
        reward.id === action.payload.id ? action.payload : reward
      )
    }
  }
})

export const { addReward, removeReward, updateReward } = rewardsSlice.actions
export const selectRewards = state => state.rewards.rewards
export default rewardsSlice.reducer

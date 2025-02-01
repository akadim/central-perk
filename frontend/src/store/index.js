import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categoriesSlice'
import rewardsReducer from './rewardsSlice'
import customersReducer from './customersSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    rewards: rewardsReducer,
    customers: customersReducer
  }
})

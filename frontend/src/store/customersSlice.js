import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  customers: [
    {
      id: 1,
      name: 'Mike',
      image: 'images/mike.jpg'
    },
    {
      id: 2,
      name: 'Emily',
      image: 'images/emily.jpg'
    },
    {
      id: 3,
      name: 'Rachel',
      image: 'images/rachel.jpg'
    },
    {
      id: 4,
      name: 'Chandler',
      image: 'images/chandler.jpg'
    }
  ],
  status: 'idle',
  error: null
}

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {}
})

export const selectCustomers = state => state.customers.customers
export default customersSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const storage = createSlice({
  name: 'store',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state
    },
    pushdata: (state, action) => {
      state.value.push(action.payload) 
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
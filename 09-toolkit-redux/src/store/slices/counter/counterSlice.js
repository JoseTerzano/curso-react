import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { contador: 10 },
  reducers: {
    increment: (state) => {
      state.contador += 1
    },
    decrement: (state) => {
      state.contador -= 1
    },
    incrementBy: (state, action) => {
      state.contador += action.payload
    }
  },
})

export const { increment, decrement, incrementBy } = counterSlice.actions
// el action recibe que tiene un argumento y el payload es lo que tiene dentro

import { createSlice } from '@reduxjs/toolkit'
import * as thunks from './thunks/exports';
import { ExampleSlice } from './types';

const initialState: ExampleSlice = {
  data: {},
  exists: false,
  waiting: true
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    reset: (state) => {
      state.exists = initialState.exists
      state.waiting = initialState.waiting
      state.data = initialState.data
    },
  },
  extraReducers: (builder) => {
    //load
    builder.addCase(thunks.load.fulfilled, (state) => {
      state.waiting = false
      state.exists = true
    })
    builder.addCase(thunks.load.rejected, (state) => {
      state.waiting = false
      state.exists = false
    })
    builder.addCase(thunks.load.pending, (state) => {
      state.waiting = true
    })
  },
})

const exampleActions = {
  ...exampleSlice.actions,
  ...thunks
}
const exampleReducer = exampleSlice.reducer

export { exampleActions, exampleReducer }
export type { ExampleSlice }

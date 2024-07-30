// ** Toolkit
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import authReducer from './auth'

export const store = configureStore({
  reducer: {
    authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

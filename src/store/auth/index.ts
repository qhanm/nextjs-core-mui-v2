import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LOADING_STATUS_ENUM } from 'enums'
import { serviceName, signUpAction } from './action'
import { TErrorResponse } from 'types/common'
import { error } from 'console'

const initialState = {
  status: LOADING_STATUS_ENUM.IDLE,
  errorCode: null
}

export const AuthSlice = createSlice({
  name: serviceName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpAction.pending, (state, action) => {
      state.status = LOADING_STATUS_ENUM.LOADING
    })
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      state.status = LOADING_STATUS_ENUM.SUCCEEDED
    })
    builder.addCase(signUpAction.rejected, (state, action) => {
      state.status = LOADING_STATUS_ENUM.FAILED
      state.errorCode = action.error.message
    })
  }
})

export const {} = AuthSlice.actions

export default AuthSlice.reducer

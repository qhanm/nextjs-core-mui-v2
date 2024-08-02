import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LOADING_STATUS_ENUM } from 'enums'
import { serviceName, signUpAction, signUpResendOtp, signUpVerifyOtp } from './action'
import { TErrorResponse } from 'types/common'
import { error } from 'console'
import { verify } from 'crypto'

const initialState = {
  //
  status: LOADING_STATUS_ENUM.IDLE,
  errorCode: null,

  //
  resendStatus: LOADING_STATUS_ENUM.IDLE,
  resendStatusErrorCode: null,

  verifyOtpStatus: LOADING_STATUS_ENUM.IDLE,
  verifyOtpErrorCode: null
}

export const AuthSlice = createSlice({
  name: serviceName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    // sign up submit form
    builder.addCase(signUpAction.pending, (state, action) => {
      state.status = LOADING_STATUS_ENUM.LOADING
      state.errorCode = null
    })
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      state.status = LOADING_STATUS_ENUM.SUCCEEDED
      state.errorCode = null
    })
    builder.addCase(signUpAction.rejected, (state, action) => {
      state.status = LOADING_STATUS_ENUM.FAILED
      state.errorCode = action.error.message
    })

    // sign up verify otp
    builder.addCase(signUpVerifyOtp.pending, (state, action) => {
      state.verifyOtpStatus = LOADING_STATUS_ENUM.LOADING
      state.verifyOtpErrorCode = null
    })
    builder.addCase(signUpVerifyOtp.fulfilled, (state, action) => {
      state.verifyOtpStatus = LOADING_STATUS_ENUM.SUCCEEDED
      state.verifyOtpErrorCode = null
    })
    builder.addCase(signUpVerifyOtp.rejected, (state, action) => {
      state.verifyOtpStatus = LOADING_STATUS_ENUM.FAILED
      state.verifyOtpErrorCode = action.error.message
    })
  }
})

export const {} = AuthSlice.actions

export default AuthSlice.reducer

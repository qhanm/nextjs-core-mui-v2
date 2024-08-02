import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from 'services/auth-service'
import { TFormSignUp, TOtpFormProps } from 'types/auth'

export const serviceName = 'auth'

export const signUpAction = createAsyncThunk(`${serviceName}/sign-up`, async (data: TFormSignUp) => {
  const response = await AuthService.signUp(data)
  return response
})

export const signUpResendOtp = createAsyncThunk(
  `${serviceName}/sign-up/resend-otp`,
  async (data: Pick<TOtpFormProps, 'email'>) => {
    const response = await AuthService.signUpResendOtp(data)
    return response
  }
)

export const signUpVerifyOtp = createAsyncThunk(`${serviceName}/sign-up/verify-otp`, async (data: TOtpFormProps) => {
  const response = await AuthService.signUpVerifyOtp(data)
  return response
})

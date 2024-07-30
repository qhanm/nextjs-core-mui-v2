import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from 'services/auth-service'
import { TFormSignUp } from 'types/auth'

export const serviceName = 'auth'

export const signUp = createAsyncThunk(`${serviceName}/sign-up`, async (data: TFormSignUp) => {
  const response = await AuthService.signUp(data)
  return response
})

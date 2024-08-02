import { API_ENDPOINT } from 'configs/api'
import instanceAxios from 'helpers/axios'
import { TFormSignUp, TOtpFormProps } from 'types/auth'

export const AuthService = {
  signUp: async (formData: TFormSignUp) => {
    return await instanceAxios.post(API_ENDPOINT.AUTH.SIGN_UP, formData)
  },

  signUpResendOtp: async (formData: Pick<TOtpFormProps, 'email'>) => {
    return await instanceAxios.post(API_ENDPOINT.AUTH.SIGN_UP_RESEND_OTP, formData)
  },

  signUpVerifyOtp: async (formData: TOtpFormProps) => {
    return await instanceAxios.post(API_ENDPOINT.AUTH.SIGN_UP_VERIFY_OTP, formData)
  }
}

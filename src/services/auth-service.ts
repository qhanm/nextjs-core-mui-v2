import { API_ENDPOINT } from 'configs/api'
import instanceAxios from 'helpers/axios'
import { TFormSignUp } from 'types/auth'

export const AuthService = {
  signUp: async (formData: TFormSignUp) => {
    return await instanceAxios.post(API_ENDPOINT.AUTH.SIGN_UP, formData)
  }
}
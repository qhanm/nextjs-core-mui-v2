import { ENVIRONMENT } from './environment'

export const BASE_URL = ENVIRONMENT.API_URL + '/api'

export const API_ENDPOINT = {
  AUTH: {
    INDEX: '/auth',
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
    SIGN_UP_RESEND_OTP: '/auth/sign-up/resend-otp',
    SIGN_UP_VERIFY_OTP: '/auth/sign-up/verify-otp'
  }
}

import { ENVIRONMENT } from './environment'

export const BASE_URL = ENVIRONMENT.API_URL + '/api'

export const API_ENDPOINT = {
  AUTH: {
    INDEX: '/auth',
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up'
  }
}

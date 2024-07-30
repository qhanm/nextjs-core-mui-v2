import { ENVIRONMENT } from './environment'
console.log(ENVIRONMENT)
export const BASE_URL = ENVIRONMENT.API_URL + '/api'

export const API_ENDPOINT = {
  AUTH: {
    INDEX: BASE_URL + '/auth',
    SIGN_IN: BASE_URL + '/auth/sign-in',
    SIGN_UP: BASE_URL + '/auth/sign-up'
  }
}

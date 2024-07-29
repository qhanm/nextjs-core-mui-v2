'use client'

import axios from 'axios'
import { ENVIRONMENT } from 'configs/environment'
import { ReactNode, useEffect } from 'react'

const instanceAxios = axios.create({
  baseURL: ENVIRONMENT.API_URL + '/api',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})

const AxiosInterceptor = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // const reqInterceptor = instanceAxios.interceptors.request.use(async config => {
    //   return config
    // })
    // const resInterceptor = instanceAxios.interceptors.response.use(response => {
    //   return response
    // })
    // return () => {
    //   instanceAxios.interceptors.request.eject(reqInterceptor)
    //   instanceAxios.interceptors.response.eject(resInterceptor)
    // }
  }, [])
  return <>{children}</>
}

export default instanceAxios
export { AxiosInterceptor }

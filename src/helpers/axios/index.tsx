'use client'

import axios from 'axios'
import { ReactNode, useEffect } from 'react'

const instanceAxios = axios.create({ baseURL: 'https://669f16b2b132e2c136fcaf02.mockapi.io/api/users' })

const AxiosInterceptor = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const reqInterceptor = instanceAxios.interceptors.request.use(async config => {
      return config
    })

    const resInterceptor = instanceAxios.interceptors.response.use(response => {
      return response
    })

    return () => {
      instanceAxios.interceptors.request.eject(reqInterceptor)
      instanceAxios.interceptors.response.eject(resInterceptor)
    }
  }, [])
  return <>{children}</>
}

export default instanceAxios
export { AxiosInterceptor }

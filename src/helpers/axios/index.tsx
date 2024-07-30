'use client'

import axios, { AxiosError } from 'axios'
import Component from 'components'
import { ENVIRONMENT } from 'configs'
import { ReactNode, useEffect, useState } from 'react'

const instanceAxios = axios.create({
  baseURL: ENVIRONMENT.API_URL + '/api',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})

const AxiosInterceptor = ({ children }: { children: ReactNode }) => {
  const [serverError, setServerError] = useState(false)

  useEffect(() => {
    const reqInterceptor = instanceAxios.interceptors.request.use(async config => {
      return config
    })
    const resInterceptor = instanceAxios.interceptors.response.use(
      response => {
        return response
      },
      (error: AxiosError<any>) => {
        if (error.response.status === 500) {
          setServerError(true)
        }
        return Promise.reject(error.response.data)
      }
    )
    return () => {
      instanceAxios.interceptors.request.eject(reqInterceptor)
      instanceAxios.interceptors.response.eject(resInterceptor)
    }
  }, [])

  useEffect(() => {
    if (serverError) {
      setTimeout(() => {
        setServerError(false)
      }, 5000)
    }
  }, [serverError])

  return (
    <>
      <Component.Alert
        open={serverError}
        setOpen={() => setServerError(false)}
        description='An error occurred during processing, please try again later.'
        title='Server Internal Error'
      />
      {children}
    </>
  )
}

export default instanceAxios
export { AxiosInterceptor }

'use client'

// ** React
import { useEffect, useState } from 'react'

// ** Next
import { useRouter } from 'next/navigation'

// ** Redux
import { useAppDispatch } from '@core/hooks/useAppDispatch'
import { useAppSelector } from '@core/hooks/useAppSelector'
import { RootState } from 'store'

// ** React form
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

// ** Mui
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, BoxProps, styled, Typography } from '@mui/material'

// ** Component
import Component from 'components'

// ** Translation
import { useTranslations } from 'next-intl'
import { signUpResendOtp, signUpVerifyOtp } from 'store/auth/action'

// ** Type
import { TOtpFormProps } from 'types/auth'

// ** Enum
import { ROUTE_CONFIGS } from 'configs'
import { LOADING_STATUS_ENUM } from 'enums'

const defaultValues: TOtpFormProps = {
  otp: '',
  email: ''
}

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => {
  return {
    width: '100%',

    '& .MuiFormControl-root': {
      marginTop: 0,
      marginBottom: 0
    }
  }
})

function ButtonCountDown({ email }: { email: string }) {
  const COUNT_TIMER = 10

  const { resendStatus } = useAppSelector((state: RootState) => state.authReducer)

  // Dispatch
  const dispatch = useAppDispatch()

  // State
  const [timer, setTimer] = useState(COUNT_TIMER)
  const [timeInterval, setTimeInterval] = useState(null)
  const [isResend, setIsResend] = useState(false)

  const startTimer = () => {
    setTimeInterval(
      setInterval(() => {
        setTimer(t => t - 1)
      }, 1000)
    )
  }

  useEffect(() => {
    startTimer()
  }, [])

  useEffect(() => {
    if (resendStatus === LOADING_STATUS_ENUM.SUCCEEDED) {
      setIsResend(false)
      startTimer()
    }
  }, [resendStatus])

  useEffect(() => {
    if (timer <= 0) {
      setTimer(COUNT_TIMER)
      setIsResend(true)
      clearInterval(timeInterval)
    }
  }, [timeInterval, timer])

  const handleResendOtp = () => {
    dispatch(signUpResendOtp({ email }))
  }

  return (
    <LoadingButton
      variant='contained'
      type='submit'
      disabled={!isResend}
      sx={{ width: `${isResend ? '100px' : '160px'}`, textTransform: 'none', transition: 'width 0.5s' }}
      onClick={handleResendOtp}
      loading={resendStatus === LOADING_STATUS_ENUM.LOADING}
    >
      {isResend ? 'Resend' : `${timer} Resend`}
    </LoadingButton>
  )
}

export default function OtpInput({ email }: { email: string }) {
  // Router
  const router = useRouter()

  // Dispatch hook
  const dispatch = useAppDispatch()

  // Redux state
  const { resendStatus, verifyOtpStatus } = useAppSelector((state: RootState) => state.authReducer)

  // Translate
  const t = useTranslations('common')

  // Validation schema
  const schema = yup.object({
    otp: yup.string().required(t('validation.required', { name: 'OTP' }))
  })

  // Form hook
  const { handleSubmit, control } = useForm<TOtpFormProps>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver<any>(schema)
  })

  // Handle submit verify otp
  const onSubmit: SubmitHandler<TOtpFormProps> = async data => {
    dispatch(signUpVerifyOtp({ ...data, email }))
  }

  useEffect(() => {
    if (verifyOtpStatus === LOADING_STATUS_ENUM.SUCCEEDED) {
      setTimeout(() => {
        router.push(ROUTE_CONFIGS.AUTH.SIGN_IN)
      }, 5000)
    }
  }, [verifyOtpStatus])

  return (
    <Box mt={4} sx={{ width: '100%' }}>
      {resendStatus === LOADING_STATUS_ENUM.SUCCEEDED && (
        <Box sx={{ marginBottom: 2 }}>
          <Component.AlertInfo type='success' errorCode={'Send OTP success'} />
        </Box>
      )}

      {verifyOtpStatus === LOADING_STATUS_ENUM.SUCCEEDED && (
        <Box sx={{ marginBottom: 2 }}>
          <Component.AlertInfo
            type='success'
            errorCode={
              <Box>
                <Typography>Verify account success</Typography>
                <Component.Link href={ROUTE_CONFIGS.AUTH.SIGN_IN}>Go to sign in</Component.Link>
              </Box>
            }
          />
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box display='flex' flexDirection='column' gap={2}>
          <Box display='flex' alignItems='start' gap={1}>
            <BoxStyled>
              <Component.FormInputText name='otp' control={control} />
            </BoxStyled>

            <ButtonCountDown email={email} />
          </Box>
          <LoadingButton
            variant='contained'
            sx={{ textTransform: 'none' }}
            fullWidth
            type='submit'
            loading={verifyOtpStatus === LOADING_STATUS_ENUM.LOADING}
          >
            Verify
          </LoadingButton>
        </Box>
      </form>
    </Box>
  )
}

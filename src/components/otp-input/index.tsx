import { yupResolver } from '@hookform/resolvers/yup'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, BoxProps, styled } from '@mui/material'
import Component from 'components'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TOtpFormProps } from 'types/auth'
import * as yup from 'yup'

const defaultValues: TOtpFormProps = {
  otp: ''
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

function ButtonCountDown() {
  const COUNT_TIMER = 20
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

  //   const resetTimer = () => {
  //     setTimer(COUNT_TIMER)
  //     clearInterval(timeInterval)
  //   }

  useEffect(() => {
    startTimer()
  }, [])

  useEffect(() => {
    if (timer <= 0) {
      setTimer(COUNT_TIMER)
      setIsResend(true)
      clearInterval(timeInterval)
    }
  }, [timeInterval, timer])

  return (
    <LoadingButton
      variant='contained'
      type='submit'
      disabled={!isResend}
      sx={{ width: `${isResend ? '100px' : '128px'}`, textTransform: 'none', transition: 'width 0.5s' }}
    >
      {isResend ? 'Resend' : `${timer} Resend`}
    </LoadingButton>
  )
}

export default function OtpInput() {
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
    // dispatch(signUpAction(data))
  }

  return (
    <Box mt={4} sx={{ width: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box display='flex' flexDirection='column' gap={2}>
          <Box display='flex' alignItems='start' gap={1}>
            <BoxStyled>
              <Component.FormInputText name='otp' control={control} />
            </BoxStyled>

            {/* <LoadingButton variant='contained' sx={{ textTransform: 'none' }} type='submit'>
              Resend
            </LoadingButton> */}
            <ButtonCountDown />
          </Box>
          <LoadingButton variant='contained' sx={{ textTransform: 'none' }} fullWidth type='submit'>
            Verify
          </LoadingButton>
        </Box>
      </form>
    </Box>
  )
}

'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid, IconButton, InputAdornment, Stack } from '@mui/material'
import FormInputText from 'components/form-text-input'
import { useTranslations } from 'next-intl'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

// ** Mui Icon
import { useAppDispatch } from '@core/hooks/useAppDispatch'
import { useAppSelector } from '@core/hooks/useAppSelector'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Component from 'components'
import { REGEX } from 'configs/regex'
import { ERROR_CODE_ENUM, LOADING_STATUS_ENUM } from 'enums'
import { useState } from 'react'
import { RootState } from 'store'
import { signUpAction } from 'store/auth/action'
import { ROUTE_CONFIGS } from 'configs'
import { TFormSignUp } from 'types/auth'

const defaultValues: TFormSignUp = {
  email: 'qhnam.67@gmail.com',
  password: 'Nam123456!',
  confirmPassword: 'Nam123456!',
  name: 'Quách Nam'
}

export default function SignUpForm() {
  // Store
  const { status, errorCode } = useAppSelector((state: RootState) => state.authReducer)

  // Dispatch hook
  const dispatch = useAppDispatch()

  // Translate
  const t = useTranslations('signUp')
  const common = useTranslations('common')

  // State
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleToggleShowPassword = () => setShowPassword(!showPassword)
  const handleToggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

  // Yup Validation rule
  const schema = yup.object({
    name: yup.string().required(common('validation.required', { name: t('form.name.label') })),
    email: yup
      .string()
      .required()
      .email(common('validation.mustEmail', { name: t('form.email.label') })),
    password: yup
      .string()
      .required(common('validation.required', { name: t('form.password.label') }))
      .matches(REGEX.PASSWORD, common('validation.passwordInvalid')),
    confirmPassword: yup
      .string()
      .required(common('validation.required', { name: t('form.confirmPassword.label') }))
      .oneOf([yup.ref('password'), ''], common('validation.passwordNotMatch'))
  })

  // Form hook
  const { handleSubmit, control, getValues } = useForm<TFormSignUp>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver<any>(schema)
  })

  // Handle submit sign up
  const onSubmit: SubmitHandler<TFormSignUp> = async data => {
    dispatch(signUpAction(data))
  }

  return (
    <>
      {errorCode === ERROR_CODE_ENUM.ACCOUNT_ALREADY_EXISTS ? (
        <Component.OtpInput email={getValues('email')} />
      ) : (
        <Box>
          <Component.Spinning open={status === LOADING_STATUS_ENUM.LOADING} />
          <Component.AlertInfo errorCode={errorCode} />

          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormInputText name='name' control={control} label={t('form.name.label')} />
            <FormInputText name='email' control={control} label={t('form.email.label')} />

            <Grid container spacing={{ md: 2, xs: 2.5 }} style={{ marginTop: 0 }}>
              <Grid item xs={12} md={6}>
                <FormInputText
                  name='password'
                  control={control}
                  label={t('form.password.label')}
                  inputProps={{
                    type: showPassword ? 'text' : 'password',
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton edge='end' onClick={handleToggleShowPassword}>
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormInputText
                  name='confirmPassword'
                  control={control}
                  label={t('form.confirmPassword.label')}
                  inputProps={{
                    type: showConfirmPassword ? 'text' : 'password',
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton edge='end' onClick={handleToggleShowConfirmPassword}>
                            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Grid>
            </Grid>

            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              {t('btn.signUp')}
            </Button>
          </form>

          <Grid container>
            <Grid item>
              <Component.Link href={ROUTE_CONFIGS.AUTH.SIGN_IN}>{t('signInLink')}</Component.Link>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}

'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid, IconButton, InputAdornment } from '@mui/material'
import FormInputText from 'components/form-text-input'
import { useTranslations } from 'next-intl'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

// ** Mui Icon
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
import { REGEX } from 'configs/regex'
import { ENVIRONMENT } from 'configs/environment'
import { AuthService } from 'services/auth-service'

type TFormInputProps = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const defaultValues: TFormInputProps = {
  email: '',
  password: '',
  confirmPassword: '',
  name: ''
}

export default function SignUpForm() {
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
  const { register, handleSubmit, control } = useForm<TFormInputProps>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver<any>(schema)
  })
  const onSubmit: SubmitHandler<TFormInputProps> = async data => {
    try {
      const res = await AuthService.signUp(data)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box>
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
    </Box>
  )
}

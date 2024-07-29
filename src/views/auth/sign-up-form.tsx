'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid } from '@mui/material'
import FormInputText from 'components/form-text-input'
import { useTranslations } from 'next-intl'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

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
  const t = useTranslations('sign-up.form')
  const common = useTranslations('common')
  const schema = yup.object({
    name: yup.string().required(common('validation.required', { name: t('name.label') })),
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), ''], 'Password not match')
  })

  const { register, handleSubmit, control } = useForm<TFormInputProps>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver<any>(schema)
  })
  const onSubmit: SubmitHandler<TFormInputProps> = data => console.log(data)

  return (
    <Box>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} method='post' noValidate>
        <FormInputText name='name' control={control} label={t('name.label')} />
        <FormInputText name='email' control={control} label={t('email.label')} />

        <Grid container spacing={{ md: 2, xs: 2 }} style={{ marginTop: 0 }}>
          <Grid item xs={12} md={6}>
            <FormInputText
              name='password'
              control={control}
              label={t('password.label')}
              inputProps={{ type: 'password' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInputText
              name='confirmPassword'
              control={control}
              label={t('confirmPassword.label')}
              inputProps={{ type: 'password' }}
            />
          </Grid>
        </Grid>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </form>
    </Box>
  )
}

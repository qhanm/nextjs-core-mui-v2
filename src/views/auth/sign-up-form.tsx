'use client'
import { Box, Button, Grid } from '@mui/material'
import FormInputText from 'components/form-text-input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSettingContext } from 'hooks/useSettingContext'
import { getDictionary } from 'app/[lang]/dictionaries'

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

export default function SignUpForm({
  dictionary
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['signUp']
}) {
  const { language } = useSettingContext()
  console.log('tr', dictionary)

  const schema = yup.object({
    name: yup.string().required(dictionary.name.required),
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), ''], 'Password not match')
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TFormInputProps>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver<any>(schema)
  })
  const onSubmit: SubmitHandler<TFormInputProps> = data => console.log(data)

  return (
    <Box>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} method='post' noValidate>
        <FormInputText name='name' control={control} label={dictionary.name.label} />
        <FormInputText name='email' control={control} label={dictionary.email.label} />

        <Grid container spacing={{ md: 2, xs: 2 }} style={{ marginTop: 0 }}>
          <Grid item xs={12} md={6}>
            <FormInputText
              name='password'
              control={control}
              label={dictionary.password.label}
              inputProps={{ type: 'password' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInputText
              name='confirmPassword'
              control={control}
              label={dictionary.confirmPassword.label}
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

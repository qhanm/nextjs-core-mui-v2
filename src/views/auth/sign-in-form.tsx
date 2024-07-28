'use client'

import { Button, Grid } from '@mui/material'
import CoreComponent from 'components'
import FormInputText from 'components/form-text-input'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type TFormInputProps = {
  email: string
  password: string
}

export default function SignInForm() {
  const { register, handleSubmit, control } = useForm<TFormInputProps>()
  const onSubmit: SubmitHandler<TFormInputProps> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInputText name='email' control={control} label='Email' />

      <CoreComponent.TextInput id='email' label='Email' margin='normal' required />
      <Grid container spacing={{ md: 2, xs: 0 }}>
        <Grid item xs={12} md={6}>
          <CoreComponent.TextInput id='password' label='Password' margin='normal' required />
        </Grid>
        <Grid item xs={12} md={6}>
          <CoreComponent.TextInput id='confirm_password' label='Confirm Password' margin='normal' required />
        </Grid>
      </Grid>
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
    </form>
  )
}

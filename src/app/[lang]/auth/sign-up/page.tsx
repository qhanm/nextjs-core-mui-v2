import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Grid, Link, Paper, Typography } from '@mui/material'
import { getDictionary } from 'app/[lang]/dictionaries'
import AuthLayout from 'layouts/auth'
import SignUpForm from 'views/auth/sign-up-form'

export default async function SignIn({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  return (
    <AuthLayout>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box sx={{ mt: 1 }}>
            <SignUpForm dictionary={dictionary.signUp.form} />
            {/* <CoreComponent.TextInput id='name' label='Fullname' margin='normal' required />
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
            </Button> */}
            <Grid container>
              <Grid item>
                <Link href='/auth/sign-in' variant='body2'>
                  {'Do you already have an account?'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </AuthLayout>
  )
}

import CoreComponent from '@core/components'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, FormControlLabel, Grid, Link, Paper, Typography } from '@mui/material'
import AuthLayout from 'layouts/auth'

export default function SignIn() {
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
            Sign in
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <CoreComponent.TextInput id='email' label='Email' margin='normal' />
            <CoreComponent.TextInput id='password' label='Password' margin='normal' />

            <FormControlLabel control={<CoreComponent.Checkbox value='remember' />} label='Remember me' />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/auth/sign-up' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </AuthLayout>
  )
}

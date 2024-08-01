import AuthLayout from '@core/layouts/auth'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import SignUpForm from 'views/auth/sign-up-form'

export default function SignIn() {
  const t = useTranslations('signUp')

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
            {t('title')}
          </Typography>
          <Box sx={{ mt: 1, width: '100%' }}>
            <SignUpForm />
          </Box>
        </Box>
      </Grid>
    </AuthLayout>
  )
}

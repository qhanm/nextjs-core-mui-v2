// ** React
import { ReactNode } from 'react'

// ** Mui
import { Box, Container } from '@mui/material'

// ** Component
import Header from './header'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box>
        <Header />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          {/* <Toolbar /> */}
          <Container sx={{ mt: 4, mb: 4 }}>{children}</Container>
        </Box>
      </Box>
    </>
  )
}

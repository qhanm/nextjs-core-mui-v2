import Box, { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function FallbackSpinner({ sx }: { sx?: BoxProps['sx'] }) {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

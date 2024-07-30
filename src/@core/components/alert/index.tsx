import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import MuiModal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/system'

type TModalProps = {
  open: boolean
  setOpen?: () => void
  title: string
  description: string
  style?: SxProps<Theme>
}

export default function Alert(props: TModalProps) {
  const { open, setOpen, title, description, style = {} } = props

  const styleDefault = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  return (
    <MuiModal
      keepMounted
      open={open}
      onClose={() => {
        setOpen?.()
      }}
      aria-labelledby='keep-mounted-modal-title'
      aria-describedby='keep-mounted-modal-description'
    >
      <Box sx={{ ...styleDefault, ...style }}>
        <Typography id='keep-mounted-modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography id='keep-mounted-modal-description' sx={{ mt: 2 }}>
          {description}
        </Typography>
      </Box>
    </MuiModal>
  )
}

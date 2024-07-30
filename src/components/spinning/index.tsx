import { Backdrop, CircularProgress } from '@mui/material'

type TSpiningProps = {
  open: boolean
  handleClose?: () => void
}

export default function Spinning({ open, handleClose }: TSpiningProps) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

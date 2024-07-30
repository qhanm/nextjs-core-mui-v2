// ** MUI
import { Theme } from '@mui/material/styles'

export default function GlobalStyles(theme: Theme) {
  return {
    body: {
      margin: '0px !important',
      padding: '0px !important'
    },
    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        left: 0,
        top: 0,
        height: 3,
        width: '100%',
        zIndex: 2000,
        position: 'fixed'
        // backgroundColor: theme.palette.primary.main
      }
    },
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
      {
        WebkitBoxShadow: '0 0 0 30px white inset !important'
      }
  }
}

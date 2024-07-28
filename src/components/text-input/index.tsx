'use client'
import { styled, TextField, TextFieldProps } from '@mui/material'

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => {
  return {
    '& .MuiInputLabel-root': {
      transform: 'none',
      lineHeight: 1.2,
      position: 'relative',
      marginBottom: theme.spacing(1),
      fontSize: '1rem',
      border: 'none',
      color: theme.palette.text.primary
    },
    '& .MuiInputBase-root': {
      height: '40px',
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 8
    },
    '& .MuiInputBase-input': {
      padding: '0px 8px'
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'white',
      '&:before, &:after, :hover:not(.Mui-disabled, .Mui-error):before': {
        border: 'none'
      }
    },
    '& .MuiFormHelperText-root': {
      marginLeft: '0px',
      color: theme.palette.error.main
    },
    '& .Mui-error': {
      borderColor: theme.palette.error.main
    }
  }
})

export default function TextInput(props: TextFieldProps) {
  const { fullWidth = true, size = 'small', InputLabelProps, variant = 'filled', ...rests } = props

  return (
    <TextFieldStyled fullWidth variant={variant} InputLabelProps={{ ...InputLabelProps, shrink: true }} {...rests} />
  )
}

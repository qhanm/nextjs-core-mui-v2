'use client'
import { styled, TextField, TextFieldProps } from '@mui/material'

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => {
  return {
    '& .MuiInputLabel-root': {
      transform: 'none',
      lineHeight: 1.2,
      position: 'relative',
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.body2.fontSize,
      border: 'none'
    },

    '& .MuiInputBase-root': {
      height: '40px',
      border: `1px solid ${theme.palette.success.main}`,
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
    }
  }
})

export default function TextInput(props: TextFieldProps) {
  const { fullWidth = true, size = 'small', InputLabelProps, variant = 'filled', ...rests } = props

  return (
    <TextFieldStyled fullWidth variant={variant} InputLabelProps={{ ...InputLabelProps, shrink: true }} {...rests} />
  )
}
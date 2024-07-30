'use client'
import { Checkbox as MuiCheckbox, CheckboxProps, styled } from '@mui/material'

const MuiCheckboxStyled = styled(MuiCheckbox)<CheckboxProps>(({ theme }) => {
  return {
    '&.MuiCheckbox-root': {
      color: `${theme.palette.primary.main}`
    }
  }
})

export default function Checkbox(props: CheckboxProps) {
  return <MuiCheckboxStyled {...props} />
}

'use server'

// ** Mui
import ContrastIcon from '@mui/icons-material/Contrast'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton } from '@mui/material'

// ** Config
import LOCAL_KEY from 'configs/storage'
import THEME from 'configs/theme'

// ** Helper
import CookieHelper from 'helpers/cookie'

// ** Type
import { ITheme } from 'types/common'

export default async function SwitchTheme() {
  const theme: ITheme = CookieHelper.getTheme()

  const changeTheme = async () => {
    'use server'
    CookieHelper.set(LOCAL_KEY.THEME, theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
  }

  return (
    <form action={changeTheme}>
      <IconButton type='submit'>{theme === THEME.DARK ? <ContrastIcon /> : <LightModeIcon />}</IconButton>
    </form>
  )
}

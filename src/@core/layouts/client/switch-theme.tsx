'use server'

// ** Mui
import ContrastIcon from '@mui/icons-material/Contrast'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton } from '@mui/material'

// ** Config
import LOCAL_KEY from 'configs/storage'
import { THEME_ENUM } from 'enums'

// ** Helper
import CookieHelper from 'helpers/cookie'

export default async function SwitchTheme() {
  const theme: THEME_ENUM = CookieHelper.getTheme()

  const changeTheme = async () => {
    'use server'
    CookieHelper.set(LOCAL_KEY.THEME, theme === THEME_ENUM.DARK ? THEME_ENUM.LIGHT : THEME_ENUM.DARK)
  }

  return (
    <form action={changeTheme}>
      <IconButton type='submit'>{theme === THEME_ENUM.DARK ? <ContrastIcon /> : <LightModeIcon />}</IconButton>
    </form>
  )
}

'use client'

// ** React
import React from 'react'

// ** Next
import { useRouter } from 'next/navigation'

// ** Mui
import TranslateIcon from '@mui/icons-material/Translate'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { LANGUAGE_ENUM } from 'enums'
import { SwitchLanguageAction } from './action'

// ** Config

// ** Languages
const settings = [
  {
    label: 'English',
    value: LANGUAGE_ENUM.EN
  },
  {
    label: 'Việt Nam',
    value: LANGUAGE_ENUM.VI
  }
]

export default function SwitchLanguage() {
  const router = useRouter()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleChangeLanguage = async lang => {
    if (Object.values(LANGUAGE_ENUM).includes(lang)) {
      const paths = window.location.pathname.split('/')

      if (paths.length > 1 && Object.values(LANGUAGE_ENUM).includes(paths[1] as LANGUAGE_ENUM)) {
        await SwitchLanguageAction(lang)
        paths[1] = lang
        router.push(paths.join('/'))
      }
    }
    setAnchorElUser(null)
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu}>
        <TranslateIcon />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleChangeLanguage}
      >
        {settings.map(setting => (
          <MenuItem key={setting.value} onClick={() => handleChangeLanguage(setting.value)}>
            <Typography textAlign='center'>{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

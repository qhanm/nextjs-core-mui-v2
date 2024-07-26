'use client'

// ** React
import React from 'react'

// ** Next
import { useRouter } from 'next/navigation'

// ** Mui
import TranslateIcon from '@mui/icons-material/Translate'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'

// ** Config
import COMMON from 'configs/common'

// ** Languages
const settings = [
  {
    label: 'English',
    value: COMMON.LANGUAGE.EN
  },
  {
    label: 'Việt Nam',
    value: COMMON.LANGUAGE.VI
  }
]

export default function SwitchLanguage() {
  const router = useRouter()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleChangeLanguage = lang => {
    if (COMMON.LANGUAGES.includes(lang)) {
      const paths = window.location.pathname.split('/')

      if (paths.length > 1 && COMMON.LANGUAGES.includes(paths[1])) {
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

'use client'

// ** mui
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'

import GlobalStyling from './global-styles'
// ** React
import React from 'react'
import { createCustomTheme } from './custom-theme'
import { SettingConsumer } from '@core/contexts/setting-content'

type IProps = {
  children: React.ReactNode
}

const ThemeComponent = ({ children }: IProps) => {
  return (
    <SettingConsumer>
      {({ theme }) => {
        const customTheme = createCustomTheme(theme)
        return (
          <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <GlobalStyles styles={() => GlobalStyling(customTheme) as any} />
            {children}
          </ThemeProvider>
        )
      }}
    </SettingConsumer>
  )
}

export default ThemeComponent

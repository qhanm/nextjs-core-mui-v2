'use client'

import { TRootSetting } from 'app/layout'
import FallbackSpinner from 'components/fallback-spinner/fallback-spinner'
import COMMON from 'configs/common'
import LOCAL_KEY from 'configs/storage'
import THEME from 'configs/theme'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { ITheme } from 'types/common'
import Storage from 'utils/storage'

type IValueContext = {
  theme: ITheme
  saveTheme: (theme: ITheme) => void
  language: string
}

const initialValuesContext: IValueContext = {
  theme: THEME.LIGHT,
  saveTheme: (theme: ITheme) => {},
  language: COMMON.LANGUAGE.VI
}

export const SettingContext = createContext<IValueContext>({ ...initialValuesContext })

export const SettingProvider = ({ children, setting }: { children: ReactNode; setting: TRootSetting }) => {
  const [theme, setTheme] = useState<ITheme>(initialValuesContext.theme)

  const saveTheme = (theme: ITheme) => {
    setTheme(theme)
    Storage.setItem(LOCAL_KEY.THEME, theme)
  }

  return (
    <SettingContext.Provider value={{ theme: setting.theme, saveTheme, language: setting.language }}>
      {children}
    </SettingContext.Provider>
  )
}

export const SettingConsumer = SettingContext.Consumer

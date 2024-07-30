'use client'

import { TRootSetting } from 'app/layout'
import LOCAL_KEY from 'configs/storage'
import { LANGUAGE_ENUM, THEME_ENUM } from 'enums'
import { createContext, ReactNode, useState } from 'react'
import Storage from 'utils/storage'

type IValueContext = {
  theme: THEME_ENUM
  saveTheme: (theme: THEME_ENUM) => void
  language: string
}

const initialValuesContext: IValueContext = {
  theme: THEME_ENUM.LIGHT,
  saveTheme: (theme: THEME_ENUM) => {},
  language: LANGUAGE_ENUM.VI
}

export const SettingContext = createContext<IValueContext>({ ...initialValuesContext })

export const SettingProvider = ({ children, setting }: { children: ReactNode; setting: TRootSetting }) => {
  const [theme, setTheme] = useState<THEME_ENUM>(initialValuesContext.theme)

  const saveTheme = (theme: THEME_ENUM) => {
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

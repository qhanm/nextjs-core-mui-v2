'use client'

import { TRootSetting } from 'app/layout'
import FallbackSpinner from 'components/fallback-spinner'
import LOCAL_KEY from 'configs/storage'
import THEME from 'configs/theme'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { ITheme } from 'types/common'
import Storage from 'utils/storage'

type IValueContext = {
  theme: ITheme
  saveTheme: (theme: ITheme) => void
}

const initialValuesContext: IValueContext = {
  theme: THEME.LIGHT,
  saveTheme: (theme: ITheme) => {}
}

export const SettingContext = createContext<IValueContext>({ ...initialValuesContext })

export const SettingProvider = ({ children, setting }: { children: ReactNode; setting: TRootSetting }) => {
  const [theme, setTheme] = useState<ITheme>(initialValuesContext.theme)
  const [loader, setLoader] = useState(false)

  // useEffect(() => {
  //   const themeStorage = Storage.getItem(LOCAL_KEY.THEME) as THEME
  //   setTheme(Object.values(THEME).includes(themeStorage as THEME) ? themeStorage : THEME.LIGHT)
  //   setLoader(true)
  // }, [])

  const saveTheme = (theme: ITheme) => {
    setTheme(theme)
    Storage.setItem(LOCAL_KEY.THEME, theme)
  }

  // if (!loader) {
  //   return <FallbackSpinner />
  // }

  return <SettingContext.Provider value={{ theme: setting.theme, saveTheme }}>{children}</SettingContext.Provider>
}

export const SettingConsumer = SettingContext.Consumer

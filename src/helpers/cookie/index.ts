import COMMON from 'configs/common'
import LOCAL_KEY from 'configs/storage'
import THEME from 'configs/theme'
import { cookies } from 'next/headers'
import { ITheme } from 'types/common'

const getTheme = (): ITheme => {
  if (cookies().has(LOCAL_KEY.THEME) && Object.values(THEME).includes(cookies().get(LOCAL_KEY.THEME).value as ITheme)) {
    return cookies().get(LOCAL_KEY.THEME).value as ITheme
  }

  return THEME.LIGHT
}

const getLangue = () => {
  console.log('check', {
    has: cookies().has(LOCAL_KEY.LANG)
  })
  if (cookies().has(LOCAL_KEY.LANG) && COMMON.LANGUAGES.includes(cookies().get(LOCAL_KEY.LANG).value)) {
    return cookies().get(LOCAL_KEY.LANG).value
  }

  return COMMON.LANGUAGE.VI
}

const set = (key: string, value: any) => {
  cookies().set(key, value)
}

const CookieHelper = { getTheme, set, getLangue }
export default CookieHelper

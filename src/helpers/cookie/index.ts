import LOCAL_KEY from 'configs/storage'
import { LANGUAGE_ENUM, THEME_ENUM } from 'enums'
import { cookies } from 'next/headers'

const getTheme = (): THEME_ENUM => {
  if (
    cookies().has(LOCAL_KEY.THEME) &&
    Object.values(THEME_ENUM).includes(cookies().get(LOCAL_KEY.THEME).value as THEME_ENUM)
  ) {
    return cookies().get(LOCAL_KEY.THEME).value as THEME_ENUM
  }

  return THEME_ENUM.LIGHT
}

const getLangue = () => {
  if (
    cookies().has(LOCAL_KEY.LANG) &&
    Object.values(LANGUAGE_ENUM).includes(cookies().get(LOCAL_KEY.LANG).value as LANGUAGE_ENUM)
  ) {
    return cookies().get(LOCAL_KEY.LANG).value
  }

  return LANGUAGE_ENUM.VI
}

const set = (key: string, value: any) => {
  cookies().set(key, value)
}

const CookieHelper = { getTheme, set, getLangue }
export default CookieHelper

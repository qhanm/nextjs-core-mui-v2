'use server'

import { LOCAL_KEY } from 'configs'
import CookieHelper from 'helpers/cookie'

export async function SwitchLanguageAction(lang) {
  CookieHelper.set(LOCAL_KEY.LANG, lang)
}

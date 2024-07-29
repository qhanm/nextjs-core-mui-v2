import CookieHelper from 'helpers/cookie'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = CookieHelper.getLangue()

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})

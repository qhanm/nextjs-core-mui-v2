import CookieHelper from 'helpers/cookie'
import { NextResponse, NextRequest } from 'next/server'

let locales = ['en', 'vi']

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('Accept-Language')

  let preferredLocale = 'en'

  if (acceptLanguage) {
    const languages = acceptLanguage.split(',').map(lang => lang.trim().split(';')[0])

    for (let lang of languages) {
      if (locales.includes(lang)) {
        preferredLocale = lang
        break
      }

      const languageCode = lang.split('-')[0]
      if (locales.includes(languageCode)) {
        preferredLocale = languageCode
        break
      }
    }
  }

  return preferredLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const patchNameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (patchNameHasLocale) return

  const locale = CookieHelper.getLangue()

  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

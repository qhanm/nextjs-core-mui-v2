import { LANGUAGE_ENUM } from 'enums'
import CookieHelper from 'helpers/cookie'
import { NextResponse, NextRequest } from 'next/server'

let locales = Object.values(LANGUAGE_ENUM) as Array<LANGUAGE_ENUM>

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

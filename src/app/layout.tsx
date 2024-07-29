// ** Next
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Suspense } from 'react'

// ** Mui
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

// ** Context
import { SettingProvider } from 'contexts/setting-content'

// ** Helper
import { AxiosInterceptor } from 'helpers/axios'

// ** HOC
import LoaderWrapper from 'hocs/LoaderWrapper'

// ** Type
import { ITheme } from 'types/common'

import CookieHelper from 'helpers/cookie'
import ThemeComponent from 'theme'
import COMMON from 'configs/common'

import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'NQH',
  description: 'Generated by create next app'
}

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

export type TRootSetting = {
  theme: ITheme
  language: 'vi' | 'en'
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: any
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  let setting: TRootSetting = {
    theme: CookieHelper.getTheme(),
    language: params?.lang ?? COMMON.LANGUAGE.VI
  }

  return (
    <html lang={params.lang} className={roboto.className}>
      <body style={{ margin: 0, padding: 0 }}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <LoaderWrapper>
              <AxiosInterceptor>
                <SettingProvider setting={setting}>
                  <ThemeComponent>
                    <Suspense fallback={<>loading</>}>{children}</Suspense>
                  </ThemeComponent>
                </SettingProvider>
              </AxiosInterceptor>
            </LoaderWrapper>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

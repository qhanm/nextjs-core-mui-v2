'use client'

import { Alert } from '@mui/material'
import { ERROR_CODE_ENUM } from 'enums'
import { useTranslations } from 'next-intl'
import { ReactNode, useEffect, useMemo, useState } from 'react'

type TAlertInfoProps = {
  errorCode: ERROR_CODE_ENUM | string | ReactNode
  type?: 'error' | 'success'
}

export default function AlertInfo({ errorCode, type = 'error' }: TAlertInfoProps) {
  const t = useTranslations('common')
  const [hide, setHide] = useState(false)

  const errorContent = useMemo(() => {
    switch (errorCode) {
      case ERROR_CODE_ENUM.ACCOUNT_ALREADY_EXISTS:
        return t('errorCode.' + errorCode)
    }
    return errorCode
  }, [errorCode, t])

  useEffect(() => {
    setTimeout(() => {
      setHide(() => true)
    }, 5000)
  }, [])

  return !hide && errorContent && <Alert severity={type}>{errorContent}</Alert>
}

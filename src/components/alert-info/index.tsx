import { Alert, Typography } from '@mui/material'
import { ERROR_CODE_ENUM } from 'enums'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

type TAlertInfoProps = {
  errorCode: ERROR_CODE_ENUM
}

export default function AlertInfo({ errorCode }: TAlertInfoProps) {
  const t = useTranslations('common')

  const errorContent = useMemo(() => {
    switch (errorCode) {
      case ERROR_CODE_ENUM.ACCOUNT_ALREADY_EXISTS:
        return t('errorCode.' + errorCode)
    }
    return errorCode
  }, [errorCode, t])

  return errorContent && <Alert severity='error'>{errorContent}</Alert>
}

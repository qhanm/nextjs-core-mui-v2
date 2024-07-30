'use client'

import { HTMLProps, ReactNode } from 'react'

import NextLink, { LinkProps } from 'next/link'
import { useTheme } from '@mui/material'

type TLinkProps = LinkProps &
  HTMLProps<HTMLAnchorElement> & {
    children: ReactNode
  }
export default function Link(props: TLinkProps) {
  const { children, style, ...rest } = props
  const theme = useTheme()
  return (
    <NextLink
      style={{
        color: theme.palette.primary.main,
        ...style
      }}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

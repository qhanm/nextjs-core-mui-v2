'use client'

import { usePathname } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function LoaderWrapper({ children }: { children: ReactNode }) {
  const patchName = usePathname()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleComplete = () => {
      NProgress.done()
    }
    handleComplete()

    return () => {
      handleStart()
    }
  }, [patchName])
  return <>{children}</>
}

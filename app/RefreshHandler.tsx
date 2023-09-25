'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function RefreshHandler() {
  const router = useRouter()
  React.useEffect(() => {
    const timer = setInterval(() => { router.refresh() }, 1000)
    return () => { clearInterval(timer) }
  }, [])
  return (
    null
  )
}

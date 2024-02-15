'use client'

import { useEffect, useState } from 'react'

export const HydrationCHecking = (data: any) => {
  const [isClient, setCLient] = useState(false)

  useEffect(() => {
    setCLient(true)
  }, [])

  return <div>{isClient && data}</div>
}

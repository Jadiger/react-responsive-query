import { useEffect, useState } from 'react'
import { BreakpointConfig } from './types'
import { defaultBreakpoints } from './defaultBreakpoints'

export function useBreakpoint(config?: BreakpointConfig) {
  const breakpoints = { ...defaultBreakpoints, ...config }
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const ordered = Object.entries(breakpoints).sort(([, a], [, b]) => a - b)
  let current: string = ordered[0][0]

  for (let i = 0; i < ordered.length; i++) {
    const [key, min] = ordered[i]
    const nextMin = ordered[i + 1]?.[1]
    if (width >= min && (nextMin === undefined || width < nextMin)) {
      current = key
      break
    }
  }

  const technicalFlags = Object.fromEntries(
    ordered.map(([key, min], i) => {
      const max = ordered[i + 1]?.[1]
      return [
        `is${key.charAt(0).toUpperCase()}${key.slice(1)}`,
        width >= min && (max === undefined || width < max),
      ]
    })
  )

  const isMobile = width < breakpoints.md
  const isTablet = width >= breakpoints.md && width < breakpoints.lg
  const isDesktop = width >= breakpoints.lg

  return {
    width,
    current,       // e.g. "md", "lg", etc.
    isMobile,
    isTablet,
    isDesktop,
    ...technicalFlags, // isSm, isMd, isXl...
  }
}

import { useEffect, useState } from 'react'
import { BreakpointConfig, BreakpointFlags } from './types'
import { defaultBreakpoints } from './defaultBreakpoints'

export function useBreakpoint(config?: BreakpointConfig): BreakpointFlags {
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
  let current: keyof BreakpointConfig = ordered[0][0] as keyof BreakpointConfig

  for (let i = 0; i < ordered.length; i++) {
    const [key, min] = ordered[i]
    const nextMin = ordered[i + 1]?.[1]
    if (width >= min && (nextMin === undefined || width < nextMin)) {
      current = key as keyof BreakpointConfig
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
  ) as { [key: string]: boolean }

  const isMobile = width < (breakpoints.md ?? 768)
  const isTablet = width >= (breakpoints.md ?? 768) && width < (breakpoints.lg ?? 1024)
  const isDesktop = width >= (breakpoints.lg ?? 1024)

  return {
    width,
    current,
    isMobile,
    isTablet,
    isDesktop,
    ...technicalFlags,
  }
}

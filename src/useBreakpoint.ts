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

  return {
    width,
    isMobile: width < breakpoints.tablet,
    isTablet: width >= breakpoints.tablet && width < breakpoints.desktop,
    isDesktop: width >= breakpoints.desktop,
  }
}

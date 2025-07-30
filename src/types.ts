export interface BreakpointConfig {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export interface BreakpointFlags {
  width: number
  current: keyof BreakpointConfig
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isXs?: boolean
  isSm?: boolean
  isMd?: boolean
  isLg?: boolean
  isXl?: boolean
  isXxl?: boolean
  [key: string]: any
}

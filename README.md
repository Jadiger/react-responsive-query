
# react-responsive-query v1.1.3

A lightweight and customizable React hook to detect responsive breakpoints based on the window width. Perfect for managing responsive UI logic directly in your React components without relying on CSS media queries.

## Features

- Tracks current window width in real-time
- Detects detailed responsive breakpoints (xs, sm, md, lg, xl, xxl)
- Provides semantic flags (`isMobile`, `isTablet`, `isDesktop`) for easy usage
- Fully customizable breakpoint values with sensible defaults
- Returns the currently active breakpoint key as `current`
- Written in TypeScript with full type declarations
- Zero dependencies except React
- Easy to use and integrate

## Installation

```bash
npm install react-responsive-query
# or
yarn add react-responsive-query
```

## Usage

```tsx
import React from 'react'
import { useBreakpoint } from 'react-responsive-query'

const ExampleComponent = () => {
  const {
    width,
    current,
    isMobile,
    isTablet,
    isDesktop,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXxl,
  } = useBreakpoint({
    md: 700,
    xl: 1400, // custom breakpoint override
  })

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Current breakpoint: {current}</p>
      {isMobile && <p>You are on a mobile device</p>}
      {isTablet && <p>You are on a tablet device</p>}
      {isDesktop && <p>You are on a desktop device</p>}
      {isSm && <p>Breakpoint is Small (sm)</p>}
      {isMd && <p>Breakpoint is Medium (md)</p>}
      {isLg && <p>Breakpoint is Large (lg)</p>}
      {isXl && <p>Breakpoint is Extra Large (xl)</p>}
      {isXxl && <p>Breakpoint is Extra Extra Large (xxl)</p>}
    </div>
  )
}

export default ExampleComponent
```

## API

### `useBreakpoint(config?)`

Returns an object containing:

| Property    | Type    | Description                                                                                   |
| ----------- | ------- | --------------------------------------------------------------------------------------------- |
| `width`     | number  | The current window width in pixels                                                          |
| `current`   | string  | The key of the currently active breakpoint (e.g. "sm", "md", "lg")                           |
| `isMobile`  | boolean | `true` if width is less than the `md` breakpoint (mobile devices)                            |
| `isTablet`  | boolean | `true` if width is between the `md` and `lg` breakpoints (tablet devices)                    |
| `isDesktop` | boolean | `true` if width is greater than or equal to the `lg` breakpoint (desktop devices)            |
| `isXs`      | boolean | `true` if width is in the extra small breakpoint range                                       |
| `isSm`      | boolean | `true` if width is in the small breakpoint range                                            |
| `isMd`      | boolean | `true` if width is in the medium breakpoint range                                           |
| `isLg`      | boolean | `true` if width is in the large breakpoint range                                            |
| `isXl`      | boolean | `true` if width is in the extra large breakpoint range                                      |
| `isXxl`     | boolean | `true` if width is in the extra extra large breakpoint range                                |

### Default breakpoints

You can customize breakpoints by passing a partial config object. Default values:

```ts
{
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}
```

## Why use this hook?

Instead of scattering CSS media queries or relying on large UI frameworks, this hook gives you an easy, JavaScript-driven way to build responsive behavior right inside your React components. It provides both semantic (`isMobile`, `isTablet`, `isDesktop`) and granular breakpoint flags (`isSm`, `isMd`, etc.), plus the currently active breakpoint key for maximum flexibility.

## Contributing

Contributions, bug reports, and feature requests are welcome!  
Please visit the [issues page](https://github.com/Jadiger/react-responsive-query/issues) to get started.

## Build the package

To build the package locally:

```bash
npm install
npm run build
```

## License

MIT © 2025 [Jadiger Turganbaev](https://github.com/Jadiger)

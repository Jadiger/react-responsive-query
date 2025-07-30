# react-responsive-query v1.0.3

A lightweight and customizable React hook to detect responsive breakpoints based on the window width. Perfect for managing responsive UI logic directly in your React components without relying on CSS media queries.

## Features

* Tracks current window width in real-time
* Determines if the viewport is mobile, tablet, or desktop based on configurable breakpoints
* Fully customizable breakpoint values with sensible defaults
* Written in TypeScript with full type declarations
* Zero dependencies except React
* Easy to use and integrate

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
  const { width, isMobile, isTablet, isDesktop } = useBreakpoint({
    tablet: 768,
    desktop: 1024,
  })

  return (
    <div>
      <p>Window width: {width}px</p>
      {isMobile && <p>You are on a mobile device</p>}
      {isTablet && <p>You are on a tablet device</p>}
      {isDesktop && <p>You are on a desktop device</p>}
    </div>
  )
}

export default ExampleComponent
```

## API

### `useBreakpoint(config?)`

Returns an object containing the current window width and booleans indicating the active breakpoint.

| Property    | Type    | Description                                                        |
| ----------- | ------- | ------------------------------------------------------------------ |
| `width`     | number  | The current window width in pixels                                 |
| `isMobile`  | boolean | `true` if width is less than the tablet breakpoint                 |
| `isTablet`  | boolean | `true` if width is between tablet and desktop breakpoints          |
| `isDesktop` | boolean | `true` if width is greater than or equal to the desktop breakpoint |

### Default Config

You can provide your own `config` object, or rely on these default values:

```ts
{
  mobile: 0,
  tablet: 768,
  desktop: 1024,
}
```

## Why use this hook?

Instead of scattering CSS media queries or relying on large UI frameworks, this hook gives you an easy, JavaScript-driven way to build responsive behavior right inside your React components.

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

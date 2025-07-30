# react-responsive-query

[![npm version](https://badge.fury.io/js/react-responsive-query.svg)](https://badge.fury.io/js/react-responsive-query)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A lightweight and powerful React hook for responsive breakpoint detection based on window width. Build responsive UIs with JavaScript logic instead of relying solely on CSS media queries.

## ✨ Features

- 📱 **Real-time window width tracking** - Always know the current viewport size
- 🎯 **Detailed breakpoint detection** - xs, sm, md, lg, xl, xxl breakpoints
- 🔍 **Semantic device flags** - `isMobile`, `isTablet`, `isDesktop` for intuitive usage  
- ⚙️ **Fully customizable** - Override any breakpoint values to match your design system
- 🎪 **Current breakpoint key** - Get the active breakpoint name as `current`
- 🔷 **TypeScript ready** - Complete type definitions included
- 🪶 **Zero dependencies** - Only requires React
- 🚀 **Easy integration** - Drop-in hook with intuitive API

## 📦 Installation

```bash
npm install react-responsive-query
```

```bash
yarn add react-responsive-query
```

```bash
pnpm add react-responsive-query
```

## 🚀 Quick Start

```tsx
import React from 'react'
import { useBreakpoint } from 'react-responsive-query'

function ResponsiveComponent() {
  const { width, current, isMobile, isTablet, isDesktop } = useBreakpoint()

  return (
    <div>
      <h2>Device Info</h2>
      <p>Screen width: {width}px</p>
      <p>Current breakpoint: {current}</p>
      
      {isMobile && <p>📱 Mobile view active</p>}
      {isTablet && <p>📲 Tablet view active</p>}
      {isDesktop && <p>🖥️ Desktop view active</p>}
    </div>
  )
}
```

## 📋 Complete API Reference

### `useBreakpoint(config?)`

#### Parameters

- `config` (optional): Partial configuration object to override default breakpoints

#### Returns

| Property    | Type    | Description                                                                                   |
|-------------|---------|-----------------------------------------------------------------------------------------------|
| `width`     | number  | Current window width in pixels                                                               |
| `current`   | string  | Key of the currently active breakpoint (`"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`)   |
| `isMobile`  | boolean | `true` when width < `md` breakpoint (mobile devices)                                        |
| `isTablet`  | boolean | `true` when `md` ≤ width < `lg` (tablet devices)                                            |
| `isDesktop` | boolean | `true` when width ≥ `lg` breakpoint (desktop devices)                                       |
| `isXs`      | boolean | `true` when in extra small breakpoint range                                                 |
| `isSm`      | boolean | `true` when in small breakpoint range                                                       |
| `isMd`      | boolean | `true` when in medium breakpoint range                                                      |
| `isLg`      | boolean | `true` when in large breakpoint range                                                       |
| `isXl`      | boolean | `true` when in extra large breakpoint range                                                 |
| `isXxl`     | boolean | `true` when in extra extra large breakpoint range                                           |

## 🎨 Default Breakpoints

The hook uses these default breakpoint values (in pixels):

```typescript
{
  xs: 0,      // Extra small devices
  sm: 480,    // Small devices  
  md: 768,    // Medium devices (tablets)
  lg: 1024,   // Large devices (desktops)
  xl: 1280,   // Extra large devices
  xxl: 1536   // Extra extra large devices
}
```

## ⚙️ Custom Breakpoints

Override any breakpoint values to match your design system:

```tsx
import { useBreakpoint } from 'react-responsive-query'

function CustomBreakpointComponent() {
  const breakpoint = useBreakpoint({
    sm: 576,    // Bootstrap's small breakpoint
    md: 768,    // Keep default
    lg: 992,    // Bootstrap's large breakpoint  
    xl: 1200,   // Bootstrap's extra large breakpoint
  })

  return (
    <div>
      <p>Using Bootstrap-style breakpoints</p>
      <p>Current: {breakpoint.current}</p>
      {breakpoint.isLg && <p>Large screen detected!</p>}
    </div>
  )
}
```

## 💡 Usage Examples

### Conditional Rendering

```tsx
function Navigation() {
  const { isMobile, isDesktop } = useBreakpoint()

  return (
    <nav>
      {isMobile && <MobileMenu />}
      {isDesktop && <DesktopMenu />}
    </nav>
  )
}
```

### Dynamic Styling

```tsx
function Card() {
  const { current, isMobile } = useBreakpoint()

  const cardStyle = {
    padding: isMobile ? '1rem' : '2rem',
    columns: current === 'xs' ? 1 : current === 'sm' ? 2 : 3
  }

  return <div style={cardStyle}>Responsive card content</div>
}
```

### Component Logic

```tsx
function ImageGallery() {
  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoint()

  const getColumnsCount = () => {
    if (isXs) return 1
    if (isSm) return 2  
    if (isMd) return 3
    if (isLg) return 4
    return 5 // xl and above
  }

  return (
    <div style={{ columnCount: getColumnsCount() }}>
      {/* Gallery items */}
    </div>
  )
}
```

### Advanced Usage with All Properties

```tsx
function AdvancedComponent() {
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
    md: 700,     // Custom tablet breakpoint
    xl: 1400,    // Custom large desktop breakpoint
  })

  return (
    <div>
      <header>
        <h1>Responsive Dashboard</h1>
        <p>Width: {width}px | Breakpoint: {current}</p>
      </header>

      <main>
        {/* Device-specific layouts */}
        {isMobile && <MobileLayout />}
        {isTablet && <TabletLayout />}
        {isDesktop && <DesktopLayout />}

        {/* Granular breakpoint logic */}
        {isXs && <div>Extra small content</div>}
        {isSm && <div>Small content</div>}
        {isMd && <div>Medium content</div>}
        {isLg && <div>Large content</div>}
        {isXl && <div>Extra large content</div>}
        {isXxl && <div>Ultra wide content</div>}
      </main>
    </div>
  )
}
```

## 🤔 Why Use This Hook?

- **JavaScript-driven responsiveness**: Handle complex responsive logic that CSS media queries can't easily manage
- **Component-level control**: Make responsive decisions directly in your React components
- **Better than window.innerWidth**: Automatically handles resize events and provides semantic breakpoint flags
- **Framework agnostic breakpoints**: Use the same breakpoint logic across CSS and JavaScript
- **TypeScript support**: Full type safety for all breakpoint properties
- **Performance optimized**: Efficiently tracks window resize with proper cleanup

## 🛠️ Development

### Building the Package

```bash
npm install
npm run build
```

### Testing

```bash
npm test
```

## 📄 Requirements

- React 18.0.0+ or React 19.0.0+
- React DOM 18.0.0+ or React DOM 19.0.0+

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please visit the [issues page](https://github.com/Jadiger/react-responsive-query/issues) to report bugs or request features.

## 📝 License

ISC © 2025 [Jadiger Turganbaev](https://github.com/Jadiger)

## 🔗 Links

- [GitHub Repository](https://github.com/Jadiger/react-responsive-query)
- [npm Package](https://www.npmjs.com/package/react-responsive-query)
- [Issues & Bug Reports](https://github.com/Jadiger/react-responsive-query/issues)

---

**Made with ❤️ for the React community**
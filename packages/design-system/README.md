# @heurix/design-system

React component library with semantic OKLCH tokens, dark/light theming, and monospaced metadata. Production-grade primitives for editorial product UIs.

[**Live showcase →**](https://heurix-design-system-design-system.vercel.app)

## Install

```bash
npm install @heurix/design-system
```

Peer deps: `react ^18`, `react-dom ^18`.

## Use

```tsx
import '@heurix/design-system/reset.css';
import '@heurix/design-system/tokens.css';
import '@heurix/design-system/style.css';

import { Button, Pill, AIBadge, ThemeToggle } from '@heurix/design-system';

export function App() {
  return (
    <>
      <ThemeToggle />
      <Button variant="primary">Get started</Button>
      <Pill>Foundations</Pill>
      <AIBadge />
    </>
  );
}
```

## Theming

Apply `data-theme="light"` or `data-theme="dark"` to `<html>` (defaults to dark via CSS). Tokens are OKLCH and resolve through CSS custom properties — see `tokens.css`.

```ts
import { useTheme } from '@heurix/design-system';

const { theme, toggle } = useTheme(); // 'dark' | 'light'
```

## Components

Atoms: `Button`, `IconButton`, `Pill`, `Chip`, `CountBadge`, `AIBadge`, `Kbd`, `Input`, `Textarea`, `Eyebrow`, `Numeral`, `BrandMark`.
Molecules: `PillGroup`, `UrlInput`, `TitleInput`, `ThemeToggle`, `ScanBar`, `Spinner`, `Sentinel`, `ConfidenceChip`.
Organisms: `Topbar`, `ProjectCard`, `EvalRow`, `AIBlock`, `SuggestionCard`, `SuggestionRunHeader`, `StatsTile`, `EmptyState`, `Toast`, `Modal`, `Drawer`.

Full inventory and live examples in the showcase.

## License

MIT.

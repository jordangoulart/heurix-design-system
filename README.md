# Heurix Design System

React component library + interactive showcase. Semantic OKLCH tokens, dark/light theme, monospaced metadata.

## Packages

- `@heurix/design-system` — components, tokens, hooks
- `@heurix/showcase` — Vite app documenting every component

## Develop

```bash
npm install

npm run showcase:dev      # Vite dev server at http://localhost:5173/design-system/
npm run ds:dev            # Storybook for the design-system package
npm run ds:test           # Vitest
npm run ds:build          # Build the design-system to packages/design-system/dist
```

## Stack

Vite, React 18, TypeScript strict, Vitest + Testing Library, Storybook 8, ESLint flat config, Prettier.

## License

MIT.

# aaronedwards.dev

Personal website for Aaron Edwards — showcasing work and projects. Built as a Turborepo monorepo with Next.js and shadcn/ui. The resume bot at `~/Development/resumebot` will eventually be migrated here.

## Commands

```bash
pnpm dev          # Start all dev servers (Next.js on :3000)
pnpm build        # Build all packages via turbo
pnpm test         # Run Vitest tests via turbo
pnpm test:watch   # Vitest in watch mode via turbo
pnpm lint         # Biome lint via turbo
pnpm format       # Biome format the whole repo
pnpm check        # Biome check + fix the whole repo
pnpm typecheck    # TypeScript type-check via turbo
```

## Architecture

```
apps/
  web/              # Next.js 16 app (the website)
    app/            # App router pages and layouts
    components/     # App-specific components
    __tests__/      # Vitest tests (RTL, scoped to this dir)
packages/
  ui/               # Shared React component library (shadcn/ui base)
  typescript-config/ # Shared tsconfig files
```

## Key Conventions

- **Formatter/Linter**: Biome (not ESLint/Prettier) — config at `biome.json`
- **Package manager**: pnpm with workspaces; use `pnpm` not `npm`
- **Imports**: Internal packages via `@workspace/ui/*`, path alias `@/*` maps to `apps/web/`
- **Tests**: Drop files as `__tests__/*.test.{ts,tsx}` — vitest picks them up automatically
- **Git hooks**: Lefthook runs `biome check --write` on staged files pre-commit

## Adding UI Components

```bash
# Run from repo root — places components into packages/ui/src/components/
pnpm dlx shadcn@latest add <component> -c apps/web
```

Import from the ui package:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Testing

Tests live in `apps/web/__tests__/`. Uses Vitest + React Testing Library with globals enabled (`describe`, `it`, `expect` available without imports).

```bash
pnpm test          # One-shot run (turbo-cached)
pnpm test:watch    # Interactive watch mode
```

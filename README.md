# aaronedwards.dev
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/aaron-edwards/aaronedwards.dev/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/aaron-edwards/aaronedwards.dev/tree/main)

Personal website — built with Next.js, Turborepo, and shadcn/ui.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Monorepo**: Turborepo + pnpm workspaces
- **UI**: shadcn/ui components in a shared `packages/ui` library
- **Styling**: Tailwind CSS v4
- **Linting/Formatting**: Biome
- **Testing**: Vitest + React Testing Library
- **Git hooks**: Lefthook

## Getting Started

```bash
pnpm install
pnpm dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Commands

| Command          | Description              |
| ---------------- | ------------------------ |
| `pnpm dev`       | Start development server |
| `pnpm build`     | Production build         |
| `pnpm test`      | Run tests                |
| `pnpm lint`      | Lint with Biome          |
| `pnpm format`    | Format with Biome        |
| `pnpm typecheck` | TypeScript check         |

## Adding UI Components

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

Components are added to `packages/ui/src/components/` and imported via:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Project Structure

```
apps/web          # Next.js app
packages/ui       # Shared component library
packages/typescript-config  # Shared TS config
```

## License

MIT

# Hexday
An app for busy bees.

## Getting started

**Prerequisites:** Node.js 24+ (26 recommended), pnpm, Git.

```bash
pnpm install
pnpm dev
```

- Web app: http://localhost:5173
- API health check: http://localhost:3000/health (also available through the web app at `/api/health`)

## Project structure

| Path | What it is |
|---|---|
| `apps/web` | React + Vite + TypeScript frontend |
| `apps/api` | Fastify + TypeScript API |
| `packages/shared` | Types shared by the web app and the API |

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Runs the web app and API together, with hot reload |
| `pnpm typecheck` | Type-checks every package |
| `pnpm build` | Builds every package that has a build step |

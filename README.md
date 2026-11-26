# Hexday
An app for busy bees.

## Getting started

**Prerequisites:** Node.js 24+ (26 recommended), pnpm, Git, Docker.

```bash
pnpm install
Copy-Item .env.example .env   # macOS/Linux: cp .env.example .env
docker compose up -d
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

## Local database

Hexday uses PostgreSQL, run locally with Docker Compose.

1. Copy the example environment file: `Copy-Item .env.example .env` (macOS/Linux: `cp .env.example .env`)
2. Start the database: `docker compose up -d`
3. Check it's healthy: `docker compose ps`

## Environment variables

| Variable | Used by | Example | Purpose |
|---|---|---|---|
| `POSTGRES_USER` | Docker Compose | `hexday` | Database username |
| `POSTGRES_PASSWORD` | Docker Compose | `hexday_dev_password` | Database password (local dev only) |
| `POSTGRES_DB` | Docker Compose | `hexday` | Database name |
| `PORT` | API | `3000` | Port the API listens on |
| `HOST` | API | `127.0.0.1` | Address the API binds to |
| `DATABASE_URL` | API (Prisma) | `postgresql://hexday:...@127.0.0.1:5432/hexday` | Full database connection string |


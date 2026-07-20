# OgaalSan Website

Public marketing and learning site for OgaalSan Consultancy. Built with Next.js (Pages Router) and connected to the OgaalSan admin API.

## Requirements

- Node.js 18+
- pnpm (recommended) or npm

## Setup

```bash
pnpm install
cp .env.local.example .env.local
```

Set `NEXT_PUBLIC_OGAALSAN_API_URL` to your admin API base URL (e.g. `http://localhost:9000`).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint |

## Project structure

```
├── components/
│   ├── auth/          # Sign-in / sign-up UI
│   ├── blog/          # Blog cards and pagination
│   ├── common/        # Shared UI (theme toggle, loaders, widgets)
│   ├── courses/       # Course cards
│   ├── elements/      # Small reusable elements
│   ├── layout/        # Header, footer, layout shell
│   ├── sections/home/ # Homepage sections
│   ├── services/      # Service cards
│   └── slider/        # Carousels used on live pages
├── context/           # React context (auth, theme, organization)
├── hooks/             # Custom React hooks
├── lib/               # API clients and shared helpers
│   └── data/          # Static fallback data
├── pages/             # Next.js routes
│   ├── api/           # API routes
│   ├── auth/          # Authentication pages
│   ├── blog/          # Blog detail routes
│   ├── course/        # Course detail, registration, watch
│   ├── resources/     # Downloadable resources
│   ├── services/      # Service detail routes
│   └── training/      # Training programs
└── public/assets/     # Static CSS, images, fonts
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_OGAALSAN_API_URL` | Admin API base URL (client-side) |
| `OGAALSAN_API_URL` | Admin API base URL (server-side) |

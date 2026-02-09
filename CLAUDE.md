# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Red Bridge Solutions corporate website — a React SPA for a technical procurement consulting company focused on manufacturing integration between North American and Asian markets.

## Tech Stack

- **React 18** with TypeScript (strict mode)
- **Vite** for build/dev server
- **Tailwind CSS** for styling
- **React Router DOM** with HashRouter
- **EmailJS** for contact form submissions
- **Lucide React** for icons

## Commands

```bash
npm run dev       # Start dev server (Vite, typically localhost:5173)
npm run build     # TypeScript check + production build (output: dist/)
npm run preview   # Preview production build locally
```

No test framework is configured.

## Environment Variables

EmailJS credentials go in `.env.local` (see `.env.example`):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Architecture

**Routing**: HashRouter in `App.tsx` with all page components lazy-loaded via `React.lazy()`. A global `ErrorBoundary` wraps the app.

**Component structure**:
- `App.tsx` — Router setup, error boundary, lazy loading with Suspense
- `components/` — Shared layout: `Header.tsx` (nav + mobile menu), `Footer.tsx`
- `pages/` — Route-level components: Home, About, CaseStudies, Consultation, FAQ, Portal
- `data/` — Static content: `content.ts` (team/about), `caseStudies.ts` (case study entries)
- `types.ts` — Shared TypeScript interfaces (FaqItem, Pillar, TeamMember, Metric, CaseStudy)

**Performance patterns already in use**: `React.memo` on components, `useMemo`/`useCallback` for expensive computations and handlers, static data extracted outside component bodies, lazy image loading.

## Design System (Tailwind Config)

- **Primary color**: `#800020` (deep red) — used via `text-primary`, `bg-primary`, etc.
- **Charcoal**: `#333333` — main text color
- **Off-white**: `#F9F9F9` — background
- **Fonts**: Playfair Display (serif, headings) and Inter (sans, body)
- Custom `scroll` keyframe animation powers the logo carousel in `index.css`

## Key Conventions

- All pages export memoized components (`React.memo`)
- Contact form in `Consultation.tsx` uses EmailJS — requires env vars to function
- Images stored in `public/images/`
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters` enabled

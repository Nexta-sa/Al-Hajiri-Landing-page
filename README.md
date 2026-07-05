# NEXTAIQ — AI Logistics Intelligence Landing Page

Production build of the **Nexta AI Logistics Landing Page** (Al Hajiri), converted
pixel-for-pixel from Figma into a modern, accessible, responsive web app.

## Tech stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript** (strict, no `any`)
- **Tailwind CSS** with a token-driven design system
- **Framer Motion** for scroll reveals, the demo wizard, and micro-interactions
- **Lucide** icons
- **class-variance-authority** for variant-safe UI primitives
- Self-hosted **Inter** via `@fontsource-variable/inter` (no build-time network fetch)

## What's included

| Route | Description |
| --- | --- |
| `/` | Landing page — Nav, Hero + product dashboard mock, LogoStrip, Challenges, AI Capabilities, Promo banner, Newsletter, Footer |
| `/onboarding` | Customer onboarding tracker dashboard (stages, status pills, sidebar, notifications) |

**Book a Demo wizard** — a 5-step modal flow (Company info → Operational info →
Schedule a call → Confirmation → Demo results) reachable from every CTA, with a
live calendar picker, validation, and a floating notification carousel. The final
step routes into `/onboarding`.

## Architecture

```
app/                     App Router entrypoints + global styles
  layout.tsx             Root layout, fonts, providers, metadata
  page.tsx               Landing page composition
  onboarding/page.tsx    Onboarding tracker
components/
  ui/                    Reusable primitives (Button, Badge, Input, Container, Reveal, IconTile…)
  layout/                Navbar, Footer
  sections/              Hero, DashboardMock, LogoStrip, Challenges, AICapabilities, PromoBanner, Newsletter
  demo/                  Book-a-Demo wizard (context, modal, steps, calendar, fields)
  onboarding/            Onboarding-specific components
content/                 Single source of truth for all copy/data (site, demo, onboarding)
lib/                     Utilities (cn)
```

Design tokens (colors, type scale, radii, shadows, gradients) live in
`tailwind.config.ts` and `app/globals.css`, extracted directly from the Figma file.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

```bash
npm run dev        # start dev server
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Quality

- ✅ Strict TypeScript, zero `any`
- ✅ `next build`, `next lint`, and `tsc --noEmit` all pass clean
- ✅ WCAG-minded: semantic landmarks, ARIA labels, keyboard/focus states, skip link,
  `prefers-reduced-motion` support, and AA-oriented contrast
- ✅ Fully responsive (mobile → ultra-wide)

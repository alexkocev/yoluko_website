# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

YOLUKO website — an English-only marketing site for an AI & Automation agency, built with Next.js 14 App Router, deployed on Vercel at yoluko.com.

## Commands

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Production build
npm run start        # Run production server
npm run lint         # ESLint
npm run check-sitemap # Verify sitemap accessibility
```

No test framework is configured.

## Architecture

**Stack:** Next.js 14, TypeScript (strict), Tailwind CSS, lucide-react icons

**Routing:** Single-language (English). Pages live directly under `src/app/`. No i18n — all content is hardcoded in components.

**Design System:** "Neon Terminal" — dark editorial theme with deep blacks (#0e0e0e), gold primary (#ffdd7c), pink secondary (#ff6c95), green tertiary (#b5ffc2). Uses Material Design-inspired tonal surface layering (surface, surface-container, surface-container-high, etc.) instead of borders.

**Components:** Landing page sections in `src/components/`: Navigation, HeroSection, CoreVerticals, WhyYoluko, SolutionsGrid, PricingSection, IntegrationsWall, TeamSection, FAQ, ContactSection, Footer.

**Client vs Server:** Components are server components by default. Interactive ones (Navigation, HeroSection, PricingSection, FAQ, ContactSection) use `"use client"`.

**Styling:** Tailwind with custom design tokens in `tailwind.config.ts`. Fonts: Space Grotesk for headings/labels (`--font-space-grotesk`), Inter for body (`--font-inter`). No shadcn/ui — all components are custom.

**Path alias:** `@/*` maps to `src/*`.

## Key Files

- `src/lib/constants.ts` — SITE_CONFIG (baseUrl, name)
- `next.config.mjs` — HTTPS/WWW redirects, legacy locale redirects, security headers
- `vercel.json` — `/call` redirect to Calendly
- `tailwind.config.ts` — Full design system color tokens, font families, animations

## SEO

Structured data (JSON-LD) in root layout. Dynamic sitemap at `src/app/sitemap.ts`. Google Analytics (GA4) included in root layout.

## Environment Variables

- `NEXT_PUBLIC_BASE_URL` — defaults to `https://yoluko.com`

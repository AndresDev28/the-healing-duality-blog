# The Healing Duality Blog
Official blog for the **The Healing Duality** YouTube channel, built as a content-first static publishing platform with an editorial visual language.

The project transforms long-form wellness and psychology video insights into SEO-friendly MDX articles, with a roadmap toward sustainable monetization.

## Vision
Create a calm, premium reading experience that bridges psychology, spirituality, and practical healing through:
- High-quality editorial presentation
- Strong technical foundations (performance + SEO)
- Content-as-code workflow for long-term maintainability

## Current Status
According to `PRD.md`, the project is in development with:
- ✅ **Phase 1 completed:** Foundation & Scaffolding
- ✅ **Phase 2 completed:** Design System
- ✅ **Phase 3 completed:** Content Engine & Blog Template
- ⏳ **Phases 4–10 pending** (components, navigation, legal, advanced SEO, monetization, polish)

## Foundation (Implemented)
The foundation currently includes:
- **Next.js 16.2.1** with App Router and TypeScript strict mode
- **Tailwind CSS v4** using inline `@theme` tokens in `src/app/globals.css`
- **Velite 0.3.1** as the MDX content engine with schema validation
- Core utility dependencies: `clsx`, `tailwind-merge`, `lucide-react`

### Build Integration
`next.config.ts` triggers Velite builds during development and production builds, ensuring typed MDX content is always generated before rendering.

## Design System: “The Breathing Canvas”
Design principles are defined in `docs/DESIGN.md` and implemented through tokens/utilities.

### Core Principles
- **Editorial-first aesthetic:** calm, human, spacious composition
- **Intentional asymmetry:** 7/5 split layouts and non-rigid rhythm
- **No-Line rule:** avoid hard divider borders; separate sections via tonal background layering
- **Soft depth:** tonal layering + subtle shadows instead of heavy UI chrome

### Visual Foundations
- **Dual typography:** `Noto Serif` (headlines) + `Manrope` (body)
- **11 semantic color tokens:** warm/earthy palette (surface, primary, tertiary, containers, error scale)
- **Custom utilities:**
  - `.glass-panel` for glassmorphism surfaces
  - `.editorial-shadow` for ambient lift

## Content Engine & Blog Template (Implemented)
Phase 3 introduced a complete MDX publishing flow:

- Dynamic post route: `src/app/blog/[slug]/page.tsx`
- Static params generation from Velite posts
- SEO metadata generation (OpenGraph + Twitter cards)
- MDX renderer with custom component registry:
  - `YouTube` (responsive embed with CLS-safe container)
  - `ReflectionMirror` (glassmorphic reflective callout)

### MDX Frontmatter Schema
Defined in `velite.config.ts`:
- `title`
- `description`
- `date` (ISO)
- `published` (default `true`)
- `image`
- `videoID` (optional)
- `tags`
- Computed fields: `slug`, `permalink`, compiled `content`, `metadata`

## Project Structure
- `src/app/` — App Router pages and global styling
- `src/components/features/` — domain components (`MDXRenderer`, `YouTube`, `ReflectionMirror`)
- `src/lib/posts.ts` — typed post exports from `.velite`
- `content/posts/` — MDX source content
- `docs/DESIGN.md` — design system specification
- `PRD.md` — full product requirements and roadmap
- `IMPLEMENTATION_PLAN.md` — technical architecture and tactical plan

## Getting Started
```bash
npm install
npm run dev
```

Useful scripts:
- `npm run dev` — start local development server
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — lint the codebase

## Roadmap Snapshot
Upcoming priorities from the PRD:
- Component extraction (`Hero`, `PostCard`, `PostGrid`, `CategoryNav`, UI primitives)
- Discovery/navigation improvements (filtering, related posts, search)
- Trust/legal pages (`/about`, `/privacy`, `/terms`)
- Advanced SEO (JSON-LD, sitemap, canonical, robots)
- Monetization (AdSense integration with CLS-safe `AdUnit`)

## Documentation
- Product requirements: `PRD.md`
- Technical implementation direction: `IMPLEMENTATION_PLAN.md`
- Design system specification: `docs/DESIGN.md`

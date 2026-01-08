# Copilot Instructions for Interactive Health

## Project Overview

**Interactive Health** is a Next.js-based health platform for "Smart School Clinic" with RTL (right-to-left) language support. The project uses modern tooling: React 18, Next.js 14, TypeScript 5, Tailwind CSS 4, and ESLint 9.

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4 with PostCSS
- **Language**: TypeScript (strict mode enabled)
- **Locale**: RTL layout with Arabic language support (`lang="ar" dir="rtl"`)
- **UI Components**: React 18 with Next.js Image optimization

## Key Architecture Decisions

### RTL-First Design
- All layouts use `dir="rtl"` attribute in the root HTML element
- When creating layouts, flexbox and grid should default to RTL. Use `flex-row-reverse` or `justify-end` for left-aligned content
- Example: `<html lang="ar" dir="rtl">` in `app/layout.tsx`

### App Router Structure
The project uses Next.js App Router (not Pages Router):
- Entry point: `app/layout.tsx` (root layout with metadata, fonts, globals.css)
- Home page: `app/page.tsx`
- New routes go in nested directories under `app/` with their own `page.tsx` files
- Metadata and fonts are configured in `layout.tsx`, not in `_document` or `_app`

### Styling Approach
- **Tailwind CSS 4**: Primary styling method using utility classes
- **PostCSS**: Configured via `postcss.config.mjs` with Tailwind plugin
- **Global CSS**: `app/globals.css` imports Tailwind with `@import "tailwindcss"` and sets CSS variables for theming
- **CSS Variables**: `--background`, `--foreground` used for light/dark mode
- **Dark Mode**: Handled via CSS media query `prefers-color-scheme: dark`

Example of theme-aware styling:
```tsx
<div className="bg-zinc-50 dark:bg-black text-black dark:text-zinc-50">
```

### Type Safety
- `tsconfig.json` has `strict: true` - always satisfy TypeScript's strict mode
- Path alias `@/*` maps to project root (e.g., `import { Button } from '@/components/Button'`)
- Next.js types are auto-generated in `next-env.d.ts` - do not edit manually

## Development Workflows

### Build & Development Commands
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint
```

### Development Server
- Hot reloading enabled automatically
- Visit `http://localhost:3000` to see changes
- Edit `app/page.tsx` or create new routes under `app/` directory

### Linting
- ESLint configured with `eslint-config-next/core-web-vitals` and TypeScript support
- Config: `eslint.config.mjs` (flat config format, ESLint 9+)
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Run linting before committing

## Common Patterns & Conventions

### Component Structure
- Components are TypeScript (.tsx) by default
- Use named exports for reusable components
- Define component props with interface or type (required for type safety)

Example:
```tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return <div className="border rounded-lg p-4">{children}</div>;
}
```

### Image Handling
- Use Next.js `Image` component for optimization (not `<img>` tag)
- Example: `import Image from "next/image"`
- Always specify `width` and `height` attributes
- Use `priority` for above-the-fold images

### Page Metadata
- Export `metadata` object from layout or page components
- Type: `export const metadata: Metadata`
- Example in `app/layout.tsx`: title set to "Smart School Clinic"

### CSS Class Organization
When combining Tailwind classes, follow this order:
1. Layout (flex, grid, w-, h-)
2. Spacing (p-, m-, gap-)
3. Sizing (w-, h-, min-, max-)
4. Colors (bg-, text-, border-)
5. Effects (shadow-, rounded-, opacity-)
6. Responsive (sm:, md:, dark:)

Example: `className="flex items-center justify-between gap-4 p-4 bg-white dark:bg-black rounded-lg shadow-md"`

## Integration Points & Dependencies

### Core Dependencies
- **Next.js 14**: Framework with Image, Link, metadata support
- **React 18**: UI library with hooks support
- **Tailwind CSS 4**: Utility-first CSS framework
- **TypeScript 5**: Language and type checking

### Fonts
- Uses `next/font/google` for automatic font optimization
- Currently: Inter font loaded in `app/layout.tsx`
- To add fonts: import from `next/font/google` and apply to layout

### Node Modules
- Run `npm install` if dependencies change
- Avoid committing `node_modules/` (included in `.gitignore`)
- Use `package-lock.json` for reproducible builds

## File Organization

```
interactive-health/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── public/           # Static assets (images, SVGs)
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
├── next.config.js    # Next.js configuration
├── eslint.config.mjs # ESLint rules (flat config)
└── postcss.config.mjs # CSS tooling pipeline
```

## Important Notes

- **No `_app.tsx` or `_document.tsx`**: Using App Router, these are replaced by `app/layout.tsx`
- **No Pages Router**: Project uses App Router exclusively
- **Strict TypeScript**: All code must pass TypeScript strict mode checks
- **RTL Support**: Remember `dir="rtl"` for all HTML elements and adjust layout expectations (left ↔ right)
- **Environment Variables**: Place in `.env.local` (ignored by git, see `.gitignore`)

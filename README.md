# animatewp.com

Static marketing site for the [AnimateWP](https://github.com/prolific-digital/animatewp) WordPress plugin.

This replaces the original WordPress install (Twenty Twenty-Four + Rank Math + AnimateWP). The content is evergreen and the site is fully static — no CMS, no server runtime.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) — React 19, TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` design tokens
- [GSAP](https://gsap.com/) + ScrollTrigger via [`@gsap/react`](https://gsap.com/resources/React/) for scroll-triggered animations (respects `prefers-reduced-motion`)
- Self-hosted Inter (variable) and Cardo (regular/italic/bold) fonts in `public/fonts/`
- Deployed to Vercel; prerendered as static at build time

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project layout

```
src/
  app/
    layout.tsx         Metadata API (title, OG, Twitter, canonical, robots)
    page.tsx           Composes the single-page sections
    globals.css        Tailwind v4 + @font-face + @theme tokens
    icon.svg           Favicon
    robots.ts          robots.txt route
    sitemap.ts         sitemap.xml route
  components/
    Header.tsx
    Hero.tsx
    WhyChoose.tsx
    Features.tsx
    AdvancedSettings.tsx
    GetStarted.tsx
    Footer.tsx
    AnimateOnScroll.tsx   Reusable GSAP/ScrollTrigger wrapper
public/
  images/              demo.gif, screenshot.png, abstract-2.webp, abstract-3.webp
  fonts/               Inter + Cardo woff2 files
  og/og-image.png      Open Graph preview
```

## Source content

The plugin docs live on Notion: <https://prolificdigital.notion.site/AnimateWP-Documentation-138f73948280458d9a2bcd298ac62354>.
The plugin source lives at <https://github.com/prolific-digital/animatewp>.

Copy and design tokens (rust-on-cream palette, Cardo display, Inter body) were ported 1:1 from the original WordPress site at the time of migration.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# animatewp.com

Static Next.js marketing site for the AnimateWP WordPress plugin
(<https://github.com/prolific-digital/animatewp>). Migrated off WordPress in
May 2026 so the install stops needing core/plugin/security maintenance — the
content is evergreen and hasn't shipped a copy change since 2024-07-31.

## Stack
- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 with `@theme` design tokens
- GSAP + ScrollTrigger via `@gsap/react` for scroll-driven fade-ups
- Self-hosted fonts (Inter variable, Cardo regular/italic/bold)
- Deployed to Vercel under the `prolificdigital` team
- All pages prerendered as static at build (no server runtime)

## Where things live

```
src/app/
  layout.tsx            Root layout, Metadata API, viewport (theme color), JSON-LD graph
  page.tsx              Composes the section components
  globals.css           Tailwind v4 + @font-face + @theme tokens + custom utilities
  icon.svg              Favicon
  apple-icon.tsx        180×180 PNG generated at build via next/og ImageResponse
  manifest.ts           /manifest.webmanifest route
  robots.ts             /robots.txt route
  sitemap.ts            /sitemap.xml route

src/components/
  AnimateOnScroll.tsx   'use client' wrapper — GSAP/ScrollTrigger fade presets
  Header.tsx            Wordmark + flat 24px GitHub octocat
  Hero.tsx              H1 + lede + "Learn more" + demo GIF (alignwide)
  WhyChoose.tsx         Paper-2 bg section, 3 feature cards
  Features.tsx          Features at a Glance + 3 alternating two-column rows
                        (Key Benefits, Simple to Use, Advanced Animation Settings)
  GetStarted.tsx        Final CTA in an inset paper-2 card
  Footer.tsx            Wordmark + "Designed and developed by Prolific Digital"

public/
  images/               demo.gif, screenshot.png, abstract-{2,3}.webp
  fonts/                Inter-Variable + Cardo-{Regular,Italic,Bold}.woff2
  og/og-image.png       Social preview (1024×541)
```

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000 (3001 if 3000 is taken)
npm run build    # production build
npm run lint
```

## Deploying

```bash
vercel --prod --yes
```

Git pushes to `main` on <https://github.com/prolific-digital/animatewp-site>
also trigger Vercel auto-deploys via the GitHub integration. After a fresh
clone you'll need to re-link the local project (`.vercel/` is gitignored):

```bash
vercel link --yes --project animatewp-site --scope prolificdigital
```

Project ID `prj_8cMqDFDLKMrzIlVyoJYZizAt5Gdv`, team ID
`team_4LnKp3xVVqBrbQRtOX2FGNg7`.

## Hosting / domain config

- **Canonical host: `www.animatewp.com`**. The apex `animatewp.com` is a
  308 Permanent Redirect to `www`. Both are aliased on the same Vercel
  project; the apex's `redirectStatusCode: 308` was set via the Vercel
  REST API (CLI doesn't expose it). If you ever flip to apex-as-canonical,
  remember to PATCH `redirectStatusCode` on the `www.animatewp.com` domain
  entry AND search-replace `https://www.animatewp.com` → `https://animatewp.com`
  across `layout.tsx`, `sitemap.ts`, `robots.ts`.
- SSL: Let's Encrypt, auto-renewed by Vercel.
- DNS is managed at a third-party registrar — animatewp.com points to
  Vercel's anycast IPs (216.150.1.129 / 216.150.16.129), `www` CNAMEs to
  `b6707f4f98205d10.vercel-dns-016.com.`.

## Design tokens (lifted verbatim from the original WordPress site)

| Token | Value | Source |
|---|---|---|
| `--color-paper` | `#f3f0e7` | Twenty Twenty-Four `base` |
| `--color-paper-2` | `#eceadf` | Twenty Twenty-Four `base-2` |
| `--color-ink` | `#a62b0c` | Rust used for body + headings + buttons |
| `--color-ink-github` | `#24292d` | GitHub octocat color |
| `--container-content` | `1232px` | `alignwide` width |
| `--container-narrow` | `620px` | `is-layout-constrained` width |
| `--container-text` | `565px` | Inner text column inside constrained group |
| `--section-gutter` | `clamp(31.2px → 104px)` | Twenty Twenty-Four global padding, fluid |
| `--fs-display` | `clamp(30.36px → 40px)` | H1/H2 fluid scale |
| `--fs-h3` | `clamp(22.78px → 29.6px)` | Sub-section H3 fluid scale |

Card H3 in the Why Choose section is intentionally NOT in the display scale —
it's Inter 16.8px / 600 (small label style with an asterisk above), distinct
from the Cardo H3s used for "Key Benefits" / "Simple to Use" / "Advanced
Animation Settings".

## Gotchas

- **Tailwind v4 reads `text-[var(--my-token)]` as a *color* utility**, not
  font-size. Always ambiguous — it picks color. Use the named utilities
  `.awp-display` / `.awp-h3` defined in `globals.css` instead.
- **`is-style-asterisk` decoration** above every centered H2 and every
  H3 is reproduced as `.awp-asterisk::before` with a `clip-path: path(...)`
  — the exact SVG path was copied off Twenty Twenty-Four's stylesheet, do
  not "simplify" it without checking visual parity.
- **Checkmark lists** use `list-style: none` + `::before { content: "✓" }`
  for the marker. Numbered list (Simple to Use) uses `list-style: decimal`.
- **Hero GIF** uses a plain `<img>` (not `next/image`) because Next.js
  image optimization breaks animated GIFs.
- **AnimateOnScroll** is the only client component. It uses `@gsap/react`'s
  `useGSAP({ scope })` for cleanup. It respects `prefers-reduced-motion`
  by skipping the timeline entirely.
- **No mid-page sectioning of Features + Advanced Animation Settings.**
  The original WordPress markup keeps both inside one `wp-block-group`;
  `Features.tsx` renders all three alternating rows (Key Benefits + image,
  image + Simple to Use, Advanced Animation Settings + image) inside one
  `<section>`. Don't split into separate components.
- **Get Started section** is an inset card with `paper-2` bg + 104×64
  padding inside the alignfull outer section — not a flat full-bleed
  section like Why Choose.

## SEO

- Title / description / canonical / OG / Twitter / robots in
  `layout.tsx` metadata
- JSON-LD `@graph` with 7 entities in `layout.tsx` body
  (Organization, Organization-publisher, WebSite, WebPage, ImageObject,
  SoftwareApplication, CreativeWork)
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest` routes
- `theme-color` via the `viewport` export (Next 15+ moved this off
  metadata — don't move it back)
- `application-name`, `apple-mobile-web-app-*`, `format-detection`
  flags also via Metadata API

## Source content

Marketing copy was ported verbatim from the WordPress site at the time
of the migration. The plugin source lives at
<https://github.com/prolific-digital/animatewp>. End-user docs live on
Notion: <https://prolificdigital.notion.site/AnimateWP-Documentation-138f73948280458d9a2bcd298ac62354>.

If copy needs to change, edit the section components directly — there is
no CMS layer. The original WordPress install is decommissioned (or will
be shortly).

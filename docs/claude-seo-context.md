# Claude Code Context

## Project

- Name: `TradeMark BrandCare`
- Repository: `/Users/mateocarballido/Desktop/trademark`
- Stack: `Vite + React + React Router + react-helmet-async`
- Hosting: `Cloudflare Pages`
- Production domain: `https://trademark.com.ar`
- Pages.dev domain: `https://trademark-7l8.pages.dev`

## Business context

TradeMark BrandCare designs, produces, and installs visual communication for points of sale in Argentina: signage, storefront graphics, retail installations, and brand applications for physical spaces.

Primary audience:

- Marketing managers
- Commercial directors
- Mid-sized and large companies with multiple retail locations

## Current architecture

- The site is a client-side SPA using `BrowserRouter`.
- SEO tags are managed with `react-helmet-async`.
- Main SEO-related files:
  - `src/components/PageSEO.jsx`
  - `src/components/SchemaOrg.jsx`
  - `src/pages/*.jsx`
  - `public/robots.txt`
  - `public/sitemap.xml`
  - `public/_redirects`

## Important implementation notes

- Cloudflare Pages is already live and both custom domains are active:
  - `https://trademark.com.ar`
  - `https://www.trademark.com.ar`
- DNS was migrated from Nuthost to Cloudflare.
- Email is still expected to keep working through the existing mail setup, so avoid unrelated DNS recommendations in code changes.
- The project is still an SPA, so route-level SEO in the initial HTML is limited unless prerendering or SSR is added.

## Current homepage SEO intent

Home currently uses:

- Title: `Comunicación Visual para Puntos de Venta`
- Description: `Diseñamos, producimos e instalamos señalética, cartelería y montajes para tus locales. Un equipo, cero intermediarios. Buenos Aires y todo el país.`

## What Claude Code should focus on

Please review and improve the technical SEO implementation already present in the repo, without changing the brand voice or doing unrelated visual refactors.

Priority areas:

- Metadata quality and consistency
- Open Graph and Twitter tags
- Canonicals
- Structured data validity
- Sitemap completeness
- 404 / indexability behavior
- Project-detail page SEO
- Missing SEO assets referenced by metadata

## Constraints

- Preserve the existing design and routing behavior.
- Keep the site deployable on Cloudflare Pages.
- Prefer minimal, production-safe changes over large architectural rewrites.
- If recommending prerendering or SSR, explain whether it is implemented now or only suggested as a follow-up.

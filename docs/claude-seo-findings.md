# SEO Findings And Requested Fixes

Use this as the implementation brief for a focused technical SEO pass.

## Summary

The project already has a decent SEO foundation for a small React SPA, but several technical issues are weakening indexing, social previews, and metadata reliability. The most important problem is structural: route-level metadata exists in React components, but the built HTML is still a single SPA shell, so Google and social scrapers may not consistently see the correct per-page metadata.

## Findings

### 1. Route-level metadata is not present in the initial built HTML

- `PageSEO` is implemented in React and uses `react-helmet-async`.
- However, the built `dist/index.html` still contains only a single generic title and description for the app shell.
- This means route-level metadata depends on JavaScript execution after hydration.

Why this matters:

- Google can often handle this, but less reliably than prerendered HTML.
- Social scrapers may miss route-level Open Graph and Twitter metadata.
- It helps explain why Google may still show old snippets or generic snippets.

Relevant files:

- `src/components/PageSEO.jsx`
- `dist/index.html`
- `src/App.jsx`

### 2. SEO asset URLs point to files that do not exist publicly

The code references:

- `https://trademark.com.ar/og-image.jpg`
- `https://trademark.com.ar/trademark-logo-dark.png`

But these assets are not present in `public/` as public root files.

Why this matters:

- Open Graph previews may fail.
- Structured data images/logos may be invalid.
- Social sharing quality suffers.

Relevant files:

- `src/components/PageSEO.jsx`
- `src/components/SchemaOrg.jsx`
- `public/`

### 3. Project detail pages have no dedicated SEO metadata

`ProyectoDetail.jsx` does not use `PageSEO`, so individual portfolio/case-study pages do not get:

- unique title
- unique description
- canonical
- Open Graph
- possible project-level schema

Why this matters:

- Case-study pages are often some of the most valuable SEO landing pages.
- Today they likely inherit generic metadata instead of page-specific metadata.

Relevant file:

- `src/pages/ProyectoDetail.jsx`

### 4. The sitemap is manual and incomplete

The sitemap currently includes only a subset of project-detail pages.

Why this matters:

- Search engines are not being told about the full portfolio.
- The sitemap can easily drift out of sync with the real routes.

Relevant file:

- `public/sitemap.xml`

### 5. Structured data contains at least one invalid URL

In `SchemaOrg.jsx`, the Instagram `sameAs` value has a stray trailing quote inside the URL string.

Why this matters:

- This can invalidate or degrade the structured data.

Relevant file:

- `src/components/SchemaOrg.jsx`

### 6. 404 behavior is weak from an SEO perspective

The `NotFound` page does not include:

- explicit `noindex`
- dedicated SEO metadata

Also, since the app is an SPA, invalid routes may not produce a real HTTP 404 unless additional routing behavior supports it.

Why this matters:

- Garbage URLs may become indexable.
- Search engines can receive weaker quality signals for invalid pages.

Relevant file:

- `src/pages/NotFound.jsx`

### 7. Production debugging output is still present

`Contacto.jsx` logs the Formspree env var in the browser console.

Why this matters:

- Not a critical security issue, but poor production hygiene.

Relevant file:

- `src/pages/Contacto.jsx`

## What should be changed

Implement the following, in order of priority:

1. Add valid public SEO assets in `public/`
   - Provide a real `og-image.jpg`
   - Provide a real public logo file if referenced by schema
   - Update metadata references to match actual public asset paths

2. Improve `PageSEO.jsx`
   - Ensure metadata remains consistent and valid
   - Keep canonical handling correct
   - Preserve OG/Twitter tags
   - If appropriate, add missing common tags that are low-risk and helpful

3. Fix `SchemaOrg.jsx`
   - Correct invalid URLs
   - Validate image/logo references
   - Keep schema consistent with business identity and contact details

4. Add SEO to `ProyectoDetail.jsx`
   - unique title using project/client information
   - unique description from project fields
   - canonical based on slug
   - OG metadata
   - optionally breadcrumb schema if appropriate

5. Improve `NotFound.jsx`
   - add `PageSEO`
   - set `noindex`
   - keep UX unchanged

6. Make the sitemap consistent with actual routes
   - include all real project detail pages
   - avoid stale or partial entries
   - if practical, generate it from the project data source or at least align it manually

7. Remove production debugging noise
   - remove the Formspree console log from `Contacto.jsx`

## Architectural note

If you believe prerendering or SSR is necessary for stronger SEO, do one of the following:

- implement a minimal safe solution now if it fits the current stack cleanly, or
- leave the architecture unchanged and document it as a follow-up recommendation

Do not perform a large migration unless it is clearly justified and low-risk.

## Deliverable expectation

Please make the code changes directly and then summarize:

- what was changed
- what remains as a follow-up
- whether the SPA architecture still limits SEO after the fixes

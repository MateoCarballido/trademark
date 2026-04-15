# Claude Code Context: Brand Search Alignment

## Project

- Name: `TradeMark BrandCare`
- Repository: `/Users/mateocarballido/Desktop/trademark`
- Stack: `Vite + React + React Router + react-helmet-async`
- Hosting: `Cloudflare Pages`
- Production domain: `https://trademark.com.ar`

## Business goal

The company wants to appear more reliably in Google for the kinds of searches real users in Argentina are actually likely to make.

Primary search intents to support:

- `trademark grafica`
- `trademark gráfica`
- `trademark impresion`
- `trademark impresión`

Secondary search intents to support:

- `trademark`
- `trademark brandcare`

Important nuance:

- The current / desired brand is `TradeMark BrandCare`
- The older / commercially recognizable brand people may still search for is `Trademark Gráfica`
- In this market, users are more likely to search using terms like `gráfica` and `impresión` than `BrandCare`
- The implementation should not over-prioritize `BrandCare` if that weakens discovery through more natural search terms

The implementation should help Google understand that:

- `TradeMark BrandCare` is the current brand
- `Trademark Gráfica` is the previous and still-recognizable commercial name
- the business is associated with `gráfica`, `impresión`, and `comunicación visual`
- all of these refer to the same business and same domain
- the newer brand should remain present, but not at the cost of weakening stronger discovery signals

## Constraints

- Preserve `TradeMark BrandCare` as the primary visible brand
- Do not revert the site branding back to `Trademark Gráfica`
- Do not keyword-stuff or add awkward SEO spam
- Keep the copy elegant, professional, and natural in Rioplatense Spanish / business Spanish
- Make minimal, targeted code and copy changes
- Avoid unrelated design or structural refactors

## Where this should likely be implemented

Potentially relevant files include:

- `src/pages/Home.jsx`
- `src/pages/Nosotros.jsx`
- `src/components/SchemaOrg.jsx`
- `src/components/PageSEO.jsx`
- footer or other brand-reference components if needed

## Expected strategy

The site should:

- Keep `TradeMark BrandCare` present as the current brand
- Keep `Trademark Gráfica` alive as an important discovery / recognition signal
- Introduce a clean continuity statement that acknowledges the former name `Trademark Gráfica`
- Reinforce, in natural Spanish, the service language users are more likely to search for:
  - `gráfica`
  - `impresión`
  - `comunicación visual`
- Add structured data support for current and alternate brand naming where appropriate
- Improve visible and metadata-level brand consistency without overdoing it
- Avoid making `BrandCare` so dominant that it weakens the more commercially intuitive discovery terms

## Success criteria

After implementation, the site should send a clearer set of signals that:

- current brand = `TradeMark BrandCare`
- alternate / previous commercial name = `Trademark Gráfica`
- official website = `trademark.com.ar`
- business category = `gráfica`, `impresión`, and `comunicación visual` for points of sale in Argentina
- the current branding and the real search behavior of Argentine users are both being respected

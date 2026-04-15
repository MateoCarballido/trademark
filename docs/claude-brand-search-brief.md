# Implementation Brief: Brand Search Coverage

Use this brief to implement code and copy changes that improve branded and semi-branded search alignment for:

- `trademark grafica`
- `trademark gráfica`
- `trademark impresion`
- `trademark impresión`
- `trademark`
- `trademark brandcare`

## Core principle

Do **not** demote or replace the new brand.

The site should present:

- `TradeMark BrandCare` as the current brand
- `Trademark Gráfica` as the previous but still commercially relevant brand reference

The goal is to help search engines and users connect both names, plus the service-language terms `gráfica` and `impresión`, to the same business.

Important:

- Do not treat `BrandCare` as the only signal worth strengthening.
- The implementation should reflect real search behavior in Argentina, where `gráfica` and `impresión` are much more intuitive discovery terms.

## What to change

### 1. Strengthen the primary brand signal on key pages

Review the homepage and any other highly authoritative brand pages and make sure the current brand name appears clearly and naturally in visible copy, not just in metadata.

Focus especially on:

- homepage hero area or nearby supporting copy
- `Nosotros` page
- footer or site-wide brand context if appropriate

The copy should feel natural, not stuffed.

Also make sure the site uses natural service terminology that a real Argentine prospect would search for, especially:

- `gráfica`
- `impresión`
- `comunicación visual`

### 2. Add a continuity statement for the previous brand

Add a short, elegant line in an appropriate place, most likely on the `Nosotros` page, explaining that `TradeMark BrandCare` is the evolution of `Trademark Gráfica`.

Suggested direction:

- current company = TradeMark BrandCare
- historical / legacy name = Trademark Gráfica
- same business continuity
- 30+ years of experience

Important:

- This should not treat `Trademark Gráfica` as irrelevant buried history.
- It should still function as a live recognition signal for users who search with that older name.
- It should help the site rank without forcing `BrandCare` to carry all the search intent by itself.

This should be written in polished Spanish, aligned with the site tone.

### 3. Update structured data to reflect brand continuity

Review `SchemaOrg.jsx` and add support for:

- primary brand name: `TradeMark BrandCare`
- alternate or legacy brand name: `Trademark Gráfica`

Use the most appropriate schema field available for this purpose.

Keep all schema valid and consistent with the rest of the site.

### 4. Review title/description consistency

Check whether the homepage and other key pages are consistently reinforcing the correct current brand.

Do not over-optimize. Just ensure that:

- the homepage keeps `TradeMark BrandCare` present as the current brand
- the old name is acknowledged where useful, but not overused
- `gráfica` and/or `impresión` appear naturally in strategically important places where they help search relevance
- the final balance reflects how real users would search, not just the preferred internal branding

### 5. Keep the implementation tasteful

Do not:

- repeat the target search queries unnaturally
- inject awkward SEO paragraphs
- clutter the hero
- overuse parentheses everywhere

The result should still feel like a premium B2B brand site.

## Suggested copy direction

You do not need to use these exact words, but the implementation should communicate something close to:

- `TradeMark BrandCare` is the current brand
- the business was previously and is still recognizably known as `Trademark Gráfica`
- this is a brand evolution, not a separate company
- the company is associated with `gráfica`, `impresión`, and `comunicación visual`
- the current name should coexist with the older, more searchable commercial recognition

Possible placement:

- `Nosotros`
- supporting line near homepage brand intro
- schema

## Deliverable expectation

Please implement the changes directly in code and then summarize:

1. what copy and code changed
2. where the legacy brand was introduced
3. how the new implementation balances current branding with legacy search recognition
4. where `gráfica` / `impresión` were reinforced naturally

## Important guardrail

If you think a change would weaken the premium feel of the site, prefer the more restrained option.

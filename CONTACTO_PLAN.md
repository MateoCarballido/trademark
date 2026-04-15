# Contacto — Pending Work

Files involved:
- `src/pages/Contacto.jsx`
- `src/pages/Contacto.css`
- `src/components/WhatsAppButton.jsx`
- `src/components/WhatsAppButton.css`
- `src/data/contact.js`

---

## ⚠️ Phone number discrepancy — verify before touching

`contact.js` has `whatsappNumber: '5491151857099'` → displays as `+54 9 11 5185-7099`.
`CLAUDE.md` lists WhatsApp as `01147993002` — this is a **different number**.

Ask the client which is correct before the Contact pass. All href/display values flow from `contact.js` so fixing there fixes everywhere.

---

## P1 — Fix before release

### 1. Form labels not linked to inputs (WCAG 1.3.1)

Every `<label>` in `Contacto.jsx` is visually adjacent to its input but has no `htmlFor` — inputs have no `id`. Screen readers cannot associate them.

Fix: add matching `id` + `htmlFor` pairs to every field.

Fields to fix (name → suggested id):
- nombre → `id="nombre"`
- empresa → `id="empresa"`
- email → `id="email"`
- telefono → `id="telefono"`
- servicio → `id="servicio"`
- mensaje → `id="mensaje"`
- como_nos_conociste → `id="como_nos_conociste"`

### 2. Decorative icons missing aria-hidden

These icons are inside labeled elements and get read aloud by screen readers:
- `<Mail>` in contact info list → add `aria-hidden="true"`
- `<Phone>` in contact info list → add `aria-hidden="true"`
- `<MapPin>` in contact info list → add `aria-hidden="true"`
- `<Send>` inside submit button → add `aria-hidden="true"`

---

## P3 — Polish

### 3. border-radius: 12px on .contacto-grid (Contacto.css:22)

The site uses sharp edges everywhere (buttons are border-radius: 0, brutalist aesthetic). The 12px rounded card is inconsistent.
Fix: reduce to 0 or at most 2px to match the overall language.

### 4. Move paddingTop inline style to CSS

`Contacto.jsx:54` has `style={{ paddingTop: 'var(--nav-height)' }}` inline.
Move it into `.page-contacto` in `Contacto.css` for consistency with other pages.

### 5. WhatsApp fallback link text missing punctuation

`Contacto.jsx:144`: `Preferís resolverlo ahora?`
Should be: `¿Preferís resolverlo ahora?`

### 6. Add autocomplete attributes to form inputs

Improves UX (browser autofill) and passes WCAG 1.3.5.

Suggested values:
- nombre → `autoComplete="name"`
- empresa → `autoComplete="organization"`
- email → `autoComplete="email"`
- telefono → `autoComplete="tel"`

---

## Optional improvements (discuss with client)

### 7. Scroll reveal animations

Every other section on the site uses `useScrollReveal`. Contacto has none — the header and form just appear statically. Could add reveals to `.contacto-header` and stagger the form groups on entry.

### 8. WhatsApp FAB tooltip accessibility

`WhatsAppButton.jsx:47`: `<span className="whatsapp-tooltip">¿Hablamos?</span>` — the tooltip is CSS-only (opacity transition). Screen readers will read both the `aria-label` and this span. Add `aria-hidden="true"` to the tooltip span.

---

## What's already correct — do not change

- Form submission logic (Formspree + error states) is solid
- WhatsApp fallback href construction is correct
- `disabled={status === 'sending'}` on submit button is correct
- `contact.js` data structure feeds both Contacto and Footer correctly — single source of truth
- WhatsAppButton entry animation uses Anime.js correctly with reduced-motion guard

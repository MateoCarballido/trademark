# AGENTS.md — TradeMark BrandCare

> Copiar este archivo a la raíz de cada proyecto cliente.
> El @import trae todas las skills, convenciones y flujo de trabajo desde Codex pro.

---

@/Users/mateocarballido/Desktop/Codex pro/AGENTS.md

---

## Contexto del Cliente

- **Negocio:** TradeMark BrandCare
- **Rubro:** Comunicación visual para puntos de venta — diseño gráfico, producción e instalación de cartelería exterior, montajes en tiendas/locales comerciales y señalética
- **Ubicación:** B1636EUA, Ramón B. Castro 1565, B1636EUA Olivos, Provincia de Buenos Aires — con red de instaladores en todo el país
- **Audiencia:** Gerentes de Marketing y Directores Comerciales de empresas medianas a grandes con 3–50 puntos de venta (retail, gastronomía, moda, salud/wellness, real estate, servicios financieros). También dueños/CEOs de PyMEs con presupuesto real para imagen.

## Propuesta de Valor del Cliente

TradeMark BrandCare diseña, produce e instala la comunicación visual de marcas en puntos de venta — de punta a punta, con un solo equipo responsable — para que la imagen quede igual en cada local, sin coordinar múltiples proveedores.

## CTA Principal

- **Canal:** Formulario de contacto / WhatsApp
- **Número WhatsApp:** 01147993002
- **Mensaje pre-escrito:** "Hola, quiero hablar sobre un proyecto de imagen para mis locales."

## Identidad Visual

- **Paleta:**
  - Primario: `#1A1F3D` — Midnight Navy
  - Acento: `#C4883C` — Copper Gold
  - Secundario: `#8C8C8C` — Warm Slate
  - Fondo claro: `#F8F7F5` — Warm White
  - Fondo oscuro: `#0D0F1A` — Deep Navy
- **Tipografía:** Inter (títulos, Bold 700 / Semibold 600) + DM Sans (cuerpo, Regular 400 / Medium 500) — ambas en Google Fonts
- **Estilo:** Minimalista y moderno · Elegante sin ser ostentoso · Confiable y profesional · Sin colores saturados

## Servicios / Secciones

1. Diseño gráfico para puntos de venta (identidad visual aplicada a materiales POP)
2. Montajes en tiendas y locales comerciales (instalación de elementos visuales interiores)
3. Cartelería exterior (señalética y gráficas para vía pública y fachadas)
4. Comunicación visual integral (displays, vinilos, señalética interior, packaging visual)

## Tono de Comunicación

- **Voz:** Confiable · Cercana · Precisa
- **Hablar como:** Socio estratégico que entiende el negocio del cliente, no proveedor que espera instrucciones
- **Evitar:** Jerga técnica ("ploteo vinílico"), superlativos vacíos ("líderes del mercado"), lenguaje de proveedor ("cotización", "pedido"), tono genérico
- **Tagline principal:** "Tu marca, impecable en cada espacio."

## Información Técnica

- **Deploy URL:** <!-- TODO: Completar cuando esté en Vercel -->
- **Dominio final:** trademark.com.ar
- **Stack:** Vite 8 + React 19 + TypeScript 6 + Tailwind CSS 4 + React Router 7
- **UI libs:** Radix UI (`@radix-ui/react-slot`), `class-variance-authority`, `clsx`, `tailwind-merge` → setup tipo shadcn/ui
- **Animaciones:** Framer Motion 12
- **Iconos:** Lucide React 1.7
- **Build:** Rolldown (bundler nuevo, reemplaza Rollup dentro de Vite 8)
- **Estado:** Demo en construcción (dist/ existe — ya fue buildeado al menos una vez)

## Uso de Skills (Obligatorio)

> Las skills están en `/Users/mateocarballido/Desktop/Codex pro/.agents/skills/`

- Al crear o modificar componentes React → usar `building-components` + `emil-design-eng`
- Al diseñar UI nueva o layouts → usar `frontend-design` + `ui-ux-pro-max`
- Al escribir o revisar copy → usar `humanizer`
- Al trabajar con Tailwind, shadcn/ui o sistema de diseño → usar `shadcn-ui`
- Antes de hacer build o presentar al cliente → usar `codex` para auditoría final

## Animaciones — Trademark

- Lenis inicializado en `main.tsx` con `autoRaf: true`
- Todas las animaciones de entrada usan Anime.js (no CSS transitions)
- Duración estándar: 600–800ms, easing: `easeOutQuad`
- Scroll reveal: opacity [0→1] + translateY [30→0], stagger de 80ms entre elementos
- Hero: animación de entrada al cargar (no on-scroll)
- Nada de animaciones en mobile si `prefers-reduced-motion` está activo

## Notas y TODOs del Proyecto

<!-- TODO: Agregar fotos reales de trabajos realizados (portfolio) -->
<!-- TODO: Conseguir 3-5 logos de clientes para sección de social proof -->

<!-- code-review-graph MCP tools -->
## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
|------|----------|
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.

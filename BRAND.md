# Rejouva — Brand Guidelines

> Visual reference: open [brand.html](brand.html). This file is the quick dev reference.
> Product: **Rejouva France Patches** — premium clinical-grade under-eye hydrogel patches
> (>95% purified salmon PDRN + ultra-low molecular weight Pink Collagen, 100–243 Da).

## Brand Essence
- **Positioning:** Medical-grade periorbital restoration for the skeptical, time-poor executive. Sell *mechanism + evidence*, never "look younger."
- **Personality:** Precise, credible, calm — a dermatology brief with impeccable taste.
- **Feeling:** Quiet relief and control. Porcelain calm with one warm human rose.

## Color Palette
Never use default Tailwind colors. Tailwind config tokens below.

| Token | Hex | Use |
|------|------|-----|
| `ink` | `#211A24` | Body text, dark sections |
| `ink-soft` | `#3A2F3E` | Secondary dark surfaces |
| `porcelain` | `#FBF8F5` | Primary background |
| `bone` | `#F3EBE4` | Alt section background |
| `blush` | `#F4E6E4` | Tinted cards, highlights |
| `rose` | `#C17C84` | Accent — "Pink Collagen" |
| `rose-deep` | `#9E4F58` | CTAs, emphasis, links |
| `gold` | `#BFA06A` | Hairlines, star ratings |
| `muted` | `#6E626A` | Captions, meta text |

**Usage ratio:** Porcelain 60% · Ink 22% · Rose 12% · Gold 6%.
Hairline borders: `rgba(33,26,36,.10)`.

## Typography
- **Display:** Fraunces (serif) — headlines, big numbers, pull-quotes. Tracking `-0.035em` on large sizes.
- **Body/UI:** Inter (sans) — line-height `1.7` for body.
- Both loaded via Google Fonts. Pair them — never one font for everything.

Scale: H1 ~62 / H2 ~44 / H3 ~22 / Body 17–18 / Eyebrow 0.72rem uppercase `letter-spacing:.22em`.

## Components
- **Buttons:** pill radius; lift `translateY(-2px)` on hover with spring easing; always define `:hover :focus-visible :active`. Primary = `rose-deep` fill; ghost = `1px` ink border.
- **Shadows:** color-tinted (warm ink + rose), never flat grey.
  - `shadow-soft` (elevated) · `shadow-lift` (floating) · `shadow-glow` (rose CTA glow).
- **Elevation:** three z-planes only — base (hairline border) → elevated → floating.
- **Cards:** radius 16–24px. Blush/bone fills for quotes; ink surface for reviews/featured pricing.
- **Badges:** rose pill for "Most popular"; blush pill for stat callouts; gold `★★★★★`.

## Imagery & Motion
- Every image: dark bottom gradient (`linear-gradient(to top, rgba(33,26,36,.55), transparent 55%)`) **+** rose `mix-blend-multiply` wash. No raw stock.
- Animate **transform & opacity only** — never `transition-all`.
- Spring easing: `cubic-bezier(.16,1,.3,1)`.
- Scroll-reveal: fade + 22px rise, staggered. Respect `prefers-reduced-motion`.
- Subtle SVG grain overlay on sections for depth.

## Voice & Tone
She's educated and cynical of beauty marketing. Lead with mechanism and numbers.

**Say:** "Mathematically too big to cross the 500-Dalton barrier." · ">95% purified · 100–243 Da · clinically evaluated." · "Drains pooled morning fluid. Hands-free."

**Never:** "Look decades younger instantly!" · miracle/secret/holy-grail · celebrity hype · vague "nourishes & revitalizes" filler.

**Three notes:** Precise · Evidence-led · Calm & certain.

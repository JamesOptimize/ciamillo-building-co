# Ciamillo Building Co. — Website

Marketing site for **Ciamillo Building Company** (trade name of Intensive Precision, Inc.), a developer-builder of new-construction estates on the East End of Long Island.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS 3 · React Router 6 (the standard Lovable stack).

```bash
npm install
npm run dev     # http://localhost:8080
npm run build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home: hero, aerial, featured residence, method, index of works, press, inquiry form |
| `/residences/492-wainscott-harbor-road` | 492 Wainscott Harbor Road: facts, annotated aerial, interactive level explorer, site plan, plans → built, representation |
| `/brand` | Brand standards: mark construction, lockups, color, type |

## Structure

```
src/
  components/Logo.tsx      Mark + Lockup (the logo — edit with care, see /brand)
  components/Chrome.tsx    Header, SectionLabel (§ 0X rules), SiteFooter, SmartLink
  components/Drawings.tsx  Elevation (traced from the aerial) + SitePlan (keyed A–E)
  data/project492.ts       All listing facts for 492 in one place
  pages/                   Home, Project492, Brand
  assets/492-aerial.webp   Aerial photograph
```

## Design rules (please keep)

- **Colors** live in `tailwind.config.ts`: `ink`, `bone`, `survey` (accent via the `--accent` CSS variable), `rule`, `steel`, `fog`, `slate`. Survey Orange is a signal color — keep it to ~5% of any view.
- **Type:** Archivo at 125% width (`font-display font-wide`) for display, Inter Tight for text, JetBrains Mono caps for labels and measurements.
- **Signature headline:** first line solid, second line outlined (`text-outline` / `text-outline-thin`).
- **Section headers** always use `<SectionLabel n="0X" name="…" />`.
- Big numerals and headlines are sized with container-query units (`cq` class + `cqi` font sizes) so they never overflow their box. Don't replace them with `vw` sizes.

## Open items

- `[OFFICE ADDRESS]`, `[PHONE]`, `[EMAIL]` placeholders on the home page inquiry block.
- Inquiry form currently only shows a confirmation; wire it to email or a database (e.g. Supabase via Lovable Cloud).
- Three photo slots on the 492 page (`[GREAT ROOM]`, `[CHEF'S KITCHEN]`, `[POOL HOUSE & SAUNA]`) await photography.
- Year for "The Urban Barn" in the index.
- Listing figures come from public listing data; confirm with the builder before launch.

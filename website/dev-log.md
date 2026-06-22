# Sanjay Puri Architects — Development Log

---

## 22 May 2026

**Built**
- Next.js project scaffolded with App Router
- Tailwind CSS configured with full design system (colours, fonts, zero border radius)
- Framer Motion and GSAP + ScrollTrigger installed
- Dev server confirmed running
- Global layout (`app/layout.tsx`) initiated
- Footer component built (in progress — see bugs)

**Stack decisions**
- Framework: Next.js (App Router) — chosen over plain React for automatic routing, persistent layouts, and performance out of the box
- Styling: Tailwind CSS
- Animation: Framer Motion for hover states, nav overlay, entrance animations, page transitions. GSAP + ScrollTrigger for project strip scroll behaviour and zoom.
- Fonts: Helvetica Neue for headlines and UI labels. Inter for body text. Both configured as custom font families in Tailwind. Swap to Neue Haas Grotesk and Canela once licensed.

**Pages to build**
- / (Homepage)
- /projects (Projects index)
- /projects/[slug] (Individual project page)
- /about

**Bugs / decisions made during development**
- Footer initially rendered with a project photograph as background. Rejected. Footer background must be solid `#1C1814` — no image, no transparency. A photograph behind footer text is a functional and design failure.
- Footer firm name was centred and oversized. Corrected spec: firm name left aligned, small typographic treatment, not a headline.
- Footer had horizontal divider lines and "Mumbai, India" in italics. Both removed — not in spec, unnecessary decoration.
- Logo is in WebP format (black). WebP cannot have its colour changed in code. Decision pending: either convert to SVG via Vectorizer.ai or export two versions (dark for light background, light `#F5F0EA` for footer). SVG conversion is the correct long-term solution.

---

## 23 May 2026

**Built**
- Footer corrected and locked
- Typography token system added to global.css — all values as CSS custom properties
- Scrollbar hidden globally across all browsers
- Sections One and Two integrated from Claude design artifact into codebase
- Inter replaced with Playfair Display Light as body font substitute

**Decisions made during development**

- Logo: the actual Sanjay Puri Architects WebP logo cannot be used in the spec. It is their trademarked intellectual property. Using it in an unpermissioned redesign creates legal exposure and implicitly endorses their existing mark. Replace with a typographic lockup: "Sanjay Puri Architects" in Neue Haas Grotesk, letter-spaced, `#F5F0EA` on dark backgrounds.

- Token system: CSS custom properties in global.css are the equivalent of Token Studio in Figma. All colour and typography values defined once at :root and referenced via var() everywhere. No hardcoded values in component styles.

- Typography clamp values locked:
  - --type-headline-size: clamp(2.5rem, 5.34vw + 0.56rem, 6rem)
  - --type-awards-size: clamp(2rem, 3.83vw + 0.49rem, 4.5rem)
  - --type-subheadline-size: clamp(1.25rem, 1.15vw + 0.8rem, 2rem)
  - --type-body-size: clamp(1rem, 0.38vw + 0.85rem, 1.25rem)
  - --type-strip-size: 0.8125rem (fixed, no scaling)
  - Pinned to 393px mobile min, 1440px desktop max

- Font substitutes updated: Helvetica Neue for headlines and UI (unchanged), Playfair Display Light for body. Inter removed. Playfair is a closer substitute for Canela than Inter by a significant margin.

- Hero gradient overlay rejected. The `::after` pseudo-element with a dark gradient over the hero photograph violates the no-gradients rule in the spec. Nav text legibility on the photograph is achieved through colour contrast alone — `#F5F0EA` text on a dark architectural photograph is sufficient.

- Nav pattern: three alternative nav positions were tested and rejected. Bottom persistent bar rejected — collides with footer at scroll end, carries mobile app register (Zomato, Instagram pattern), wrong for this site. Bottom floating bar over project strip rejected — obstructs the primary visual element of Section Two. Centred top bar with dark background box rejected — the box is not in the colour system for this context, centred alignment contradicts the spec. Decision confirmed: nav hidden on load, appears on scroll, logo top left and hamburger top right sitting directly on the photograph, no background bar.

- Scrollbar: hidden globally. Adds nothing visually, breaks clean section edges.

- Build order confirmed: complete all pages statically first, then add animations in one pass. Do not add animations section by section during builds.

**Footer — locked and correct**
- Background: `#1C1814`
- Text: `#F5F0EA`
- Firm name: left aligned, `var(--type-ui-size)`, not a headline
- Nav links: Home, Projects, About Us, Contact — in that order
- Copyright line: © 2026 Sanjay Puri Architects. All rights reserved.
- No dividers, no location line, no social icons, no images

**Pending**
- Resolve logo format — convert WebP to SVG via Vectorizer.ai
- Build hero section (Section One): full bleed placeholder, nav hidden on load, appears on scroll at 80px threshold, opacity transition 300ms
- Build Section Three: Sanjay Puri two-line introduction
- Build Section Four: four awards, typographic only
- Build Section Five: contact form, three fields, all required
- Build About page (three parts: who he is, philosophy and process, recognition)
- Build Projects index (fixed height grid, five filters, 20-25 projects)
- Build individual project page template
- Source 20-25 project images from ArchDaily and Dezeen — critical path item, start now in parallel
- Confirm one image per award entry for cursor-follow and mobile scroll interactions (ten images total)
- Activate Neue Haas Grotesk via Adobe Fonts and rent Canela via Fontstand — swap substitutes once active
- Add animations after static site is complete
- Deploy

**Estimated timeline**
- Homepage completion: 1.5 to 2 weeks
- About page: 1 to 1.5 weeks
- Projects index: 1 week
- Individual project page: 1 week
- Photography sourcing and permissions: 2 to 4 weeks, running in parallel
- Total: 8 to 12 weeks. Realistic target is 3 months.
- Photography is the critical path. The hero, project strip, and awards interactions cannot be finalised without real photographs.

**Animation order (after static site is complete)**
1. Project strip card hover overlay — CSS transition, opacity, 250ms ease-out
2. Nav overlay open — CSS transition, opacity plus translate, 400ms ease-out
3. Homepage section entrances — Intersection Observer plus CSS, staggered
4. Strip zoom on scroll — GSAP ScrollTrigger
5. Cursor-following awards image — desktop only
6. Scroll-triggered awards background image — mobile only
7. Page transitions — last

**Notes**
- Start a new Claude Code session per page to keep context clean and output quality consistent
- The design spec file is separate from this log and remains unchanged — all locked design decisions live there
- Animation learning reference: Step by Step Guide MD file saved separately. Relevant at animation stage, not during page builds.
- AEO optimisation is not relevant for this site. Visitors arrive via word of mouth, not search. Focus on semantic HTML, correct meta tags, and fast load time instead.
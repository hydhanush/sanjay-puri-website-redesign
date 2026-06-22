# Sanjay Puri Architects — Spec Redesign
## Project Summary

---

## Locked Decisions

**Project purpose**
Spec concept redesign, independent, no affiliation with the firm. Portfolio piece targeting international luxury sector clients. Target price point for real client work: two lakh rupees (approx. $2,400 USD). Justification: design thinking, complete design system, and a built and deployed website — not a Figma file.

**Visitor psychology**
Validation tool, not acquisition tool. Visitors arrive already aware of the firm via word of mouth. They are wealthy high net worth individuals with an active plan to build. The homepage does not need to convert. It needs to impress.

**Colour system**
| Role | Hex |
|---|---|
| Background | `#F5F0EA` |
| Primary Text | `#1C1814` |
| Secondary Text | `#6B5E52` |
| Accent | `#A0522D` |

All four colours belong to the same warm brown/orange hue family. No gradients, no shadows, no tints. Accent used in maximum two places per section only.

**Button system**
Primary button: `#1C1814` background, `#F5F0EA` text. Hover state shifts background to `#A0522D`. No border radius. No shadow.
Ghost/outline variant: transparent background, 1px border `#1C1814`, `#1C1814` text. Hover shifts border and text to `#A0522D`.
Accent colour used as hover state only, never as default button background.

**Typography system**
Base: `html { font-size: 16px; }` — all values in rem. Use `clamp()` for fluid headline scaling.

Headlines — Neue Haas Grotesk Display, Bold
| Breakpoint | Size | Letter Spacing | Line Height |
|---|---|---|---|
| Desktop 1280px+ | 6rem | -0.02em | 1.1 |
| Laptop 1024px | 4.5rem | -0.02em | 1.1 |
| Tablet 768px | 3.5rem | -0.02em | 1.15 |
| Mobile 375px | 2.5rem | -0.01em | 1.2 |

Desktop and laptop use different headline sizes because 1280px and 1024px are meaningfully different viewport widths. The size difference maintains proportional relationship between headline and page width. If 6rem looks fine at both during high fidelity, collapse to one value.

Subheadlines — Neue Haas Grotesk Text, Regular
| Breakpoint | Size | Letter Spacing | Line Height |
|---|---|---|---|
| Desktop | 2rem | 0 | 1.3 |
| Laptop | 1.75rem | 0 | 1.3 |
| Tablet | 1.5rem | 0 | 1.35 |
| Mobile | 1.25rem | 0 | 1.4 |

Body / Credibility Paragraph — Canela, Light
| Breakpoint | Size | Letter Spacing | Line Height |
|---|---|---|---|
| Desktop | 1.25rem | 0.01em | 1.7 |
| Laptop | 1.1875rem | 0.01em | 1.7 |
| Tablet | 1.125rem | 0.01em | 1.75 |
| Mobile | 1rem | 0.01em | 1.8 |

Nav and UI Labels — Neue Haas Grotesk Text, Regular
| Breakpoint | Size | Letter Spacing | Line Height |
|---|---|---|---|
| Desktop | 1rem | 0.08em | 1.4 |
| Mobile | 0.875rem | 0.08em | 1.4 |

Project Strip Labels — Neue Haas Grotesk Text, Light, All Caps
Fixed at 0.8125rem across all sizes, letter spacing 0.1em. Do not scale below this.

Colour assignments per text role:
| Role | Colour |
|---|---|
| Headlines | `#1C1814` |
| Subheadlines | `#1C1814` |
| Body / Credibility Paragraph | `#6B5E52` |
| Nav and UI Labels | `#1C1814` on light background |
| Project Strip Labels (revealed on hover) | `#F5F0EA` |
| Project Category Border | `#A0522D` 1px bottom border |

**Corner radius**
Zero throughout. Every element is sharp edges — cards, buttons, form fields, contact form. Rounded corners signal friendly and approachable, which is the wrong register for this site.

**Wireframing approach**
Mobile first. Start at 375px for every page, lock the layout, then move to tablet 768px, then desktop 1440px. Wireframes are complete. Spacing decisions in wireframes are proportional and relative, not exact — exact values are applied at high fidelity stage.

**Grid system**
Columns only. No rows. Row grids are for fixed vertical rhythm, which works in print. On a website, content height is dynamic — rows create more problems than they solve.

| Breakpoint | Columns | Gutters | Margins |
|---|---|---|---|
| Desktop 1440px | 12 | 24px | 120px each side |
| Laptop 1024px | 12 | 20px | 80px each side |
| Tablet 768px | 8 | 16px | 40px each side |
| Mobile 375px | 4 | 16px | 20px each side |

12 columns on desktop and laptop because the projects index uses a three-column card grid — three divides evenly into 12. 8 columns on tablet supports the two-column projects grid. 4 columns on mobile supports single column. Margins set to keep content proportional to viewport at each breakpoint. All values are starting points — adjust at high fidelity if something looks wrong.

One grid per breakpoint across the whole page. The grid does not change between sections. What changes is how many columns each element spans. The project strip goes full bleed and ignores the column grid entirely.

---

**Section One: Hero**
Full screen, full bleed architectural photograph of Mirai House of Arches, Rajasthan. No navigation visible on load. On scroll, logo appears top left and hamburger top right, both sitting directly on the image with no bar behind them. Logo text "Sanjay Puri Architects" and hamburger three lines are both `#1C1814`. When hamburger is clicked, full screen dark overlay navigation opens.

Hero is the only section that owns the full viewport height. All other sections are as tall as their content requires.

**Section Two: Content and Project Strip**
Background `#F5F0EA`. Left aligned with generous horizontal padding.

Headline: "Contextually designed. Sustainably built." — Neue Haas Grotesk Display Bold, `#1C1814`.

Below headline: 1px horizontal line, 40px wide, `#A0522D`.

Credibility paragraph in Canela Light, `#6B5E52`:
"Sanjay Puri Architects has been shaping India's built environment since 1992. With over 500 international awards and projects across 51 cities, the firm approaches every project as a response to its climate, culture, and context. No two buildings are the same."

Strip shows most awarded projects, not editorially curated featured works. Strip zooms as user scrolls into it. Visitor can horizontal scroll to the end. At the end, an "explore more projects" link exits to the Projects index page.

**Project strip**
Cards show images only by default. No text visible until hover. On hover, dark overlay `#1C1814` at 75% opacity fades in over the image in 250ms ease, revealing project name above and category label below. On mobile, tap reveals overlay.

Cards have fixed height. Width varies by natural image aspect ratio. Spacing between cards is exactly 1rem, uniform throughout. Strip auto-scrolls slowly right to left, pauses completely on hover anywhere over the strip.

Project images are stored in the assets folder and must be used directly. Category label has 1px bottom border in `#A0522D`. No location label — category takes priority at this stage of interaction.

**Section Three: Sanjay Puri**
Introduces the person. Sanjay Puri is the face of the firm, not the practice as a collective. Homepage carries a compressed version: two lines of introduction only. No sketch-to-building pairing on the homepage. The full portrait lives on the About page.

Two-line introduction (locked copy):
"Sanjay Puri has spent three decades designing buildings. No two are alike. Every project begins with the site, and ends as something that could only exist there."

Nina Puri is co-founder but runs a separate interior practice under her own name. She does not get a section on the homepage.

No sketch or decorative architectural illustration behind or near Sanjay Puri's name or portrait. Sketching is not specific enough to Sanjay Puri to justify a visual element. It reads as generic architect shorthand.

**Section Four: Awards**
Combined with the Sanjay Puri section, not a standalone section. Awards sit at the bottom of the Sanjay Puri section with a clear visual break. Typographic treatment only. No logos, no trophy icons, no badge grid. Four awards on the homepage only — the four strongest by geography and award body diversity.

No "Awards" section header label. The award body names are self-evident. Adding a label says you don't trust the visitor to understand what they are reading.

Homepage awards (curated four):
1. Architizer A+ Awards, New York 2024 — Overall Sustainable Design Firm of the Year
2. WA100 UK, 2024 — International Architect of the Year
3. World Architecture Festival, Lisbon 2022 — Best Housing Project Worldwide, Ras Houses
4. Createurs Design Awards, Paris 2023 — Best Residential Project Worldwide, Mirai House of Arches

Full ten awards appear on the About page only.

**Section Five: Contact Form**
Minimal form at the bottom of the homepage. Lower friction than an email link — visitor does not need to open a mail client. Form fields: name, email, message. All three are required. No dropdowns, no unnecessary required fields. Restrained typographic treatment above the form.

Three fields are the minimum viable form. Name and message alone gives the firm no way to reply. Email is non-negotiable. Message field exists because the visitor has a specific project in mind — they need to communicate site, scale, and intent before a call. Without it the form reads as a newsletter signup, which is the wrong register for this audience.

**Footer**
Persistent on every page. Minimal. Dark background `#1C1814`, text `#F5F0EA`. Contains: firm name or logo left aligned, four nav links, copyright line. No social icons unless verified active profiles exist. Closes the page with weight and contrast.

Footer exists for three reasons: navigation safety net for visitors who reach the bottom of a page, visual signal that the page is complete, and housing the copyright line.

Contact form and footer are adjacent on the homepage — form sits immediately above the footer. The colour shift from `#F5F0EA` to `#1C1814` acts as the visual separator. They are not merged into one component. On every other page the footer appears alone with no contact form above it.

**Design principles**
Photography carries earthiness and warmth. Typography and layout carry premium feel. No gradients, no shadows, no decorative elements. Four colours only. Fixed card height signals spatial discipline consistent with the firm's built work.

---

## Full Site Structure

**Pages**
- Homepage
- Projects index — curated grid of 20-25 projects. Entry point from homepage strip "explore more projects" link.
- Individual project page — one template, many instances. Full images, project description, location, scale, awards won.
- About — single page. Covers Sanjay Puri and the firm together. Does not split into two pages.
- Contact — footer section persistent on every page. No dedicated contact page. Form lives on homepage only.

**What does not get a standalone page**
- Awards — surfaces on homepage (within Sanjay Puri section) and About page only
- Contact — footer section only, no dedicated page
- Nina Puri — one line acknowledgment as co-founder on About page only, no dedicated section

---

## About Page Structure

Three parts in sequence. The About page exists to go beyond the homepage. It answers why and how — philosophy and process — which the homepage cannot carry at depth. This is the primary reason a visitor navigates here.

**About page palette consideration (pending)**
Inverting the colour palette for the About page (`#1C1814` background, `#F5F0EA` text) is under consideration. Rationale: creates contrast between pages, signals a tonal shift, suits a page about a person rather than a portfolio. Two risks to resolve before committing: (1) the footer is already `#1C1814` background — the About page must have enough distinct identity beyond being dark; (2) secondary text `#6B5E52` may not have sufficient contrast on `#1C1814` — check against WCAG before locking. Build a test frame in Figma first.

**Part one — Who he is**
Two paragraphs. Introduces Sanjay Puri as a person, not the firm as an entity. Biography chosen for character, not credentials. No repetition of the conviction stated on the homepage.

On desktop, text sits in a column approximately 65-70 characters wide — not full container width. Reading comfort over fill.

Locked copy:

Paragraph one:
"At sixteen, Sanjay Puri read The Fountainhead and decided he would be an architect. Before applying to college, he joined Hafeez Contractor's office as a summer intern at eighteen, the fourth person ever hired there. He continued working through all five years of school. By the time he sat for his architecture college interview, he had visited every construction site in south Bombay and could read every kind of drawing. He founded the practice in 1992 at twenty-seven."

Paragraph two:
"Three decades on, the practice does no PR and no publicity. No marketing, no agency. He has sat on the jury of the World Architecture Festival in Barcelona, Singapore, Berlin, Amsterdam, and Lisbon, the first Indian architect ever to do so. The awards number in the hundreds. And every morning, before anything goes to his team, he still spends two hours sketching the design himself. He has not changed that. 'He did what he felt the site spoke to him about. We try and do that.'"

Note on the closing quote: this is Sanjay Puri on Howard Roark, the protagonist of The Fountainhead. It closes the section by returning to where he began. No attribution label needed — the context established in paragraph one makes the reference self-evident.

Nina Puri acknowledged in one line as co-founder within this section. Nothing more.

**Part two — Philosophy and Process**
This is the content that justifies the About page existing. Two sub-sections presented in sequence: philosophy first, then process.

*Philosophy*
Three core beliefs, each presented as a short bold label followed by two to three lines of explanatory text. No numbered list. No section header label above the blocks — pull quote anchors the section instead.

A pull quote from Sanjay Puri sits above the three blocks:
"The exploration of spaces that successfully engage people whilst being sustainable and contextual."

The three beliefs (locked copy):

**Context**
Every project begins with the site. Climate, culture, and surroundings are not constraints to design around. They are the brief. The building that results could only exist in that place.

**Sustainability**
Passive cooling, natural light, local materials, sun and wind orientation. These are not features added at the end. They are built into how the building is oriented from the start.

**Experience**
Buildings are meant to be felt and moved through, not only looked at. Changing light, temperature, compression, and expansion are tools. A building that photographs well but feels wrong to inhabit has failed.

Note on the Experience block: "changing light, temperature, compression, and expansion" are deliberate spatial and sensory conditions the architect controls. Light: window placement and orientation determines how light moves through the day. Temperature: material choices like thick masonry walls or courtyard water bodies actively regulate interior climate. Compression: a low narrow corridor that opens into a tall room makes both spaces feel more extreme. Expansion: movement from enclosed space to open courtyard produces a designed feeling of release. These are instruments, not byproducts.

*Process*
Four steps in sequence. Layout: stepped indent. Each step indents 2.5rem further right than the one above. Site Reading starts at the left margin. Sketching indents 2.5rem. Modelling indents 5rem. Construction Drawings indents 7.5rem. The staircase shape communicates progression without numbers, icons, or a connecting line. Max-width on each block stays fixed regardless of indent — the indent moves the starting point, not the column width. Verify indent values scale correctly at 1440px.

Bold label, Canela body text below. Same pattern as philosophy blocks and reasoning blocks on individual project pages.

Locked copy:

**Site Reading**
Every project begins with assimilation: the site, the climate, the client's requirements, and the people who will eventually use the building. Nothing is assumed before this stage is complete.

**Sketching**
Initial sketches give the idea its first form. They are tested directly against the constraints of the site and climate, not produced as standalone concepts.

**Modelling**
The sketch is modelled to study it from all aspects. This is where spatial decisions are stress-tested before they are committed to structure.

**Construction Drawings**
The final translation into buildable documentation. The precision of this stage is where concept becomes built reality.

On mobile: philosophy blocks and process steps stack vertically, full width. Indent pattern collapses on mobile — all steps left-aligned.

**Part three — Recognition**
Section label above in small caps — "Recognition". Ten awards, same typographic treatment as homepage. Award body leads, award detail follows, year is supporting information. No logos, no icons.

Full ten awards:
1. Architizer A+ Awards, New York 2024 — Overall Sustainable Design Firm of the Year
2. WA100 UK, 2024 — International Architect of the Year
3. World Architecture Festival, Singapore 2023 — Best Completed Building, Production Energy and Logistics
4. Createurs Design Awards, Paris 2023 — Best Residential Project Worldwide, Mirai House of Arches
5. World Architecture Festival, Lisbon 2022 — Best Housing Project Worldwide, Ras Houses
6. LEAF Awards, London 2020 — Best Interior Project, Office@63
7. World Architecture Festival, Amsterdam 2018 — Best Large Housing Project Worldwide, The Street
8. AZ Awards, Toronto 2016 — Jury Award and Popular Choice Award, Reservoir
9. World Architecture Festival, Singapore 2015 — Best Future Building of the Year, Reservoir
10. MIPIM Architectural Review Future Projects, Cannes 2014 — Overall Winner, Sky Courts

---

## Projects Index Structure

**Grid behaviour**
All projects shown by default on load. No category pre-selected. Photography does the first pass of communication. Fixed-height grid, three columns desktop, two columns tablet, one column mobile. Same hover interaction as homepage strip: dark overlay `#1C1814` at 75% opacity reveals project name and category label.

**Filters**
Single row of category labels above the grid. Five filters: All (active by default), Residential, Cultural, Hospitality, Commercial. Educational folds into Cultural. Mixed-use projects tagged to dominant category. Filter row uses same typographic treatment as project strip labels — small caps, 0.8125rem, understated. Filters are secondary — visitor sees everything first and narrows if they choose.

**Project count**
20 to 25 projects. Enough to show range across categories and geography. Curated, not exhaustive. Homepage strip shows 8-10 most awarded projects as a subset of this list. Source projects manually from ArchDaily and Dezeen — search "Sanjay Puri Architects" on both platforms.

**Page height**
Long pages are expected and fine. 600vh on laptop and 800vh on mobile for a 25-project grid is a natural consequence of the content. Do not reduce content to reduce page height.

---

## Individual Project Page Structure

One template, many instances. Content in this order:

1. **Hero image** — full bleed, single photograph
2. **Facts** — project name, location, year completed, scale, category
3. **Reasoning** — interleaved between images throughout the gallery, not grouped as three consecutive blocks. Each reasoning block sits adjacent to the image that illustrates the decision it describes. Visitor reads the thought while looking at the built result of that thought.
4. **Photo gallery** — remaining project photographs, with reasoning blocks interspersed
5. **Awards** — awards this specific project won. Typographic treatment only. Sits at the end: visitor absorbs the project first, awards confirm at the close.

Sketch-to-building pairing removed from individual project page. No sketches appear anywhere on the site.

City of award ceremony is not shown. Year is shown. Award body leads, award detail follows, year is supporting information.

**Reasoning section format**
Two to three labeled blocks per project. Bold noun label in Neue Haas Grotesk, two to three lines of Canela body text below. Same stepped typographic pattern as the About page philosophy section — creates consistency across the site. No icons, no dividers between blocks, no numbers. Labels are single nouns naming the design driver (Climate, Typology, Material, etc.).

Reasoning blocks must remain visually consistent even when separated and interspersed across the gallery. Same bold noun label, same Canela body text, same spacing treatment throughout. If they drift visually when pulled apart, the template breaks.

**Sample project: The Courtyard House**

Facts:
- Project name: The Courtyard House
- Location: Nokha, Rajasthan, India
- Year completed: 2011
- Scale: Residential house, two floors
- Category: Residential

Reasoning (locked copy):

**Climate**
Rajasthan summers reach 45 degrees Celsius. The site borders a cement plant. Form, material, and orientation are all direct responses to where it is and what surrounds it.

**Typology**
The layout draws from the traditional Indian courtyard house, a model refined over centuries for this climate. Open courtyards draw air through, recessed openings shade the interior, and earth mounds block heat while providing occupants with privacy.

**Material**
Concrete was not chosen for appearance. The adjacent cement plant made it the most accessible and lowest-impact material on site. Its thermal mass absorbs heat through the day and releases it slowly at night, keeping the interior significantly cooler than outside.

Awards (confirmed from research):
- WA Award — World Architecture Community, Cycle 13. Confirm exact category on the WA Community project page.
- Chicago Athenaeum — International Architecture Award, 2014. Confirm exact category on the Chicago Athenaeum site.
- LEAF Awards, London 2012 — Finalist, Residential Building of the Year (Single Occupancy). Finalist only, not a win. Decision pending on whether to include.

Note: verify precise award category wording for all three entries directly from source pages before using in the design.

---

## Nav Structure

Hamburger menu opens a full screen dark overlay. Four items:
- Home
- Projects
- About Us
- Contact

Full screen overlay is the correct pattern for this site register — premium, atmospheric, image-led. The nav opening is itself a moment. Dropdown and dialog patterns are not appropriate here.

---

## Awards List Typographic Hierarchy

Applies to homepage (Sanjay Puri section), About page (Part Three), and individual project pages. Same treatment throughout.

Within each entry:
1. Award body — who gave it, leads. Largest or heaviest weight.
2. Award detail — what it was for, follows.
3. Year — supporting information, smallest treatment.

No logos, no icons, no badge grid. Typographic only. No city of ceremony. No "Awards" section header label on the homepage block — content is self-evident.

---

## Current State

- Colour system finalised
- Button system finalised
- Typography system finalised with full responsive scale
- Corner radius locked at zero throughout
- Grid system locked: columns only, no rows. Values set per breakpoint.
- Wireframes complete across all four pages, mobile first at 375px
- High fidelity design in progress in Figma — currently on homepage, moving to about page
- Token Studio JSON created and imported into Figma for colour variables and typography styles
- Font substitutes in use during Figma design: Helvetica Neue for Neue Haas Grotesk, Playfair Display for Canela. Swap to real fonts once Adobe Fonts and Fontstand are active.
- Section One and Section Two structure finalised
- Project strip interaction finalised (hover to reveal, fixed height, variable width, 1rem gap, zoom on scroll, exit link at end)
- Section Three: homepage carries two lines of introduction only, no sketch pairing. Copy locked. Sketch illustration behind name removed.
- Section Four: four awards on homepage, ten on About page. Combined with Sanjay Puri section. No "Awards" label above the block.
- Section Five: contact form finalised. Three fields: name, email, message. All required.
- Footer: locked as persistent dark strip on every page. Adjacent to contact form on homepage, colour contrast acts as separator.
- Full site structure mapped and locked: Homepage, Projects index, Individual project page, About, Contact footer
- About page structure locked: three parts — who he is, philosophy and process, recognition
- About page purpose locked: answers philosophy and process at depth, which homepage cannot carry
- About page Part One copy locked: two paragraphs, biographical, no repetition of homepage conviction
- Philosophy locked: three beliefs — context, embedded sustainability, experience. Copy locked.
- Process locked: four steps in sequence — site reading, sketching, modelling, construction drawings. Copy locked.
- Process block layout locked: stepped indent. Each step indents 2.5rem further right. Staircase communicates progression without numbers or icons.
- Sketch-to-building pairing removed from all pages
- Projects index structure locked: fixed-height grid, five filters, 20-25 projects, all shown by default
- Individual project page structure locked: reasoning blocks interleaved between images, not grouped. Two to three blocks per project.
- Reasoning section format locked: bold noun label, Canela body text below. Same pattern as About page philosophy. Visually consistent even when separated across gallery.
- Sample project copy written and finalised: The Courtyard House — facts and three reasoning blocks (Climate, Typology, Material). Copy condensed and tightened in session.
- Courtyard House awards researched: two confirmed wins (WA Award Cycle 13, Chicago Athenaeum 2014), one finalist (LEAF 2012). Exact category wording to be verified from source pages.
- Nav structure locked: four items, full screen dark overlay
- Awards list typographic hierarchy locked: award body leads, award detail follows, year is supporting. No city. No logos or icons.
- Nina Puri: one line acknowledgment only, no dedicated section
- Information architecture complete
- Canela Light note: if it appears thin or low contrast on mobile, step up to Canela Regular on mobile only
- decisions.md workflow established
- About page HTML reference implementation built in Claude
- Awards interaction locked: desktop cursor-following image reveal, mobile scroll-triggered background image at 15% opacity per entry. Both interactions require actual project photographs before production build.
- Process block stepped indent reference implementation built in Claude

---

## Pending

- Decide on About page palette inversion (dark background) — build test frame in Figma first, check `#6B5E52` contrast on `#1C1814` against WCAG
- Resolve footer identity problem if About page goes dark — ensure About page has distinct identity beyond shared dark palette with footer
- Verify exact award category wording for Courtyard House: WA Award Cycle 13 and Chicago Athenaeum 2014 on their respective source pages
- Decide whether to include LEAF 2012 finalist listing for Courtyard House given it is not a win
- Source approximately 20-25 project images from Sanjay Puri Architects' built work (manually from ArchDaily and Dezeen — not for publication without permission)
- Confirm one image per award entry for both desktop cursor-follow and mobile scroll interactions — ten images total for the awards block
- Execute high fidelity designs page by page, applying design system to wireframes. Order: Homepage, About, Projects index, Individual project page
- Activate Neue Haas Grotesk via Adobe Fonts and rent Canela via Fontstand — swap substitutes in Figma once active
- Verify stepped indent values for process block scale correctly at 1440px desktop
- Establish Behance portfolio and LinkedIn presence
- Approach Sanjay Puri Architects for image permissions once credibility is demonstrated
- Export final design as standalone HTML for Behance case study
- Build and deploy the website (development follows high fidelity lock)

---

## Figma Setup Notes

**Token Studio**
Colour variables and typography tokens imported via Token Studio JSON. Five token sets: global (colours), desktop, laptop, tablet, mobile (typography per breakpoint). Activate global always. Activate one breakpoint set at a time when designing for that screen size.

**Font substitutes (temporary)**
| Final font | Figma substitute |
|---|---|
| Neue Haas Grotesk Display | Helvetica Neue |
| Neue Haas Grotesk Text | Helvetica Neue |
| Canela Light | Playfair Display Light |

**Grid setup in Figma**
Set layout grid on the frame, not as a component. Select frame, go to Design panel, add Layout Grid, switch from grid to columns, set count/gutter/margin. Do this once per breakpoint frame. Set the frame to the correct breakpoint width first (375, 768, 1024, 1440).

**Cursor reset**
Press V (or Escape) immediately on entering Figma to force the selection tool and reset cursor. Make it muscle memory.

**Token Studio line height note**
Do not define line height in Token Studio JSON. Figma requires line height to be set to Auto on text frames — a fixed numeric line height in tokens overrides this and causes text frames to collapse to a fixed height, breaking auto-height resizing behaviour.

**Text frame resizing**
Headline layers: auto width. Single line, no Enter.
Body/paragraph layers: auto height, fixed width. Set the frame width to the column width first, then type.
If a text frame collapses to H 3 or H 4, the resizing is set to auto width instead of auto height, or the parent frame has a fixed height capping it.

**Components to build**
Project card, nav bar, footer, awards typographic block, contact form, belief block, process step block. Build each once, reuse as instances across pages.

**Workflow: Claude and Figma**
Claude and Figma are not connected. No plugin syncs them. The workflow is manual and side by side: Claude produces reference implementations, exact values, and copy. Figma is where the pixels go. Ask Claude for any value that would otherwise require guessing — column widths at a given breakpoint, clamp() calculations, contrast checks, copy edits. The reference HTML implementation of the About page is built and available in this project chat.

**Wireframe vs high fidelity**
Wireframe page stays untouched as reference. High fidelity is a separate page in the same Figma file.

**When to define animations**
After high fidelity is locked, not during. Exception: interactions where motion is the design decision (project strip auto-scroll, nav overlay open) — behaviour is already decided, exact timing is resolved at prototype stage.

---

## Animation and Motion

**What makes motion feel premium**
Premium motion is invisible. The visitor feels something without noticing the animation. Three things separate premium from amateur motion:

1. Easing. Never use linear or default ease. Every movement uses a custom cubic-bezier curve that mirrors how physical objects move. The curve `cubic-bezier(0.16, 1, 0.3, 1)` is a fast-out slow-settle curve used on most premium sites.
2. Duration discipline. Microinteractions (hovers) sit at 200-300ms. Entrance animations sit at 500-700ms.
3. Intentionality. Every animated element has a reason to move. Nothing moves to show off.

**The rule**
Animate transform and opacity only. Never animate width, height, margin, or padding — these trigger layout recalculation and produce jank. The browser handles transform and opacity on the GPU.

**Learning sequence**
1. CSS transitions — hover states, opacity, color shifts
2. CSS cubic-bezier easing — custom curves via cubic-bezier.net
3. CSS keyframe animations — multi-step sequences, entrance animations, loops
4. Intersection Observer API — detect when elements enter the viewport, trigger CSS animations by adding classes
5. GSAP — after the above are understood. GSAP is an abstraction over the same primitives. Without knowing what it translates to, you cannot debug it.

GSAP Timeline is the most important GSAP feature for coordinated entrance sequences. The `-=0.3` offset syntax starts the next animation 300ms before the previous one ends, creating overlap rather than a sequential feel.

**Applied to this project, in priority order**
1. Project strip card hover overlay — CSS transition, opacity, 250ms ease-out. Already decided.
2. Nav overlay open — CSS transition, opacity plus translate, 400ms ease-out.
3. Homepage section entrances — Intersection Observer plus CSS. Headline, paragraph, accent line staggered.
4. Strip zoom on scroll — ScrollTrigger or CSS scale triggered by scroll position.
5. Page transitions — last, after everything else is right.

Define all animations after high fidelity is locked. Exception: strip auto-scroll and nav overlay, where motion is the design decision itself.

---

## Key Reasoning

## [Project strip card height]
Decision: Fixed height on all cards, width varies by natural image aspect ratio.
Reason: Fixed height signals spatial discipline and control, matching the premium and restrained emotional register of the site. It is also consistent with the firm's approach to built work.
Rejected: Variable height cards. They read as energetic and editorial, which suits avant-garde or magazine contexts but not an architecture firm selling contextual craft to high net worth clients.

## [Project strip label content]
Decision: Show category label, not location.
Reason: Category (residential, cultural, hospitality) tells the visitor what kind of project it is and helps them identify relevance to their own build. Location adds no value at this stage of the interaction.
Rejected: Location label. It is noise at the browsing stage. It can appear on the individual project page.

## [Where warmth comes from in the design]
Decision: Photography carries warmth. Typography and UI carry the premium feel.
Reason: The site needed two seemingly contradictory registers — warm and earthy, but also premium and minimal. Assigning each to a different layer resolved the contradiction cleanly.
Rejected: Merging both into the UI. This would have produced neither register convincingly.

## [Project strip interaction]
Decision: Text hidden by default. Revealed on hover via dark overlay.
Reason: Keeps the strip visually clean and lets photography carry full weight. Rewards curiosity, consistent with the validation-tool psychology — the visitor leans in rather than being fed everything passively.
Rejected: Text visible by default. This would have cluttered the strip and competed with the photography.

## [Colour system constraint]
Decision: Four colours only, all within the same warm brown/orange hue family.
Reason: Discipline in a colour system signals luxury restraint. The four colours read as tonal variation within one palette, not as competing colours. Secondary text `#6B5E52` allows body text to recede behind headlines without introducing a new hue.
Rejected: Expanding the palette or introducing gradients, shadows, or tints. These would have broken the restrained register.

## [Button colour]
Decision: `#1C1814` background, `#F5F0EA` text. Hover shifts to `#A0522D`.
Reason: Inversion of page background and primary text — reads as a button without introducing anything outside the four-colour system. Accent colour used as hover state only, not as default, keeping it within the two-per-section constraint.
Rejected: Accent as default button colour. Would exhaust the accent allocation before any other section element uses it.

## [Grid — columns only, no rows]
Decision: Columns only per breakpoint. No row definition.
Reason: Rows are for fixed vertical rhythm in print. Web content is dynamic — sections are as tall as their content requires. Defining rows creates constraints that break when content reflows.
Rejected: Row grid. Inappropriate for web, creates more problems than it solves.

## [Grid — 12 columns on desktop and laptop]
Decision: 12 columns at both 1440px and 1024px.
Reason: Three-column projects grid divides evenly into 12. Any other column count would produce fractional card widths.
Rejected: 10-column grid. Three cards cannot divide evenly into 10.

## [Contact form fields]
Decision: Three fields — name, email, message. All required.
Reason: Name and email alone gives the firm no way to reply. Message field exists because the visitor has a specific project in mind and needs to communicate site, scale, and intent before a call. Without it the form reads as a newsletter signup.
Rejected: Name and message only. Firm cannot reply. Email is the minimum functional requirement.

## [Reasoning section — format]
Decision: Two to three labeled blocks per project. Bold noun label, Canela body text below. Same stepped typographic pattern as the About page philosophy section.
Reason: Mirrors the About page pattern, creating consistency across the site. Lets visitors who have read About recognise the format immediately. No icons or numbers needed — type carries the structure.
Rejected: Full paragraphs of running text. Hard to scan. Five paragraphs of reasoning is too much for a project page visitor.

## [Reasoning blocks — placement]
Decision: Reasoning blocks interleaved between images throughout the gallery, not grouped as three consecutive blocks before the gallery.
Reason: Visitor reads each thought while looking at the built result of that thought. The connection between decision and outcome is immediate. Grouping three blocks together asks the visitor to hold the reasoning in their head and then scroll to the images, which is a weaker experience. Also solves a pacing problem — the page no longer front-loads text before photography resumes.
Rejected: Three reasoning blocks grouped before the gallery. Breaks the connection between text and image, and creates a text-heavy section before photography resumes.

## [Project strip content — most awarded vs featured]
Decision: Most awarded works in the strip.
Reason: The visitor is seeking validation, not discovery. Awards are third-party confirmation from sources they respect, which carries more weight than the firm's own editorial selection.
Rejected: Featured works curated by the firm. This reflects the firm's opinion of itself, which is weaker as a validation signal at this stage of the interaction.

## [Homepage section order — Sanjay Puri vs awards]
Decision: Sanjay Puri section before the awards block.
Reason: Introducing the person and philosophy first means the awards read as a natural consequence of his vision. The narrative order is: person, then proof.
Rejected: Awards before Sanjay Puri. This would make the section feel like a trophy case rather than a portrait of a practitioner.

## [Sketch-to-building pairing — removal]
Decision: Sketch-to-building pairing removed from all pages. No sketch or decorative architectural illustration anywhere on the site.
Reason: Pencil sketching as a design starting point is standard practice across architecture. It is not specific enough to Sanjay Puri to justify a dedicated layout block or decorative element.
Rejected: Keeping the pairing or using a sketch illustration decoratively behind the name or portrait. The claim that it differentiates Sanjay Puri does not hold up.

## [Contact — dedicated page vs footer section]
Decision: Contact as a persistent footer section on every page. No dedicated contact page.
Reason: The path to contact should always be one scroll away. A dedicated page adds a navigation step with no functional benefit.
Rejected: Standalone contact page. Adds friction without adding value.

## [Contact — form vs email link]
Decision: Contact form on the homepage.
Reason: A form is lower friction than an email link. The visitor does not need to open a mail client.
Rejected: Email link only. Opens a mail client, which breaks the visitor's flow.

## [Footer — why it exists]
Decision: Persistent footer on every page.
Reason: Navigation safety net for visitors who reach the bottom of a page. Visual signal that the page is complete. Housing for the copyright line.
Rejected: No footer. Page ends abruptly with no exits and no closure.

## [Strip exit point — projects index vs individual project page]
Decision: Strip exits to a projects index page via an "explore more projects" link at the end.
Reason: The strip is a browsing surface. Its job is to show range and generate curiosity. The exit point should continue that browsing behaviour at greater depth.
Rejected: Linking directly to individual project pages from the strip exit. This closes off exploration rather than extending it.

## [Awards — standalone section vs combined with Sanjay Puri]
Decision: Awards combined with the Sanjay Puri section, sitting at the bottom with a clear visual break.
Reason: The narrative order is person then proof. Awards as an addendum to his portrait read as a natural consequence of his vision.
Rejected: Standalone awards section. Breaks the narrative arc and competes with the portrait.

## [Awards — ten on homepage vs four]
Decision: Four awards on the homepage. Ten on the About page.
Reason: Ten awards in a typography-only treatment on a browsing surface is too much. Four strong awards land harder than ten diluted ones. The four chosen cover four different geographies and award bodies to show international range.
Rejected: Ten awards on the homepage. Overloads the section and reduces impact.

## [Awards — section header label]
Decision: No "Awards" label above the homepage awards block.
Reason: Award body names like Architizer A+ Awards and World Architecture Festival are self-evident. Adding a label says you don't trust the visitor to understand what they are reading.
Rejected: Adding an "Awards" header. Unnecessary and condescending to the visitor.

## [About page — one page vs two]
Decision: Single About page.
Reason: The firm's identity is essentially Sanjay Puri's identity. Splitting into two pages creates a navigation decision the visitor should not have to make.
Rejected: Two pages. Adds navigation complexity without adding value.

## [About page — sketch pairing as Part Two vs philosophy and process]
Decision: Part Two of the About page covers philosophy and process, not sketch-to-building pairings.
Reason: This is the content the homepage cannot carry at depth and the primary reason a visitor navigates to the About page.
Rejected: Sketch-to-building pairings as Part Two. Not specific enough to Sanjay Puri to justify a layout block.

## [About page — Part One copy approach]
Decision: Biography chosen for character, not credentials. No repetition of homepage conviction. Opens with The Fountainhead, moves through formative actions, closes with the Roark quote.
Reason: The About page exists to go deeper, not restate the homepage. The biographical detail — Hafeez Contractor, construction sites, The Fountainhead — is unique to this page. The Roark quote closes the section by returning to where he began without being sentimental.
Rejected: Opening with the conviction statement. Already on the homepage. Repetition weakens both pages.

## [About page — "Philosophy" section label]
Decision: No "Philosophy" label above the belief blocks. Pull quote anchors the section instead.
Reason: The content of the blocks is self-evident. The pull quote does the orientation work. Adding a label is redundant and softens the typographic discipline.
Rejected: "Philosophy" header above the blocks. Unnecessary given the pull quote above and the self-evident block labels.

## [Process block layout — stepped indent vs other options]
Decision: Stepped indent. Each step indents 2.5rem further right than the one above. No numbers, no connecting line, no icons.
Reason: Four steps in sequence with a natural left-to-right progression. The staircase shape communicates progression through layout rather than decoration. Purely typographic, consistent with the site's restrained register.
Rejected: Horizontal scrolling — process blocks are text-heavy, horizontal scroll breaks reading rhythm. Vertical timeline with connecting line — adds a decorative element the system does not need. Large decorative step numbers — not consistent with the typographic restraint of the site. Alternating layout — more editorial than the register supports.

## [Nina Puri — inclusion vs exclusion]
Decision: One line acknowledgment as co-founder only.
Reason: The firm is named after Sanjay. He is the public face. Nina runs a separate practice under her own name. Including her as a full section would blur what the site is about.
Rejected: Full section for Nina Puri. Would introduce a second narrative thread the site cannot support.

## [Projects index — category filtering as primary vs secondary]
Decision: Grid loads with all projects visible by default. Category filters are a secondary layer above the grid.
Reason: Photography should do the first pass of communication. Filters serve visitors who want to narrow — they should not be forced to declare intent before seeing anything.
Rejected: Category filtering as the primary structure. Imposes a contractor's hierarchy on work whose differentiator is contextual response.

## [Individual project page — sketch pairing removal]
Decision: Sketch-to-building pairing removed from individual project pages.
Reason: Consistent with the decision to remove sketches from the site entirely.
Rejected: Keeping it as an optional element where sketches are available. Inconsistency across project pages creates an uneven template.

## [Individual project page — awards placement]
Decision: Awards sit at the end of the project page, after the photo gallery.
Reason: Let the visitor absorb the project on its own terms first. Awards at the close confirm what they have already experienced.
Rejected: Awards immediately after the hero image. Premature for a visitor on a project page where engagement is already established.

## [Individual project page — facts vs reasoning order]
Decision: Facts before reasoning.
Reason: Facts orient the visitor — they need to know what they are looking at before they can engage with why it was designed the way it was.
Rejected: Reasoning before facts. Abstract without context.

## [Individual project page — horizontal scroll]
Decision: Vertical scroll on the project page. No horizontal scroll.
Reason: The project page is a reading surface, not a browsing surface. Its job is to communicate work clearly. Horizontal scrolling makes visitors think about navigation instead of the work. It also breaks on mobile without significant engineering effort. Text-heavy content — reasoning paragraphs, awards — does not suit horizontal layout. The homepage strip is horizontal because it is a browsing surface with no text, which is the correct context for it.
Rejected: Full-page horizontal scroll. Wrong for a reading surface. High implementation cost, hostile on mobile.

## [Nav — full screen overlay vs dropdown vs dialog]
Decision: Full screen dark overlay.
Reason: The site is premium, atmospheric, and image-led. The nav opening is itself a moment. Full screen gives the nav room to breathe and keeps the visitor inside the same visual world as the site.
Rejected: Dropdown — suited to sites with many nav items and subcategories, not this register. Dialog — an interruption pattern for actions, not navigation.

## [Nav structure — page count]
Decision: Four items — Home, Projects, About Us, Contact.
Reason: Covers every destination without adding navigation weight.
Rejected: Fewer items. Omitting Contact from the nav adds friction for a high-intent action.

## [Awards list — city of ceremony]
Decision: City of award ceremony not shown.
Reason: Irrelevant to the visitor assessing credibility. Visual noise without meaning.
Rejected: Including city alongside year. Clutters each entry.

## [Wireframing — desktop first vs mobile first]
Decision: Mobile first. Start at 375px, then tablet, then desktop.
Reason: Development approach is mobile first. Wireframes should follow the same sequence. Wireframing desktop first produces layouts where mobile is an afterthought.
Rejected: Desktop first at 1440px. Inherited from a generic process sequence, not from the actual approach on this project.

## [Section height — viewport constrained vs content height]
Decision: Sections are as tall as their content requires. Only the hero owns full viewport height.
Reason: Constraining sections to viewport height would require reducing content to the point of weakness or cramming elements until spacing breaks down.
Rejected: Every section fits within one viewport height. Produces rushed content or wasteful whitespace.

## [Corner radius — rounded vs sharp]
Decision: Zero corner radius throughout.
Reason: Rounded corners signal friendly and approachable. The site register is restrained and premium. Sharp edges are consistent with that register and with the discipline of the firm's built work.
Rejected: Any corner radius. Wrong emotional register for this site.

## [Tool for high fidelity — Claude vs Figma]
Decision: Figma for high fidelity execution. Claude for decisions, copy, specs, and reference implementations. Side by side, manual workflow.
Reason: Figma gives full control over every value, supports components and reusable styles, and is the industry standard for this stage of work. Claude produces HTML reference implementations and exact values to translate into Figma. No plugin connects them — the designer shuttles between the two windows manually.
Rejected: Automated HTML-to-Figma conversion via plugins like Anima. Output is messy — nested frames with hardcoded values, no auto layout, no components. Saves nothing at the quality level this project requires.

## [Animations — during HF vs after HF]
Decision: Define animations after high fidelity is locked, not during.
Reason: During HF the job is static states only. Exception: interactions where motion is the entire design decision (strip auto-scroll, nav overlay). Behaviour already decided; exact timing resolved at prototype stage.
Rejected: Defining animations during HF. Premature and distracting.

## [Multi-page site in Claude artifacts]
Decision: Each page built as a separate HTML artifact in Claude chat, used as reference implementations for the coded build.
Reason: Claude artifacts are single self-contained files. No shared navigation state or routing between them.
Rejected: Building the full multi-page site as a single artifact. Not technically possible.

## [Awards section — imagery on desktop]
Decision: Cursor-following image reveal on desktop. As the visitor moves their cursor over the awards list, a project image appears near the cursor tied to whichever award entry they are hovering. Fades in on hover entry, fades out on hover exit, 200-250ms opacity transition. Image follows cursor with slight lag.
Reason: Awards reference real buildings. The image appearing on hover makes that connection immediate — visitor reads the award and simultaneously sees the building that won it. The effect is ephemeral — it appears only when the visitor engages and disappears the moment they stop. It never permanently occupies space in the layout, so the typographic hierarchy stays intact.
Rejected: Permanent thumbnail column beside each entry. Breaks the restrained typographic treatment. Adds a new element to the layout that competes with the text hierarchy.
Note: Only works on desktop. Mobile has a separate interaction. Images must be high quality — cursor-following reveal draws direct attention to the photograph. Cannot be built until actual project photographs are confirmed.

## [Awards section — imagery on mobile]
Decision: Scroll-triggered background image per award entry. As each entry scrolls into the centre of the viewport, the project image fades in behind the text at 15% opacity. Fades out as the visitor scrolls past. Only one entry is active at a time. Typography remains fully readable throughout.
Reason: Pure typography on mobile feels flat. A background image at low opacity adds atmosphere without competing with the text or adding a new layout element. The image is present and felt without the visitor having to do anything. The typographic hierarchy stays intact because the image is always subordinate.
Rejected: Image appearing first then disappearing to reveal typography. Forces the visitor to wait for the animation to complete before reading. Adds friction to what should be a clean reading experience. Rejected: Small thumbnail appearing to the right of each entry. Adds a new element to the layout and breaks the typographic restraint of the awards block.

---

## Process Notes

**Standard project sequence**
1. Strategy — visitor psychology, goals, what the site needs to do
2. Information architecture — full site structure, every page, what lives where
3. Wireframes — layout and content hierarchy, no colour, no typography, no images — COMPLETE
4. Design system — colour, typography, spacing rules — COMPLETE (completed before IA on this project; workable for spec, would cause rework on a real client project)
5. Copy — write all page copy before high fidelity design. Copy length and line breaks affect layout.
6. High fidelity designs — applying the design system to the wireframes, page by page — IN PROGRESS
7. Prototype — making it interactive enough to feel real
8. Handoff or build

**decisions.md workflow**
One markdown file inside the project folder. Edited directly in VS Code. Entry format:
```
## [Section or page name]
Decision: what you decided
Reason: why
Rejected: what you considered and didn't choose, and why
```
Write each entry immediately when a decision is made, not batched at end of session.

---

## Font Licensing

Neue Haas Grotesk: available through Adobe Fonts with any Creative Cloud plan at no extra cost. Activate at fonts.adobe.com.

Canela: sold by Commercial Type at commercialtype.com. Rental via Fontstand recommended for a short project — pay monthly rather than buying outright. Trial versions are personal use only and cannot be used for published work.
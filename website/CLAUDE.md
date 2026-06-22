@dev-log.md
@sanjay-puri-project (1).md

Your first job in this session is to build the entire website as a complete static page with no animations. Static means: correct layout, correct typography, correct colours, correct copy, correct spacing. Hover states in CSS are allowed — they are not animations. Do not add Framer Motion or GSAP to anything in this session.

The only exception is interactions where the motion is the entire design decision and you cannot evaluate the section without it. For this project that is two things: the nav overlay open and the project strip auto-scroll. Both of these need to be felt to be judged. Everything else, static first.

Once the static site is complete. Every page is built, reviewed against the spec, and locked. Then your job now is to add all animations across the site. Do not skip steps or reorder. Complete each one fully, test it, then move to the next.

Use next/image for every image without exception. No raw <img> tags anywhere.
For the hero image, set the priority prop to true. This tells Next.js to preload it instead of lazy-loading it, which is critical for LCP.
Next.js automatically generates and serves resized versions per breakpoint. No manual multi-size exports needed.Never use a raw <img> tag for any image. Never skip the sizes prop on next/image.

Always use next/image for every image on the site. Never use a raw <img> tag. For the hero image on any page, always set the priority prop to true. For all other images, do not set priority — let Next.js lazy-load them by default. Always set the sizes prop based on how wide the image appears on screen. Full-bleed images get sizes="100vw". Project strip cards get sizes="(max-width: 768px) 100vw, 33vw".

Use semantic HTML with one h1 per page and correct heading hierarchy throughout. Add title, meta description, canonical, and Open Graph tags to every page using Next.js Metadata API. Add a LocalBusiness JSON-LD block to the homepage. Generate sitemap.xml and robots.txt. Write descriptive alt text on every image. No other SEO work.

Always prevent the bounce/rubber-band scroll effect on all pages.

At all times, ensure there is zero horizontal overflow across every page and every breakpoint. No element should exceed the viewport width or cause the page to scroll horizontally.
Enforce this by:

Keeping overflow-x: hidden on html in global.css
Never using fixed pixel widths on containers that could exceed the viewport
Using width: 100% or max-width on full-bleed sections
Testing at 375px — horizontal overflow almost always appears at mobile widths first

If a new component or section is added, verify it does not introduce horizontal overflow before considering it complete.
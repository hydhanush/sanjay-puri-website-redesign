# Website Performance Monitoring — Chat Summary

---

## 1. How to Check Website Performance

### Key Metrics to Track (Core Web Vitals)

| Metric | Target | What It Measures |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | How fast main content loads |
| INP (Interaction to Next Paint) | < 200ms | How fast the page responds to clicks |
| CLS (Cumulative Layout Shift) | < 0.1 | Layout stability (no jumping elements) |

### Recommended Tools

| Tool | Best For |
|---|---|
| Google PageSpeed Insights | Quick audit, Core Web Vitals score |
| Google Search Console | Real user data, SEO impact |
| GTmetrix | Detailed waterfall reports |
| WebPageTest | Testing from different locations |
| Lighthouse (Chrome DevTools) | Local testing anytime |
| UptimeRobot | Free uptime monitoring |

### How Often to Check

| Check Type | Frequency |
|---|---|
| Uptime monitoring | Continuously (automated) |
| Core Web Vitals / PageSpeed | Monthly |
| After any major change | Immediately after deploy |
| Competitor benchmarking | Quarterly |
| Full performance audit | Every 6 months |

---

## 2. When to Check During Development

Check after every significant change:
- Adding a new page or section
- Installing a plugin or third-party library
- Adding images, videos, or fonts
- Making CSS/JS changes
- Integrating APIs or external services

### Milestone-Based Checks

| Stage | When to Check |
|---|---|
| Initial setup | After basic structure is ready |
| After adding assets | Every time you add images/fonts/scripts |
| Feature complete | When a major feature is done |
| Pre-staging | Before moving to staging environment |
| Pre-launch | Final check before going live |

> Dev environments are slower by nature. Watch for regressions, not perfect scores. Use Chrome DevTools Lighthouse locally.

---



## 4. Video Optimization

### Recommended Video Sizes

| Use Case | Max File Size | Resolution | Format |
|---|---|---|---|
| Hero/Background video | 5–10 MB | 1080p | MP4 (H.264) |
| Product showcase | 10–20 MB | 1080p | MP4 (H.264) |
| Mobile version | 2–5 MB | 720p | MP4 |
| Thumbnail preview/loop | < 2 MB | 720p | MP4 or WebM |

### HTML Implementation
```html
<video autoplay muted loop playsinline>
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>
```

### Tools
- **HandBrake** (free) — best for compression, use CRF 23–28
- **Cloudinary** — auto-optimizes and serves right format per device
- **Cloudflare CDN** — serves videos faster globally

---

## 5. H.265 vs H.264

| Feature | H.264 | H.265 |
|---|---|---|
| File size | Baseline | ~40–50% smaller |
| Video quality | Good | Better at same size |
| Browser support | Universal | Partial (Safari only) |
| Chrome support | Yes | No |
| Firefox support | Yes | No |

### Recommended Approach — Serve All Three Formats
```html
<video autoplay muted loop playsinline>
  <source src="video.hevc.mp4" type="video/mp4; codecs=hevc"> <!-- H.265 for Safari -->
  <source src="video.webm" type="video/webm">                  <!-- WebM for Chrome/Firefox -->
  <source src="video.mp4" type="video/mp4">                    <!-- H.264 fallback -->
</video>
```

> Do not rely on H.265 alone. Always keep H.264 as a fallback. For file size savings, focus on WebM (VP9) instead — it's nearly as efficient and works on Chrome and Firefox.

---

## 6. Image Format Guide

### Format Comparison

| Format | Best For | Size vs JPG | Browser Support |
|---|---|---|---|
| WebP | Photos, UI images | ~30% smaller | All modern browsers |
| AVIF | Photos, complex images | ~50% smaller | Chrome, Firefox, partial Safari |
| JPG/JPEG | Photos (fallback) | Baseline | Universal |
| PNG | Transparency needed | Large | Universal |
| SVG | Icons, logos, illustrations | Tiny | Universal |
| GIF | Avoid entirely | Very large | Universal |

### Decision Rules
- Photo or lifestyle image → WebP (with JPG fallback)
- Logo or icon → SVG always
- Needs transparency → WebP (not PNG)
- Simple animation → Use a video instead of GIF
- Never use PNG for photos
- Never use GIF for anything

### HTML Implementation
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Interior room">
</picture>
```

### Conversion Tools
- **Squoosh.app** — free, browser-based, excellent quality control
- **Sharp** (Node.js) — automate conversion in your build process

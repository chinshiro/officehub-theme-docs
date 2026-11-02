---
title: "Performance architecture"
sidebar_position: 1
---

# Performance architecture

Zephyr is engineered to score well on Lighthouse out of the box. Key techniques:

- **Responsive `<picture>` everywhere** — every image renders a `<picture>` with a `srcset` ladder calculated from the actual display width (per breakpoint, per column count), so browsers never download oversized files.
- **Lazy rendering** — below-the-fold sections use `content-visibility: auto`; heavy resources (3D models, video) defer loading until they enter the viewport.
- **No layout thrash** — measurement of slide-grid dimensions is moved to a post-paint callback so it never forces a synchronous reflow during initial render.
- **Tailwind pipeline** — utilities are tree-shaken into a single `lib.css`; only used classes ship.
- **Accessibility-aware media** — decorative images are marked aria-hidden; interactive elements keep visible focus states.

## Best practices for merchants

- Upload images at the recommended dimensions; let Zephyr generate the responsive variants.
- Keep the number of third-party apps minimal — each app script adds to Total Blocking Time.
- Prefer the theme's built-in filters, mega-menu and reviews over additional apps where possible.

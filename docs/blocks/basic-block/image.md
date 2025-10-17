---
title: Image
sidebar_position: 68
---

A block primarily used to display images.

## Main Parameters

- **Image**: Select an image from your Shopify media library.  
- **Enable thumbnail style**: Apply a thumbnail-style visual treatment (e.g., subtle border, shadow, or padding).  
- **Radius**: Corner roundness (e.g., `Rounded 1–5`, `Pill`, `Circle`, or `none`).  
- **Crop image to ratio**: Enable cropping the image to a specific aspect ratio.  
- **Image ratio**: Choose the target aspect ratio for cropping:  
  - Custom (3:1) 
  - Ultrawide (21:9) 
  - Double-width (2:1)  
  - Widescreen / HD (16:9) 
  - Classic / DSLR (3:2)  
  - ISO Paper (1.4:1) 
  - Standard Definition/SD (4:3) 
  - Landscape (5:4)  
  - Square (1:1) 
  - Instagram Portrait (4:5) 
  - Portrait (3:4)  
  - Pinterest Pin (2:3) 
  - Portrait (9:16)
- **Image alignment**: Control which part of the image is preserved during cropping (e.g., `Top left`, `Top center`, `Top right`, `Middle left`, `Middle center`, `Middle right`, `Bottom left`, `Bottom center`, `Bottom right`).

## Mobile (optional)

Override image and styling specifically for mobile devices:

- **Image**: Select a separate, optimized image from your Shopify media library for mobile.  
- **Enable thumbnail style**: Toggle thumbnail style on mobile.  
- **Radius**: Mobile-specific corner roundness.  
- **Crop image to ratio**: Enable mobile-specific cropping.  
- **Image ratio**: Aspect ratio for mobile image cropping.  
- **Image alignment**: Cropping alignment for mobile.

## Optional

- **Image fetchpriority**: Set browser loading priority:  
  - `high` – Load early (e.g., hero images)  
  - `low` – Defer loading  
  - `auto` – Default browser behavior  
- **Image loading**: Define loading behavior:  
  - `eager` – Load immediately  
  - `lazy` – Load when near viewport (recommended for performance)  
  - `manual` – Controlled via JavaScript  
- **Image link**: Add a URL to make the image clickable.  
- **Link target**: Specify how the link opens:  
  - `_blank` – New tab/window  
  - `_self` – Same tab (default)  
  - `_parent` – Parent frame  
  - `_top` – Top-level browsing context

## Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
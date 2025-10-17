---
title: Blog Posts Cards
sidebar_position: 89
---

A block for displaying blog post cards—either as a single featured article or as part of a blog list/grid. Commonly used in blog index pages, sidebar highlights, or “Recommended Articles” sections.

## Blog Posts Cards Parameters

- **Blog post**:  
  Select a specific blog post to display as a single card.  
  → **Leave blank** when used inside blog list or recommended posts blocks (the system will auto-populate posts from the selected blog).

## Cards Layout

- **Default layout**: Choose between `Grid` (multi-column) or `List` (single-column with image left/right).  
- **Grid style**: Apply a card styling preset for grid view.  
  → Defined in **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**  
- **List style**: Apply a card styling preset for list view.  
  → Same source as above  
- **Image width**: (List layout only) Width of the featured image as a percentage of the card.  
- **Crop image to ratio**: Enable forced aspect ratio cropping for consistent visuals.  
- **Image ratio**: Select target ratio (e.g., `16:9`, `1:1`, `4:5`, `3:2`, etc.).  
  - Auto  
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
- **Image loading**: Choose loading behavior:  
  - `eager` – Load immediately  
  - `lazy` – Load when near viewport (recommended)  
  - `manual` – Controlled via JavaScript  
- **Text alignment**: Align all text content (title, excerpt, meta) to left, center, or right.  
- **Show excerpt**: Display the article’s excerpt or summary.  
- **Show date**: Show the publication date.  
- **Show author**: Display the author name (if assigned in Shopify admin).  
- **Show article tags**: Render the post’s assigned tags.  
- **Article tags style**: Apply a tag styling scheme.  
  → Defined in **[Theme Settings → Style scheme settings → Tags Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-13-tags-style-schema)**

## Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
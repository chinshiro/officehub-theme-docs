---
title: Featured Collection
sidebar_position: 103
---

The **Featured Collection** block displays products from a selected collection or custom product list using a **Swiper-powered carousel** with advanced transition effects. Ideal for highlighting seasonal collections, bestsellers, or new arrivals.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Blog class**: Custom CSS class for spacing or layout overrides.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
> All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Products
- **Collection**: Select a Shopify collection to pull products from.  
- **Or, product list**: Manually choose specific products. If both are set, **product list takes precedence**.  
- **Limit of product**: Maximum number of products to display.  
- **Per row on desktop**: Number of products per row on desktop (e.g., 2–5).  
- **Per row on mobile**: Number of products per row on mobile (typically 1–2).  
- **Layout**: Layout style—`Carousel` (default) or `Column` (if supported).

### Carousel Settings
- **Slide effect**: Transition animation—`slide`, `fade`, `cube`, `overflow`, `flip`, `cards`, or `creative`.  
- **Autoplay delay**: Time between slides in seconds. Set to `0` to disable autoplay.  
- **Enable mousewheel control**: Allow users to scroll through slides using the mouse wheel.  
- **Show prev/next button**: Display navigation arrows.  
- **Prev/next button size**: Button size as a percentage of default (e.g., `120%`).

### Pagination
- **Show pagination**: Toggle visibility of pagination controls.  
- **Style**:  
  - `Bullets`: Circular indicators  
  - `Fraction`: “1 / 5” style counter  
  - `Progressbar`: Horizontal progress bar  
- **Color (active)**: Color of the current/active pagination element.  
- **Color (inactive)**: Color of inactive pagination elements.  
- **Opacity**: Overall opacity of pagination (0–100%).  
- **Height**: Height of the pagination bar (for `Progressbar` style).  
- **Bullets width**: Diameter of bullet indicators (when style = `Bullets`).  
- **Bullets radius**: Corner roundness of bullets (`0` = square).  
- **Bullets spacing**: Horizontal gap between bullets.

## Child Blocks

### Heading
> Section title (e.g., “Featured Collection”). Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  
### Text
> Supporting description or call-to-action. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.  
### Product cards
> Individual product displays. All styling and behavior (swatches, price, badges, etc.) follow **[Blocks → Subblocks of Specific Block → Product Cards](/blocks/subblocks/product-cards)**.
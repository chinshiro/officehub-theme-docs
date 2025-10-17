---
title: Product Cards
sidebar_position: 90
---

Product Cards are primarily used for product recommendation lists and collection pages.

## Configuration Parameters

- **Product**: Select a specific product to display. This is mainly used for hotspot sections or single-product showcases. Leave this field empty for paginated or dynamic product lists.

---

### Cards Layout
- **Default layout**: Choose between `Grid` and `List`.
- **Grid style**: Apply a predefined card style scheme when layout is set to Grid. **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**
- **List style**: Apply a predefined card style scheme when layout is set to List. **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**
- **Image width**: (List layout only) Set the width of the product image as a percentage of the card.
- **Crop image to ratio**: Enable cropping of product images to a specific aspect ratio.
- **Image ratio**: Select from preset ratios:
  - Shortest image
  - Tallest image 
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
- **Show additional images**: Enable secondary product images. On desktop, they appear on hover; on mobile, they’re swipeable (when not in a carousel).
- **Text alignment**: Align all text content (title, price, etc.) to left, center, or right.
- **Show product vendors**: Display the product vendor name.
- **Show product subtitle**: Show the product’s subtitle or excerpt.
- **Include collection in URL**: Append the collection handle to product URLs for SEO and navigation context.

---

### Quick Buy Button
- **Layout**:
  - `Button over image`: Overlay a button on the product image
  - `Whole image`: Make the entire image clickable as a quick-buy trigger
  - `Disabled`: Hide the quick-buy button
- **Style**: Button appearance—`Solid` or `Outline`.
- **Color schema**: Choose button color from theme color variables.
- **Radius**: Corner roundness (e.g., Rounded 1–5, Pill, Circle).
- **Size**: Button size (Small, Medium, Large).
- **Show app blocks in quick buy**: Allow third-party app blocks (e.g., size guides, loyalty widgets) to appear inside the quick-buy modal.

---

### Product Price
- **Show product price**: Toggle display of the main price.
- **Show product compare at price**: Show strikethrough original price when discounted.
- **Price style**: Select a price styling scheme defined in **[Theme Settings → Style scheme settings → Price Style Schema](/theme-settings/style-scheme-settings#-8-price-style-schema)**.

---

### Variant Swatches
- **Show variant swatches**: Display color/size options as visual swatches.
- **Cross out unavailable options**: Visually disable out-of-stock variants.
- **Additional variant options**: List other variant names (e.g., `Size`, `Material`) to show as swatches beyond the default `Color`.
- **Variant style**: Apply a swatch styling scheme from **[Theme Settings → Style scheme settings → Variant Swatches Schema](/theme-settings/style-scheme-settings#-1-variant-swatches-schema)**.
- **Variant folded**: Collapse variant options when count exceeds this number.

---

### Reviews Rating Star
- **Show rating star**: Display star ratings (requires a reviews app).
- **Show reviews count**: Show number of reviews (e.g., “(42)”).
- **Size**: Star icon size.
- **Color schema (inactive)**: Color of unlit stars.
- **Color schema (activated)**: Color of filled stars.

---

### Sales Status Labels
- **Show sale**: Display “Sale” badge for discounted items.
- **Show sold out**: Show “Sold Out” indicator.
- **Show pre-order**: Show “Pre-order” label.
- **Style**: Apply a badge styling scheme from **[Theme Settings → Style scheme settings → Sales Status Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-11-sales-status-style-schema)**.

---

### Reduction Label
- **Show reduction**: Display a discount percentage or value badge.
- **Type**: `Percent` (e.g., “20% OFF”) or `Value` (e.g., “$10 OFF”).
- **Position**: Badge placement relative to the card:
  - Top left 
  - Top right  
  - Left up 
  - Left down  
  - Right up 
  - Right down
- **Background**: Background color of the reduction label.

---

### New Arrival Label
- **Show 'New arrival' label**: Highlight new products.
- **Position**: Same position options as Reduction Label.
- **Background**: Label background color.
- **Method**: How “new” is determined:
  - `Collection`: Product belongs to a collection with “new” in its handle (e.g., `/collections/new-arrivals`)
  - `Tag`: Product has the tag `New`
  - `Date`: Product was created within the last **X days** (set via **Date limit**)

---

### Inventory Label
- **Show inventory label**: Display stock level (e.g., “Only 3 left”).
- **Threshold**: Show quantity only when stock is below this number. Set to `0` to always show full inventory count (for single-variant products).

---

### Theme Label
- **Position**: Where to display a custom theme-based label (e.g., “Bestseller”, “Eco-Friendly”):
  - `Disabled`  
  - `Below image`  
  - `Below product vendors`  
  - `Below product title`  
  - `Below product subtitle`  
  - `Below product price`  
  - `Below product variant swatches`  
  - `Below reviews rating`  
  - `Below inventory label`
- **Style**: Apply a tag styling scheme from **[Theme Settings → Style scheme settings → Tags Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-13-tags-style-schema)**.

---

### Animations on Scroll
- Enable entrance animations as cards enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
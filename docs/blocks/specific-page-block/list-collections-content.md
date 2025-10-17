---
title: List Collections Content
sidebar_position: 85
---

The **List Collections Content** block displays a grid of collections. It is used in **Collections list templates** or within composite blocks that require a collection listing. It supports one child block: **Collection block**.

## Settings

### List Collections Content
- **List collections class**: Custom CSS class for the collection list container (commonly used for spacing adjustments). For usage guidance, see: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**.

### Collection List
- **Source**: Where collections are pulled from:  
  - `All`: Fetches all published collections from **Shopify Admin → Products → Collections** with pagination.  
  - `Block`: Manually select specific collections via the child **[Collection block](#child-block-collection-block)**.  
- **Per page**: Maximum number of collections displayed per page.  
- **Per row on desktop**: Number of collections per row on desktop.  
- **Per row on mobile**: Number of collections per row on mobile devices.  
- **Paging**: Pagination method—`Infinite scroll` or `Show buttons`.
	- **Infinite scroll**: Automatically load the next page when scrolling
	- **Show buttons**: Display pagination button

### Collection Cards
- **Card style**: Visual preset for collection cards, defined in **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**.  
- **Crop image to ratio**: Enable image cropping to a specific aspect ratio.  
- **Image ratio**: Choose from preset ratios (e.g., `16:9`, `1:1`, `3:4`, `21:9`, etc.).  
- **Image alignment**: Control which part of the image is preserved during cropping (`Top`, `Center`, `Bottom`, etc.).  
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
- **Show product count**: Display the number of products in each collection.  

- **Overlay**: Text positioning and background treatment:  
  - `Text below`: Title appears under the image (no overlay).  
  - `Over - Tint`: Title floats over image with a semi-transparent dark tint.  
  - `Over - Box`: Title floats over image with a light background behind text only.  
  - `Over - Text shadow`: Title floats with a text shadow for contrast (no background).  
  - `Over - Text shadow and tint`: Combines text shadow and image tint.  
  - `Over - No background`: Title floats directly on image with no enhancements.  

- **Overlay opacity**: Opacity of the dark tint layer (0–100%).  
- **Show text below image on mobile**: Force title below image on mobile, regardless of desktop overlay setting.  
- **Text size**: Font size for collection title.  
- **Text alignment**: Horizontal alignment of the title (`left`, `center`, `right`).  
- **Overlay text alignment**: Vertical alignment when text is overlaid (`Top`, `Center`, `Bottom`).  
- **Button style (where shown)**: Style for optional action buttons—`button` or `outline`.  
- **Button color schema**: Button color from theme color variables.  
- **Button size**: `small`, `default`, or `large`.

### Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**

---

## Child Block: Collection Block

Used when **Source = Block** to manually define which collections appear.

### Block Content
- **Collection**: Select a specific collection from your Shopify admin.  
- **Image**: Override the collection’s default image (optional).  
- **Subheading**: Add a secondary line of text below the title.  
- **Button label**: Custom label for the “View collection” button (e.g., “Shop Now”).

### Block Cards
- All styling parameters (image ratio, overlay, text size, button style, etc.) follow the same settings as the parent **[Collection Cards](/blocks/specific-page-block/list-collections-content#collection-cards)** section above.

### Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
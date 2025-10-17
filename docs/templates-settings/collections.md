---
title: Collections
sidebar_position: 120
---

The **Collections** section is the main container for the `main-collection` template, used on product collection listing pages. It controls layout, filtering, pagination, and related content.

## Settings

### Layout & Appearance
- **Full width**: Expand the section to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire collection section.  
- **Description position**:  
  - `Below collection title`: Right under the collection name  
  - `Above products`: Before the product grid  
  - `Below products`: After the product grid  
- **Show collection image below description**: Display the collection’s featured image beneath the description.

### Breadcrumbs
- **Position**: Placement relative to page content (e.g., below title or above products).  
- **Link color schema**: Text color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Alignment**: Horizontal alignment (`left`, `center`, `right`).

### Product Grid
- **Number per page**: Maximum products displayed per page.  
- **Enable filter**: Toggle the sidebar filter panel (configured via the **Filters** child block).  
- **Show product total**: Display total product count (e.g., “128 items”).  
- **Show view button**: Show grid/list toggle icons for user layout preference.  
- **Paging**:  
  - `Infinite scroll`: Load more products on scroll  
  - `Show buttons`: Traditional pagination with “Load more” or numbered links  

### Related Collections
- **Style**:  
  - `Buttons`: Display as clickable links or pills  
  - `Gallery`: Show as a visual grid of collection cards  

### Product Cards
- **Per row on desktop**: Number of products per row on large screens.  
- **Per row on mobile**: Number of products per row on mobile.  
- **Enable masonry**: Allow variable-height product cards for dynamic layouts.

---

## Child Blocks

### Page top banner
> Controls the inner-page hero area (title, background, overlay).  
  Full settings: **[Blocks → Subblocks of Specific Block → Page Top Banner](/blocks/subblocks/page-top-banner)**.

### Filters
> Sidebar filtering panel for variants, price, tags, etc.  
  Full settings: **[Blocks → Subblocks of Specific Block → Filters](/blocks/subblocks/filters)**.

### Product cards
> Individual product displays with swatches, badges, pricing, etc.  
  Full settings: **[Blocks → Subblocks of Specific Block → Product Cards](/blocks/subblocks/product-cards)**.

### Related collections 
  - **Collections**: Manually select related collections to feature.  

  **When style = Buttons**
  - **Style**: `button`, `outline`, or `link`  
  - **Color schema**: From **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**  
  - **Size**: `Small`, `Default`, or `Large`  

  **When style = Gallery**
  - **Full page width**: Expand to 100% viewport width  
  - **Add spacing around images**: Apply padding/margin between items  
  - **Image ratio**: Aspect ratio for collection thumbnails (e.g., `16:9`, `1:1`) 
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
  - **Image alignment**: Cropping focus (`Top left`, `Top center`, `Top right`, `Middle left`, `Middle center`, `Middle right`, `Bottom left`, `Bottom center`, `Bottom right`)  
  - **Overlay style**:  
    - `Tint`: Dark overlay over image  
    - `Box`: Light background behind text  
    - `Text shadow`: Shadow for contrast  
    - `Text shadow and tint`: Combination  
    - `No overlay`: Text directly on image  
  - **Overlay opacity**: Tint transparency (0–100%)  
  - **Overlay text position**: `Top left`, `Top center`, `Top right`, `Center`, etc.  
  - **Text color schema**: From **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**  
  - **Text size**: Font size from **[Theme Settings → Basic Settings → Typography](/theme-settings/basic-settings#-5-typography)**  
  - **Per row on desktop / mobile**: Columns in gallery layout  
  
	**Animations on Scroll**
		- Enable entrance animations as block enter the viewport.  
		- Configuration follows the standard **Animations on Scroll** settings.  
		- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
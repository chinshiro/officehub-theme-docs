---
title: Page Top Banner
sidebar_position: 88
---

The **Page Top Banner** block appears at the top of **inner pages** (excluding the homepage) and is used to display a hero-style banner or breadcrumb navigation area. It supports dynamic background images and customizable overlay text for enhanced visual storytelling.

## Settings

- **Full width**: Expand the banner to 100% of the viewport width.  
- **Show original page title**: Toggle visibility of the default page title.  
  > 💡 If disabled, you can fully customize the title using the **[Heading](#heading)** child block below.  
- **Height (desktop)**: Banner height on desktop, as a percentage of the viewport height (`vh`).  
- **Height (mobile)**: Banner height on mobile, in `vh`.

### Background Image
- **Image (desktop)**: Upload a desktop background image or connect to a dynamic source (e.g., a product or page metafield).  
- **Image (mobile)**: Upload a separate mobile-optimized background image or connect to a metafield.

### Overlay Text
- **Overlay style**:  
  - `Tint`: Semi-transparent dark overlay over the entire image  
  - `Box`: Light background behind text only  
  - `Text shadow`: Adds shadow to text for contrast (no background)  
  - `Text shadow and tint`: Combines text shadow and full-image tint  
  - `No overlay`: Text appears directly on the image with no enhancements  
- **Overlay opacity**: Opacity of the tint layer (0–100%).  
- **Vertical**: Vertical alignment of text—`Top`, `Center`, or `Bottom`.  
- **Alignment (desktop)**: Horizontal text alignment on desktop (`left`, `center`, `right`).  
- **Alignment (mobile)**: Horizontal text alignment on mobile.

## Child Blocks

### Heading
  A static block for the page title. If left empty, it automatically displays the page’s default title. Full customization (tag, size, color, icon) follows **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.

### Text
  A static block for descriptive content below the heading (e.g., subtitle or excerpt). Supports rich text and styling via **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.
---
title: Hotspots
sidebar_position: 106
---

The **Hotspots** block displays an interactive image with multiple clickable or hoverable points that reveal product or informational cards. Ideal for showcasing featured items within a lifestyle scene, room layout, or product bundle.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Blog class**: Custom CSS class for spacing or layout overrides.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
	> All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Hotspots
- **Image (desktop)**: Background image for desktop view.  
- **Image (mobile)**: Optimized background image for mobile devices.  
- **Image loading**: Loading behavior—`eager` (load immediately), `lazy` (load when near viewport), or `manual` (JS-controlled).

### Overlay
- **Style**: Visual treatment for hotspot content overlays:  
  - `Tint`: Semi-transparent dark layer behind text  
  - `Box`: Light background behind text only  
  - `Text shadow`: Shadow under text for contrast  
  - `Text shadow and tint`: Combines text shadow and image tint  
  - `No overlay`: Text appears directly on image with no enhancements  
- **Opacity**: Opacity of the overlay layer (0–100%).  
- **Text box width**: Width of the content card as a percentage of the container.  
- **Text position**: Placement of the content card relative to the hotspot:  
  - `Top left`, `Top center`, `Top right`  
  - `Center left`, `Center`, `Center right`  
  - `Bottom left`, `Bottom center`, `Bottom right`

## Child Blocks

### Heading
Section title for the entire hotspots block. Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

### Text
Supporting description below the heading. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.  

### Button
Call-to-action link (e.g., “Shop All”). Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.

### Hotspot
Each hotspot defines a clickable point on the image with associated content.

- **Desktop position**  
  - **Horizontal**: X-coordinate as percentage of image width (e.g., `30%`)  
  - **Vertical**: Y-coordinate as percentage of image height (e.g., `60%`)  

- **Mobile position**  
  - **Horizontal**: X-coordinate for mobile (e.g., `40%`)  
  - **Vertical**: Y-coordinate for mobile (e.g., `70%`)  

- **Hotspot**  
  - **Icon**: Marker icon (e.g., dot, plus, pin)  
  - **Size**: Icon size in pixels (e.g., `24`)  
  - **Background**: Icon background color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**  
  - **Icon/text color**: Color of the icon or label text  

- **Cards**  
  - **Width**: Fixed width of the content card in pixels (e.g., `300px`)  
  - **Background**: Card background color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**  
  - **Opacity**: Card transparency (0–100%)  
  - **Always show**: Display the content card by default (if disabled, card appears only on hover/click)
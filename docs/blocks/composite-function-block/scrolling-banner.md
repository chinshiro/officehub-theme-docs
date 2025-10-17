---
title: Scrolling Banner
sidebar_position: 113
---

The **Scrolling Banner** block displays a continuously moving text banner—ideal for announcements, promotions, shipping notices, or live updates. It creates dynamic visual interest without requiring user interaction.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Block class**: Custom CSS class for spacing or layout overrides.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

**Scrolling Content**
- **Direction**: Choose scroll direction:  
  - `To left`: Scrolls right to left (default for horizontal banners)  
  - `To right`: Scrolls left to right  
  - `To up`: Scrolls bottom to top (vertical ticker)  
  - `To down`: Scrolls top to bottom  
- **Height**: Set the container height in pixels.  
  > ⚠️ **Note**: When direction is `To up` or `To down`, set **Height = 0** to enable automatic height based on content.  
- **Interval**: Time between scroll steps in milliseconds (e.g., `2000` = 2 seconds).

## Child Blocks

### Heading
> The scrolling text content (e.g., “Free shipping on all orders!”). Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

### Button
> Optional call-to-action link (e.g., “Shop Now”) that scrolls with the text. Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.
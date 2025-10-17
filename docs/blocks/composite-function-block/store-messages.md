---
title: Store Messages
sidebar_position: 115
---

The **Store Messages** block displays a row of informational or promotional messages—such as shipping notices, return policies, or trust badges—with optional icons and links. Ideal for headers, footers, or banners to reinforce key store policies.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Block class**: Custom CSS class for spacing or layout overrides.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

**Store Message**
- **Per row on desktop**: Number of messages displayed per row on desktop (e.g., 2, 3, 4).  
- **Per row on mobile**: Number of messages per row on mobile (typically 1 or 2).

## Child Block – Store Message

Each individual message item.

### Settings
- **Block class**: CSS class for the message container.  **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**
- **Icon**: Choose from the built-in icon library.  
- **Custom icon**: Upload a custom SVG or image icon (overrides built-in icon).  
- **Icon size**: Icon size as a percentage or fixed scale.  
- **Icon position**: Placement relative to text—`Before`, `After`, `Above`, or `Below`.  
- **Message**: The main text content (e.g., “Free returns within 30 days”).  
- **Link**: Optional URL to make the entire message clickable.

### Style
- **Text/Link color schema**: Text and link color, selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Text size**: Font size using typography variables from **[Theme Settings → Basic Settings → Typography](/theme-settings/basic-settings#-5-typography)**.  
- **Alignment (desktop)**: Horizontal alignment on desktop—`Left`, `Center`, `Right`.  
- **Alignment (mobile)**: Horizontal alignment on mobile devices.

### Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
---
title: Announcement Bar
sidebar_position: 27
---

# Announcement Bar

A top notification bar that displays important messages—such as promotions, free shipping offers, or new product launches—using scrolling text.

Configure and customize your **Announcement Bar** component in the Shopify Theme Editor.

> 💡 **Tip**: Access this setting via **Shopify Admin → Online Store → Themes → Customize**.

## Settings
- **Show announcement bar**: Toggle the visibility of the top announcement bar (e.g., for promotions, shipping notices, or alerts).  
- **Enable fixed top**: Keep the announcement bar fixed at the top of the viewport as users scroll.  
- **Close button color**: Set the color of the “×” close icon, using a color variable from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

Background color settings are available in the General Settings section of most blocks. For full details, refer to: [**Blocks → General Settings**](/blocks/overview#general-settings)

## Scrolling banner
The primary block is **Scrolling banner**, which supports the following settings:
- **Enable full width**: Expand the block to 100% of the viewport width, ignoring the site’s maximum content width.  
- **Block class**: Add a custom CSS class for spacing, layout overrides, or custom styling (e.g., `mt-6`, `pb-4`).  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings > Style scheme settings > Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
> All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

	![Scrolling banner settings](/img/037.webp)

- **Direction**: Scrolling direction, with 4 options:  
  - `To left` – scrolls from right to left  
  - `To right` – scrolls from left to right  
  - `To up` – scrolls from bottom to top  
  - `To down` – scrolls from top to bottom  
- **Height**: Overall height of the scrolling area. When direction is vertical (`To up` or `To down`), set this to `0` to enable automatic height based on content.  
- **Interval**: Time interval (in milliseconds) between scroll animations—controls scrolling speed.

## Supported child blocks:  
### Heading
> Used to define the main announcement text. See: **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**
### Button
> Adds a clickable link or call-to-action. See: **[Blocks → Basic Block → Button](/blocks/basic-block/button)**
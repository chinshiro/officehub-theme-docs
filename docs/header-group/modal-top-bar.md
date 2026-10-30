---
title: Modal Top Bar
sidebar_position: 29
---

The **Modal Top Bar** is a modal section that appears at the top of the page when the search icon is clicked. It provides an expanded search interface with predictive results and optional hot links. This section is functionally tied to the **Top Bar** block and shares its core settings.

> ⚠️ **Note**: For the search modal to work, this section must be present in your theme. If missing, the search icon will not trigger the search bar.

## Top Bar

### Predictive Search
<img src={require('/img/057.webp').default} alt="Predictive Search settings" style={{ float: 'left', marginRight: '30px' }} />
- Predictive search is **enabled by default**.  
- You can disable or configure it in **Shopify admin → Theme Settings → Search Style Schema**.
- **Form style**: Selects the predefined visual layout schema for the predictive search form (e.g., border radius, shadow, input structure). Note that specific style definitions are managed in the **[theme settings](/theme-settings/style-scheme-settings#%EF%B8%8F-8-form-style-schema)**.
- **Form size**: Adjusts the overall scale of the search input field and button. Options include `Small`, `Default`, and `Large` to control height, padding, and font size.
- **Button style**: Determines the visual appearance of the search action button. Choose between `Button` (filled background) or `Outline` (transparent background with a border).
- **Button color schema**: Applies a global color variable to the search button (e.g., `Primary`, `Secondary`). Changing this updates the button color based on the variables defined in the **[color settings](/theme-settings/basic-settings#-color-variables)**.
<div style={{ clear: 'both' }} />

### Hot Links
<img src={require('/img/058.webp').default} alt="Hot Links settings" style={{ float: 'left', marginRight: '30px' }} />
- **Title**: Heading for the hot links section (e.g., “Quick Links”).  
- **Title style**: Styling for the title, using a preset from:  
  > **[Theme Settings → Style scheme settings → Tags Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-12-tags-style-schema)**.  
- **Hot links**: Select a Shopify menu (from **Navigation**) to populate the link list.  
- **Links style**: Visual style for the links, using the same **[Tags Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-12-tags-style-schema)**.  
- **Links alignment**: Horizontal alignment of the hot links (`left`, `center`, `right`).
<div style={{ clear: 'both' }} />

## Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
---
title: Faq Search Bar
sidebar_position: 74
---

A search bar designed for FAQ pages with a large number of questions. It dynamically filters and highlights matching **Collapsible Tab** blocks as the user types.

> ⚠️ **Requirement**: This block only works when placed on a page that contains one or more [**[Collapsible Tab](/blocks/basic-block/collapsible-tab)**] blocks (used for FAQ items).

## Settings
<img src={require('/img/097.webp').default} alt="Faq Search Bar block settings" style={{ float: 'left', marginRight: '30px' }} />
- **Block class**: Custom CSS class applied to the block container for additional styling or spacing control.  
  → See: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)** 

- **Form style (discount code box)**: Styling for the code display field, using a preset from **[Theme Settings → Style scheme settings → Form Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-8-form-style-schema)**.

- **Input width**: Controls how wide the search box appears relative to its container.  
  - Options:  
    → `Auto` → expands to fit content or parent constraints (default behavior)  
    → `50%` → occupies half the available width — good for centered layouts or side-by-side elements  
    → `100%` → full-width input — ideal for mobile-first designs or prominent search bars  

- **Placeholder**: Sets the hint text displayed inside the search field before user input.

<div style={{ clear: 'both' }} />

## Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
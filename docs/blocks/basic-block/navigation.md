---
title: Navigation
sidebar_position: 75
---

A navigation link block that fetches and displays menu items by binding to a Shopify menu handle. Commonly used in footers or any section requiring structured link lists (e.g., quick links, legal pages, support).

## Settings

<img src={require('/img/098.webp').default} alt="Navigation block settings" style={{ float: 'left', marginRight: '30px' }} />

- **Menu links**:  
  Select a menu from your Shopify admin. Menus are created and managed under **Shopify Admin > Content > Menus**. The block will automatically render all top-level items and their submenus (up to 3 levels, per Shopify’s limit).

- **Style**: Apply a predefined link styling scheme.  
  → Defined in **[Theme Settings → Style scheme settings → Navbar Style Schema](/theme-settings/style-scheme-settings#-5-navbar-style-schema)**.  
  Controls link color, hover effects, font weight, text decoration, and more.

<div style={{ clear: 'both' }} />

## Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
---
title: Default Page
sidebar_position: 131
---

The **Default Page** section is the main container for the `main-page` template, used for standard Shopify pages (e.g., About Us, Contact, FAQs). It provides a clean, flexible layout for rich content.

## Settings

- **Full width**: Expand the page content to 100% of the viewport width.  
- **Main section class**: Custom CSS class for the entire page section (useful for spacing or custom styling).

### Breadcrumbs
<img src={require('/img/226.webp').default} alt="Breadcrumbs settings" style={{ float: 'left', marginRight: '30px' }} />
- **Position**:  
  - `Below page title`: Appears under the page’s main heading  
  - `Above main content`: Shown just before product details  
  - `Hide`: Disable breadcrumbs entirely  
- **Link color schema**: Text color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Alignment**: Horizontal alignment (`left`, `center`, `right`).
<div style={{ clear: 'both' }} />

---

## Child Blocks

### Page top banner
> Controls the inner-page hero area (title, background image, overlay).  
  Full settings: **[Blocks → Specific Block → Page Top Banner](/blocks/specific-block/page-top-banner)**.

### Page body text
> Renders the main page content as authored in **Shopify Admin > Pages**.  
  This block has no configurable settings—it automatically displays your page’s rich text, images, and embedded elements. See **[Blocks → Specific Block → Page Body Text](/blocks/specific-block/page-body-text)**.
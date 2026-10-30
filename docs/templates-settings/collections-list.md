---
title: Collections List
sidebar_position: 121
---

The **Collections List** section is the main container for the `main-list-collections` template, used to display a grid or list of all published collections on a dedicated page (e.g., `/collections`).

## Settings

<img src={require('/img/234.webp').default} alt="Collections List settings" style={{ float: 'left', marginRight: '30px' }} />
- **Heading**: The main page title (e.g., “All Collections”). If left blank, the page may inherit the default title from Shopify.  
- **Full width**: Expand the section to 100% of the viewport width.  
- **Main section class**: Custom CSS class for the entire collections list section.
<div style={{ clear: 'both' }} />

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
> Controls the inner-page hero area (background, overlay, title styling).  
  Full settings: **[Blocks → Specific Block → Page Top Banner](/blocks/specific-block/page-top-banner)**.

### List collections content
> The core block that renders the collection grid with configurable layout, pagination, and card styling.  
  Full settings: **[Blocks → Specific Block → List Collections Content](/blocks/specific-block/list-collections-content)**.
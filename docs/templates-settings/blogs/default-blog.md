---
title: Default Blog
sidebar_position: 133
---

The **Default Blog** section is the main container for the `main-blog` template, used on blog index pages (e.g., `/blogs/news`). It displays a list of published articles with optional filtering, sharing, and layout controls.

## Settings

- **Full width**: Expand the blog page to 100% of the viewport width.  
- **Main section class**: Custom CSS class for the entire blog section (useful for spacing or custom styling).

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

### Page Top Banner  
> Controls the inner-page hero area (title, background image, overlay). Full settings: **[Blocks → Specific Block → Page Top Banner](/blocks/specific-block/page-top-banner)**.

### Blog Posts Lists  
> Renders the grid or list of blog articles with full customization options. For setting up blog posts cards, please refer to: **[Blocks → Specific Block → Blog Posts Lists](/blocks/specific-block/blog-posts-lists)**
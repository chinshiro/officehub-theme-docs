---
title: Default Blog Post
sidebar_position: 135
---

The **Default Blog Post** section is the main container for the `main-article` template, used on individual blog post pages (e.g., `/blogs/news/my-post`). It provides a structured layout for article content, metadata, sharing, and related features.

## Settings

- **Full width**: Expand the article page to 100% of the viewport width.  
- **Main section class**: Custom CSS class for the entire article section (useful for spacing or custom styling).

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

### Article body text
> Renders the full blog post content, including date, author, tags, sharing buttons, comments, and table of contents.  
  Full configuration: **[Blocks → Specific Block → Article Body Text](/blocks/specific-block/article-body-text)**.
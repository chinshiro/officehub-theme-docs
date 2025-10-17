---
title: Sidebar Section
sidebar_position: 54
---

The **Sidebar Section** creates a layout with a main content area and a dedicated sidebar—ideal for blog posts, documentation pages, or product detail pages where you want to display supplementary content (e.g., “About Us,” contact forms, or related links) in a fixed or flexible sidebar.

This section supports **all `@theme` blocks** in the main area and includes one required child block: **Sidebar block**.

---

## Sidebar Block

### Settings
- **Background**: Sidebar background color, selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Shadow**: Drop shadow for depth—options: `None`, `Default`, `Small`, `Large`.

### Child Blocks

#### Sidebar Title  
Adds a heading to the top of the sidebar.  
- Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.

#### Sidebar Text  
Inserts custom rich-text content (e.g., descriptions, calls to action).  
- Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.

#### Contact Form  
Embeds a functional contact form directly in the sidebar.  
- Full configuration: **[Blocks → Composite Function Block → Contact Form](/blocks/composite-function-block/contact-form)**.

#### Sidebar Article  
Displays a list of recent blog posts.

- **Blog**: Select a blog to pull articles from.  
- **Limit**: Maximum number of posts to show.  
- **Icon**: Optional icon before each link (or `no icon`).  
- **Show article image**: Toggle post thumbnails.  
- **Text truncate**: Automatically shorten long titles.  
- **Hidden on mobile**: Hide this block on mobile devices.

#### Sidebar Blog Tags  
Shows tags from a specific blog or the current article.

- **Blog**:  
  - If **not set**: On blog post pages, displays tags from the current article only.  
  - If **set**: Shows all tags from the selected blog (visible on all pages).  
- **Limit**: Max number of tags to display.  
- **Style**: Tag styling from **Theme Settings → Style scheme settings → [Tags Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-13-tags-style-schema)**.  
- **Hidden on mobile**: Hide on mobile.

#### Sidebar Links  
Renders a menu as a sidebar link list.

- **Menu links**: Select a Shopify menu (from **Navigation** in admin).  
- **Limit**: Max number of links to show.  
- **Icon**: Optional prefix icon (or `no icon`).  
- **Text truncate**: Shorten long link text.  
- **Hidden on mobile**: Hide on mobile.

#### Sidebar Product  
Lists featured or related products.

- **From collection**: Pull products from a specific collection.  
- **Or, products list**: Manually select products (takes precedence over collection).  
- **Limit**: Max number of products.  
- **Icon**: Optional icon before product name.  
- **Show product image**: Display product thumbnails.  
- **Text truncate**: Shorten long product titles.  
- **Hidden on mobile**: Hide on mobile.

#### Sidebar Collection  
Displays a list of collections.

- **Collections list**: Manually select collections to feature.  
- **Icon**: Optional prefix icon (or `no icon`).  
- **Show collection image**: Show collection thumbnails.  
- **Text truncate**: Shorten long collection names.  
- **Hidden on mobile**: Hide on mobile.
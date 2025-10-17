---
title: Search
sidebar_position: 137
---

The **Search** section is the main container for the `main-search` template, used on search results pages (e.g., `/search?q=shoes`). It controls the layout and behavior of product, article, and page results based on user queries.

## Settings

### Layout & Results
- **Enable full width**: Expand the search page to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire search section.  
- **Number per page**: Maximum results displayed per page.  
- **Show results count**: Display total number of matching results (e.g., “128 results for ‘shoes’”).  
- **Show view button**: Toggle grid/list layout switcher for results.  
- **Show sorting dropdown**: Allow users to sort results (e.g., by price, best selling, newest).  
- **Paging**:  
  - `Infinite scroll`: Load more products on scroll  
  - `Show buttons`: Traditional pagination with “Load more” or numbered links 

### Search Bar
> ⚠️ **Note**: Full styling is managed in the **[Search bar](#top-bar)** child block.

- **Width**: Set the width of the search input field (e.g., `100%`, `500px`).

### Filters
For detailed information on the main parameters of Filters, please refer to: **[Filters](#filters)**
- **Enable filters**: Toggle the sidebar filter panel (powered by the **Filters** child block).

### Cards
- **Per row on desktop**: Number of results per row on large screens.  
- **Per row on mobile**: Number of results per row on mobile devices.  
- **Enable masonry**: Allow variable-height result cards for dynamic layouts.

---

## Child Blocks

### Top bar
> Contains the main search input and optional hot links.  
  Full settings: **[Header Group → Modal Top Bar → Top Bar](/header-group/modal-top-bar#top-bar)**.

### Filters
> Sidebar filtering panel for narrowing results by collection, price, tags, etc.  
  Full settings: **[Blocks → Subblocks of Specific Block → Filters](/blocks/subblocks/filters)**.

### Product cards
> Displays matching products with full customization (swatches, badges, pricing).  
  Full settings: **[Blocks → Subblocks of Specific Block → Product Cards](/blocks/subblocks/product-cards)**.

### Blog posts cards
> Shows relevant blog articles in the results (if “Search blog posts” is enabled in Shopify admin).  
  Full settings: **[Blocks → Subblocks of Specific Block → Blog Posts Cards](/blocks/subblocks/blog-posts-cards)**.
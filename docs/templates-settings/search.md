---
title: Search
sidebar_position: 137
---

The **Search** section is the main container for the `main-search` template, used on search results pages (e.g., `/search?q=shoes`). It controls the layout and behavior of product, article, and page results based on user queries.

## Settings

<img src={require('/img/242.webp').default} alt="Search settings" style={{ float: 'left', marginRight: '30px' }} />
- **Enable full width**: Expand the search page to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire search section.  
- **Number per page**: Maximum results displayed per page.  
- **Show results count**: Display total number of matching results (e.g., “128 results for ‘shoes’”).  
- **Show view button**: Toggle grid/list layout switcher for results.  
- **Show sorting dropdown**: Allow users to sort results (e.g., by price, best selling, newest).  
- **Paging**:  
  - `Infinite scroll`: Load more products on scroll  
  - `Show buttons`: Traditional pagination with “Load more” or numbered links 
<div style={{ clear: 'both' }} />

### Search Bar

<img src={require('/img/243.webp').default} alt="Search Bar settings" style={{ float: 'left', marginRight: '30px' }} />
- **Width**: Set the width of the search input field (e.g., `100%`, `500px`).
  > ⚠️ **Note**: Full styling is managed in the **[Search bar](#top-bar)** child block.
<div style={{ clear: 'both' }} />

### Filters
<img src={require('/img/244.webp').default} alt="Filters settings" style={{ float: 'left', marginRight: '30px' }} />
- **Enable filters**: Toggle the sidebar filter panel (powered by the **Filters** child block).
  > ⚠️ **Note**: Main settings of Filters, please refer to: **[Filters](#filters)**
<div style={{ clear: 'both' }} />

### Cards

<img src={require('/img/245.webp').default} alt="Filters settings" style={{ float: 'left', marginRight: '30px' }} />

- **Items per row (Desktop)**: Number of results per row on desktop large screens.  
- **Items per row (Tablet)**: Number of results per row on tablet devices.  
- **Items per row (Smartphone)**: Number of results per row on smartphone devices.  
- **Enable masonry**: Allow variable-height result cards for dynamic layouts.
<div style={{ clear: 'both' }} />

---

## Child Blocks

### Top bar
> Contains the main search input and optional hot links.  
  Full settings: **[Header Group → Modal Top Bar → Top Bar](/header-group/modal-top-bar#top-bar)**.

### Filters
> Sidebar filtering panel for narrowing results by collection, price, tags, etc.  
  Full settings: **[Blocks → Specific Block → Filters](/blocks/specific-block/filters)**.

### Product cards
> Displays matching products with full customization (swatches, badges, pricing).  
  Full settings: **[Blocks → Specific Block → Product Cards](/blocks/specific-block/product-cards)**.

### Blog posts cards
> Shows relevant blog articles in the results (if “Search blog posts” is enabled in Shopify admin).  
  Full settings: **[Blocks → Specific Block → Blog Posts Cards](/blocks/specific-block/blog-posts-cards)**.
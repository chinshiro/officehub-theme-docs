---
title: Blog Posts Lists
sidebar_position: 84
---

The **Blog Posts Lists** block displays a grid or list of blog articles. It is **only available in blog  templates** (e.g., `/blogs/news`).

## Blog Posts Lists

- **Blog block class**: Custom CSS class applied to the blog posts container. Useful for spacing or layout overrides.  
- **Number per page**: Maximum number of posts displayed per page.  
- **Per row on desktop**: Number of posts per row on desktop (e.g., 2, 3, 4).  
- **Per row on mobile**: Number of posts per row on mobile devices (typically 1 or 2).  
- **Enable masonry**: Toggle masonry (variable-height) layout for uneven post heights.  
- **Paging**: Pagination method—`Infinite scroll` or `Show buttons`.
	- **Infinite scroll**: Automatically load the next page when scrolling
	- **Show buttons**: Display pagination button

## Navigation Bar

- **Show tag filter by**: Display filter buttons for blog tags (e.g., “News”, “Tips”).  
- **Filter tags style**: Styling for tag filter buttons, using a preset from **[Theme Settings → Style scheme settings → Tags Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-13-tags-style-schema)**.  
- **Show view button**: Show layout toggle (e.g., grid vs. list view)—if supported by theme.  
- **Show RSS feed link**: Display an RSS icon linking to the blog’s feed (e.g., `/blogs/news.atom`).  
- **Show X (formerly Twitter) sharing icon**: Enable X/Twitter share button for the blog index.  
- **Show Facebook sharing icon**: Enable Facebook share button for the blog index.

## Child block
Only supports one static block: Blog posts cards, mainly used to set the style of the card.

### Blog posts cards
> For setting up blog posts cards, please refer to: **[Blocks → Subblocks of Specific Block → Blog Posts Cards](/blocks/subblocks/blog-posts-cards)**
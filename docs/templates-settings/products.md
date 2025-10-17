---
title: Products
sidebar_position: 119
---

The **Products** section is the main container for the `main-product` template. It controls the global layout and behavior of the product detail page.

## Settings

### Layout
- **Enable full width**: Expand the section to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire product section.  
- **Enable sticky on scroll**: Keep key elements (e.g., buy buttons) fixed while scrolling.

### Breadcrumbs
- **Position**:  
  - `Below page title`: Appears under the page’s main heading  
  - `Above main content`: Shown just before product details  
  - `Hide`: Disable breadcrumbs entirely  
- **Link color schema**: Text color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Alignment**: Horizontal alignment (`left`, `center`, `right`).

### Gallery
> ⚠️ **Note**: Full gallery configuration is managed in the **[Product gallery](/blocks/composite-function-block/featured-product#product-gallery)** child block below.

- **Gallery width**: Width of the media area as a percentage (e.g., `50%`, `60%`).  
- **Show description below gallery**: Display the full product description beneath the media gallery.

### Sticky 'Add to Cart'
A floating purchase prompt that appears after the user scrolls past the main product content.

- **Enable sticky 'Add to cart'**: Toggle the sticky bar.  
- **Sticky with full width**: Expand the bar to 100% width.  
- **Width**: Container width as a percentage (when full width is disabled).  
- **Position**: Horizontal alignment (`left`, `center`, `right`) when width < 100%.  
- **Show on mobile**: Display on mobile devices.  
- **Link color schema**: Text/link color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Behavior**:  
  - `Add to cart`: Immediately adds the selected variant to cart  
  - `Scroll`: Smoothly scrolls back to the main “Add to cart” button  
- **Button style**: `Button` (solid) or `Outline` (hollow).  
- **Button color schema**: Button color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Button size**: `Small`, `Default`, or `Large`.

---

## Child Blocks

### Page top banner
> Controls the inner-page hero banner (title, background, overlay).  
  Full settings: **[Blocks → Subblocks of Specific Block → Page Top Banner](/blocks/subblocks/page-top-banner)**.

### All other blocks
> The product page supports the full range of content blocks available in the **[Blocks → Subblocks of Specific Block → Featured Product](/blocks/composite-function-block/featured-product#product-gallery)** composite block, including:
  - **Product Gallery**  
  - **Title, Price, SKU, Vendor**  
  - **Variant Picker, Buy Buttons**  
  - **Description, Collapsible Tabs**  
  - **Reviews, Inventory Level, Countdown Timer**  
  - **Complementary/Related Products**  
  - **Custom Liquid, Dynamic Source, etc.**

> 💡 You can add, reorder, or customize any of these blocks directly in the Theme Editor to tailor the product experience.
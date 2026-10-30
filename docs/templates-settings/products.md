---
title: Products
sidebar_position: 119
---

The **Products** section is the main container for the `main-product` template. It controls the global layout and behavior of the product detail page.

## Settings

<img src={require('/img/225.webp').default} alt="Products settings" style={{ float: 'left', marginRight: '30px' }} />
- **Enable full width**: Expand the section to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire product section.  
- **Enable sticky on scroll**: After enabling, Product info block fixed while scrolling.
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

### Grid layout

<img src={require('/img/227.webp').default} alt="Gallery settings" style={{ float: 'left', marginRight: '30px' }} />
- **Gap**: Set the gap between the Product gallery block, Product info block, and Product detail block.
  - `desktop`: Gap on desktop
  - `mobile`: Gap on mobile (tablet + smartphone)
- **Gallery width**: Width of the media area as a percentage (e.g., `50%`, `60%`).
> ⚠️ **Note**: Full gallery configuration is managed in the **[Product gallery](/blocks/function-block/featured-product#product-gallery)** child block below.
<div style={{ clear: 'both' }} />

### Sticky 'Add to Cart'
A floating purchase prompt that appears after the user scrolls past the main product content.

<img src={require('/img/228.webp').default} alt="Sticky 'Add to Cart' settings" style={{ float: 'left', marginRight: '30px' }} />
- **Enable sticky 'Add to cart'**: Toggle the sticky bar.  
- **Sticky with full width**: Expand the bar to 100% width.  
- **Width**: Container width as a percentage (when full width is disabled).  
- **Position**: Horizontal alignment (`left`, `center`, `right`) when width < 100%.  
- **Show on mobile**: Display on mobile devices.  
- **Background**: The background color of the entire container supports gradient colors.
- **Text color schema**: The color of the text inside the entire container.
- **Link color schema**: Text/link color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Behavior**:  
  - `Add to cart`: Immediately adds the selected variant to cart  
  - `Scroll`: Smoothly scrolls back to the main “Add to cart” button  
- **Button style**: `Button` (solid) or `Outline` (hollow).  
- **Button color schema**: Button color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Enable gradient**: Customize the color of the button and support gradient colors.
<div style={{ clear: 'both' }} />

---

## Child Blocks

### Page top banner
> Controls the inner-page hero banner (title, background, overlay).  
  Full settings: **[Blocks → Specific Block → Page Top Banner](/blocks/specific-block/page-top-banner)**.

### All other blocks
> The product page supports the full range of content blocks available in the **[Blocks → Specific Block → Featured Product](/blocks/function-block/featured-product#product-gallery)** composite block, including:
  - `Product Gallery` , `Card box`
  - `Title`, `Price`, `SKU`, `Vendor`  
  - `Variant Picker`, `Buy Buttons`
  - `Description`, `Collapsible Tabs`
  - `Reviews`, `Inventory Level`, `Countdown Timer`
  - `Complementary/Related Products`
  - `Custom Liquid`, `Dynamic Source`, etc.

> 💡 You can add, reorder, or customize any of these blocks directly in the Theme Editor to tailor the product experience.
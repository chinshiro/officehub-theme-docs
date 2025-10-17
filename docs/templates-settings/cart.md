---
title: Cart
sidebar_position: 123
---

The **Cart** section is the main container for the `main-cart` template, used on the dedicated cart page (`/cart`). It controls the layout and behavior of all cart content, including items, totals, and recommendations.

## Settings

### Layout
- **Enable full width**: Expand the cart page to 100% of the viewport width.

### Page Title
- **Show page title**: Toggle visibility of the “Cart” heading.  
- **Tag**: HTML heading tag (`<h1>`–`<h6>` or `<div>`).  
- **Size**: Font size from **[Theme Settings → Basic Settings → Typography](/theme-settings/basic-settings#-5-typography)**.

### Cart Items
> ⚠️ **Note**: Free shipping bar configuration is managed in **Theme Settings → Cart**.

- **Show backorder text**: Displays availability notice for out-of-stock items that can still be purchased (requires Shopify inventory tracking).  
- **Show inventory notice**: Toggle low-stock alerts.  
- **Show count in inventory notice**:  
  - `Never`  Do not display the inventory count.  
  - `When inventory low`  Show the count only when stock falls below the defined low-inventory threshold. 
  - `Always`  Display the inventory count at all times, regardless of stock level.
- **Low inventory threshold**: Stock level that triggers “low” status.  
- **Inventory level style**: Styling preset from **[Theme Settings → Style scheme settings → Inventory Level Style Schema](/theme-settings/style-scheme-settings#-10-inventory-level-style-schema)**.

### Quantity Input
- **Size**: `Small` / `Default` / `Large`  
- **Background**: Input background color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Text/border color schema**: Text and border color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

### Shipping Rates Calculator
- **Show**: Enable real-time shipping rate estimator.  
- **Default country selection**: Pre-fill with a country code (e.g., `US`, `CA`). If the customer is logged in, their default shipping address country will override this.  
- **Input style**: Styling from **[Theme Settings → Style scheme settings → Input Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-9-input-style-schema)**.  
- **Selector style**: Dropdown styling from **[Theme Settings → Style scheme settings → Selector Style Schema](/theme-settings/style-scheme-settings#-4-selector-style-schema)**.  
- **Dropdown style**: Menu styling from **[Theme Settings → Style scheme settings → Dropdown Style Schema](/theme-settings/style-scheme-settings#-5-dropdown-style-schema)**.

### Empty Cart
- **Icon**: Graphic shown when cart is empty.  
- **Icon size**: Icon scale as percentage.  
- **Heading**: Title text (e.g., “Your cart is empty”).  
- **Heading tag**: HTML tag (`<h1>`–`<h6>`).  
- **Heading size**: Font size from typography variables.  
- **Text**: Supporting message (e.g., “Add items to get started.”).  
- **Button text**: Label for action button (e.g., “Continue Shopping”).  
- **Button link**: Destination URL (e.g., `/collections/all`).  
- **Button style**: `button`, `outline`, or `link`.  
- **Button color schema**: From **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Button size**: `Small`, `Default`, or `Large`.

### Recommended Products
- Manage recommendations by adding or removing the **[Featured products](/blocks/composite-function-block/featured-products)** block on the left side of the cart layout.  
- **Position**:  
  - `Cart item below`: Below cart items (when cart not empty)  
  - `Empty cart below`: Below empty state content  
  - `Both`: Show in both contexts  
  - `Hide`: Disable entirely

---

## Child Blocks

### Featured products
> Displays product recommendations using the full **[Blocks → Composite Function Block → Featured Products](/blocks/composite-function-block/featured-products)** configuration.  
### Cart checkout
> Renders the checkout area (subtotal, notes, buttons). Full settings: **[Blocks → Subblocks of Specific Block → Cart Checkout](/blocks/subblocks/cart-checkout)**.
---
title: Cart
sidebar_position: 123
---

The **Cart** section is the main container for the `main-cart` template, used on the dedicated cart page (`/cart`). It controls the layout and behavior of all cart content, including items, totals, and recommendations.

## Settings

<img src={require('/img/236.webp').default} alt="Cart settings" style={{ float: 'left', marginRight: '30px' }} />
- **Enable full width**: Expand the cart page to 100% of the viewport width.
- **Section class**: Custom CSS class for the entire product section.  
<div style={{ clear: 'both' }} />

### Page header

<img src={require('/img/237.webp').default} alt="Page header settings" style={{ float: 'left', marginRight: '30px' }} />
- **Show page header**: Toggle visibility of the “Cart” heading.  
- **Title tag**: HTML heading tag (`<h1>`–`<h6>` or `<div>`).  
- **Title size**: Font size from **[Theme Settings → Basic Settings → Typography](/theme-settings/basic-settings#-5-typography)**.
- **Title Color Schema**: Sets text/background contrast scheme based on global theme colors.
- **Continue Shopping Link**: Provides users with an easy way to return to previous browsing state — especially useful after viewing a single product or completing a filter action.
<div style={{ clear: 'both' }} />

### Cart Items

<img src={require('/img/238.webp').default} alt="Cart Items settings" style={{ float: 'left', marginRight: '30px' }} />
> ⚠️ **Note**: Free shipping bar configuration is managed in **Theme Settings → Cart**.

- **Show backorder text**: Displays availability notice for out-of-stock items that can still be purchased (requires Shopify inventory tracking).  
- **Show inventory notice**: Toggle low-stock alerts.  
- **Show count in inventory notice**:  
  - `Never`  Do not display the inventory count.  
  - `When inventory low`  Show the count only when stock falls below the defined low-inventory threshold. 
  - `Always`  Display the inventory count at all times, regardless of stock level.
- **Low inventory threshold**: Stock level that triggers “low” status.  
- **Inventory level style**: Styling preset from **[Theme Settings → Style scheme settings → Inventory Level Style Schema](/theme-settings/style-scheme-settings#-9-inventory-level-style-schema)**.
- **Quantity form style**: Quantity form styling preset from **[Theme Settings → Style scheme settings → Form Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-8-form-style-schema)**.
- **Quantity button style**: Quantity button, Button style for increasing or decreasing quantity. 
  - `Button`:Solid
  - `Ghost`: Hollow Borderless
- **Quantity button color schema**: Text and border color scheme, also chosen from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.
<div style={{ clear: 'both' }} />

### Shipping Rates Calculator

<img src={require('/img/239.webp').default} alt="Shipping Rates Calculator settings" style={{ float: 'left', marginRight: '30px' }} />
- **Show method**: Default display mode.  
  - `Show with collapsed`  Display the section in a minimized or folded state by default, allowing users to expand it manually. Ideal for saving space while keeping content accessible.
  - `Show without collapsed`  Render the section fully expanded and visible at all times — no toggle or collapse behavior. Best for critical or frequently accessed content.
  - `Hide`  Completely remove the section from view. Use when the feature is irrelevant, disabled, or temporarily unnecessary for the current context.
- **Default country selection**: Pre-fill with a country code (e.g., `US`, `CA`). If the customer is logged in, their default shipping address country will override this.  
- **Form style**: Styling from **[Theme Settings → Style scheme settings → Form Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-8-form-style-schema)**.  
- **Dropdown style**: Menu styling from **[Theme Settings → Style scheme settings → Dropdown Style Schema](/theme-settings/style-scheme-settings#-4-dropdown-style-schema)**.
<div style={{ clear: 'both' }} />

### Empty Cart

<img src={require('/img/240.webp').default} alt="Empty Cart settings" style={{ float: 'left', marginRight: '30px' }} />
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
<div style={{ clear: 'both' }} />

### Recommended Products

<img src={require('/img/241.webp').default} alt="Recommended Products settings" style={{ float: 'left', marginRight: '30px' }} />
- Manage recommendations by adding or removing the **[Featured products](/blocks/function-block/featured-products)** block on the left side of the cart layout.  
- **Position**:  
  - `Cart item below`: Below cart items (when cart not empty)  
  - `Empty cart below`: Below empty state content  
  - `Both`: Show in both contexts  
  - `Hide`: Disable entirely
<div style={{ clear: 'both' }} />

---

## Child Blocks

### Featured products
> Displays product recommendations using the full **[Blocks → Function Block → Featured Products](/blocks/function-block/featured-products)** configuration.  
### Cart checkout
> Renders the checkout area (subtotal, notes, buttons). Full settings: **[Blocks → Specific Block → Cart Checkout](/blocks/specific-block/cart-checkout)**.
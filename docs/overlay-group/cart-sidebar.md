---
title: Cart Sidebar
sidebar_position: 61
---

The **Cart Sidebar** section displays a slide-in cart panel on all pages **except the dedicated cart page**. To enable it, go to **Shopify Admin → Themes → Customize → Theme Settings → Cart** and set **Cart type = Sidebar**.

## Settings

### Background & Text
- **Background**: Solid or gradient background color for the sidebar.  
- **Text color**: Global text color, selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

### Cart Items Number
- **Show cart items number**: Display item count badge when cart contains ≥1 item.  
- **Color**: Badge text color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Size**: Font size using typography variables from **[Theme Settings → Basic Settings → Typography](/theme-settings/basic-settings#-5-typography)**.

### Cart Body
- Displays cart items and optional **free shipping progress bar** (configured in **Theme Settings → Cart → Free shipping bar**).  
- **Show backorder text**: Shows availability notice for out-of-stock items that can still be purchased.

### Quantity Selector Style
- **Size**: `Small` / `Default` / `Large`  
- **Background**: Selector background color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Text/border color schema**: Text and border color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

### Inventory Notice
- **Show inventory notice**: Toggle low-stock alerts.  
- **Show count in inventory notice**:  
  - `Never`  Do not display the inventory count.  
  - `When inventory low`  Show the count only when stock falls below the defined low-inventory threshold. 
  - `Always`  Display the inventory count at all times, regardless of stock level.
- **Low inventory threshold**: Stock level that triggers “low” status.  
- **Inventory level style**: Styling preset from **[Theme Settings → Style scheme settings → Inventory Level Style Schema](/theme-settings/style-scheme-settings#-10-inventory-level-style-schema)**.

### Announcement Alert
- **Show announcement alert**: Display custom promotional or informational banner.  
- **Position**:  
  - `Above cart items`  Display the inventory count at all times, regardless of stock level.
  - `Below cart items`  Show the alert immediately after the list of cart items, but before the subtotal and checkout area.  
  - `Above subtotal`  Place the alert just above the subtotal line (and any associated shipping or tax summaries).  
  - `Below checkout button`  Position the alert at the very bottom of the cart sidebar, underneath the primary checkout button.
- **Text**: Alert message content.  
- **Icon**: Optional prefix icon.  
- **Icon size**: Icon scale as percentage.  
- **Background**, **Text color**: From **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Text size**: Font size from **[Theme Settings → Basic Settings → Typography](/theme-settings/basic-settings#-5-typography)**.

### Empty Cart
- **Icon**: Graphic shown when cart is empty.  
- **Icon size**: Icon scale as percentage.

### Recommended Products
- Displays product recommendations configured in the **Featured Products** block.  
- **Position**:  
  - `Cart item below`: Below items (when cart not empty)  
  - `Empty cart below`: Below empty state content  
  - `Both`: Show in both contexts  
  - `Hide`: Disable entirely

---

## Child Blocks

### Cart header
> Section title (e.g., “Your Cart”). Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  
### Empty cart heading
> Title for empty state (e.g., “Your cart is empty”). Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  
### Empty cart text
> Supporting message (e.g., “Start shopping to fill it up!”). Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.  
### Empty cart button
> Call-to-action (e.g., “Continue Shopping”). Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  
### Cart checkout
> Full checkout controls (subtotal, notes, buttons). Settings follow **[Blocks → Subblocks of Specific Block → Cart Checkout](/blocks/subblocks/cart-checkout)**.
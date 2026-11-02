---
title: "Cart"
sidebar_position: 7
---

# Cart

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Cart type | `cart_type` | select | sidebar |  |
| After adding to cart | `after_add_to_cart` | select | sidebar | 'Show cart sidebar' requires Sidebar to be the Cart type |
| Show free shipping bar | `show_free_shipping_bar` | checkbox | false |  |
| Amounts | `free_shipping_amounts` | textarea |  | One price per line. The bar stays hidden until an amount is set. Casing, blank lines and extra spaces are ignored; when no line matches the cart currency the first valid line is used. |
| Bar color - under | `free_shipping_bar_col_under` | color_background | #1d273b |  |
| Bar color - success | `free_shipping_bar_col_met` | color_background | #0ca678 |  |

### Option values

- **Cart type** (`cart_type`): Sidebar (`sidebar`), Page (`page`)
- **After adding to cart** (`after_add_to_cart`): Show cart sidebar (`sidebar`), Show notification (`notification`), Go to cart page (with quantity check) (`page`), Go to cart page (JS disabled) (`no-js`)

> 💡 Available under **Theme settings** in the editor.

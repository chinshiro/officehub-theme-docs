---
title: "Payment icons"
sidebar_position: 18
---

# Payment icons

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-4 |  |
| Icon source | `payicon_method` | select | shop | Choose 'Enabled payment types' to use the store's configured payment methods, or 'Custom icons' and list the payment methods below. |
| Payment methods | `icon_names` | text | visa, master, paypal, american_express, apple_pay | Comma-separated payment handles for Shopify's official icon library. Examples: visa, master, american_express, paypal, apple_pay, google_pay, shopify_pay, alipay, wechat_pay, union_pay, klarna, afterpay, sezzle, affirm, bancontact, ideal, sofort, jcb, diners_club, maestro, discover, giropay, poli, eps, samsung_pay, stripe. Lowercase with underscores. [See all supported icons](https://help.shopify.com/en/manual/checkout-settings/checkout-blocks/blocks/create-block/shipping-payment-icons) |
| Shape | `shape` | select | rounded-md |  |
| Icon size | `size` | range | 40 |  |
| Gap between icons | `gap` | range | 8 |  |
| Alignment (desktop) | `alignment` | text_alignment | left |  |
| Alignment (mobile) | `alignment_mob` | text_alignment | left |  |

### Option values

- **Icon source** (`payicon_method`): Enabled payment types (`shop`), Custom icons (`custom`)
- **Shape** (`shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)

## Presets

- Payment icons


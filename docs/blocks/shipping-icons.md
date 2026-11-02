---
title: "Shipping icons"
sidebar_position: 20
---

# Shipping icons

## Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_shipping-icon-custom` — Custom icon

### `_shipping-icon-custom` — Custom icon

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Icon image | `image` | image_picker |  | Upload a carrier logo (PNG, SVG or JPG). A wide or square image works best. Falls back to the name text when empty. |
| Name | `name` | text | Carrier | Used as the tooltip and alt text, and shown as a text badge when no image is uploaded. |

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-4 |  |
| Shipping methods | `icon_names` | text | dhl, fedex, ups, usps | Comma-separated shipping handles. Supported: aramex, bpost, budbee, canada_post, chronopost, colissimo, correos, dao, dhl, dpd, evri, fedex, gls, helthjem, instabox, israel_post, la_pose, mondial_relay, poste_italiane, post_nl, royal_mail, sendle, smsa_express, ups, usps. Add "custom" to place your uploaded icons. [See all supported icons](https://help.shopify.com/en/manual/checkout-settings/checkout-blocks/blocks/create-block/shipping-payment-icons) |
| Shape | `shape` | select | rounded-md |  |
| Icon size | `size` | range | 40 |  |
| Gap between icons | `gap` | range | 8 |  |
| Alignment (desktop) | `alignment` | text_alignment | left |  |
| Alignment (mobile) | `alignment_mob` | text_alignment | left |  |

### Option values

- **Shape** (`shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)

## Presets

- Shipping icons


---
title: "Card"
sidebar_position: 4
---

# Card

## Supported blocks

These blocks can be added directly from the editor:

- `@theme` — @theme

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable full width | `card_full_width` | checkbox | false | Card fills its parent edge-to-edge with no page wrapper. Turn off to add a centerd container and set a fixed width below. |
| Width (desktop) | `card_width_desktop` | range | 100 | Only used when Full width is off. Percentage of the parent on lg+ screens. |
| Width (mobile) | `card_width_mobile` | range | 100 | Only used when Full width is off. Percentage of the parent on small screens. |
| Card class | `card_class` | text |  | Extra classes for the card. Example: mt-4 mb-8 shadow-xl md:max-w-2xl. |
| Background | `card_bg` | color_background | #ffffff |  |
| Hover background | `card_bg_hover` | color_background | #ffffff |  |
| Content text color | `card_text_color` | color_background |  | Base color for everything inside the card. Leave empty so each child block keeps its own color. |
| Border width | `card_border_width` | range | 1 | 0 disables the border. |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Corner radius | `card_radius` | select | rounded-2xl |  |
| Shadow | `card_shadow` | select | none |  |
| Padding | `card_padding` | range | 4 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Hover effect | `card_hover` | select | up |  |
| Hover shadow | `card_hover_shadow` | select | sm |  |

### Option values

- **Corner radius** (`card_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`card_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Hover effect** (`card_hover`): None (`none`), Lift up (`up`), Lift down (`down`), Scale up (`scale_up`), Scale down (`scale_down`)
- **Hover shadow** (`card_hover_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)

## Presets

- Card


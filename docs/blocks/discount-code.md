---
title: "Discount code"
sidebar_position: 9
---

# Discount code

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-4 |  |
| Alignment | `alignment` | select | center |  |
| Card max width | `card_width` | range | 500 |  |
| Background | `card_bg` | color_background | #ffffff |  |
| Hover background | `card_bg_hover` | color_background | #ffffff |  |
| Border width | `card_border_width` | range | 1 |  |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Corner radius | `card_radius` | select | rounded-2xl |  |
| Shadow | `card_shadow` | select | sm |  |
| Hover effect | `card_hover` | select | up |  |
| Hover shadow | `card_hover_shadow` | select | none |  |
| Content padding | `card_padding` | range | 5 | Tailwind spacing scale (1 = 4px, 5 = 20px). Content inset inside the card. |
| Image | `bg_image` | image_picker |  | Optional artwork behind the content. Content stays readable and adapts to any card size. |
| Image fit | `bg_fit` | select | cover | 9-slice keeps corners sharp and repeats the edges, so irregular frames never stretch out of shape. |
| 9-slice corner size | `bg_corner` | range | 40 | Corners keep their original shape, edges repeat and the center stretches, so the artwork fits any card size. |
| Overlay color | `bg_overlay` | color | #000000 |  |
| Overlay opacity | `bg_overlay_opacity` | range | 0 | Darken or tint the image so the text stays readable. |
| Show badge | `enable_rate` | checkbox | true |  |
| Badge text | `discount_rate` | text | 10% |  |
| Style | `rate_style` | select | badge |  |
| Panel position | `rate_position` | select | left |  |
| Badge color | `rate_color` | select | primary |  |
| Custom badge color | `rate_custom_color` | color | #111827 |  |
| Badge text size | `rate_size` | range | 1.5 |  |
| Shape | `rate_radius` | select | rounded-full |  |
| Heading | `discount_text` | text | Save on your first order |  |
| Subtext | `additional_text` | text |  |  |
| Heading size | `heading_size` | range | 1.3 |  |
| Text alignment | `content_align` | select | start |  |
| Text color | `text_color` | select | base-text |  |
| Custom text color | `text_custom_color` | color | #111827 |  |
| Code | `discount_code` | text | WELCOME10 |  |
| Code style | `code_style` | select | chip |  |
| Code text size | `code_size` | range | 0.9 |  |
| Code color | `code_color` | select | inherit | Inherit follows the Content text color. Chip border and fill adapt automatically. |
| Custom code color | `code_custom_color` | color | #111827 |  |
| Click code to copy | `copy_on_code` | checkbox | true |  |
| Button label | `button_copy` | text | Copy |  |
| Copied label | `button_copied` | text | Copied |  |
| Variant | `button_variant` | select | solid |  |
| Color | `button_color` | select | custom | First seven options follow the theme colors set in Theme settings. |
| Custom color | `button_custom_bg` | color_background | #111827 |  |
| Custom text color | `button_text_color` | color | #ffffff |  |
| Size | `button_size` | select | text-base |  |
| Shape | `button_radius` | select | rounded-md |  |
| Icon | `button_icon` | select | discount |  |
| Icon size | `button_icon_size` | range | 1 |  |

### Option values

- **Alignment** (`alignment`): Left (`start`), Center (`center`), Right (`end`)
- **Corner radius** (`card_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`card_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Hover effect** (`card_hover`): None (`none`), Lift up (`up`), Lift down (`down`), Scale up (`scale_up`), Scale down (`scale_down`)
- **Hover shadow** (`card_hover_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Image fit** (`bg_fit`): Cover (crop) (`cover`), Stretch to card (`stretch`), 9-slice (irregular frame) (`slice`)
- **Style** (`rate_style`): Badge (`badge`), Side panel (`panel`)
- **Panel position** (`rate_position`): Left (`left`), Right (`right`)
- **Badge color** (`rate_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Custom (`custom`)
- **Shape** (`rate_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Text alignment** (`content_align`): Left (`start`), Center (`center`), Right (`end`)
- **Text color** (`text_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Custom (`custom`)
- **Code style** (`code_style`): Plain text (`plain`), Outlined chip (`chip`), Filled chip (`fill`)
- **Code color** (`code_color`): Inherit (`inherit`), Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Custom (`custom`)
- **Variant** (`button_variant`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`), Icon only (`icon`)
- **Color** (`button_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Custom (`custom`)
- **Size** (`button_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Shape** (`button_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Icon** (`button_icon`): None (``), Discount (`discount`), Tag (`tag`), Tags (`tags`), Percent (`percent`), Dollar (`dollar`), Check (`check`), Check Circle (`check_circle`), Gift (`gift`), Award (`award`), Star (`star`), Heart (`heart`), Arrow Right (`arrow-right`), Scissors (`scissors`), Mail (`mail`), Cart (`cart`), Bag (`bag`), Credit Card (`credit_card`), Calendar (`calendar`), Clock (`clock`), Fire (`fire`), Leaf (`leaf`), Box (`box`), Truck (`truck`)

## Presets

- Discount code


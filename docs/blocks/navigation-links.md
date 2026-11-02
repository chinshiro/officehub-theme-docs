---
title: "Navigation links"
sidebar_position: 16
---

# Navigation links

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-4 |  |
| Menu | `linklist` | link_list |  |  |
| Layout | `layout` | select | horizontal |  |
| Link spacing | `gap` | range | 12 | Space between each link (pixels). |
| Size | `size` | select | px-4 py-2 text-base | Solid, Outline and Ghost: padding and font size. Link: font size only (spacing comes from Link spacing). |
| Style | `style` | select | link | Solid, Outline and Ghost render each link as a button (size, radius and shadow below apply). Link is a plain text link with underline on hover. |
| Color | `color` | select | base-text | Theme colors set in Theme settings. Matches the Heading color options. |
| Custom color | `custom_bg` | color_background |  | Solid: the resting fill. Outline and Ghost: the fill that appears on hover. Supports solid or gradient colors. Shown when Color is set to Custom. |
| Custom text color | `text_color` | color |  | Label color when Color is set to Custom (applies at rest and on hover). Leave blank to auto-pick black/white from a solid custom fill's luminance. |
| Radius | `radius` | select | rounded-md | Applies to Solid, Outline and Ghost styles. |
| Shadow | `shadow` | select | none | Applies to Solid, Outline and Ghost styles. |

### Option values

- **Layout** (`layout`): Horizontal (inline) (`horizontal`), Vertical (stacked) (`vertical`)
- **Size** (`size`): 3 Extra Small (`px-2 py-1 text-3xs`), 2 Extra Small (`px-2 py-1 text-2xs`), Extra Small (`px-2 py-1 text-xs`), Small (`px-3 py-1.5 text-sm`), Medium (`px-4 py-2 text-base`), Large (`px-5 py-2.5 text-lg`), Extra Large (`px-6 py-3 text-xl`), 2X Large (`px-8 py-4 text-2xl`), 3X Large (`px-10 py-5 text-3xl`), 4X Large (`px-15 py-6 text-4xl`), 5X Large (`px-15 py-7 text-5xl`), 6X Large (`px-20 py-8 text-6xl`), 7X Large (`px-20 py-10 text-7xl`), 8X Large (`px-20 py-10 text-8xl`), 9X Large (`px-20 py-10 text-9xl`)
- **Style** (`style`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`), Link (`link`)
- **Color** (`color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`shadow`): None (`none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)

## Presets

- Navigation links


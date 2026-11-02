---
title: "Badge"
sidebar_position: 2
---

# Badge

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Badge text | `title` | text | Badge |  |
| Bold text | `enble_bold` | checkbox | false |  |
| Image | `image` | image_picker |  |  |
| Image class | `image_width` | text | w-4 h-4 |  |
| Color | `style` | select | primary | Custom applies the Custom style settings below. |
| Custom color | `bg` | color_background | #f3f4f6 | Solid color or gradient with transparency. Shown when Style is Custom. |
| Custom text color | `text_color` | color_background | #111827 |  |
| Size (mobile) | `text_size_mob` | select | text-sm |  |
| Size (desktop) | `text_size` | select | text-base |  |
| Badge class | `pad` | text | px-2 py-1 | Tailwind padding classes. Spacing scale: 0-10, plus 15 and 20. Example: px-2 py-1. |
| Shape | `radius` | select | rounded-full |  |
| Border width | `border` | range | 0 |  |
| Border color | `border_color` | color_background | #d1d5db | Solid color or gradient, e.g. linear-gradient(to right, #066fd1, #2fb344). |
| Border offset | `border_offset` | range | 0 | Moves the border ring outward, leaving a gap to the badge edge like a detached outline. |
| Shadow | `shadow` | select | shadow-none |  |
| Shadow length | `shadow_length` | range | 5 | When shadow is [Cubic]. |
| Shadow color | `shadow_color` | color | #000000 | When shadow is [Cubic]. |
| Position | `position` | select | static |  |
| Left offset | `position_x` | range | 0 |  |
| Top offset | `position_y` | range | 0 |  |
| Left offset (mobile) | `position_x_mob` | range | 0 |  |
| Top offset (mobile) | `position_y_mob` | range | 0 |  |
| Rotation | `rotation` | range | 0 |  |
| Translate X | `translatex` | range | 0 |  |
| Translate Y | `translatey` | range | 0 |  |
| Alignment (desktop) | `alignment` | text_alignment | left |  |
| Alignment (mobile) | `alignment_mob` | text_alignment | left |  |

### Option values

- **Color** (`style`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Size (mobile)** (`text_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`text_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Shape** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`shadow`): None (`shadow-none`), Default (`shadow`), Small (`shadow-sm`), Medium (`shadow-md`), Large (`shadow-lg`), Cubic (`shadow-cubic`)
- **Position** (`position`): In flow (`static`), Absolute (`absolute`)

## Presets

- Badge


---
title: "Countdown timer"
sidebar_position: 8
---

# Countdown timer

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Label before timer | `label_before` | text |  |  |
| Divider type | `divider_type` | select | colon |  |
| End date | `end_date` | text |  | Format YYYY-MM-DD, e.g. 2026-12-31. Leave empty to count down to tonight 23:59. |
| End time (optional) | `end_time` | text |  | 24h format HH:MM, e.g. 23:59. Uses the store timezone. |
| End text | `end_text` | richtext |  | Shown once the date and time elapses. |
| Hide the timer when the date and time elapses | `hide_on_end` | checkbox | true |  |
| Full width | `show_wide` | checkbox | false |  |
| Background | `background` | select | bg-transparent |  |
| Corner radius | `radius` | select | rounded-md |  |
| Alignment | `alignment` | select | justify-center |  |
| Number color | `color_mode` | select | base-text |  |
| Number color (custom) | `color` | color |  |  |
| Number size (mobile) | `size_mob` | select | text-2xl |  |
| Number size (desktop) | `size` | select | text-4xl |  |
| Number size (large desktop) | `size_lg` | select |  |  |
| Show labels | `show_timer_labels` | checkbox | true |  |
| Label size | `labels_size` | select | text-xs |  |
| Label color | `labels_color_mode` | select | base-text |  |
| Label color (custom) | `labels_color` | color |  |  |
| Stack label under number | `show_labels_linebreak` | checkbox | true |  |
| Use short labels (D/H/M/S) | `show_labels_short` | checkbox | false |  |
| Block class | `class` | text |  |  |

### Option values

- **Divider type** (`divider_type`): Colon (`colon`), Dot (`dot`), Line (`line`), None (`none`)
- **Background** (`background`): None (`bg-transparent`), White (`bg-white`), Light (`bg-gray-100`), Dark (`bg-gray-900`), Blue (`bg-blue-600`), Red (`bg-red-600`), Green (`bg-green-600`)
- **Corner radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Alignment** (`alignment`): Start (`justify-start`), Center (`justify-center`), End (`justify-end`)
- **Number color** (`color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Number size (mobile)** (`size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Number size (desktop)** (`size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Number size (large desktop)** (`size_lg`): Inherit (``), 4X large (`lg:text-4xl`), 5X large (`lg:text-5xl`), 6X large (`lg:text-6xl`)
- **Label size** (`labels_size`): Extra small (`text-[10px]`), Small (`text-xs`), Medium (`text-sm`), Large (`text-base`)
- **Label color** (`labels_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)

## Presets

- Countdown timer


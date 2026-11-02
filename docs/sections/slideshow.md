---
title: "Slideshow"
sidebar_position: 29
---

# Slideshow

## Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_slide_image` — Slide - image
- `_slide_video` — Slide - video
- `_slide_model` — Slide - model
- `_slide_split` — Slide - split

### `_slide_image` — Slide - image

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable container full width | `full_width` | checkbox | false |  |
| Overlay background | `overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 100%) | Supports gradient background. |
| Text width (desktop) | `text_width` | range | 50 |  |
| Text width (mobile) | `text_width_mob` | range | 90 |  |
| Text position (desktop) | `text_position` | select | md:items-center md:justify-start |  |
| Text position (mobile) | `text_position_mob` | select | items-center justify-center |  |
| Enable text shadow | `text_shadow` | checkbox | true |  |
| Show wave overlay | `show_wave` | checkbox | false | A wave shape pinned to the bottom edge of the media — pick a color matching the section below for an irregular media silhouette. |
| Wave color | `wave_color` | color | #ffffff |  |

##### Option values

- **Text position (desktop)** (`text_position`): Top left (`md:items-start md:justify-start`), Top center (`md:items-start md:justify-center`), Top right (`md:items-start md:justify-end`), Center left (`md:items-center md:justify-start`), Center center (`md:items-center md:justify-center`), Center right (`md:items-center md:justify-end`), Bottom left (`md:items-end md:justify-start`), Bottom center (`md:items-end md:justify-center`), Bottom right (`md:items-end md:justify-end`)
- **Text position (mobile)** (`text_position_mob`): Top left (`items-start justify-start`), Top center (`items-start justify-center`), Top right (`items-start justify-end`), Center left (`items-center justify-start`), Center center (`items-center justify-center`), Center right (`items-center justify-end`), Bottom left (`items-end justify-start`), Bottom center (`items-end justify-center`), Bottom right (`items-end justify-end`)

#### Blocks inside Slide - image

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Badge](/blocks/badge) — `badge`
- [Button](/blocks/button) — `button`
- `rich-text`
- [Image](/blocks/image) — `image`

#### `_column` — Column

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Column width (mobile) | `column_width_mob` | range | 100 |  |
| Column width (desktop) | `column_width` | range | 50 |  |
| Sticky on desktop | `sticky` | checkbox | false |  |
| Overflow hidden | `overflow_hidden` | checkbox | false |  |
| Z-index | `zindex` | number | 0 |  |
| Background | `bg` | color_background |  | Solid color or gradient. Leave empty for transparent. |
| Child element display | `sub_display` | select |  |  |
| Display direction | `sub_display_dir` | select |  | When child element display is flex. |
| Horizontal alignment | `sub_alignment` | select |  | Applies when child element display is flex. |
| Vertical alignment | `sub_valignment` | select |  | Applies when child element display is flex. |

##### Blocks inside Column

- `@app`
- `@theme`

### `_slide_video` — Slide - video

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable container full width | `full_width` | checkbox | false |  |
| Overlay background | `overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 100%) | Supports gradient background. |
| Text width (desktop) | `text_width` | range | 60 |  |
| Text width (mobile) | `text_width_mob` | range | 90 |  |
| Text position (desktop) | `text_position` | select | md:items-center md:justify-center |  |
| Text position (mobile) | `text_position_mob` | select | items-center justify-center |  |
| Enable text shadow | `text_shadow` | checkbox | true |  |
| Show wave overlay | `show_wave` | checkbox | false | A wave shape pinned to the bottom edge of the media — pick a color matching the section below for an irregular media silhouette. |
| Wave color | `wave_color` | color | #ffffff |  |

##### Option values

- **Text position (desktop)** (`text_position`): Top left (`md:items-start md:justify-start`), Top center (`md:items-start md:justify-center`), Top right (`md:items-start md:justify-end`), Center left (`md:items-center md:justify-start`), Center center (`md:items-center md:justify-center`), Center right (`md:items-center md:justify-end`), Bottom left (`md:items-end md:justify-start`), Bottom center (`md:items-end md:justify-center`), Bottom right (`md:items-end md:justify-end`)
- **Text position (mobile)** (`text_position_mob`): Top left (`items-start justify-start`), Top center (`items-start justify-center`), Top right (`items-start justify-end`), Center left (`items-center justify-start`), Center center (`items-center justify-center`), Center right (`items-center justify-end`), Bottom left (`items-end justify-start`), Bottom center (`items-end justify-center`), Bottom right (`items-end justify-end`)

#### Blocks inside Slide - video

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Badge](/blocks/badge) — `badge`
- [Button](/blocks/button) — `button`
- `rich-text`
- [Video](/blocks/video) — `video`

### `_slide_model` — Slide - model

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable container full width | `full_width` | checkbox | false |  |
| Overlay background | `overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 100%) | Supports gradient background. |
| Text width (desktop) | `text_width` | range | 60 |  |
| Text width (mobile) | `text_width_mob` | range | 90 |  |
| Text position (desktop) | `text_position` | select | md:items-center md:justify-center |  |
| Text position (mobile) | `text_position_mob` | select | items-center justify-center |  |
| Enable text shadow | `text_shadow` | checkbox | true |  |
| Show wave overlay | `show_wave` | checkbox | false | A wave shape pinned to the bottom edge of the media — pick a color matching the section below for an irregular media silhouette. |
| Wave color | `wave_color` | color | #ffffff |  |

##### Option values

- **Text position (desktop)** (`text_position`): Top left (`md:items-start md:justify-start`), Top center (`md:items-start md:justify-center`), Top right (`md:items-start md:justify-end`), Center left (`md:items-center md:justify-start`), Center center (`md:items-center md:justify-center`), Center right (`md:items-center md:justify-end`), Bottom left (`md:items-end md:justify-start`), Bottom center (`md:items-end md:justify-center`), Bottom right (`md:items-end md:justify-end`)
- **Text position (mobile)** (`text_position_mob`): Top left (`items-start justify-start`), Top center (`items-start justify-center`), Top right (`items-start justify-end`), Center left (`items-center justify-start`), Center center (`items-center justify-center`), Center right (`items-center justify-end`), Bottom left (`items-end justify-start`), Bottom center (`items-end justify-center`), Bottom right (`items-end justify-end`)

#### Blocks inside Slide - model

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Badge](/blocks/badge) — `badge`
- [Button](/blocks/button) — `button`
- `rich-text`
- [3D model](/blocks/model) — `model`

### `_slide_split` — Slide - split

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  | Extra utility classes for the split shell, e.g. spacing like p-6. |
| Full width | `full_width` | checkbox | false | On: inner content spans the whole slide. Off: content stays inside the page container. The background always spans full width. |
| Media position | `media_position` | select | right | Desktop only. Stacks on mobile (text first). |
| Text side width | `text_width` | range | 50 |  |
| Vertical align | `vertical_align` | select | center |  |
| Gap between sides | `gap` | range | 24 | Applies on desktop (between the sides) and stacks vertically as the top/bottom gap on mobile. |
| Background | `background` | color_background |  |  |
| Show wave overlay | `show_wave` | checkbox | false | A wave shape pinned to the bottom edge of the slide — pick a color matching the section below for an irregular silhouette. |
| Wave color | `wave_color` | color | #ffffff |  |

##### Option values

- **Media position** (`media_position`): Right (`right`), Left (`left`)
- **Vertical align** (`vertical_align`): Start (`start`), Center (`center`), End (`end`)

#### `_slide_split_text` — Split - text side

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  | Extra utility classes, e.g. spacing like p-6 or gap-y-4 between blocks. |
| Vertical distribution | `justify` | select | start | How the added blocks are distributed vertically inside the text side. |

##### Blocks inside Split - text side

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Badge](/blocks/badge) — `badge`
- [Button](/blocks/button) — `button`
- `rich-text`

#### `_slide_split_media` — Split - media side

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  | Extra utility classes, e.g. spacing like p-6. |
| Vertical distribution | `justify` | select | center | How the added blocks are distributed vertically inside the media side. |
| Horizontal alignment | `h_align` | select | center | Aligns the media blocks horizontally inside the media side. Ignored when the slideshow uses a fixed height (media then fills the area). |

##### Blocks inside Split - media side

- [Image](/blocks/image) — `image`
- [Video](/blocks/video) — `video`
- [3D model](/blocks/model) — `model`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Height mode (desktop) | `height_mode` | select | auto | Fixed keeps every slide at the same height so slides never jump. Media then scales inside the slide area regardless of its own ratio. |
| Height mode (mobile) | `mobile_height_mode` | select | auto |  |
| Height unit | `fixed_height_unit` | select | px | Applies to both desktop and mobile values. px = always the same height. vh = percentage of the browser window height (e.g. 80 vh ≈ 80% of the visible screen), so the banner scales with the window. |
| Fixed height (desktop) | `fixed_height` | number | 520 |  |
| Fixed height (mobile) | `fixed_height_mob` | number | 400 |  |
| Autoplay | `autoplay` | checkbox | true |  |
| Autoplay speed (seconds) | `autoplay_speed` | range | 5 |  |
| Show arrows | `show_arrows` | checkbox | true |  |
| Arrow size (px) | `arrows_size` | range | 44 |  |
| Arrow shape | `arrows_shape` | select | rounded-full |  |
| Arrow background | `arrows_bg` | color | #ffffff |  |
| Arrow icon color | `arrows_color` | color | #111827 |  |
| Arrow edge offset (px) | `arrows_offset` | range | 16 |  |
| Show dots | `show_dots` | checkbox | true |  |
| Dots position | `dots_position` | select | bottom |  |
| Dots size (px) | `dots_size` | range | 24 |  |
| Dots spacing (px) | `dots_gap` | range | 8 |  |
| Active dot color | `dots_color_active` | color | #ffffff |  |
| Inactive dot color | `dots_color_inactive` | color | #ffffff |  |
| Dots shape | `dots_shape` | select | rounded-full |  |
| Active dot border color | `border_color` | color | #000000 |  |
| Active dot border width | `border_width` | range | 0 | Border around the active dot. 0 = no border. |
| Active dot border offset (px) | `border_offset` | range | 2 | Distance between the border and the dot. 0 = border hugs the dot. |
| Show progress bar | `show_progress` | checkbox | true |  |
| Progress bar position | `progress_position` | select | bottom |  |
| Progress bar height (px) | `progress_height` | range | 4 |  |
| Progress bar color | `progress_color` | color_background | linear-gradient(90deg, #667eea 0%, #764ba2 100%) |  |

### Option values

- **Height mode (desktop)** (`height_mode`): Auto (follow content) (`auto`), Fixed height (`fixed`)
- **Height mode (mobile)** (`mobile_height_mode`): Auto (follow content) (`auto`), Fixed height (`fixed`)
- **Height unit** (`fixed_height_unit`): px (`px`), vh (`vh`)
- **Arrow shape** (`arrows_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Dots position** (`dots_position`): Bottom (`bottom`), Top (`top`)
- **Dots shape** (`dots_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Progress bar position** (`progress_position`): Top (`top`), Bottom (`bottom`)

## Presets

- Slideshow

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

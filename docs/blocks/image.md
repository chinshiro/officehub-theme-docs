---
title: "Image"
sidebar_position: 12
---

# Image

## Supported blocks

These blocks can be added directly from the editor:

- [Badge](/blocks/badge) — `badge`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Image (desktop) | `image` | image_picker |  | Recommended 1920 x 800px or larger. |
| Image (mobile) | `image_mob` | image_picker |  | Falls back to the desktop image when empty. 540 x 960px is a good baseline. |
| Ratio (desktop) | `image_ratio` | select |  |  |
| Ratio (mobile) | `image_ratio_mob` | select |  |  |
| Crop image to ratio | `image_crop` | checkbox | true |  |
| Crop focus | `crop_align` | select | center |  |
| Alignment | `image_align` | select | left | Horizontal alignment when Ratio is Auto (the image shows at its own size). |
| Corner radius | `radius` | select | rounded-none |  |
| Enable thumbnail frame | `thumbnail` | checkbox | false | Draws a bordered, padded frame around the image with an optional solid offset shadow. |
| Thumbnail padding | `thumbnail_padding` | range | 4 |  |
| Thumbnail border width | `thumbnail_border` | range | 1 |  |
| Thumbnail border color | `thumbnail_border_color` | color | #f9fafb |  |
| Thumbnail background | `thumbnail_bg` | color | #ffffff |  |
| Thumbnail shadow | `thumbnail_shadow` | range | 0 | Solid offset shadow: 0 disables it. |
| Thumbnail shadow color | `thumbnail_shadow_color` | color | #f9fafb |  |
| Enable skew | `enable_skew` | checkbox | false | Tilts the image horizontally. The angle is set per breakpoint. |
| Skew origin | `skew_origin` | select | origin-center |  |
| Skew angle (desktop) | `skew_angle` | range | 0 |  |
| Skew angle (mobile) | `skew_angle_mob` | range | 0 |  |
| Loading | `image_loading` | select | lazy | Eager only for the image above the fold; it competes with everything else for bandwidth. |
| Fetch priority | `image_fetchpriority` | select | auto |  |
| Link | `url` | url |  |  |
| Open in | `target` | select | _self |  |
| Block class | `class` | text |  |  |

### Option values

- **Ratio (desktop)** (`image_ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Ratio (mobile)** (`image_ratio_mob`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Crop focus** (`crop_align`): Top (`top`), Center (`center`), Bottom (`bottom`), Left (`left`), Right (`right`)
- **Alignment** (`image_align`): Left (`left`), Center (`center`), Right (`right`)
- **Corner radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Skew origin** (`skew_origin`): Top left (`origin-top-left`), Top center (`origin-top`), Top right (`origin-top-right`), Middle left (`origin-left`), Middle center (`origin-center`), Middle right (`origin-right`), Bottom left (`origin-bottom-left`), Bottom center (`origin-bottom`), Bottom right (`origin-bottom-right`)
- **Loading** (`image_loading`): Eager (`eager`), Lazy (`lazy`)
- **Fetch priority** (`image_fetchpriority`): High (`high`), Low (`low`), Auto (`auto`)
- **Open in** (`target`): Same tab (`_self`), New tab (`_blank`)

## Presets

- Image


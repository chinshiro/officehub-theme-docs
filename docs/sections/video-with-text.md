---
title: "Video with text"
sidebar_position: 32
---

# Video with text

## Supported blocks

These blocks can be added directly from the editor:

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Button](/blocks/button) — `button`
- [Badge](/blocks/badge) — `badge`
- [Stars](/blocks/stars) — `stars`
- [Steps](/blocks/steps) — `steps`
- [Countdown timer](/blocks/countdown-timer) — `countdown-timer`
- [Discount code](/blocks/discount-code) — `discount-code`
- [Newsletter form](/blocks/newsletter-form) — `newsletter-form`
- [Navigation links](/blocks/navigation-links) — `navigation-links`
- [Payment icons](/blocks/payment-icons) — `payment-icons`
- [Columns](/blocks/columns) — `columns`
- [Video](/blocks/video) — `video`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Enable inner spacing | `enable_spacing` | checkbox | true |  |
| Block class | `class` | text | py-4 lg:py-6 |  |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Use theme background schema | `bg_schema` | checkbox | false |  |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Layout | `layout` | select | overlay |  |
| Video width (desktop) | `video_width` | select | lg:w-1/2 | Only used when the layout is text left or text right. |
| Gap (desktop) | `gap` | range | 4 |  |
| Gap (mobile) | `gap_mob` | range | 2 |  |
| Style | `overlay_style` | select | full |  |
| Overlay background | `overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) 100%) | Applied to the whole overlay (Tint) or to the text box (Box). Supports solid or gradient colors. |
| Content position | `overlay_align` | select | items-center justify-center |  |
| Text width | `text_width` | range | 45 | Width of the text area inside the overlay, as a percentage. |
| Overlay radius | `overlay_radius` | select | rounded-md |  |
| Show play button | `show_play` | checkbox | true | A play button under the overlay text. Starts the video it sits on. |
| Play button alignment | `play_align` | select | justify-center |  |

### Option values

- **Layout** (`layout`): Text left (`text-left`), Text right (`text-right`), Text overlay video (`overlay`)
- **Video width (desktop)** (`video_width`): 40% (`lg:w-2/5`), 50% (`lg:w-1/2`), 60% (`lg:w-3/5`)
- **Style** (`overlay_style`): Tint (`full`), Box (`box`), Text shadow (`shadow`), Text shadow and tint (`full shadow`), No overlay background (`none`)
- **Content position** (`overlay_align`): Top left (`items-start justify-start`), Top center (`items-start justify-center`), Top right (`items-start justify-end`), Center left (`items-center justify-start`), Center (`items-center justify-center`), Center right (`items-center justify-end`), Bottom left (`items-end justify-start`), Bottom center (`items-end justify-center`), Bottom right (`items-end justify-end`)
- **Overlay radius** (`overlay_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Play button alignment** (`play_align`): Left (`justify-start`), Center (`justify-center`), Right (`justify-end`)

## Presets

- Video with text

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

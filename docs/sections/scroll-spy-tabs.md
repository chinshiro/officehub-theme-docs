---
title: "Scroll/Spy/Tabs"
sidebar_position: 26
---

# Scroll/Spy/Tabs

## Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_nav-item` — Nav item

### `_nav-item` — Nav item

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Label | `title` | text | Overview |  |
| Target | `target` | text |  | Empty: this item's own panel below. A number (1, 2, 3...) points at the Nth section after this one; several numbers separated by commas (1,3) make one tab control a group of sections. Any element id, #anchor or section key also works, alone or comma separated. |
| Selected by default | `active` | checkbox | false | Used by the Tabs style to decide which panel is visible first. |
| Nav class | `class` | text | py-2 | Extra classes added to this nav link, e.g. padding. Applies to the nav tab itself, not the panel. |
| Sub link text | `label` | text |  | Optional small link shown under the nav label. |
| Sub link | `link` | url |  |  |

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Mode | `mode` | select | spy | Scroll: jumps to the target. Spy: the active link follows the scroll position. Tabs: click to switch the visible panel or section. |
| Scroll offset | `offset` | range | 96 | How far below the top of the viewport a section is considered active. |
| Sticky navigation | `sticky` | checkbox | true | Pins the nav just under the site header while the section scrolls. Also works when the nav only points at other sections. |
| Full width | `full_width` | checkbox | false | Affects the content only. Off: the nav and the panels sit inside the page container. On: they run edge to edge. |
| Background | `bg` | color_background |  | Fills the whole section, edge to edge. Supports solid or gradient colors. |
| Nav alignment | `alignment` | select | center |  |
| Shadow | `shadow` | select | shadow-none |  |
| Logo | `show_logo` | select | hide |  |
| Nav class | `class` | text | gap-4 py-2 lg:gap-6 | Tailwind utilities for the navigation bar (the tab list). Space separated, e.g. gap-2 py-1. Spacing scale: 0-10 plus 15 and 20 (1 = 0.25rem = 4px); responsive with md: / lg:, e.g. lg:gap-6. These classes are appended to the nav list, so you can override the default gap and padding here. |
| Nav color | `nav_color` | color | #6b7280 |  |
| Nav link background | `nav_bg` | color |  | Leave empty for a transparent background. Picking a color also adds padding and rounded corners, turning the link into a pill. |
| Nav active color | `nav_color_active` | color | #111827 |  |
| Nav active background | `nav_bg_active` | color |  | Leave empty to reuse the nav link background. |
| Nav link radius | `nav_radius` | select | rounded-md | Corner radius for the nav link background. Only visible once a background color is set. Same shapes as the Button block. |
| Label size (mobile) | `nav_size_mob` | select | text-base |  |
| Label size (desktop) | `nav_size` | select | text-base | Font size for all nav links in this tabs section. |

### Option values

- **Mode** (`mode`): Scroll (`scrollto`), Spy (`spy`), Tabs (`tabs`)
- **Nav alignment** (`alignment`): Left (`left`), Center (`center`), Right (`right`)
- **Shadow** (`shadow`): None (`shadow-none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Logo** (`show_logo`): Light logo (`light`), Dark logo (`dark`), Hidden (`hide`)
- **Nav link radius** (`nav_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Label size (mobile)** (`nav_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Label size (desktop)** (`nav_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)

## Presets

- Scroll/Spy/Tabs
- Spy
- Tabs

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

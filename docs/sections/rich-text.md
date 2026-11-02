---
title: "Rich text"
sidebar_position: 25
---

# Rich text

## Supported blocks

These blocks can be added directly from the editor:

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Button](/blocks/button) — `button`
- [Badge](/blocks/badge) — `badge`

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_column` — Column

### `_column` — Column

#### Settings

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

##### Option values

- **Child element display** (`sub_display`): no set (``), block (`block`), inline-block (`inline-block`), flex (`flex`), inline-flex (`inline-flex`)
- **Display direction** (`sub_display_dir`): no set (``), row (`flex-row`), column (`flex-col`)
- **Horizontal alignment** (`sub_alignment`): no set (``), Start (`justify-start`), Center (`justify-center`), End (`justify-end`), Space between (`justify-between`)
- **Vertical alignment** (`sub_valignment`): no set (``), Start (`items-start`), Center (`items-center`), End (`items-end`), Stretch (`items-stretch`)

#### Blocks inside Column

- `@app`
- `@theme`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable full width | `full_width` | checkbox | false |  |
| Enable spacing | `enable_spacing` | checkbox | false |  |
| Block class | `class` | text | py-4 lg:py-6 |  |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Or, use image | `bg_schema` | select |  |  |
| Enable background fixed | `bg_attachment` | checkbox | false |  |

### Option values

- **Or, use image** (`bg_schema`): None (``), Bg image schema 1 (`bg_schema1`), Bg image schema 2 (`bg_schema2`), Bg image schema 3 (`bg_schema3`), Bg image schema 4 (`bg_schema4`), Bg image schema 5 (`bg_schema5`), Bg image schema 6 (`bg_schema6`), Bg image schema 7 (`bg_schema7`), Bg image schema 8 (`bg_schema8`)

## Presets

- Rich text

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

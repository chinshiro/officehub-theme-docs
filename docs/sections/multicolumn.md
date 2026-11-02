---
title: "Multicolumn"
sidebar_position: 22
---

# Multicolumn

## Supported blocks

These blocks can be added directly from the editor:

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Button](/blocks/button) — `button`
- [Image](/blocks/image) — `image`
- [Video](/blocks/video) — `video`

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
| Full width | `full_width` | checkbox | false |  |
| Enable inner spacing | `enable_spacing` | checkbox | false |  |
| Block class | `class` | text | py-4 lg:py-6 |  |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Use theme background schema | `bg_schema` | checkbox | false |  |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Heading | `title` | text |  |  |
| Heading tag | `title_tag` | select | h2 |  |
| Heading alignment | `title_alignment` | text_alignment | left |  |
| Text | `text` | richtext |  |  |
| Text alignment | `text_alignment` | text_alignment | left |  |
| Columns alignment | `alignment` | select | start |  |

### Option values

- **Heading tag** (`title_tag`): h1 (`h1`), h2 (`h2`), h3 (`h3`), h4 (`h4`), h5 (`h5`), h6 (`h6`), div (`div`)
- **Columns alignment** (`alignment`): Start (`start`), Center (`center`), Space between (`between`)

## Presets

- Multicolumn

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

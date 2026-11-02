---
title: "Columns"
sidebar_position: 6
---

# Columns

## Supported blocks

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
| Block class | `class` | text |  |  |
| Enable full width | `full_width` | checkbox | false |  |
| Enable spacing | `enable_spacing` | checkbox | true |  |
| Background | `bg` | color_background |  | Solid color or gradient. Leave empty for transparent. |
| Horizontal | `alignment` | select | start |  |
| Vertical | `valignment` | select | start |  |
| Column gap (desktop) | `gap` | range | 4 |  |
| Column gap (mobile) | `gap_mob` | range | 2 |  |

### Option values

- **Horizontal** (`alignment`): Left (`start`), Center (`center`), Right (`end`), Between (`between`)
- **Vertical** (`valignment`): Top (`start`), Middle (`center`), Bottom (`end`), Stretch (`stretch`)

## Presets

- Columns


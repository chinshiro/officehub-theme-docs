---
title: "Scrolling banner"
sidebar_position: 19
---

# Scrolling banner

## Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_scrolling-pane` — Scrolling pane

### `_scrolling-pane` — Scrolling pane

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Background | `bg` | color_background |  |  |
| Text color | `text_color` | color |  |  |
| Horizontal alignment | `alignment` | select | justify-center | Only has an effect when the pane is wider than its content. |
| Vertical alignment | `valignment` | select | items-center |  |

##### Option values

- **Horizontal alignment** (`alignment`): Left (`justify-start`), Center (`justify-center`), Right (`justify-end`)
- **Vertical alignment** (`valignment`): Top (`items-start`), Center (`items-center`), Bottom (`items-end`)

#### Blocks inside Scrolling pane

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Button](/blocks/button) — `button`
- [Image](/blocks/image) — `image`
- [Badge](/blocks/badge) — `badge`
- [Stars](/blocks/stars) — `stars`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Block class | `class` | text | py-2 |  |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Use theme background schema | `bg_schema` | checkbox | false |  |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Direction | `direction` | select | left |  |
| Speed | `speed` | range | 70 |  |
| Hold time | `interval` | range | 2.5 | Seconds a message stays put before the next one slides in. Up and down only. |
| Slide duration | `slide` | range | 400 | How long one message takes to slide in. Up and down only — keep it short for the snap-in feel. |
| Gap between messages | `gap` | range | 6 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Height | `height` | range | 0 |  |
| Pause on hover | `pause_on_hover` | checkbox | true |  |
| Auto background from scrolling pane | `auto_bg` | checkbox | true |  |
| Additional target | `bg_target` | text |  |  |

### Option values

- **Direction** (`direction`): To left (`left`), To right (`right`), To up (`up`), To down (`down`)

## Presets

- Scrolling banner


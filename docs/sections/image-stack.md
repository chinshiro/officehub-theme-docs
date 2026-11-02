---
title: "Image stack"
sidebar_position: 17
---

# Image stack

## Supported blocks

These blocks can be added directly from the editor:

- [Image](/blocks/image) — `image`
- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Button](/blocks/button) — `button`
- [Badge](/blocks/badge) — `badge`
- [Stars](/blocks/stars) — `stars`
- [Steps](/blocks/steps) — `steps`
- [Countdown timer](/blocks/countdown-timer) — `countdown-timer`
- [Discount code](/blocks/discount-code) — `discount-code`
- [Newsletter form](/blocks/newsletter-form) — `newsletter-form`
- [Payment icons](/blocks/payment-icons) — `payment-icons`
- [Columns](/blocks/columns) — `columns`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Enable inner spacing | `enable_spacing` | checkbox | true |  |
| Deck position | `layout` | select | stack-left |  |
| Deck width (desktop) | `deck_width` | range | 50 |  |
| Gap (desktop) | `gap` | range | 4 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Gap (mobile) | `gap_mob` | range | 2 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Scale step | `stack_scale` | range | 5 |  |
| Angle step | `stack_angle` | range | 4 | Each card behind the front one tilts by this many degrees. 0 keeps the deck flat. |
| Side peek | `stack_offset` | range | 12 |  |
| Arrow background | `arrow_bg` | color | #111827 |  |
| Arrow icon color | `arrow_color` | color | #ffffff |  |
| Deck class | `deck_class` | text |  |  |
| Content class | `content_class` | text |  |  |
| Block class | `class` | text |  |  |

### Option values

- **Deck position** (`layout`): Left (`stack-left`), Right (`stack-right`), No text (`deck-only`)

## Presets

- Image stack

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

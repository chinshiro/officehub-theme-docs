---
title: "Announcement bar"
sidebar_position: 1
---

# Announcement bar

## Supported blocks

These blocks can be added directly from the editor:

- [Scrolling banner](/blocks/scrolling-banner) — `scrolling-banner`
- [Button](/blocks/button) — `button`
- [Columns](/blocks/columns) — `columns`
- [Countdown timer](/blocks/countdown-timer) — `countdown-timer`
- [Heading](/blocks/heading) — `heading`
- [Image](/blocks/image) — `image`
- [Currency / language](/blocks/localization) — `localization`
- [Navigation links](/blocks/navigation-links) — `navigation-links`
- [Newsletter form](/blocks/newsletter-form) — `newsletter-form`
- [Payment icons](/blocks/payment-icons) — `payment-icons`
- [Social media icons](/blocks/social-media-icons) — `social-media-icons`
- [Stars](/blocks/stars) — `stars`
- [Steps](/blocks/steps) — `steps`
- [Text](/blocks/text) — `text`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Show announcement bar | `enable_announcement` | checkbox | true |  |
| Position | `position` | select | static | Sticky keeps the bar at the top as the page scrolls. Fixed does the same but takes it out of the flow, so it overlays whatever is underneath. |
| Enable full width | `full_width` | checkbox | false |  |
| Section class | `class` | text |  | Tailwind utilities for this section. Space separated, e.g. mt-2 mb-4 px-6. Spacing scale: 0-10 plus 15 and 20 (1 = 0.25rem = 4px); responsive with md: / lg:. |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Use theme background schema | `bg_schema` | checkbox | false |  |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Enable scrolling column | `enable_scrolling` | checkbox | true | The marquee is a block of its own: pick it in the editor to change the messages, direction and speed. |
| Scrolling column width | `scrolling_width` | range | 50 | Share of the desktop width. Always full width below lg, where the blocks column is normally hidden. |
| Blocks alignment | `blocks_alignment` | select | justify-end |  |
| Hide blocks column on mobile | `blocks_hide_mob` | checkbox | true |  |

### Option values

- **Position** (`position`): In page flow (`static`), Sticky top (`sticky`), Fixed top (`fixed`)
- **Blocks alignment** (`blocks_alignment`): Left (`justify-start`), Center (`justify-center`), Right (`justify-end`)

## Presets

- Announcement bar

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

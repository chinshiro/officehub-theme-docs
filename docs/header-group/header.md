---
title: "Header"
sidebar_position: 15
---

# Header

Section class: `section-header`

## Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_mega_menu` — Mega menu
- `_mega_blog` — Mega blog articles
- `_searchbar` — Search bar

### `_mega_menu` — Mega menu

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Menu item name | `menu_title` | text |  | Must match the title of a top level item in the main menu exactly (case sensitive). |
| Panel layout | `layout_type` | select | columns |  |
| Content width | `max_width` | select | default |  |
| Auto columns from menu sub-links | `auto_groups` | checkbox | true |  |
| Maximum links per auto column | `link_limit` | range | 0 | 0 shows every link. Auto columns only. |
| Show heading row | `show_heading` | checkbox | false |  |
| Heading | `heading` | text |  |  |
| Description | `text` | textarea |  |  |
| Title size (mobile) | `heading_size_mob` | select | text-base |  |
| Title size (desktop) | `heading_size` | select | text-base |  |
| Title color | `heading_color_mode` | select | heading-text | Custom applies the Custom color below. |
| Custom title color | `heading_color` | color | #111827 | Shown when Title color is Custom. |
| Alignment (mobile) | `heading_align_mob` | text_alignment | left |  |
| Alignment (desktop) | `heading_align` | text_alignment | left |  |
| Description size (mobile) | `text_size_mob` | select | text-sm |  |
| Description size (desktop) | `text_size` | select | text-sm |  |

##### Option values

- **Panel layout** (`layout_type`): Columns — every group is a column (`columns`), Tabs — labels on top, panel below (`tabs-horizontal`), Sidebar — labels on the left, panel on the right (`tabs-vertical`)
- **Content width** (`max_width`): Narrow (1080px) (`narrow`), Default (1320px) (`default`), Wide (1600px) (`wide`), Full width (`full`)
- **Title size (mobile)** (`heading_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Title size (desktop)** (`heading_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Title color** (`heading_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Description size (mobile)** (`text_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Description size (desktop)** (`text_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)

#### `_mega_group` — Mega group

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Heading | `heading` | text |  | Becomes the tab label in tab layouts and the column title in column layouts. |
| Heading link | `heading_url` | url |  | Optional. Turns the heading into a link. |
| Menu | `menu` | link_list |  | Renders this menu's links. Child blocks are appended after it. |
| Maximum links | `link_limit` | range | 0 | 0 shows every link. |
| Cards per row | `cards_per_row` | range | 0 | Maximum child cards (Mega card) per row. 0 fits as many as the panel width allows. |
| Cards per row (mobile) | `cards_per_row_mobile` | select | 2 | Cards per row on screens under 768px. |
| Badge text | `badge_text` | text |  |  |
| Badge color | `badge_style` | select | success | Custom applies the Custom color settings below. |
| Custom color | `badge_bg` | color_background | #f3f4f6 | Solid color or gradient with transparency. Shown when Style is Custom. |
| Custom text color | `badge_text_color` | color_background | #111827 |  |
| Bold text | `badge_bold` | checkbox | false |  |
| Size (mobile) | `badge_size_mob` | select | text-xs |  |
| Size (desktop) | `badge_size` | select | text-xs |  |
| Badge class | `badge_pad` | text | py-px px-1.5 | Tailwind padding classes. Spacing scale: 0-10, plus 15 and 20. Example: px-2 py-1. |
| Shape | `badge_shape` | select | rounded-md |  |
| Border width | `badge_border_width` | range | 0 |  |
| Border color | `badge_border_color` | color_background | #d1d5db | Solid color or gradient, e.g. linear-gradient(to right, #066fd1, #2fb344). |
| Border offset | `badge_border_offset` | range | 0 | Moves the border ring outward, leaving a gap to the badge edge like a detached outline. |
| Shadow | `badge_shadow` | select | shadow-none |  |
| Shadow length | `badge_shadow_length` | range | 5 | When shadow is [Cubic]. |
| Shadow color | `badge_shadow_color` | color | #000000 | When shadow is [Cubic]. |

##### `_mega_card` — Mega card

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Card layout | `style` | select | product |  |
| Background | `card_bg` | color_background |  | Supports solid or gradient colors. |
| Text color | `card_text_color` | color_background |  |  |
| Border width | `card_border_width` | range | 0 | 0 disables the border. |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Corner radius | `card_radius` | select | rounded-2xl |  |
| Shadow | `card_shadow` | select | none |  |
| Padding | `card_padding` | range | 0 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Product | `product` | product |  | Pulls in image, title, description, price and link. Manual values below override it. |
| Image | `image` | image_picker |  |  |
| Title | `title` | text |  |  |
| Text | `text` | textarea |  | Shown under the title. Maximum two lines. |
| Price text | `price` | text |  | Product style only. Leave empty to hide. |
| Link | `url` | url |  |  |
| Badge text | `badge_text` | text |  |  |
| Badge color | `badge_style` | select | danger | Custom applies the Custom color settings below. |
| Custom color | `badge_bg` | color_background | #f3f4f6 | Solid color or gradient with transparency. Shown when Style is Custom. |
| Custom text color | `badge_text_color` | color_background | #111827 |  |
| Bold text | `badge_bold` | checkbox | false |  |
| Size (mobile) | `badge_size_mob` | select | text-xs |  |
| Size (desktop) | `badge_size` | select | text-xs |  |
| Badge class | `badge_pad` | text | py-px px-1.5 | Tailwind padding classes. Spacing scale: 0-10, plus 15 and 20. Example: px-2 py-1. |
| Shape | `badge_shape` | select | rounded-md |  |
| Border width | `badge_border_width` | range | 0 |  |
| Border color | `badge_border_color` | color_background | #d1d5db | Solid color or gradient, e.g. linear-gradient(to right, #066fd1, #2fb344). |
| Border offset | `badge_border_offset` | range | 0 | Moves the border ring outward, leaving a gap to the badge edge like a detached outline. |
| Shadow | `badge_shadow` | select | shadow-none |  |
| Shadow length | `badge_shadow_length` | range | 5 | When shadow is [Cubic]. |
| Shadow color | `badge_shadow_color` | color | #000000 | When shadow is [Cubic]. |

##### `_mega_link` — Mega link

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Link text | `title` | text |  |  |
| Link | `url` | url |  |  |
| Note | `text` | text |  | Optional small line under the link. |
| Highlight (bold, primary color) | `highlight` | checkbox | false |  |
| Badge text | `badge_text` | text |  |  |
| Badge color | `badge_style` | select | danger | Custom applies the Custom color settings below. |
| Custom color | `badge_bg` | color_background | #f3f4f6 | Solid color or gradient with transparency. Shown when Style is Custom. |
| Custom text color | `badge_text_color` | color_background | #111827 |  |
| Bold text | `badge_bold` | checkbox | false |  |
| Size (mobile) | `badge_size_mob` | select | text-xs |  |
| Size (desktop) | `badge_size` | select | text-xs |  |
| Badge class | `badge_pad` | text | py-px px-1.5 | Tailwind padding classes. Spacing scale: 0-10, plus 15 and 20. Example: px-2 py-1. |
| Shape | `badge_shape` | select | rounded-md |  |
| Border width | `badge_border_width` | range | 0 |  |
| Border color | `badge_border_color` | color_background | #d1d5db | Solid color or gradient, e.g. linear-gradient(to right, #066fd1, #2fb344). |
| Border offset | `badge_border_offset` | range | 0 | Moves the border ring outward, leaving a gap to the badge edge like a detached outline. |
| Shadow | `badge_shadow` | select | shadow-none |  |
| Shadow length | `badge_shadow_length` | range | 5 | When shadow is [Cubic]. |
| Shadow color | `badge_shadow_color` | color | #000000 | When shadow is [Cubic]. |

##### `_mega_card_product` — Mega card · product

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Product | `product` | product |  | Pick a product to show a full product card. Leave blank to use the custom info below instead. |
| Title | `custom_title` | text |  | Overrides the product title, or is the title when no product is picked. |
| Subtitle | `custom_subtitle` | text |  |  |
| Image | `custom_image` | image_picker |  | Overrides the product image, or is the image when no product is picked. |
| Link | `custom_url` | url |  | Overrides where the card links to (defaults to the product page). |
| Background | `card_bg` | color_background |  |  |
| Border width | `card_border_width` | range | 0 |  |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Corner radius | `card_radius` | select | rounded-2xl |  |
| Shadow | `card_shadow` | select | none |  |
| Padding | `card_padding` | range | 0 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Hover effect | `card_hover` | select | up |  |
| Hover shadow | `card_hover_shadow` | select | sm |  |
| Hover background | `card_bg_hover` | color_background | #ffffff |  |
| Display mode | `card_image_mode` | select | swap | Carousel: hovering the card auto-advances every 2 seconds with a progress bar, looping until the pointer leaves. |
| Image ratio | `card_aspect_ratio` | select | 1.0 |  |
| Image shape | `card_image_shape` | select | rounded-none |  |
| Card content order | `card_body_order` | text | title/star/variant/price | Slash-separated tokens to show and order: vendor/title/star/variant/subtitle/price/buy. Delete a token to hide that element; reorder freely. Leave blank for the default (title/price/buy). |
| Content class | `card_content_class` | text | px-3 | Extra classes for the text content wrapper, e.g. px-4 to inset content when Card padding is 0. Leave blank for none. |
| Show empty stars when there are no reviews | `card_star_show_when_empty` | checkbox | true | When a product has no rating yet, show five empty stars instead of hiding the star row. Needs the star token in Card content order. |
| Buy button | `card_buy_button` | select | cart |  |
| Align buy button to card bottom | `card_buy_align_bottom` | checkbox | false | Stretches every card in the row so all buy buttons line up along the bottom edge. |
| Swatch size | `card_variant_swatch_size` | range | 50 |  |
| Swatch shape | `card_variant_swatch_shape` | select | rounded-circle |  |
| Show swatch border | `card_variant_swatch_border` | checkbox | true | Draws a border around each swatch using its own color, with a thin white ring separating the border from the color fill. Falls back to a neutral gray when a swatch has no color (image-only). |
| Variant pills limit | `card_variant_limit` | range | 5 |  |
| Variant pill shape | `card_variant_pill_shape` | select | rounded-full |  |
| Show color swatches only | `card_variant_swatch_only` | checkbox | true | Hides non-color option rows (e.g. size) so the variant area shows only the color swatches. Color options follow the theme's Swatch settings; products without a swatch option show no variants. |
| Text align | `card_text_align` | text_alignment | left |  |
| Title size (mobile) | `card_title_size_mob` | select | text-sm |  |
| Title size (desktop) | `card_title_size` | select | text-base |  |
| Title color (color) | `card_title_color_mode` | select | heading-text |  |
| Title color (custom) | `card_title_color` | color |  |  |
| Subtitle size (mobile) | `card_subtitle_size_mob` | select | text-sm |  |
| Subtitle size (desktop) | `card_subtitle_size` | select | text-base |  |
| Subtitle color (color) | `card_subtitle_color_mode` | select | heading-text |  |
| Subtitle color (custom) | `card_subtitle_color` | color |  |  |
| Price size (mobile) | `card_price_size_mob` | select | text-sm |  |
| Price size (desktop) | `card_price_size` | select | text-base |  |
| Price color (color) | `card_price_color_mode` | select | base-text |  |
| Price color (custom) | `card_price_color` | color |  |  |
| Variant size (mobile) | `card_variant_size_mob` | select | text-xs |  |
| Variant size (desktop) | `card_variant_size` | select | text-xs |  |
| Variant color (color) | `card_variant_color_mode` | select | base-text |  |
| Variant color (custom) | `card_variant_color` | color |  |  |
| Star color | `card_star_color` | select | warning |  |
| Custom color | `card_star_color_custom` | color |  |  |
| Button style | `card_buy_style` | select | solid |  |
| Color | `card_buy_color` | select | primary |  |
| Custom color | `card_buy_custom_bg` | color_background |  |  |
| Custom text color | `card_buy_text_color` | color | #ffffff |  |
| Full width (100%) | `card_buy_full_width` | checkbox | false |  |
| Button radius | `card_buy_radius` | select | rounded-md |  |
| Button size | `card_buy_size` | select | text-sm |  |
| Labels order | `card_labels` | text | new/reduction/hot/sold-out/pre-order/refurbished/tiered-pricing/bulk-order | All labels: new/reduction/hot/sold-out/pre-order/refurbished/tiered-pricing/bulk-order. Slash separated. Sort freely or delete any you don't want. |
| Position | `card_labels_position` | select | top-start | Where the label stack sits over the card image. |
| Style | `card_labels_schema` | select | solid |  |
| Shape | `card_labels_shape` | select | rounded-md | Same 32-shape vocabulary as the button blocks. |
| Size | `card_labels_size` | select | md |  |
| Hot method | `card_labels_hot_method` | select | tag | Collection: product in a collection whose handle contains 'hot'. Tag: product has the tag 'Hot sale'. Always: always show. |
| Reduction type | `card_reduction_type` | select | percent |  |
| New arrival method | `card_new_method` | select | tag | Collection: product in a collection whose handle contains 'new'. Tag: product has the tag 'New'. Date: created within the limit below. |
| New arrival date limit | `card_new_limit` | range | 7 | Label shows if the product was created within this many days |
| Position | `card_themelabel_position` | select | disabled |  |
| Style | `card_themelabel_style` | select | solid |  |
| Shape | `card_themelabel_shape` | select | rounded-full |  |
| Size (mobile) | `card_themelabel_size_mob` | range | 11 |  |
| Size (desktop) | `card_themelabel_size` | range | 14 |  |
| Color | `card_themelabel_color` | select | primary |  |
| Custom color | `card_themelabel_bg` | color_background | #f3f4f6 | Shown when Color = Custom. Supports solid or gradient colors. |
| Custom text color | `card_themelabel_text_color` | color | #111827 | Shown when Color = Custom. |
| Tag class | `card_themelabel_class` | text |  |  |
| Show inventory | `card_show_inventory` | checkbox | false |  |
| Show notice | `card_inventory_notice` | select | low |  |
| Show count | `card_inventory_count` | select | low |  |
| Low inventory threshold | `card_inventory_threshold` | range | 10 |  |

#### `_mega_featured` — Mega featured

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Background | `tone` | select | tint |  |
| Image | `image` | image_picker |  |  |
| Heading | `heading` | text |  |  |
| Text | `text` | textarea |  |  |
| Link label | `cta_label` | text |  |  |
| Link | `url` | url |  |  |
| Cards per row | `cards_per_row` | range | 1 | Child cards (Mega card) per row. 1 stacks them vertically. |
| Cards per row (mobile) | `cards_per_row_mobile` | select | 2 | Cards per row on screens under 768px. |
| Badge text | `badge_text` | text |  |  |
| Badge color | `badge_style` | select | danger | Custom applies the Custom color settings below. |
| Custom color | `badge_bg` | color_background | #f3f4f6 | Solid color or gradient with transparency. Shown when Style is Custom. |
| Custom text color | `badge_text_color` | color_background | #111827 |  |
| Bold text | `badge_bold` | checkbox | false |  |
| Size (mobile) | `badge_size_mob` | select | text-xs |  |
| Size (desktop) | `badge_size` | select | text-xs |  |
| Badge class | `badge_pad` | text | py-px px-1.5 | Tailwind padding classes. Spacing scale: 0-10, plus 15 and 20. Example: px-2 py-1. |
| Shape | `badge_shape` | select | rounded-md |  |
| Border width | `badge_border_width` | range | 0 |  |
| Border color | `badge_border_color` | color_background | #d1d5db | Solid color or gradient, e.g. linear-gradient(to right, #066fd1, #2fb344). |
| Border offset | `badge_border_offset` | range | 0 | Moves the border ring outward, leaving a gap to the badge edge like a detached outline. |
| Shadow | `badge_shadow` | select | shadow-none |  |
| Shadow length | `badge_shadow_length` | range | 5 | When shadow is [Cubic]. |
| Shadow color | `badge_shadow_color` | color | #000000 | When shadow is [Cubic]. |

#### `_mega_products` — Mega group · products

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Heading | `heading` | text |  | Becomes the tab label in tab layouts and the column title in column layouts. Falls back to the collection title, then "Products". |
| Heading link | `heading_url` | url |  | Optional. Turns the heading into a link. |
| Collection | `collection` | collection |  | Auto-lists this collection's products. Optional - use it alone, use the hand-picked list alone, or both together. |
| Products (hand-picked) | `product_list` | product_list |  | Optional. Pick products one by one. When a collection is also set, these picks show first and the collection fills the rest. Duplicates are shown once. |
| Maximum products | `product_limit` | range | 3 | Caps the merged list (hand-picked + collection). |
| Cards per row | `columns` | range | 3 | Product cards per row inside the tab pane or column. Narrow columns fall back to as many as fit. |
| Cards per row (mobile) | `columns_mobile` | select | 2 | Cards per row on screens under 768px. |
| Badge text | `badge_text` | text |  |  |
| Badge color | `badge_style` | select | success | Custom applies the Custom color settings below. |
| Custom color | `badge_bg` | color_background | #f3f4f6 | Solid color or gradient with transparency. Shown when Style is Custom. |
| Custom text color | `badge_text_color` | color_background | #111827 |  |
| Bold text | `badge_bold` | checkbox | false |  |
| Size (mobile) | `badge_size_mob` | select | text-xs |  |
| Size (desktop) | `badge_size` | select | text-xs |  |
| Badge class | `badge_pad` | text | py-px px-1.5 | Tailwind padding classes. Spacing scale: 0-10, plus 15 and 20. Example: px-2 py-1. |
| Shape | `badge_shape` | select | rounded-md |  |
| Border width | `badge_border_width` | range | 0 |  |
| Border color | `badge_border_color` | color_background | #d1d5db | Solid color or gradient, e.g. linear-gradient(to right, #066fd1, #2fb344). |
| Border offset | `badge_border_offset` | range | 0 | Moves the border ring outward, leaving a gap to the badge edge like a detached outline. |
| Shadow | `badge_shadow` | select | shadow-none |  |
| Shadow length | `badge_shadow_length` | range | 5 | When shadow is [Cubic]. |
| Shadow color | `badge_shadow_color` | color | #000000 | When shadow is [Cubic]. |
| Background | `card_bg` | color_background |  |  |
| Border width | `card_border_width` | range | 0 |  |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Corner radius | `card_radius` | select | rounded-2xl |  |
| Shadow | `card_shadow` | select | none |  |
| Padding | `card_padding` | range | 0 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Hover effect | `card_hover` | select | up |  |
| Hover shadow | `card_hover_shadow` | select | sm |  |
| Hover background | `card_bg_hover` | color_background | #ffffff |  |
| Display mode | `card_image_mode` | select | swap | Carousel: hovering the card auto-advances every 2 seconds with a progress bar, looping until the pointer leaves. |
| Image ratio | `card_aspect_ratio` | select | 1.0 |  |
| Image shape | `card_image_shape` | select | rounded-none |  |
| Card content order | `card_body_order` | text | title/star/variant/price | Slash-separated tokens to show and order: vendor/title/star/variant/subtitle/price/buy. Delete a token to hide that element; reorder freely. Leave blank for the default (title/price/buy). |
| Content class | `card_content_class` | text | px-3 | Extra classes for the text content wrapper, e.g. px-4 to inset content when Card padding is 0. Leave blank for none. |
| Show empty stars when there are no reviews | `card_star_show_when_empty` | checkbox | true | When a product has no rating yet, show five empty stars instead of hiding the star row. Needs the star token in Card content order. |
| Buy button | `card_buy_button` | select | cart |  |
| Align buy button to card bottom | `card_buy_align_bottom` | checkbox | false | Stretches every card in the row so all buy buttons line up along the bottom edge. |
| Swatch size | `card_variant_swatch_size` | range | 50 |  |
| Swatch shape | `card_variant_swatch_shape` | select | rounded-circle |  |
| Show swatch border | `card_variant_swatch_border` | checkbox | true | Draws a border around each swatch using its own color, with a thin white ring separating the border from the color fill. Falls back to a neutral gray when a swatch has no color (image-only). |
| Variant pills limit | `card_variant_limit` | range | 5 |  |
| Variant pill shape | `card_variant_pill_shape` | select | rounded-full |  |
| Show color swatches only | `card_variant_swatch_only` | checkbox | true | Hides non-color option rows (e.g. size) so the variant area shows only the color swatches. Color options follow the theme's Swatch settings; products without a swatch option show no variants. |
| Text align | `card_text_align` | text_alignment | left |  |
| Title size (mobile) | `card_title_size_mob` | select | text-sm |  |
| Title size (desktop) | `card_title_size` | select | text-base |  |
| Title color (color) | `card_title_color_mode` | select | heading-text |  |
| Title color (custom) | `card_title_color` | color |  |  |
| Subtitle size (mobile) | `card_subtitle_size_mob` | select | text-sm |  |
| Subtitle size (desktop) | `card_subtitle_size` | select | text-base |  |
| Subtitle color (color) | `card_subtitle_color_mode` | select | heading-text |  |
| Subtitle color (custom) | `card_subtitle_color` | color |  |  |
| Price size (mobile) | `card_price_size_mob` | select | text-sm |  |
| Price size (desktop) | `card_price_size` | select | text-base |  |
| Price color (color) | `card_price_color_mode` | select | base-text |  |
| Price color (custom) | `card_price_color` | color |  |  |
| Variant size (mobile) | `card_variant_size_mob` | select | text-xs |  |
| Variant size (desktop) | `card_variant_size` | select | text-xs |  |
| Variant color (color) | `card_variant_color_mode` | select | base-text |  |
| Variant color (custom) | `card_variant_color` | color |  |  |
| Star color | `card_star_color` | select | warning |  |
| Custom color | `card_star_color_custom` | color |  |  |
| Button style | `card_buy_style` | select | solid |  |
| Color | `card_buy_color` | select | primary |  |
| Custom color | `card_buy_custom_bg` | color_background |  |  |
| Custom text color | `card_buy_text_color` | color | #ffffff |  |
| Full width (100%) | `card_buy_full_width` | checkbox | false |  |
| Button radius | `card_buy_radius` | select | rounded-md |  |
| Button size | `card_buy_size` | select | text-sm |  |
| Labels order | `card_labels` | text | new/reduction/hot/sold-out/pre-order/refurbished/tiered-pricing/bulk-order | All labels: new/reduction/hot/sold-out/pre-order/refurbished/tiered-pricing/bulk-order. Slash separated. Sort freely or delete any you don't want. |
| Position | `card_labels_position` | select | top-start | Where the label stack sits over the card image. |
| Style | `card_labels_schema` | select | solid |  |
| Shape | `card_labels_shape` | select | rounded-md | Same 32-shape vocabulary as the button blocks. |
| Size | `card_labels_size` | select | md |  |
| Hot method | `card_labels_hot_method` | select | tag | Collection: product in a collection whose handle contains 'hot'. Tag: product has the tag 'Hot sale'. Always: always show. |
| Reduction type | `card_reduction_type` | select | percent |  |
| New arrival method | `card_new_method` | select | tag | Collection: product in a collection whose handle contains 'new'. Tag: product has the tag 'New'. Date: created within the limit below. |
| New arrival date limit | `card_new_limit` | range | 7 | Label shows if the product was created within this many days |
| Position | `card_themelabel_position` | select | disabled |  |
| Style | `card_themelabel_style` | select | solid |  |
| Shape | `card_themelabel_shape` | select | rounded-full |  |
| Size (mobile) | `card_themelabel_size_mob` | range | 11 |  |
| Size (desktop) | `card_themelabel_size` | range | 14 |  |
| Color | `card_themelabel_color` | select | primary |  |
| Custom color | `card_themelabel_bg` | color_background | #f3f4f6 | Shown when Color = Custom. Supports solid or gradient colors. |
| Custom text color | `card_themelabel_text_color` | color | #111827 | Shown when Color = Custom. |
| Tag class | `card_themelabel_class` | text |  |  |
| Show inventory | `card_show_inventory` | checkbox | false |  |
| Show notice | `card_inventory_notice` | select | low |  |
| Show count | `card_inventory_count` | select | low |  |
| Low inventory threshold | `card_inventory_threshold` | range | 10 |  |

### `_mega_blog` — Mega blog articles

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Menu item name | `menu_title` | text |  |  |
| Blog | `blog` | blog |  | Auto-lists this blog's latest articles as cards. |
| Articles to show | `article_limit` | range | 3 |  |
| Cards per row | `cards_per_row` | range | 0 | Maximum article cards per row. 0 fits as many as the panel width allows. |
| Content width | `max_width` | select | default |  |
| Heading | `heading` | text |  |  |
| Heading link | `heading_url` | url |  | Optional. Turns the heading into a link. |
| Heading size (mobile) | `heading_size_mob` | select | text-base |  |
| Heading size (desktop) | `heading_size` | select | text-base |  |
| Heading color | `heading_color_mode` | select | heading-text | Custom applies the Custom color below. |
| Custom heading color | `heading_color` | color | #111827 | Shown when Heading color is Custom. |
| Alignment (mobile) | `heading_align_mob` | text_alignment | left |  |
| Alignment (desktop) | `heading_align` | text_alignment | left |  |
| Image ratio | `card_aspect_ratio` | select | 1.78 |  |
| Background | `card_bg` | color_background | #ffffff |  |
| Border width | `card_border_width` | range | 1 |  |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Corner radius | `card_radius` | select | rounded-2xl |  |
| Shadow | `card_shadow` | select | none |  |
| Padding | `card_padding` | range | 0 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Hover effect | `card_hover` | select | none |  |
| Hover shadow | `card_hover_shadow` | select | none |  |
| Hover background | `card_bg_hover` | color_background | #ffffff |  |
| Zoom image on hover | `card_media_zoom` | checkbox | false |  |
| Enable overlay style | `enable_overlay_style` | checkbox | false |  |
| Overlay ratio | `overlay_ratio` | range | 70 | When the actual width-to-height ratio of the image is less than or equal to this ratio. |
| Overlay background | `overlay_background` | color_background | linear-gradient(180deg, rgba(17,24,39,0) 35%, rgba(17,24,39,0.85) 100%) | Supports solid or gradient colors. |
| Vertical alignment | `overlay_vertical_align` | select | bottom |  |
| Show author | `card_show_author` | checkbox | true |  |
| Show excerpt | `card_show_excerpts` | checkbox | true |  |
| Show tags | `card_show_tags` | select | hide |  |
| Show date | `card_show_date` | checkbox | true |  |
| Show read more | `card_show_more` | checkbox | true |  |
| Text align | `card_text_align` | text_alignment | left |  |
| Title size (mobile) | `card_title_size_mob` | select | text-sm |  |
| Title size (desktop) | `card_title_size` | select | text-base |  |
| Title color (color) | `card_title_color_mode` | select | heading-text |  |
| Title color (custom) | `card_title_color` | color |  |  |
| Title max lines | `card_title_lines` | range | 0 | 0 = unlimited. Longer text is clamped with an ellipsis. |
| Author size (mobile) | `card_author_size_mob` | select | text-sm |  |
| Author size (desktop) | `card_author_size` | select | text-base |  |
| Excerpt size (mobile) | `card_excerpt_size_mob` | select | text-sm |  |
| Excerpt size (desktop) | `card_excerpt_size` | select | text-base |  |
| Excerpt max lines | `card_excerpt_lines` | range | 0 | 0 = unlimited. Longer text is clamped with an ellipsis. |
| Date size (mobile) | `card_date_size_mob` | select | text-sm |  |
| Date size (desktop) | `card_date_size` | select | text-base |  |
| Link style | `more_style` | select | text-blue-600 |  |
| Link size (mobile) | `more_size_mob` | select | text-sm |  |
| Link size (desktop) | `more_size` | select | text-base |  |

##### Option values

- **Content width** (`max_width`): Narrow (1080px) (`narrow`), Default (1320px) (`default`), Wide (1600px) (`wide`), Full width (`full`)
- **Heading size (mobile)** (`heading_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Heading size (desktop)** (`heading_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Heading color** (`heading_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Image ratio** (`card_aspect_ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Corner radius** (`card_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`card_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Hover effect** (`card_hover`): None (`none`), Lift up (`up`), Lift down (`down`), Scale up (`scale_up`), Scale down (`scale_down`)
- **Hover shadow** (`card_hover_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Vertical alignment** (`overlay_vertical_align`): Top (`top`), Middle (`middle`), Bottom (`bottom`)
- **Show tags** (`card_show_tags`): Hide (`hide`), Above title (`title`), In body (`body`), Over image (`over`)
- **Title size (mobile)** (`card_title_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Title size (desktop)** (`card_title_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Title color (color)** (`card_title_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Author size (mobile)** (`card_author_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Author size (desktop)** (`card_author_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Excerpt size (mobile)** (`card_excerpt_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Excerpt size (desktop)** (`card_excerpt_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Date size (mobile)** (`card_date_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Date size (desktop)** (`card_date_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Link style** (`more_style`): Primary (`text-blue-600`), Dark (`text-gray-900`), Underline (`text-blue-600 underline`)
- **Link size (mobile)** (`more_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Link size (desktop)** (`more_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)

### `_searchbar` — Search bar

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable predictive search | `predictive_search` | checkbox | true | Show matching suggestions from the catalog as the customer types. |
| Width | `bar_width` | range | 55 |  |
| Form size | `form_size` | select | md | Height of the input and the submit button — they always stay joined into one control. |
| Button background | `button_bg` | color | #0d9488 |  |
| Custom class | `custom_class` | text |  |  |
| Title | `keywords_title` | text | Hot links |  |
| Keywords | `keywords` | textarea |  | One per line: keyword\|background color. Color is optional; leave it blank for the default. |
| Alignment | `keywords_alignment` | text_alignment | left |  |

##### Option values

- **Form size** (`form_size`): Small (`sm`), Medium (`md`), Large (`lg`)

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Sticky header | `enable_sticky` | checkbox | true |  |
| Transparent on banner | `transparent_on_banner` | checkbox | true |  |
| Always solid on templates | `solid_on_templates` | text | product, cart, search, 404 | Comma separated template names that have no banner below the header, so the header keeps a white background. Example: product, cart, search, 404 |
| Logo height (desktop) | `logo_height_desktop` | range | 48 |  |
| Logo height (mobile) | `logo_height_mobile` | range | 32 |  |
| Container padding classes | `padding_classes` | text | py-4 px-6 | Padding classes for the header container. Tailwind only (e.g. py-4 px-6). Spacing scale: 0-10, plus 15 and 20. |
| Zone order (desktop) | `layout_order` | text | logo,menu,icons | Comma-separated zone order. Values: logo, menu, icons |
| Center zone alignment (desktop) | `center_alignment` | text_alignment | left |  |
| Icon order (desktop) | `icons_order` | text | currency,language,contact,account,search,cart | Comma-separated icon order on desktop. Available: currency, language, contact, email, account, search, cart, facebook, twitter, instagram, linkedin, pinterest, tiktok, youtube, whatsapp, vimeo, twitch, threads, discord, mastodon, snapchat, spotify, wechat |
| Show desktop navigation | `enable_desktop_menu` | checkbox | true |  |
| Main menu | `main_menu` | link_list | main-menu |  |
| Customer account menu | `customer_account_menu` | link_list |  | Links shown inside the &lt;shopify-account&gt; sheet once the component can load them. Leave it empty (default) to use the component's built-in Orders and Profile links, which also keeps the browser console free of shopify-account menu errors. |
| Show cart count badge | `show_cart_count` | checkbox | true |  |
| Show country flags on currency | `show_currency_flags` | checkbox | false | When on, the currency dropdown renders a national flag (emoji) before each option and the current selection. |
| Show country name on currency | `show_country_name` | checkbox | false | When on, the currency dropdown shows the country name before the currency, e.g. United States $ USD. |
| Show country flags on language | `show_language_flags` | checkbox | false | When on, the language dropdown renders a national flag (emoji) before each option and the current selection. |
| Zone order (mobile) | `mobile_layout_order` | text | logo,icons,menu | Comma-separated zone order for mobile. Values: logo, icons, menu |
| Center zone alignment (mobile) | `mobile_center_alignment` | text_alignment | center | Alignment of the icons zone on mobile. Outputs: justify-start / justify-center / justify-end |
| Icon order (mobile) | `icons_order_mobile` | text | account,search,cart | Comma-separated icon order on mobile. Order here controls sequence between logo and menu button. Available: currency, language, contact, email, account, search, cart, facebook, twitter, instagram, linkedin, pinterest, tiktok, youtube, whatsapp, vimeo, twitch, threads, discord, mastodon, snapchat, spotify, wechat |
| Footer icons (Mobile overlay) | `mobile_footer_icons` | textarea | facebook,twitter,instagram | Comma-separated items shown in the overlay footer bar. A lone dash (-) between items — or pressing Enter for a new line — starts a new row. Leave empty to inherit from Icon order (mobile). Available: currency, language, contact, email, account, search, cart, facebook, twitter, instagram, linkedin, pinterest, tiktok, youtube, whatsapp, vimeo, twitch, threads, discord, mastodon, snapchat, spotify, wechat |
| Contact title (optional) | `contact_title` | text | HOW CAN WE HELP? |  |
| Contact email (leave empty to hide) | `contact_email` | text |  |  |

## Presets

- Header

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

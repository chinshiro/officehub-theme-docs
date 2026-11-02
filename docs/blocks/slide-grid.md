---
title: "Slide or grid"
sidebar_position: 21
---

# Slide or grid

## Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_slidegrid-blogs` — Slide - blogs
- `_slidegrid-products` — Slide - products
- `_slidegrid-collections` — Slide - collection
- `_slidegrid-image` — Slide - image/text
- `_slidegrid-testimonial` — Slide - testimonial

### `_slidegrid-blogs` — Slide - blogs

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Blog | `blog` | blog |  |  |
| Limit of articles | `limit` | range | 6 |  |

#### `_card-article` — Article card

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Article | `article` | article |  |  |
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
| Style | `tag_style` | select | solid |  |
| Shape | `tag_radius` | select | rounded-full |  |
| Size (mobile) | `tag_size_mob` | select | text-sm |  |
| Size (desktop) | `tag_size` | select | text-base |  |
| Color | `tag_color` | select | primary |  |
| Custom color | `tag_custom_bg` | color_background | #f3f4f6 | Shown when Color = Custom. Supports solid or gradient colors. |
| Custom text color | `tag_custom_text_color` | color | #111827 | Shown when Color = Custom. |
| Tag class | `tag_class` | text |  |  |
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
| Link color | `more_color` | select | primary |  |
| Custom color | `more_custom_color` | color | #111827 | Shown when Link color = Custom. |
| Link size (mobile) | `more_size_mob` | select | text-sm |  |
| Link size (desktop) | `more_size` | select | text-base |  |

### `_slidegrid-products` — Slide - products

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Columns (desktop) | `card_per_row` | range | 4 | Keep the same as the parent slide grid's Columns. |
| Columns (mobile) | `card_per_row_mob` | range | 2 | Keep the same as the parent slide grid's Columns. |
| Collection | `collection` | collection |  |  |
| Or, product list | `product_list` | product_list |  |  |
| Limit of product | `limit` | range | 8 |  |

#### `_card-product` — Product card

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Product | `product` | product |  |  |
| Background | `card_bg` | color_background | #ffffff |  |
| Border width | `card_border_width` | range | 1 |  |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Corner radius | `card_radius` | select | rounded-2xl |  |
| Shadow | `card_shadow` | select | none |  |
| Padding | `card_padding` | range | 4 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Hover effect | `card_hover` | select | up |  |
| Hover shadow | `card_hover_shadow` | select | sm |  |
| Hover background | `card_bg_hover` | color_background | #ffffff |  |
| Display mode | `card_image_mode` | select | swap | Carousel: hovering the card auto-advances every 2 seconds with a progress bar, looping until the pointer leaves. |
| Image ratio | `card_aspect_ratio` | select | 1.0 |  |
| Image shape | `card_image_shape` | select | rounded-none |  |
| Card content order | `card_body_order` | text |  | Slash-separated tokens to show and order: vendor/title/star/variant/subtitle/price/buy. Delete a token to hide that element; reorder freely. Leave blank for the default (title/price/buy). |
| Content class | `card_content_class` | text |  | Extra classes for the text content wrapper, e.g. px-4 to inset content when Card padding is 0. Leave blank for none. |
| Show empty stars when there are no reviews | `card_star_show_when_empty` | checkbox | false | When a product has no rating yet, show five empty stars instead of hiding the star row. Needs the star token in Card content order. |
| Buy button | `card_buy_button` | select | cart |  |
| Align buy button to card bottom | `card_buy_align_bottom` | checkbox | false | Stretches every card in the row so all buy buttons line up along the bottom edge. |
| Swatch size | `card_variant_swatch_size` | range | 50 |  |
| Swatch shape | `card_variant_swatch_shape` | select | rounded-circle |  |
| Show swatch border | `card_variant_swatch_border` | checkbox | true | Draws a border around each swatch using its own color, with a thin white ring separating the border from the color fill. Falls back to a neutral gray when a swatch has no color (image-only). |
| Variant pills limit | `card_variant_limit` | range | 5 |  |
| Variant pill shape | `card_variant_pill_shape` | select | rounded-full |  |
| Show color swatches only | `card_variant_swatch_only` | checkbox | false | Hides non-color option rows (e.g. size) so the variant area shows only the color swatches. Color options follow the theme's Swatch settings; products without a swatch option show no variants. |
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
| Compare-at price color (color) | `card_price_compare_color_mode` | select | gray-400 |  |
| Compare-at price color (custom) | `card_price_compare_color` | color |  |  |
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

### `_slidegrid-collections` — Slide - collection

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Columns (desktop) | `card_per_row` | range | 4 | Keep the same as the parent slide grid's Columns. |
| Columns (mobile) | `card_per_row_mob` | range | 2 | Keep the same as the parent slide grid's Columns. |
| Collection list | `collection_list` | collection_list |  |  |
| Limit of collection | `limit` | range | 8 |  |

#### `_card-collection` — Collection card

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Collection | `collection` | collection |  |  |
| Image (override) | `image` | image_picker |  |  |
| Subheading | `subheading` | text |  |  |
| Button label | `button_label` | text |  |  |
| Variant | `card_button_variant` | select | outline |  |
| Color | `card_button_color` | select | secondary | First five options follow the theme colors set in Theme settings. |
| Custom color | `card_button_custom_bg` | color_background | #111827 |  |
| Custom text color | `card_button_text_color` | color | #ffffff |  |
| Size | `card_button_size` | select | px-4 py-2 text-base |  |
| Radius | `card_button_radius` | select | rounded-md |  |
| Shadow | `card_button_shadow` | select | none |  |
| Button width | `card_button_width` | select | auto |  |
| Image ratio | `card_aspect_ratio` | select | 1.0 |  |
| Crop image to ratio | `card_crop` | checkbox | true |  |
| Focal point | `card_crop_align` | select | center center | Used to keep the subject of your image in view, when cropped to a fixed shape |
| Show product count | `card_show_count` | checkbox | true |  |
| Title size (mobile) | `card_title_size_mob` | select | text-sm |  |
| Title size (desktop) | `card_title_size` | select | text-base |  |
| Title color | `card_title_color_mode` | select | heading-text |  |
| Title custom color | `card_title_color` | color | #111827 |  |
| Text alignment | `card_text_align` | text_alignment | center |  |
| Overlay style | `card_overlay` | select | below |  |
| Overlay background | `card_overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8) 100%) |  |
| Overlay vertical | `card_overlay_align` | select | center |  |

### `_slidegrid-image` — Slide - image/text

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Background | `card_bg` | color_background |  | Solid color or gradient. Leave empty for transparent. |
| Radius | `card_radius` | select | rounded-md |  |
| Shadow | `card_shadow` | select | none |  |
| Image position | `card_layout` | select | above |  |
| Overlay background | `overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 100%) |  |
| Text position | `text_position` | select | justify-start | When image position is Over image. |
| Content vertical alignment | `valignment` | select | justify-center |  |
| Text alignment (desktop) | `text_alignment` | text_alignment | center |  |
| Text alignment (mobile) | `text_alignment_mob` | text_alignment | center |  |
| Image | `image` | image_picker |  |  |
| Crop image to ratio | `image_crop` | checkbox | true |  |
| Image ratio | `image_ratio` | select | 1.0 |  |
| Focal point | `crop_align` | select | center center |  |
| Image width (beside text) | `image_container_width` | range | 50 |  |
| Subheading | `subtitle` | text |  | Rendered above the heading as a plain div. |
| Size (mobile) | `sub_size_mob` | select | text-base |  |
| Size (desktop) | `sub_size` | select | text-base |  |
| Color | `sub_color` | select | base-text |  |
| Custom color | `sub_color_custom` | color_background |  |  |
| Heading | `title` | text |  |  |
| Tag | `title_tag` | select | h3 |  |
| Size (mobile) | `title_size_mob` | select | text-2xl |  |
| Size (desktop) | `title_size` | select | text-2xl |  |
| Color | `title_color` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background |  |  |
| Enable rotating keyword | `enble_rotation` | checkbox | false |  |
| Keyword to replace | `replaced_keyword` | text |  | A word inside the heading that gets replaced by the rotating keywords. |
| Keywords | `rotation_keywords` | html | 130+\|#111827 200+\|#6b7280 500+\|#111827 | Rotating words (one per line, "word\|color"). In digit rolling mode the numbers become count-up steps (colors ignored). |
| Rotation interval (seconds) | `rotation_interval` | range | 3 |  |
| Digit rolling (number run effect) | `rotation_digits` | checkbox | false | Counts the number up from 0 to the heading value: fast at first, then easing to a stop. Colors are not changed. Keywords act as custom count-up steps (one number per line, colors ignored); leave Keywords empty to auto-generate the sequence. |
| Text | `text` | richtext |  |  |
| Size (mobile) | `text_size_mob` | select | text-base |  |
| Size (desktop) | `text_size` | select | text-base |  |
| Color | `text_color` | select | base-text |  |
| Custom color | `text_color_custom` | color_background |  |  |
| Label | `button_label` | text |  |  |
| Link | `button_url` | url |  |  |
| Open in new tab | `button_target` | checkbox | false |  |
| Variant | `button_variant` | select | solid |  |
| Color | `button_color` | select | primary |  |
| Custom color | `button_custom_bg` | color_background |  |  |
| Custom text color | `button_text_color` | color | #ffffff |  |
| Size | `button_size` | select | px-4 py-2 text-base |  |
| Width | `button_width` | select | auto |  |
| Radius | `button_radius` | select | rounded-full |  |
| Shadow | `button_shadow` | select | none |  |
| Icon | `button_icon` | select |  |  |
| Icon position | `button_icon_position` | select | end |  |
| Icon size | `button_icon_size` | range | 1 | Width and height of the icon, in rem (root em). 0 hides the icon. |

##### Option values

- **Radius** (`card_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`card_shadow`): None (`none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Image position** (`card_layout`): Above text (`above`), Below text (`below`), Over image (`overlay`), Left of text (`left`), Right of text (`right`), No image (`none`)
- **Text position** (`text_position`): Top (`justify-start`), Middle (`justify-center`), Bottom (`justify-end`)
- **Content vertical alignment** (`valignment`): Top (`justify-start`), Middle (`justify-center`), Bottom (`justify-end`)
- **Image ratio** (`image_ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Focal point** (`crop_align`): Top left (`top left`), Top center (`top center`), Top right (`top right`), Middle left (`center left`), Middle center (`center center`), Middle right (`center right`), Bottom left (`bottom left`), Bottom center (`bottom center`), Bottom right (`bottom right`)
- **Size (mobile)** (`sub_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`sub_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Color** (`sub_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Tag** (`title_tag`): h2 (`h2`), h3 (`h3`), h4 (`h4`), h5 (`h5`), h6 (`h6`), div (`div`)
- **Size (mobile)** (`title_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`title_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Color** (`title_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Size (mobile)** (`text_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`text_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Color** (`text_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Variant** (`button_variant`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`)
- **Color** (`button_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Size** (`button_size`): 3 Extra Small (`px-2 py-1 text-3xs`), 2 Extra Small (`px-2 py-1 text-2xs`), Extra Small (`px-2 py-1 text-xs`), Small (`px-3 py-1.5 text-sm`), Medium (`px-4 py-2 text-base`), Large (`px-5 py-2.5 text-lg`), Extra Large (`px-6 py-3 text-xl`), 2X Large (`px-8 py-4 text-2xl`), 3X Large (`px-10 py-5 text-3xl`), 4X Large (`px-15 py-6 text-4xl`), 5X Large (`px-15 py-7 text-5xl`), 6X Large (`px-20 py-8 text-6xl`), 7X Large (`px-20 py-10 text-7xl`), 8X Large (`px-20 py-10 text-8xl`), 9X Large (`px-20 py-10 text-9xl`)
- **Width** (`button_width`): Auto (`auto`), Full width (`full`)
- **Radius** (`button_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`button_shadow`): None (`none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Icon** (`button_icon`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Icon position** (`button_icon_position`): Before (`start`), After (`end`)

### `_slidegrid-testimonial` — Slide - testimonial

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Quote | `quote` | richtext | &lt;p&gt;Add a short quote from a happy customer.&lt;/p&gt; |  |
| Author | `author` | text | Jane Doe |  |
| Author subtitle | `role` | text | Verified buyer |  |
| Avatar | `avatar` | image_picker |  |  |
| Rating | `rating` | range | 5 | Set to 0 to hide the stars. |
| Content order | `card_layout` | select | author_bottom |  |
| Alignment | `card_alignment` | text_alignment | left |  |
| Quote size (mobile) | `quote_size_mob` | select | text-base |  |
| Quote size (desktop) | `quote_size` | select | text-base |  |
| Quote color | `quote_color` | select | base-text |  |
| Custom color | `quote_color_custom` | color_background |  |  |
| Author size (mobile) | `author_size_mob` | select | text-sm |  |
| Author size (desktop) | `author_size` | select | text-sm |  |
| Author color | `author_color` | select | base-text |  |
| Custom color | `author_color_custom` | color_background |  |  |
| Subtitle size (mobile) | `role_size_mob` | select | text-xs |  |
| Subtitle size (desktop) | `role_size` | select | text-xs |  |
| Subtitle color | `role_color` | select | base-text |  |
| Custom color | `role_color_custom` | color_background |  |  |
| Avatar size | `avatar_size` | range | 2.5 | Avatar width and height in rem (1 = 16px). |
| Avatar radius | `avatar_radius` | select | rounded-circle | Shape of the avatar image. |
| Rating size | `rating_size` | range | 1 | Star size in rem (1 = 16px). |
| Rating color (custom) | `rating_color` | color |  |  |
| Rating active color (custom) | `rating_active_color` | color |  |  |
| Card background | `card_bg` | color_background |  | Supports solid or gradient colors. |
| Border width | `card_border_width` | range | 1 |  |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Card radius | `card_radius` | select | rounded-md |  |
| Shadow | `card_shadow` | select | none |  |
| Padding | `card_padding` | range | 6 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Hover effect | `card_hover` | select | none |  |
| Hover shadow | `card_hover_shadow` | select | none |  |
| Hover background | `card_bg_hover` | color_background |  | Applied on hover. Leave empty for no change. |

##### Option values

- **Content order** (`card_layout`): Author on bottom (`author_bottom`), Author on top (`author_top`)
- **Quote size (mobile)** (`quote_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Quote size (desktop)** (`quote_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Quote color** (`quote_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Author size (mobile)** (`author_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Author size (desktop)** (`author_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Author color** (`author_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Subtitle size (mobile)** (`role_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Subtitle size (desktop)** (`role_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Subtitle color** (`role_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Avatar radius** (`avatar_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Card radius** (`card_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`card_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Hover effect** (`card_hover`): None (`none`), Lift up (`up`), Lift down (`down`), Scale up (`scale_up`), Scale down (`scale_down`)
- **Hover shadow** (`card_hover_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable full width | `full_width` | checkbox | false |  |
| Enable spacing | `enable_spacing` | checkbox | false |  |
| Block class | `class` | text |  | Tailwind utilities, e.g. mt-4 mb-6. |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Or, use image | `bg_schema` | select |  |  |
| Enable background fixed | `bg_attachment` | checkbox | false |  |
| Layout | `layout` | select | grid |  |
| Columns (desktop) | `card_per_row` | range | 4 |  |
| Columns (mobile) | `card_per_row_mob` | range | 2 |  |
| Enable masonry | `enable_masonry` | checkbox | false |  |
| Gap (desktop) | `grid_gap` | range | 4 |  |
| Gap (mobile) | `grid_gap_mob` | range | 2 |  |
| Show prev/next arrows | `show_prevnext` | checkbox | true |  |
| Arrow size | `prevnext_size` | range | 40 |  |
| Show pagination | `show_pagination` | checkbox | true |  |
| Pagination type | `pagination_type` | select | bullets |  |
| Pagination color | `pagination_color` | color | #000000 |  |
| Pagination inactive color | `pagination_color_inactive` | color | #dddddd |  |
| Progress bar height | `pagination_height` | range | 2 |  |
| Bullet size | `bullets_size` | range | 20 |  |
| Bullet radius | `bullets_radius` | select | rounded-full |  |
| Bullet spacing | `bullets_spacing` | range | 8 |  |
| Enable loop | `enable_loop` | checkbox | false |  |
| Autoplay delay (seconds, 0 = off) | `carousel_delay` | range | 0 |  |
| Show exceeding items | `show_exceed` | checkbox | true |  |

### Option values

- **Or, use image** (`bg_schema`): None (``), Bg image schema 1 (`bg_schema1`), Bg image schema 2 (`bg_schema2`), Bg image schema 3 (`bg_schema3`), Bg image schema 4 (`bg_schema4`), Bg image schema 5 (`bg_schema5`), Bg image schema 6 (`bg_schema6`)
- **Layout** (`layout`): Grid (`grid`), Slide (`slide`)
- **Pagination type** (`pagination_type`): Bullets (`bullets`), Progress bar (`progressbar`)
- **Bullet radius** (`bullets_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)

## Presets

- Slide or grid


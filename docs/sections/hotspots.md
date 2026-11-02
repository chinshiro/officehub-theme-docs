---
title: "Hotspots"
sidebar_position: 16
---

# Hotspots

## Supported blocks

These blocks can be added directly from the editor:

- [Badge](/blocks/badge) — `badge`
- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Button](/blocks/button) — `button`

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_hotspot` — Hotspot

### `_hotspot` — Hotspot

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Horizontal position (desktop) | `hotspot_x` | range | 50 |  |
| Vertical position (desktop) | `hotspot_y` | range | 50 |  |
| Horizontal position (mobile) | `hotspot_x_mob` | range | 50 |  |
| Vertical position (mobile) | `hotspot_y_mob` | range | 50 |  |
| Pulse / ripple animation | `pulse` | checkbox | true | A radar-ping ripple spreads from the dot to draw the eye. Turn off for a static marker. |
| Icon | `hotspot_icon` | select |  |  |
| Accessible label | `hotspot_label` | text | Show details |  |
| Dot size | `hotspot_size` | select | h-6 w-6 |  |
| Dot background | `hotspot_bg` | color | #000000 |  |
| Dot icon color | `hotspot_color` | color | #ffffff |  |
| Background | `card_bg` | color_background | #ffffff | Supports solid or gradient colors. |
| Border width | `card_border_width` | range | 0 | 0 disables the border. |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Card position (desktop) | `card_position` | select | bottom |  |
| Card position (mobile) | `card_position_mob` | select | bottom | Card placement on screens below 1024px. Applies until the desktop position takes over at lg. |
| Card width | `card_width` | select | w-56 |  |
| Card radius | `card_radius` | select | rounded-md |  |
| Card shadow | `card_shadow` | select | md |  |
| Padding | `card_padding` | range | 4 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Always show the card | `card_show` | checkbox | false |  |

##### Option values

- **Icon** (`hotspot_icon`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Dot size** (`hotspot_size`): Small (`h-5 w-5`), Medium (`h-6 w-6`), Large (`h-8 w-8`), Extra large (`h-10 w-10`)
- **Card position (desktop)** (`card_position`): Below (`bottom`), Above (`top`), Left (`left`), Right (`right`)
- **Card position (mobile)** (`card_position_mob`): Below (`bottom`), Above (`top`), Left (`left`), Right (`right`)
- **Card width** (`card_width`): Small (`w-48`), Medium (`w-56`), Large (`w-72`)
- **Card radius** (`card_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Card shadow** (`card_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)

#### Blocks inside Hotspot

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Button](/blocks/button) — `button`
- [Badge](/blocks/badge) — `badge`
- [Image](/blocks/image) — `image`
- [Video](/blocks/video) — `video`
- [Stars](/blocks/stars) — `stars`
- [Steps](/blocks/steps) — `steps`
- [Countdown timer](/blocks/countdown-timer) — `countdown-timer`
- [Discount code](/blocks/discount-code) — `discount-code`
- [Newsletter form](/blocks/newsletter-form) — `newsletter-form`

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

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Enable inner spacing | `enable_spacing` | checkbox | false |  |
| Block class | `class` | text |  |  |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Use theme background schema | `bg_schema` | checkbox | false |  |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Image (desktop) | `image` | image_picker |  |  |
| Image (mobile) | `image_mob` | image_picker |  |  |
| Image radius | `radius` | select | rounded-md |  |
| Style | `overlay_style` | select | none |  |
| Overlay background | `overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.1) 100%) | Applied to the whole overlay (Tint) or to the text box (Box). Supports solid or gradient colors. |
| Overlay radius | `overlay_radius` | select | rounded-md |  |
| Content position (desktop) | `text_position` | select | lg:items-end lg:justify-start |  |
| Content position (mobile) | `text_position_mob` | select | items-center justify-center |  |
| Text box width (desktop) | `text_width` | range | 420 | Width of the text box inside the overlay, in pixels. |
| Text box width (mobile) | `text_width_mob` | range | 280 | Width of the text box on screens below 1024px, in pixels. |

### Option values

- **Image radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Style** (`overlay_style`): Tint (`full`), Box (`box`), Text shadow (`shadow`), Text shadow and tint (`full shadow`), No overlay background (`none`)
- **Overlay radius** (`overlay_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Content position (desktop)** (`text_position`): Top left (`lg:items-start lg:justify-start`), Top center (`lg:items-start lg:justify-center`), Top right (`lg:items-start lg:justify-end`), Center left (`lg:items-center lg:justify-start`), Center (`lg:items-center lg:justify-center`), Center right (`lg:items-center lg:justify-end`), Bottom left (`lg:items-end lg:justify-start`), Bottom center (`lg:items-end lg:justify-center`), Bottom right (`lg:items-end lg:justify-end`)
- **Content position (mobile)** (`text_position_mob`): Top left (`items-start justify-start`), Top center (`items-start justify-center`), Top right (`items-start justify-end`), Center left (`items-center justify-start`), Center (`items-center justify-center`), Center right (`items-center justify-end`), Bottom left (`items-end justify-start`), Bottom center (`items-end justify-center`), Bottom right (`items-end justify-end`)

## Presets

- Hotspots

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

---
title: "Template: product"
sidebar_position: 11
---

# Template: product

## Sections used

- `main-product` → `main-product` — main section, full settings in [Main section](#main-section)
- `scroll_spy_tabs_CiTKqQ` → [`scroll-spy-tabs`](/sections/scroll-spy-tabs)
- `rich_text_87hi7C` → [`rich-text`](/sections/rich-text)
- `image_stack_qPmcnK` → [`image-stack`](/sections/image-stack)
- `image_with_text_34Rj9P` → [`image-with-text`](/sections/image-with-text)
- `rich_text_wgzeUW` → [`rich-text`](/sections/rich-text)
- `image_with_text_W33tFL` → [`image-with-text`](/sections/image-with-text)
- `multicolumn_3P9p4t` → [`multicolumn`](/sections/multicolumn)
- `rich_text_DbCkDc` → [`rich-text`](/sections/rich-text)
- `testimonials_zhffEF` → [`testimonials`](/sections/testimonials)

## Main section

This template is driven by **Product page** (`main-product`). Everything below is configured in the editor for that section only.

### Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_sidebar` — Sidebar
- `_page-banner` — Page banner
- `_product-gallery` — Product gallery
- `_product-info` — Product info

#### `_sidebar` — Sidebar

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Section class | `class` | text |  | Tailwind utilities for this section. Space separated, e.g. mt-2 mb-4 px-6. |
| Hidden on mobile | `hidden_mobile` | checkbox | false | Hide the whole sidebar below the lg breakpoint. |
| Position | `position` | select | right | Desktop position of the sidebar column. Only applies above the md breakpoint. |
| Border | `border` | select | none | Outer edge line draws on the sidebar's outer side (away from the main content). Content-side line draws on the side facing the main content. All sides wraps the whole card. |
| Border color | `border_color` | color | #e5e7eb | Color for the sidebar card border and the outer / between divider line. |
| Divider between blocks | `divider` | checkbox | true | Draw a line between each content block inside the sidebar. |
| Divider color | `divider_color` | color |  | Color for the dividers between blocks. Falls back to Border color when empty. |
| Spacing from content | `content_gap` | range | 12 | Gap between the main content and the sidebar (and its border line). |
| Width | `width` | range | 30 |  |
| Max width | `width_max` | range | 350 |  |
| Enable sticky | `sticky` | checkbox | true |  |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Shadow | `shadow` | select | shadow-none |  |
| Radius | `radius` | select | rounded-md |  |

###### Option values

- **Position** (`position`): Left (`left`), Right (`right`)
- **Border** (`border`): None (`none`), Outer edge line (`outer`), Content-side line (`between`), All sides (`all`)
- **Shadow** (`shadow`): None (`shadow-none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)

##### Blocks inside Sidebar

- [Contact form](/blocks/contact-form) — `contact-form`

##### `_sidebar-title` — Sidebar title

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Hidden on mobile | `hidden_mobile` | checkbox | false |  |
| Title | `title` | text |  | Leave empty to use the current blog or article title. |
| Title tag | `title_tag` | select | h3 |  |
| Enable custom style | `custom_style` | checkbox | false |  |
| Title size (mobile) | `title_size_mob` | select |  |  |
| Title size (desktop) | `title_size` | select |  |  |
| Color | `title_color_mode` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |

##### `_sidebar-text` — Sidebar text

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Hidden on mobile | `hidden_mobile` | checkbox | false |  |
| Text | `text` | richtext | &lt;p&gt;Share a short note about your store, a shipping policy or a curated reading list.&lt;/p&gt; |  |
| Text tag | `body_tag` | select | div |  |
| Enable custom style | `custom_style` | checkbox | false |  |
| Text size (mobile) | `body_size_mob` | select |  |  |
| Text size (desktop) | `body_size` | select |  |  |
| Text color | `body_color` | select |  |  |

##### `_sidebar-links` — Sidebar links

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Menu links | `linklist` | link_list |  |  |
| Limit | `limit` | range | 5 |  |
| Icon | `icon` | select |  |  |
| Text truncate | `text_truncate` | checkbox | false |  |
| Hidden on mobile | `hidden_mobile` | checkbox | false |  |

##### `_sidebar-tags` — Sidebar tags

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Blog | `blog` | blog |  | Leave empty to use the tags of the article or blog being viewed. |
| Icon | `icon` | select |  |  |
| Style | `tag_style` | select | solid |  |
| Shape | `tag_radius` | select | rounded-full |  |
| Size (mobile) | `tag_size_mob` | select | text-sm |  |
| Size (desktop) | `tag_size` | select | text-base |  |
| Color | `tag_color` | select | primary |  |
| Custom color | `tag_custom_bg` | color_background | #f3f4f6 | Shown when Color = Custom. Supports solid or gradient colors. |
| Custom text color | `tag_custom_text_color` | color | #111827 | Shown when Color = Custom. |
| Tag class | `tag_class` | text |  |  |
| Hidden on mobile | `hidden_mobile` | checkbox | false |  |

##### `_sidebar-article` — Sidebar article

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Blog | `blog` | blog |  |  |
| Limit | `limit` | range | 5 |  |
| Icon | `icon` | select |  |  |
| Show article image | `show_thumb` | checkbox | true |  |
| Show date | `show_date` | checkbox | false |  |
| Text truncate | `text_truncate` | checkbox | false |  |
| Hidden on mobile | `hidden_mobile` | checkbox | false |  |

##### `_sidebar-collection` — Sidebar collection

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Collections list | `collections` | collection_list |  |  |
| Icon | `icon` | select |  |  |
| Show collection image | `show_thumb` | checkbox | true |  |
| Text truncate | `text_truncate` | checkbox | false |  |
| Hidden on mobile | `hidden_mobile` | checkbox | false |  |

##### `_sidebar-product` — Sidebar product

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| From collection | `collection` | collection |  |  |
| Or, products list | `products` | product_list |  |  |
| Limit | `limit` | range | 5 |  |
| Icon | `icon` | select |  |  |
| Show product image | `show_thumb` | checkbox | true |  |
| Show price | `show_price` | checkbox | true |  |
| Price color | `price_color` | select | base-text |  |
| Custom color | `price_color_custom` | color_background |  |  |
| Text truncate | `text_truncate` | checkbox | false |  |
| Hidden on mobile | `hidden_mobile` | checkbox | false |  |

#### `_page-banner` — Page banner

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Class | `class` | text |  |  |
| Layout | `layout` | select | text |  |
| Text width | `text_width` | range | 40 |  |
| Text horizontal | `text_horizontal` | text_alignment | left |  |
| Text vertical | `text_vertical` | select | end |  |
| Overlay class | `overlay_class` | text |  | When layout is overlay. Spacing like: mt-1, mb-2, px-4, py-6. |
| Style | `overlay_style` | select | none | When layout is overlay. |
| Background | `overlay_bg` | color_background |  | Set a gradient background with transparency. |
| Height (desktop) | `pageheader_height` | range | 30 |  |
| Height (mobile) | `pageheader_height_mob` | range | 50 |  |
| Show page title | `show_title` | checkbox | true |  |
| Page title | `title` | text |  |  |
| Tag | `title_tag` | select | h1 |  |
| Custom style | `title_custom_style` | checkbox | false |  |
| Size (mobile) | `title_size_mob` | select | text-sm |  |
| Size (desktop) | `title_size` | select | text-base |  |
| Color | `title_color_mode` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Alignment (desktop) | `title_alignment` | text_alignment | left |  |
| Alignment (mobile) | `title_alignment_mob` | text_alignment | left |  |
| Show SEO description | `show_description` | checkbox | true |  |
| Custom style | `description_custom_style` | checkbox | false |  |
| Size (mobile) | `description_size_mob` | select | text-sm |  |
| Size (desktop) | `description_size` | select | text-base |  |
| Color | `description_color_mode` | select | base-text |  |
| Custom color | `description_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Alignment (desktop) | `description_alignment` | text_alignment | left |  |
| Alignment (mobile) | `description_alignment_mob` | text_alignment | left |  |
| Image (desktop) | `banner_bgimg` | image_picker |  |  |
| Image (mobile) | `banner_bgimg_mob` | image_picker |  |  |
| Enable thumbnail style | `thumbnail` | checkbox | true |  |
| Radius | `radius` | select | rounded-md |  |

###### Option values

- **Layout** (`layout`): Overlay (`overlay`), Text above image (`above`), Text below image (`below`), Text left image (`left`), Text right image (`right`), Only text/No image (`text`)
- **Text vertical** (`text_vertical`): Top (`start`), Middle (`center`), Bottom (`end`)
- **Style** (`overlay_style`): Tint (`full`), Box (`box`), Text shadow (`shadow`), Text shadow and tint (`full shadow`), No overlay background (`none`)
- **Tag** (`title_tag`): h1 (`h1`), h2 (`h2`), h3 (`h3`), h4 (`h4`), div (`div`)
- **Size (mobile)** (`title_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`title_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Color** (`title_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Size (mobile)** (`description_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`description_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Color** (`description_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)

##### Blocks inside Page banner

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Countdown timer](/blocks/countdown-timer) — `countdown-timer`

#### `_product-gallery` — Product gallery

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Layout | `gallery_layout` | select | carousel-bottom |  |
| Media ratio | `aspect_ratio` | select |  |  |
| Slide effect | `gallery_effect` | select | slide |  |
| Autoplay delay | `carousel_delay` | range | 0 | 0 = disable autoplay. |
| Enable click to zoom | `enable_zoom` | checkbox | true |  |
| Zoom max ratio | `zoom_ratio` | range | 3 |  |
| Enable mousewheel control | `enable_mousewheel` | checkbox | false |  |
| Show prev/next button | `show_prevnext` | checkbox | true |  |
| Prev/next size | `prevnext_size` | range | 36 |  |
| Thumbnails per view (desktop) | `thumb_perview` | range | 4 | 0 = auto size |
| Thumbnails per view (mobile) | `thumb_perview_mob` | range | 4 | 0 = auto size |
| Show arrows on thumbnails | `show_prevnext_thumb` | checkbox | false |  |
| Arrow size | `thumb_arrow_size` | range | 28 |  |
| Enable controls | `controls` | checkbox | true |  |
| Enable autoplay | `autoplay` | checkbox | false |  |
| Enable muted | `muted` | checkbox | true |  |
| Enable loop | `loop` | checkbox | false |  |
| Show play button | `show_play` | checkbox | true |  |
| Background | `model_bg` | select | transparent |  |
| Automatic play | `model_autoplay` | checkbox | false | When the model contains animations. |
| Automatic rotation | `auto_rotation` | checkbox | false |  |
| Rotation speed | `rotation_speed` | range | 0 |  |
| Labels order | `card_labels` | text | new/reduction/hot/sold-out/pre-order/refurbished/tiered-pricing/bulk-order | All labels: new / reduction / hot / sold-out / pre-order / refurbished / tiered-pricing / bulk-order. Sort freely or delete any you don't want. |
| Position | `card_labels_position` | select | top-start | Where the label stack sits over the product image. |
| Style | `card_labels_schema` | select | solid |  |
| Shape | `card_labels_shape` | select | rounded-md | Same 32-shape vocabulary as the button blocks. |
| Size | `card_labels_size` | select | md |  |
| Hot method | `card_status_sale_type` | select | tag | Collection: shows when the product is in a collection whose handle contains 'hot'. Tag: add the tag 'Hot sale'. Always: always show. |
| Reduction type | `card_reduction_type` | select | percent |  |
| New arrival method | `card_new_method` | select | collection | Collection: product in a collection whose handle contains 'new'. Tag: add the tag 'New'. Date: created within the limit below. |
| New arrival date limit | `card_new_limit` | range | 7 | Label shows if the product was created within this many days |

###### Option values

- **Layout** (`gallery_layout`): Carousel - thumbnails top (`carousel-top`), Carousel - thumbnails bottom (`carousel-bottom`), Carousel - thumbnails left (`carousel-start`), Carousel - thumbnails right (`carousel-end`), One column (`columns-1`), Two column (`columns-2`)
- **Media ratio** (`aspect_ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Slide effect** (`gallery_effect`): Slide (`slide`), Fade (`fade`)
- **Background** (`model_bg`): Transparent (`transparent`), White (`white`), Black (`black`), Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`)
- **Position** (`card_labels_position`): Top, left to right (`top-start`), Top, right to left (`top-end`), Left, top to bottom (`side-start`), Right, top to bottom (`side-end`)
- **Style** (`card_labels_schema`): Solid (`solid`), Outline (`outline`), Soft (`soft`)
- **Shape** (`card_labels_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Size** (`card_labels_size`): Small (`sm`), Medium (`md`), Large (`lg`)
- **Hot method** (`card_status_sale_type`): Collection (`collection`), Tag (`tag`), Always (`always`)
- **Reduction type** (`card_reduction_type`): Percent (`percent`), Value (`value`)
- **New arrival method** (`card_new_method`): Collection (`collection`), Tag (`tag`), Date (`date`)

##### Blocks inside Product gallery

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`

##### `_product-description` — Description

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in collapsible tab | `show_in_tab` | checkbox | true |  |
| Collapsed | `tab_collapsed` | checkbox | true |  |
| Show tab border | `tab_border` | checkbox | true |  |
| Border radius | `tab_radius` | select | rounded-md |  |
| Border color | `border_color` | color | #e5e7eb |  |
| Custom style | `text_custom_style` | checkbox | false |  |
| Text size (mobile) | `text_size_mob` | select | text-base |  |
| Text size (desktop) | `text_size` | select | text-2xl |  |
| Color | `text_color_mode` | select | base-text |  |
| Custom color | `text_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Line height | `line_height` | select |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Description

- [Heading](/blocks/heading) — `heading`

#### `_product-info` — Product info

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Gap (mobile) | `gap_mob` | range | 4 | Spacing between stacked blocks. Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Gap (desktop) | `gap` | range | 4 | Spacing between stacked blocks. Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Block class | `class` | text |  |  |

##### Blocks inside Product info

- `@app`
- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Contact form](/blocks/contact-form) — `contact-form`
- [Discount code](/blocks/discount-code) — `discount-code`

##### `_product-title` — Title

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Tag | `heading_tag` | select | h1 | The html markup of the element. |
| Custom style | `heading_custom_style` | checkbox | false |  |
| Size (mobile) | `heading_size_mob` | select | text-sm |  |
| Size (desktop) | `heading_size` | select | text-base |  |
| Color | `heading_color_mode` | select | heading-text |  |
| Custom color | `heading_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Show seo title | `show_seotitle` | checkbox | true |  |
| Custom style | `seotitle_custom_style` | checkbox | false |  |
| Size (mobile) | `seotitle_size_mob` | select | text-sm |  |
| Size (desktop) | `seotitle_size` | select | text-base |  |
| Color | `seotitle_color_mode` | select | heading-text |  |
| Custom color | `seotitle_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Show seo description | `show_seodescription` | checkbox | false |  |
| Custom style | `seodescription_custom_style` | checkbox | false |  |
| Size (mobile) | `seodescription_size_mob` | select | text-sm |  |
| Size (desktop) | `seodescription_size` | select | text-base |  |
| Color | `seodescription_color_mode` | select | base-text |  |
| Custom color | `seodescription_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |

##### `_product-price` — Price

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show tax status and shipping policy link | `show_tax_and_shipping` | checkbox | false |  |
| Show inventory transfer notice | `inventory_transfers_enable` | checkbox | true |  |
| Show product compare at price | `show_compare_at_price` | checkbox | true |  |
| Size (mobile) | `price_size_mob` | select | 1.5rem |  |
| Size (desktop) | `price_size` | select | 1.5rem |  |
| Size (mobile) | `price_compare_size_mob` | select | 1rem |  |
| Size (desktop) | `price_compare_size` | select | 1rem |  |
| Size (mobile) | `price_unit_size_mob` | select | 0.875rem |  |
| Size (desktop) | `price_unit_size` | select | 0.875rem |  |
| Custom style | `custom_style` | checkbox | false |  |
| Price color | `price_color` | select | base-text |  |
| Custom color | `price_color_custom` | color_background |  |  |
| Compare-at price color | `price_compare_color` | select | base-text |  |
| Custom color | `price_compare_color_custom` | color_background |  |  |
| Unit price color | `price_unit_color` | select | base-text |  |
| Custom color | `price_unit_color_custom` | color_background |  |  |

##### `_product-reviews-stars` — Reviews stars

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show reviews count | `show_count` | checkbox | true |  |
| Star size | `size` | range | 100 |  |
| Star color schema (inactive) | `color` | select | gray-300 | Change the color variables at [color settings](/editor?context=theme&amp;category=Colors) |
| Custom color | `color_custom` | color_background | #d1d5db | Solid color or gradient. Shown when the inactive schema is set to Custom. |
| Star color schema (active) | `color_active` | select | warning | Change the color variables at [color settings](/editor?context=theme&amp;category=Colors) |
| Custom color | `color_active_custom` | color_background | #fbbf24 | Solid color or gradient. Shown when the active schema is set to Custom. |

##### `_product-barcode` — Barcode

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Enable uppercase | `enable_uppercase` | checkbox | false |  |
| Show label | `show_label` | checkbox | true |  |
| Color | `text_color_mode` | select | base-text |  |
| Custom color | `text_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Custom style | `text_custom_style` | checkbox | false |  |
| Text size (mobile) | `text_size_mob` | select | text-sm |  |
| Text size (desktop) | `text_size` | select | text-base |  |

##### `_product-sku` — Sku

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Enable uppercase | `enable_uppercase` | checkbox | false |  |
| Show label | `show_label` | checkbox | true |  |
| Color | `text_color_mode` | select | base-text |  |
| Custom color | `text_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Custom style | `text_custom_style` | checkbox | false |  |
| Text size (mobile) | `text_size_mob` | select | text-sm |  |
| Text size (desktop) | `text_size` | select | text-base |  |

##### `_product-vendor` — Vendor

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Enable uppercase | `enable_uppercase` | checkbox | false |  |
| Show label | `show_label` | checkbox | true |  |
| Link color | `link_color` | color |  | Leave empty to use the theme's default link color. |
| Show link underline | `show_underline` | checkbox | true |  |

##### `_product-variant` — Variant picker

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Select the first available variant | `select_first_variant` | checkbox | true |  |
| Show for a single variant | `show_single` | checkbox | false |  |
| Dynamic availability | `dynamic_availability` | select | show | When an option is selected, options below it will be updated to show their availability |
| Variant style | `selector_style` | select | button |  |
| Size | `swatch_size` | range | 120 |  |
| Width | `swatch_width` | select | auto |  |
| Shape | `swatch_radius` | select | rounded-circle |  |
| Background | `swatch_bg` | color_background | #ffffff |  |
| Border color | `swatch_border` | color | #D1D5DB |  |
| Text color | `swatch_text` | select | base-text |  |
| Custom color | `swatch_text_custom` | color_background |  |  |
| Background - selected | `swatch_bg_selected` | color_background | #ffffff |  |
| Border color - selected | `swatch_border_selected` | color | #D63939 |  |
| Text color - selected | `swatch_text_selected` | select | base-text |  |
| Custom color | `swatch_text_selected_custom` | color_background |  |  |
| Size | `button_size` | range | 120 |  |
| Width | `button_width` | select | auto |  |
| Shape | `button_radius` | select | rounded-md |  |
| Background | `button_bg` | color_background | #ffffff |  |
| Border color | `button_border` | color | #D1D5DB |  |
| Text color | `button_text` | select | base-text |  |
| Custom color | `button_text_custom` | color_background |  |  |
| Background - selected | `button_bg_selected` | color_background | #ffffff |  |
| Border color - selected | `button_border_selected` | color | #D63939 |  |
| Text color - selected | `button_text_selected` | select | base-text |  |
| Custom color | `button_text_selected_custom` | color_background |  |  |
| Show radio | `enable_option_radio` | checkbox | false | When variant style is buttons |
| Show swatches label text | `swatches_label` | checkbox | false |  |
| Update url when variant selected | `update_url` | checkbox | false |  |
| Enable size guide | `enable_size_chart` | checkbox | false |  |
| Link label | `size_chart_label` | text | Size guide |  |
| Variant option name | `size_chart_variant` | text | Size | This is usually 'Size' |
| Page containing size guide | `size_chart_page` | page |  |  |
| Style | `size_chart_style` | select | link |  |
| Color schema | `size_chart_color` | select | secondary |  |
| Custom color | `size_chart_color_custom` | color | #111827 |  |

##### `_product-buybuttons` — Buy buttons

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mt-4 |  |
| Show backorder notice | `show_backorder` | checkbox | true | Only shows for products which use Shopify inventory tracking and are available to purchase when out of stock. |
| Show local pickup availability | `show_pickup` | checkbox | false | Show customers where they can pick up the product. [Learn more](https://help.shopify.com/manual/fulfillment/setup/shipping-and-delivery/set-up-local-delivery#pick-up-in-store) |
| Show gift card recipient fields | `show_gift_recipient` | checkbox | true | Allow customers to send gift cards to a recipient along with a personal message. When enabled, the dynamic checkout button will be disabled for gift cards. [Learn more](https://help.shopify.com/manual/products/gift-card-products) |
| Show quantity selector | `show_quantity` | checkbox | true |  |
| Quantity style | `quantity_style` | select | stepper |  |
| Quantity width | `quantity_width` | select | medium |  |
| Style | `atc_variant` | select | solid |  |
| Color | `atc_color` | select | primary |  |
| Custom color | `atc_custom_bg` | color | #111827 | Used when Color is set to Custom. |
| Show cart icon | `atc_show_icon` | checkbox | true |  |
| Size | `atc_size` | select | px-4 py-2 text-base |  |
| Radius | `atc_radius` | select | 0.375rem |  |
| Show dynamic checkout button | `show_dynamic_checkout` | checkbox | true | Each customer will see their preferred payment method from those available on your store, such as PayPal or Apple Pay. [Learn more](https://help.shopify.com/manual/online-store/dynamic-checkout) |
| Position | `buy_position` | select | below |  |

##### `_product-collapsibletab` — Collapsible tab

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Open by default | `open` | checkbox | false |  |
| Title | `title` | text |  |  |
| Icon before | `icon` | select |  |  |
| Icon size | `icon_size` | range | 1.5 | Width and height of the icon, in rem (root em). 0 hides the icon. |
| Custom style | `title_custom_style` | checkbox | false |  |
| Title size (mobile) | `title_size_mob` | select | text-base |  |
| Title size (desktop) | `title_size` | select | text-base |  |
| Color | `title_color_mode` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Border style | `border_style` | select | border-b |  |
| Border color | `border_color` | color | #e5e7eb |  |
| Border radius | `border_radius` | select | rounded-md |  |
| Align content with title | `content_align_title` | checkbox | false |  |
| From richtext | `content` | richtext |  | If a table is needed, please follow the format of one row per line: Label::text. |
| Append liquid code | `custom_liquid` | liquid |  | You can directly input tables in HTML format. |
| Append page content | `page` | page |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### `_product-complementary` — Complementary products

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Product type | `type` | select | complementary |  |
| Custom products | `product_list` | product_list |  |  |
| Limit | `limit` | range | 5 |  |
| Crop image to ratio | `card_image_crop` | checkbox | true |  |
| Image ratio | `card_aspect_ratio` | select | 1.0 |  |
| Focal point | `card_crop_align` | select | center center |  |
| Custom style | `text_custom_style` | checkbox | false |  |
| Text size (mobile) | `text_size_mob` | select | text-sm |  |
| Text size (desktop) | `text_size` | select | text-base |  |
| Color | `text_color_mode` | select | base-text |  |
| Custom color | `text_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Show product compare at price | `show_compare_at_price` | checkbox | true |  |
| Size (mobile) | `price_size_mob` | select | 1rem |  |
| Size (desktop) | `price_size` | select | 1rem |  |
| Size (mobile) | `price_compare_size_mob` | select | 0.875rem |  |
| Size (desktop) | `price_compare_size` | select | 0.875rem |  |
| Custom price color | `custom_style` | checkbox | false |  |
| Price color | `price_color` | select | base-text |  |
| Custom color | `price_color_custom` | color_background |  |  |
| Compare-at price color | `price_compare_color` | select | base-text |  |
| Custom color | `price_compare_color_custom` | color_background |  |  |
| Variant | `button_variant` | select | solid |  |
| Color | `button_color` | select | primary | First five options follow the theme colors set in Theme settings. |
| Custom color | `button_custom_bg` | color_background | #111827 |  |
| Custom text color | `button_text_color` | color | #ffffff |  |
| Size | `button_size` | select | px-4 py-2 text-base |  |
| Width | `button_width` | select | auto |  |
| Radius | `button_radius` | select | rounded-md |  |
| Shadow | `button_shadow` | select | none |  |
| Alignment (desktop) | `button_alignment` | text_alignment | left |  |
| Delimiter border height | `delimiter_height` | range | 2 |  |
| Delimiter border color | `delimiter_color` | color | #e5e7eb |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |
| Block class | `class` | text |  |  |

##### `_product-custom-liquid` — Custom-liquid

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Liquid code | `custom_liquid` | liquid |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Custom-liquid

- [Heading](/blocks/heading) — `heading`

##### `_product-custom-option` — Custom-option

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Custom-option

- [Heading](/blocks/heading) — `heading`

###### `_form-text` — Form text

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Applies to | `where` | select | contact |  |
| Label | `title` | text | Label |  |
| Placeholder | `placeholder` | text |  | Shown while the field is empty. Ignored by the Floating label layout, which uses the label instead. |
| Default value | `value` | text |  |  |
| Required | `required` | checkbox | false |  |
| Layout | `layout` | select | block |  |
| Size | `size` | select |  |  |
| Label width | `label_width` | range | 25 | Desktop width of the label in the Label left layout. The control fills the rest. |
| Label color | `label_color` | select | text-gray-700 |  |
| Label background | `label_bg` | color_background | #f9fafb | Used by the Input group layout. Accepts a solid color or a gradient. |
| Enable bold | `label_bold` | checkbox | false |  |

###### `_form-file` — Form file

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Applies to | `where` | select | contact |  |
| Label | `title` | text | Label |  |
| Required | `required` | checkbox | false |  |
| Layout | `layout` | select | block |  |
| Size | `size` | select |  |  |
| Label width | `label_width` | range | 25 | Desktop width of the label in the Label left layout. The control fills the rest. |
| Label color | `label_color` | select | text-gray-700 |  |
| Label background | `label_bg` | color_background | #f9fafb | Used by the Input group layout. Accepts a solid color or a gradient. |
| Enable bold | `label_bold` | checkbox | false |  |

###### `_form-select` — Form select

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Applies to | `where` | select | contact |  |
| Label | `title` | text | Label |  |
| Default value | `value` | text |  |  |
| Options | `options` | textarea | Option 1 Option 2 Option 3 | One option per line. |
| Required | `required` | checkbox | false |  |
| Layout | `layout` | select | block |  |
| Size | `size` | select |  |  |
| Label width | `label_width` | range | 25 | Desktop width of the label in the Label left layout. The control fills the rest. |
| Label color | `label_color` | select | text-gray-700 |  |
| Label background | `label_bg` | color_background | #f9fafb | Used by the Input group layout. Accepts a solid color or a gradient. |
| Enable bold | `label_bold` | checkbox | false |  |

###### `_form-radio` — Form radio

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Applies to | `where` | select | contact |  |
| Label | `title` | text | Label |  |
| Default value | `value` | text |  |  |
| Options | `options` | textarea | Option 1 Option 2 Option 3 | One option per line. |
| Make all options inline | `inline` | checkbox | false |  |
| Required | `required` | checkbox | false |  |
| Layout | `layout` | select | block |  |
| Size | `size` | select |  |  |
| Label width | `label_width` | range | 25 | Desktop width of the label in the Label left layout. The control fills the rest. |
| Label color | `label_color` | select | text-gray-700 |  |
| Label background | `label_bg` | color_background | #f9fafb | Used by the Input group layout. Accepts a solid color or a gradient. |
| Enable bold | `label_bold` | checkbox | false |  |

###### `_form-checkbox` — Form checkbox

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Applies to | `where` | select | contact |  |
| Label | `title` | text | Label |  |
| Default value | `value` | text |  |  |
| Options | `options` | textarea | Option 1 Option 2 Option 3 | One option per line. |
| Make all options inline | `inline` | checkbox | false |  |
| Required | `required` | checkbox | false |  |
| Layout | `layout` | select | block |  |
| Size | `size` | select |  |  |
| Label width | `label_width` | range | 25 | Desktop width of the label in the Label left layout. The control fills the rest. |
| Label color | `label_color` | select | text-gray-700 |  |
| Label background | `label_bg` | color_background | #f9fafb | Used by the Input group layout. Accepts a solid color or a gradient. |
| Enable bold | `label_bold` | checkbox | false |  |

###### `_form-textarea` — Form textarea

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Applies to | `where` | select | contact |  |
| Label | `title` | text | Label |  |
| Placeholder | `placeholder` | text |  | Shown while the field is empty. Ignored by the Floating label layout, which uses the label instead. |
| Default value | `value` | text |  |  |
| Default rows | `rows` | range | 3 |  |
| Autosize | `autosize` | checkbox | false |  |
| Required | `required` | checkbox | false |  |
| Layout | `layout` | select | block |  |
| Size | `size` | select |  |  |
| Label width | `label_width` | range | 25 | Desktop width of the label in the Label left layout. The control fills the rest. |
| Label color | `label_color` | select | text-gray-700 |  |
| Label background | `label_bg` | color_background | #f9fafb | Used by the Input group layout. Accepts a solid color or a gradient. |
| Enable bold | `label_bold` | checkbox | false |  |

##### `_product-countdown` — Countdown

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Countdown

- [Heading](/blocks/heading) — `heading`
- [Countdown timer](/blocks/countdown-timer) — `countdown-timer`

##### `_product-divider` — Divider

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Divider title | `title` | text | Divider |  |
| Custom style | `title_custom_style` | checkbox | false |  |
| Color | `title_color_mode` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Border color | `border_color` | color | #6b7280 |  |
| Border height | `border_height` | range | 1 |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### `_product-dynamic` — Dynamic source

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Text content class | `text_class` | text | ps-2 |  |
| Text content from here choose -&gt; | `text` | richtext |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Dynamic source

- [Heading](/blocks/heading) — `heading`

##### `_product-feature-rating` — Feature-rating

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Segments | `segments` | range | 5 |  |
| Active segment | `active_segment` | range | 4 |  |
| Show number | `show_number` | checkbox | true |  |
| Active color | `segment_color` | color | #111827 |  |
| Segments size | `segments_size` | range | 200 |  |
| Show labels | `show_labels` | checkbox | true | Labels will be read by screen readers when hidden. |
| Left label | `label_left` | text | Small |  |
| Middle label | `label_middle` | text | True to size | Optional |
| Right label | `label_right` | text | Large |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Feature-rating

- [Heading](/blocks/heading) — `heading`

##### `_product-featured-image` — Featured image

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Featured image

- [Heading](/blocks/heading) — `heading`
- [Image](/blocks/image) — `image`

##### `_product-inventory-level` — Inventory level

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Blink the warning icon when low | `lowstock_blink` | checkbox | true |  |
| Show inventory notice | `show_inventory_notice` | select | low |  |
| Show count in inventory notice | `show_inventory_count` | select | low |  |
| Low inventory threshold | `inventory_threshold` | range | 10 |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### `_product-featured-links` — Featured links

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Link | `url` | url |  |  |
| Link text | `text` | text | Link text |  |
| Menu | `menu` | link_list |  |  |
| Open link in | `target` | select | _self |  |
| Style | `style` | select | link |  |
| Link color | `color` | select | text-blue-600 hover:text-blue-800 | Applies to the Link style only. |
| Size | `size` | select |  | Applies to the Button and Outline styles. |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Featured links

- [Heading](/blocks/heading) — `heading`

##### `_product-payment-icons` — Payment icons

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Payment icons

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Payment icons](/blocks/payment-icons) — `payment-icons`

##### `_product-pop-up` — Pop-up (modal)

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Pop up link text | `text` | text | Pop-up |  |
| Style | `style` | select | solid |  |
| Color | `color` | select | bg-gray-900 text-white hover:bg-gray-700 | Applies to the Button, Outline and Link styles. |
| Size | `size` | select | px-4 py-2 text-base | Applies to the Button and Outline styles. |
| Content from page | `page` | page |  |  |
| Modal size | `modal_size` | select | max-w-2xl | Reserved for the modal panel. Not used while the block renders as a plain link. |
| Modal status color | `modal_status` | select | bg-red-600 | Reserved for the modal panel. Not used while the block renders as a plain link. |
| Center the modal | `modal_centered` | checkbox | false |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Pop-up (modal)

- [Heading](/blocks/heading) — `heading`

##### `_product-richtext` — Richtext

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Rich text | `richtext` | richtext | &lt;p&gt;Rich text block&lt;/p&gt; |  |
| Icon | `icon` | select |  |  |
| Icon size | `icon_size` | range | 200 |  |
| Icon color | `icon_color` | color | #374151 |  |
| Vertical alignment | `icon_position` | select | align-items-center |  |
| Background color | `background` | color | #ffffff |  |
| Radius | `radius` | select | rounded-md |  |
| Custom style | `custom_style` | checkbox | false |  |
| Color | `color_mode` | select | base-text |  |
| Custom color | `color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Richtext

- [Heading](/blocks/heading) — `heading`

##### `_product-sharing` — Sharing

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Alignment | `alignment` | select | start |  |
| Heading | `title` | text |  |  |
| Custom style | `title_custom_style` | checkbox | false |  |
| Size (mobile) | `title_size_mob` | select | text-sm |  |
| Size (desktop) | `title_size` | select | text-base |  |
| Color | `title_color_mode` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Heading line break | `linebreak` | checkbox | true |  |
| Show X (formerly Twitter) | `show_twitter` | checkbox | true |  |
| Show Facebook | `show_facebook` | checkbox | true |  |
| Show Pinterest | `show_pinterest` | checkbox | true |  |
| Icon size | `icon_size` | range | 120 |  |
| Link style | `icon_style` | select | btn btn-ghost |  |
| Icon color | `icon_color` | color | #374151 |  |
| Link radius | `icon_radius` | select | rounded-circle | When link style is button |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### `_product-short-description` — Short description

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Text content class | `text_class` | text | ps-2 |  |
| Icon size | `icon_size` | range | 120 |  |
| Custom style | `text_custom_style` | checkbox | false |  |
| Text size (mobile) | `text_size_mob` | select | text-sm |  |
| Text size (desktop) | `text_size` | select | text-base |  |
| Color | `text_color_mode` | select | base-text |  |
| Custom color | `text_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Short description

- [Heading](/blocks/heading) — `heading`

##### `_product-card` — Card box

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Background | `card_bg` | color_background | #ffffff |  |
| Border width | `card_border_width` | range | 1 |  |
| Border color | `card_border_color` | color | #e5e7eb |  |
| Corner radius | `card_radius` | select | rounded-2xl |  |
| Shadow | `card_shadow` | select | sm |  |
| Padding | `card_padding` | range | 5 | Tailwind spacing scale 0-10 (1 = 4px, 10 = 40px). Uniform padding on all sides. |
| Hover effect | `card_hover` | select | up |  |
| Hover shadow | `card_hover_shadow` | select | none |  |
| Hover background | `card_bg_hover` | color_background | #ffffff |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

###### Blocks inside Card box

- `@app`
- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Contact form](/blocks/contact-form) — `contact-form`
- [Discount code](/blocks/discount-code) — `discount-code`
- [Columns](/blocks/columns) — `columns`

###### `_product-theme-label` — Theme label

###### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Style | `card_themelabel_style` | select | solid |  |
| Shape | `card_themelabel_shape` | select | rounded-full |  |
| Size (mobile) | `card_themelabel_size_mob` | range | 11 |  |
| Size (desktop) | `card_themelabel_size` | range | 14 |  |
| Color | `card_themelabel_color` | select | primary |  |
| Custom color | `card_themelabel_bg` | color_background | #f3f4f6 | Shown when Color = Custom. Supports solid or gradient colors. |
| Custom text color | `card_themelabel_text_color` | color | #111827 | Shown when Color = Custom. |
| Tag class | `card_themelabel_class` | text |  |  |

### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable full width | `full_width` | checkbox | false |  |
| Section class | `class` | text | py-12 md:py-20 | Tailwind utilities for this section. Space separated, e.g. mt-2 mb-4 px-6. Spacing scale: 0-10 plus 15 and 20 (1 = 0.25rem = 4px); responsive with md: / lg:, e.g. lg:px-20 lg:mt-10. |
| Enable sticky on scroll | `enable_sticky_columns` | checkbox | false |  |
| Position | `breadcrumbs` | select | below |  |
| Link color | `breadcrumbs_color` | select | secondary |  |
| Custom text color | `breadcrumbs_link_color` | color | #111827 | Only used when Link color is Custom. |
| Alignment | `breadcrumbs_align` | text_alignment | center |  |
| Gap (desktop) | `gap` | range | 3 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Gap (mobile) | `gap_mob` | range | 2 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Gallery width | `gallery_width` | range | 50 | Gallery settings go to block [Product gallery] below. |
| Enable sticky 'Add to cart' | `enable_sticky_buy` | checkbox | true |  |
| Sticky with full width | `sticky_fullwidth` | checkbox | false |  |
| Width | `sticky_width` | range | 50 |  |
| Position | `sticky_buy_position` | text_alignment | center |  |
| Show on mobile | `sticky_buy_mob` | checkbox | true |  |
| Button size | `sticky_buy_btn_size` | select | px-4 py-2 text-base |  |
| Show add to cart button | `sticky_show_addtocart` | checkbox | true |  |
| `Add to cart` button behavior | `sticky_buy_behavior` | select | add_to_cart |  |
| `Add to cart` button style | `sticky_buy_btn_style` | select | btn-outline |  |
| `Add to cart` button color | `sticky_buy_btn_color` | color | #111827 |  |
| `Add to cart` button radius | `sticky_buy_btn_radius` | select | rounded-2xl |  |
| Buy now button label | `sticky_buy_buynow` | text |  |  |
| Buy now button style | `sticky_buy_btnbuy_style` | select | btn |  |
| Buy now button color | `sticky_buy_btnbuy_color` | color | #dc2626 |  |
| Buy now button radius | `sticky_buy_btnbuy_radius` | select | rounded-md |  |

#### Option values

- **Position** (`breadcrumbs`): Above top banner (`above`), Above page title (`above-title`), Below banner text (`below-text`), Below top banner (`below`), Hide (`hide`)
- **Link color** (`breadcrumbs_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Button size** (`sticky_buy_btn_size`): 3 Extra Small (`px-2 py-1 text-3xs`), 2 Extra Small (`px-2 py-1 text-2xs`), Extra Small (`px-2 py-1 text-xs`), Small (`px-3 py-1.5 text-sm`), Medium (`px-4 py-2 text-base`), Large (`px-5 py-2.5 text-lg`), Extra Large (`px-6 py-3 text-xl`), 2X Large (`px-8 py-4 text-2xl`), 3X Large (`px-10 py-5 text-3xl`), 4X Large (`px-15 py-6 text-4xl`), 5X Large (`px-15 py-7 text-5xl`), 6X Large (`px-20 py-8 text-6xl`), 7X Large (`px-20 py-10 text-7xl`), 8X Large (`px-20 py-10 text-8xl`), 9X Large (`px-20 py-10 text-9xl`)
- **`Add to cart` button behavior** (`sticky_buy_behavior`): Add to cart (`add_to_cart`), Scroll (`scroll`)
- **`Add to cart` button style** (`sticky_buy_btn_style`): Button (`btn`), Outline (`btn-outline`)
- **`Add to cart` button radius** (`sticky_buy_btn_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded large (`rounded-2xl`), Pill (`rounded-full`)
- **Buy now button style** (`sticky_buy_btnbuy_style`): Button (`btn`), Outline (`btn-outline`)
- **Buy now button radius** (`sticky_buy_btnbuy_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded large (`rounded-2xl`), Pill (`rounded-full`)

### Variant templates

`product` is the primary template for this type. The variants below reuse the same main section, so they are documented here instead of having their own page:

- `product.b2b`
- `product.gift-card`
- `product.preorder`
- `product.product-sidebar`


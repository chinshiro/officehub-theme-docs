---
title: "Featured product"
sidebar_position: 10
---

# Featured product

## Supported blocks

These blocks can be added directly from the editor:

- `@app` — @app

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_product-gallery` — Product gallery
- `_product-info` — Product info

### `_product-gallery` — Product gallery

#### Settings

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

##### Option values

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

#### Blocks inside Product gallery

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`

#### `_product-description` — Description

##### Settings

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

##### Blocks inside Description

- [Heading](/blocks/heading) — `heading`

### `_product-info` — Product info

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Gap (mobile) | `gap_mob` | range | 4 | Spacing between stacked blocks. Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Gap (desktop) | `gap` | range | 4 | Spacing between stacked blocks. Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Block class | `class` | text |  |  |

#### Blocks inside Product info

- `@app`
- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Contact form](/blocks/contact-form) — `contact-form`
- [Discount code](/blocks/discount-code) — `discount-code`

#### `_product-title` — Title

##### Settings

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

#### `_product-price` — Price

##### Settings

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

#### `_product-reviews-stars` — Reviews stars

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show reviews count | `show_count` | checkbox | true |  |
| Star size | `size` | range | 100 |  |
| Star color schema (inactive) | `color` | select | gray-300 | Change the color variables at [color settings](/editor?context=theme&amp;category=Colors) |
| Custom color | `color_custom` | color_background | #d1d5db | Solid color or gradient. Shown when the inactive schema is set to Custom. |
| Star color schema (active) | `color_active` | select | warning | Change the color variables at [color settings](/editor?context=theme&amp;category=Colors) |
| Custom color | `color_active_custom` | color_background | #fbbf24 | Solid color or gradient. Shown when the active schema is set to Custom. |

#### `_product-barcode` — Barcode

##### Settings

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

#### `_product-sku` — Sku

##### Settings

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

#### `_product-vendor` — Vendor

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Enable uppercase | `enable_uppercase` | checkbox | false |  |
| Show label | `show_label` | checkbox | true |  |
| Link color | `link_color` | color |  | Leave empty to use the theme's default link color. |
| Show link underline | `show_underline` | checkbox | true |  |

#### `_product-variant` — Variant picker

##### Settings

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

#### `_product-buybuttons` — Buy buttons

##### Settings

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

#### `_product-collapsibletab` — Collapsible tab

##### Settings

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

#### `_product-complementary` — Complementary products

##### Settings

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

#### `_product-custom-liquid` — Custom-liquid

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Liquid code | `custom_liquid` | liquid |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### Blocks inside Custom-liquid

- [Heading](/blocks/heading) — `heading`

#### `_product-custom-option` — Custom-option

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### Blocks inside Custom-option

- [Heading](/blocks/heading) — `heading`

##### `_form-text` — Form text

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

##### `_form-file` — Form file

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

##### `_form-select` — Form select

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

##### `_form-radio` — Form radio

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

##### `_form-checkbox` — Form checkbox

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

##### `_form-textarea` — Form textarea

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

#### `_product-countdown` — Countdown

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### Blocks inside Countdown

- [Heading](/blocks/heading) — `heading`
- [Countdown timer](/blocks/countdown-timer) — `countdown-timer`

#### `_product-divider` — Divider

##### Settings

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

#### `_product-dynamic` — Dynamic source

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Text content class | `text_class` | text | ps-2 |  |
| Text content from here choose -&gt; | `text` | richtext |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### Blocks inside Dynamic source

- [Heading](/blocks/heading) — `heading`

#### `_product-feature-rating` — Feature-rating

##### Settings

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

##### Blocks inside Feature-rating

- [Heading](/blocks/heading) — `heading`

#### `_product-featured-image` — Featured image

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### Blocks inside Featured image

- [Heading](/blocks/heading) — `heading`
- [Image](/blocks/image) — `image`

#### `_product-inventory-level` — Inventory level

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-2 |  |
| Blink the warning icon when low | `lowstock_blink` | checkbox | true |  |
| Show inventory notice | `show_inventory_notice` | select | low |  |
| Show count in inventory notice | `show_inventory_count` | select | low |  |
| Low inventory threshold | `inventory_threshold` | range | 10 |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

#### `_product-featured-links` — Featured links

##### Settings

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

##### Blocks inside Featured links

- [Heading](/blocks/heading) — `heading`

#### `_product-payment-icons` — Payment icons

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Show in quick buy | `show_in_quickbuy` | checkbox | true |  |

##### Blocks inside Payment icons

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Payment icons](/blocks/payment-icons) — `payment-icons`

#### `_product-pop-up` — Pop-up (modal)

##### Settings

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

##### Blocks inside Pop-up (modal)

- [Heading](/blocks/heading) — `heading`

#### `_product-richtext` — Richtext

##### Settings

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

##### Blocks inside Richtext

- [Heading](/blocks/heading) — `heading`

#### `_product-sharing` — Sharing

##### Settings

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

#### `_product-short-description` — Short description

##### Settings

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

##### Blocks inside Short description

- [Heading](/blocks/heading) — `heading`

#### `_product-card` — Card box

##### Settings

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

##### Blocks inside Card box

- `@app`
- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Contact form](/blocks/contact-form) — `contact-form`
- [Discount code](/blocks/discount-code) — `discount-code`
- [Columns](/blocks/columns) — `columns`

##### `_product-theme-label` — Theme label

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

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Enable inner spacing | `enable_spacing` | checkbox | false |  |
| Block class | `class` | text | py-4 lg:py-6 |  |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Use theme background schema | `bg_schema` | checkbox | false |  |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Product | `product` | product |  |  |
| Gallery width (desktop) | `gallery_width` | select | lg:w-1/2 |  |
| Gap (desktop) | `gap` | range | 4 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Gap (mobile) | `gap_mob` | range | 2 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Sticky info on desktop | `enable_sticky_columns` | checkbox | false |  |

### Option values

- **Gallery width (desktop)** (`gallery_width`): 40% (`lg:w-2/5`), 50% (`lg:w-1/2`), 60% (`lg:w-3/5`)

## Presets

- Featured product

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

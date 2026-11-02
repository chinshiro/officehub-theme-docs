---
title: "Template: cart"
sidebar_position: 4
---

# Template: cart

## Sections used

- `main` → `main-cart` — main section, full settings in [Main section](#main-section)
- `featured_products_xRxYMm` → [`featured-products`](/sections/featured-products)

## Main section

This template is driven by **Cart page** (`main-cart`). Everything below is configured in the editor for that section only.

### Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_cart-checkout` — Cart checkout

#### `_cart-checkout` — Cart checkout

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Show order note | `show_order_note` | checkbox | true |  |
| Order note collapsed | `enable_note_collapsed` | checkbox | true | Default order note input box is collapsed. Click the label text to switch it. |
| Show tax status and shipping policy link | `show_tax_and_shipping` | checkbox | true |  |
| Show additional checkout options | `show_additional_checkout_buttons` | checkbox | true | Display other gateways and quick checkout buttons. |
| Terms and conditions link | `cart_terms_page` | url |  | Additional checkout buttons will be hidden when cart terms are shown |
| Terms checkbox checked | `cart_terms_check` | checkbox | false | Default checked when terms link is set. |
| Size (mobile) | `subtotal_size_mob` | select | text-2xl |  |
| Size (desktop) | `subtotal_size` | select | text-3xl |  |
| Price color | `price_color` | select | base-text |  |
| Custom color | `price_color_custom` | color_background |  |  |
| Field style | `field_style` | select | outlined | Outlined shows a white field with a border; Filled uses a gray background without a border. |
| Field radius | `field_radius` | select | rounded-md | Border radius of the order note field. |
| Order note rows | `note_rows` | range | 3 | Visible rows of the order note field. |
| Variant | `button_variant` | select | solid |  |
| Color | `button_color` | select | primary | First five options follow the theme colors set in Theme settings. |
| Custom color | `button_custom_bg` | color_background |  |  |
| Custom text color | `button_text_color` | color | #ffffff |  |
| Size | `button_size` | select | px-6 py-3 text-xl |  |
| Width | `button_width` | select | full |  |
| Radius | `button_radius` | select | rounded-md |  |
| Shadow | `button_shadow` | select | none |  |
| Icon | `button_icon` | select |  |  |
| Icon size | `button_icon_size` | range | 1 | Width and height of the icon, in rem (root em). 0 hides the icon. |
| Icon position | `button_icon_position` | select | start |  |
| Alignment (desktop) | `button_alignment` | text_alignment | center |  |
| Alignment (mobile) | `button_alignment_mob` | text_alignment | center |  |

###### Option values

- **Size (mobile)** (`subtotal_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`subtotal_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Price color** (`price_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Field style** (`field_style`): Outlined (`outlined`), Filled (`filled`)
- **Field radius** (`field_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Variant** (`button_variant`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`)
- **Color** (`button_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Size** (`button_size`): 3 Extra Small (`px-2 py-1 text-3xs`), 2 Extra Small (`px-2 py-1 text-2xs`), Extra Small (`px-2 py-1 text-xs`), Small (`px-3 py-1.5 text-sm`), Medium (`px-4 py-2 text-base`), Large (`px-5 py-2.5 text-lg`), Extra Large (`px-6 py-3 text-xl`), 2X Large (`px-8 py-4 text-2xl`), 3X Large (`px-10 py-5 text-3xl`), 4X Large (`px-15 py-6 text-4xl`), 5X Large (`px-15 py-7 text-5xl`), 6X Large (`px-20 py-8 text-6xl`), 7X Large (`px-20 py-10 text-7xl`), 8X Large (`px-20 py-10 text-8xl`), 9X Large (`px-20 py-10 text-9xl`)
- **Width** (`button_width`): Auto (`auto`), Full width (`full`)
- **Radius** (`button_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`button_shadow`): None (`none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Icon** (`button_icon`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Icon position** (`button_icon_position`): Before text (`start`), After text (`end`)

### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Enable full width | `full_width` | checkbox | false |  |
| Section class | `class` | text | md:py-5 py-3 | Tailwind utilities for this section. Space separated, e.g. mt-2 mb-4 px-6. Spacing scale: 0-10 plus 15 and 20 (1 = 0.25rem = 4px); responsive with md: / lg:, e.g. lg:px-20 lg:mt-10. |
| Show page header | `show_page_header` | checkbox | true |  |
| Title tag | `title_tag` | select | h1 | The html markup of the element. |
| Title size | `title_size` | select | text-4xl | Font size variable [settings](/editor?context=theme&amp;category=Typography). |
| Title color schema | `title_color` | select | secondary | Change the color variables at [color settings](/editor?context=theme&amp;category=Colors) |
| Custom color | `title_color_custom` | color | #111827 |  |
| Show continue shopping link | `show_continue_shopping` | checkbox | true |  |
| Continue shopping link | `continue_shopping_url` | url |  | If not entered, link will be the first collection (alphabetically) of the first product in the cart. |
| Show backorder text | `show_backorder_text` | checkbox | false | Only shows for products which use Shopify inventory tracking and are available to purchase when out of stock. |
| Show inventory notice | `show_inventory_notice` | select | low |  |
| Show count in inventory notice | `show_inventory_count` | select | low |  |
| Low inventory threshold | `inventory_threshold` | range | 10 |  |
| Inventory level style | `inventory_schema` | select |  |  |
| Quantity form style | `quantity_form_style` | select | form_schema1 | To set the schema, please go to [theme settings](/editor?context=theme&amp;category=Form style schema). |
| Quantity button style | `quantity_button_style` | select | btn btn-ghost |  |
| Quantity button color schema | `quantity_button_color` | select | secondary | Change the color variables at [color settings](/editor?context=theme&amp;category=Colors) |
| Custom color | `quantity_button_color_custom` | color | #111827 |  |
| Show method | `show_shipping_calculator` | select | show |  |
| Default country selection | `shipping_calculator_default_country` | text | United States |  |
| Show country flags on country selector | `show_country_flags` | checkbox | false | When on, the Estimate shipping country dropdown renders a national flag (emoji) before each option and the current selection. |
| Form style | `form_style` | select | form_schema1 | To set the schema, please go to [theme settings](/editor?context=theme&amp;category=Form style schema). |
| Dropdown style | `dropdown_schema` | select | dropdown_schema1 | Dropdown style schema go to [theme settings](/editor?context=theme&amp;category=Dropdown style schema). |
| Icon | `empty_icon` | select |  |  |
| Icon size | `empty_icon_size` | range | 50 |  |
| Heading | `empty_heading` | text | Your cart is empty |  |
| Heading tag | `empty_heading_tag` | select | h1 | The html markup of the element. |
| Heading size | `empty_heading_size` | select | text-4xl | Font size variable [settings](/editor?context=theme&amp;category=Typography). |
| Text | `empty_text` | richtext |  |  |
| Button text | `empty_button_text` | text | Start shopping |  |
| Button link | `empty_button_link` | url | /collections/all |  |
| Button style | `empty_button_style` | select | btn |  |
| Button color schema | `empty_button_color` | select | secondary | Change the color variables at [color settings](/editor?context=theme&amp;category=Colors) |
| Custom color | `empty_button_color_custom` | color | #111827 |  |
| Button size | `empty_button_size` | select | px-4 py-2 text-base |  |
| Show tax status and shipping policy link | `show_tax_and_shipping` | checkbox | true |  |
| Show order note | `show_order_note` | checkbox | true |  |
| Order note collapsed | `enable_note_collapsed` | checkbox | true | Default order note input box is collapsed. Click the label text to switch it. |
| Terms and conditions link | `cart_terms_page` | url |  |  |

#### Option values

- **Title tag** (`title_tag`): h1 (`h1`), h2 (`h2`), h3 (`h3`), h4 (`h4`), h5 (`h5`), h6 (`h6`), div (`div`)
- **Title size** (`title_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Title color schema** (`title_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Show inventory notice** (`show_inventory_notice`): Never (`never`), When inventory low (`low`), Always (`always`)
- **Show count in inventory notice** (`show_inventory_count`): Never (`never`), When inventory low (`low`), Always (`always`)
- **Inventory level style** (`inventory_schema`): Default (``), Level schema 1 (`inventorylevel_schema1`), Level schema 2 (`inventorylevel_schema2`)
- **Quantity form style** (`quantity_form_style`): Default (``), Form style schema 1 (`form_schema1`), Form style schema 2 (`form_schema2`), Form style schema 3 (`form_schema3`), Form style schema 4 (`form_schema4`), Form style schema 5 (`form_schema5`), Form style schema 6 (`form_schema6`)
- **Quantity button style** (`quantity_button_style`): Button (`btn btn`), Ghost (`btn btn-ghost`)
- **Quantity button color schema** (`quantity_button_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Show method** (`show_shipping_calculator`): Show with collapsed (`show`), Show without collapsed (`show-not`), Hide (`hide`)
- **Form style** (`form_style`): Default (``), Form style schema 1 (`form_schema1`), Form style schema 2 (`form_schema2`), Form style schema 3 (`form_schema3`), Form style schema 4 (`form_schema4`), Form style schema 5 (`form_schema5`), Form style schema 6 (`form_schema6`)
- **Dropdown style** (`dropdown_schema`): Default (``), Dropdown style schema 1 (`dropdown_schema1`), Dropdown style schema 2 (`dropdown_schema2`), Dropdown style schema 3 (`dropdown_schema3`), Dropdown style schema 4 (`dropdown_schema4`)
- **Icon** (`empty_icon`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Heading tag** (`empty_heading_tag`): h1 (`h1`), h2 (`h2`), h3 (`h3`), h4 (`h4`), h5 (`h5`), h6 (`h6`), div (`div`)
- **Heading size** (`empty_heading_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Button style** (`empty_button_style`): Buton (`btn`), Outline (`btn-outline`)
- **Button color schema** (`empty_button_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Button size** (`empty_button_size`): 3 Extra Small (`px-2 py-1 text-3xs`), 2 Extra Small (`px-2 py-1 text-2xs`), Extra Small (`px-2 py-1 text-xs`), Small (`px-3 py-1.5 text-sm`), Medium (`px-4 py-2 text-base`), Large (`px-5 py-2.5 text-lg`), Extra Large (`px-6 py-3 text-xl`), 2X Large (`px-8 py-4 text-2xl`), 3X Large (`px-10 py-5 text-3xl`), 4X Large (`px-15 py-6 text-4xl`), 5X Large (`px-15 py-7 text-5xl`), 6X Large (`px-20 py-8 text-6xl`), 7X Large (`px-20 py-10 text-7xl`), 8X Large (`px-20 py-10 text-8xl`), 9X Large (`px-20 py-10 text-9xl`)


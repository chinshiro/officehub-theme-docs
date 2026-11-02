---
title: "Template: collection"
sidebar_position: 5
---

# Template: collection

## Sections used

- `main-collection` → `main-collection` — main section, full settings in [Main section](#main-section)

## Main section

This template is driven by **Collection pages** (`main-collection`). Everything below is configured in the editor for that section only.

### Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_sidebar` — Sidebar
- `_page-banner` — Page banner
- `_related-collections` — Related collections
- `_filters` — Filters
- `_card-product` — Product card

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

#### `_related-collections` — Related collections

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Collections | `related_collections` | collection_list |  |  |
| Variant | `button_variant` | select | solid |  |
| Color | `button_color` | select | secondary | First five options follow the theme colors set in Theme settings. |
| Custom color | `button_custom_bg` | color_background | #111827 |  |
| Custom text color | `button_text_color` | color | #ffffff |  |
| Size | `button_size` | select | px-4 py-2 text-base |  |
| Width | `button_width` | select | auto |  |
| Radius | `button_radius` | select | rounded-md |  |
| Shadow | `button_shadow` | select | none |  |
| Icon | `button_icon` | select |  |  |
| Icon size | `button_icon_size` | range | 1 | Width and height of the icon, in rem (root em). 0 hides the icon. |
| Icon position | `button_icon_position` | select | start |  |
| Alignment (desktop) | `button_alignment` | text_alignment | left |  |
| Alignment (mobile) | `button_alignment_mob` | text_alignment | left |  |
| Class | `gallery_class` | text | py-6 |  |
| Background | `gallery_bg` | color_background |  |  |
| Full width | `gallery_full_width` | checkbox | false |  |
| Title | `title` | text |  |  |
| Title tag | `title_tag` | select | h2 |  |
| Custom style | `title_custom_style` | checkbox | false |  |
| Size (mobile) | `title_size_mob` | select | text-2xl |  |
| Size (desktop) | `title_size` | select | text-3xl |  |
| Color | `title_color_mode` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background | linear-gradient(to right, #111827, #6b7280) | Solid color or gradient. Shown when Color is set to Custom. |
| Alignment (desktop) | `title_alignment` | text_alignment | left |  |
| Alignment (mobile) | `title_alignment_mob` | text_alignment | left |  |
| Items per row (desktop) | `per_row` | range | 3 |  |
| Items per row (mobile) | `per_row_mob` | select | 2 |  |
| Gap (desktop) | `gap` | range | 4 |  |
| Gap (mobile) | `gap_mob` | range | 2 |  |
| Image ratio | `aspect_ratio` | select | 1.0 |  |
| Image crop | `crop_align` | select | center |  |
| Radius | `gallery_radius` | select | rounded-md |  |
| Overlay | `overlay_style` | select | full |  |
| Overlay background | `overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2) 100%) |  |
| Text position | `text_alignment` | select | items-end justify-start |  |
| Text size | `text_size` | select | text-lg |  |

###### Option values

- **Variant** (`button_variant`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`)
- **Color** (`button_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Size** (`button_size`): 3 Extra Small (`px-2 py-1 text-3xs`), 2 Extra Small (`px-2 py-1 text-2xs`), Extra Small (`px-2 py-1 text-xs`), Small (`px-3 py-1.5 text-sm`), Medium (`px-4 py-2 text-base`), Large (`px-5 py-2.5 text-lg`), Extra Large (`px-6 py-3 text-xl`), 2X Large (`px-8 py-4 text-2xl`), 3X Large (`px-10 py-5 text-3xl`), 4X Large (`px-15 py-6 text-4xl`), 5X Large (`px-15 py-7 text-5xl`), 6X Large (`px-20 py-8 text-6xl`), 7X Large (`px-20 py-10 text-7xl`), 8X Large (`px-20 py-10 text-8xl`), 9X Large (`px-20 py-10 text-9xl`)
- **Width** (`button_width`): Auto (`auto`), Full width (`full`)
- **Radius** (`button_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`button_shadow`): None (`none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Icon** (`button_icon`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Icon position** (`button_icon_position`): Before text (`start`), After text (`end`)
- **Title tag** (`title_tag`): h2 (`h2`), h3 (`h3`), h4 (`h4`), h5 (`h5`), h6 (`h6`), div (`div`)
- **Size (mobile)** (`title_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`title_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Color** (`title_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Items per row (mobile)** (`per_row_mob`): 1 (`1`), 2 (`2`)
- **Image ratio** (`aspect_ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Image crop** (`crop_align`): Top (`top`), Middle (`center`), Bottom (`bottom`), Left (`left`), Right (`right`)
- **Radius** (`gallery_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Overlay** (`overlay_style`): None (`none`), Full (`full`), Box (`box`), Full with text shadow (`shadow`)
- **Text position** (`text_alignment`): Top left (`items-start justify-start`), Top center (`items-start justify-center`), Middle left (`items-center justify-start`), Middle center (`items-center justify-center`), Bottom left (`items-end justify-start`), Bottom center (`items-end justify-center`), Bottom right (`items-end justify-end`)
- **Text size** (`text_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)

#### `_filters` — Filters

##### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Show sort order | `filters_show_sort` | checkbox | true |  |
| Enable sticky | `filters_sticky` | checkbox | false |  |
| Collapse filter column | `collapsed_column` | range | 5 | Groups holding more values than this start collapsed. |
| Show filter counts | `filters_counter` | checkbox | false | Only the plain checkbox lists show counts; options rendered as buttons or swatches never do. |
| Show filter values in two columns | `filters_twocols` | checkbox | false |  |
| On selecting a filter, automatically apply 'Out of stock' | `filters_autohide_unavailable` | checkbox | false | Requires the Availability filter to be enabled. |
| Custom style | `label_custom_style` | checkbox | false |  |
| Size (mobile) | `label_size_mob` | select | text-xs |  |
| Size (desktop) | `label_size` | select | text-xs |  |
| Label color | `label_color` | select | base-text |  |
| Custom color | `label_color_custom` | color_background |  |  |
| Label text uppercase | `label_upper` | checkbox | true |  |
| Filters to show as buttons | `filters_buttons` | text | Size |  |
| Custom style | `filtersbtn_custom_style` | checkbox | false |  |
| Background | `filtersbtn_bg` | color | #ffffff |  |
| Text color | `filtersbtn_text` | select | base-text |  |
| Custom color | `filtersbtn_text_custom` | color_background |  |  |
| Border color | `filtersbtn_border` | color | #d1d5db |  |
| Border color (hover) | `filtersbtn_border_hover` | color | #111827 |  |
| Background (active) | `filtersbtn_bg_active` | color | #111827 |  |
| Text color (active) | `filtersbtn_text_active` | select | base-text |  |
| Custom color | `filtersbtn_text_active_custom` | color_background |  |  |
| Radius | `filtersbtn_radius` | select | rounded-md |  |
| Enable swatches icon | `filters_swatches` | checkbox | true |  |
| Swatches layout | `filters_swatches_layout` | select | 2 | No label shows the color chips only, with no button frame around them. |
| Show swatch border | `filters_swatches_border` | checkbox | true | Adds a 1px border in each swatch's own color with a white ring between the border and the color ball. Turn off for a flat color chip. |
| Swatch shape | `filters_swatches_shape` | select | rounded-circle |  |
| Class | `filters_class` | text | lg:me-4 |  |
| Background | `filters_bg` | color_background |  |  |
| Border | `filters_border` | range | 0 |  |
| Border color | `filters_border_color` | color |  |  |
| Radius | `filters_radius` | select | rounded-md |  |
| Shadow | `filters_shadow` | select | shadow-none |  |
| Class | `filtersgroup_class` | text | p-3 |  |
| Background | `filtersgroup_bg` | color_background |  |  |
| Border | `filtersgroup_border` | range | 0 |  |
| Border color | `filtersgroup_border_color` | color |  |  |
| Radius | `filtersgroup_radius` | select | rounded-md |  |
| Shadow | `filtersgroup_shadow` | select | shadow-none |  |

###### Option values

- **Size (mobile)** (`label_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Size (desktop)** (`label_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Label color** (`label_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Text color** (`filtersbtn_text`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Text color (active)** (`filtersbtn_text_active`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Radius** (`filtersbtn_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Swatches layout** (`filters_swatches_layout`): One column (`1`), Two column (`2`), Buttons (`3`), No label (`0`)
- **Swatch shape** (`filters_swatches_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Radius** (`filters_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`filters_shadow`): None (`shadow-none`), Small (`shadow-sm`), Default (`shadow`), Medium (`shadow-md`), Large (`shadow-lg`)
- **Radius** (`filtersgroup_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`filtersgroup_shadow`): None (`shadow-none`), Small (`shadow-sm`), Default (`shadow`), Medium (`shadow-md`), Large (`shadow-lg`)

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

###### Option values

- **Corner radius** (`card_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`card_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Hover effect** (`card_hover`): None (`none`), Lift up (`up`), Lift down (`down`), Scale up (`scale_up`), Scale down (`scale_down`)
- **Hover shadow** (`card_hover_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Display mode** (`card_image_mode`): Single image (`single`), Swap to 2nd image on hover (`swap`), Carousel all images on hover (`carousel`)
- **Image ratio** (`card_aspect_ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Image shape** (`card_image_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Buy button** (`card_buy_button`): Quick view (`quick`), View details (`details`), Add to cart (`cart`)
- **Swatch shape** (`card_variant_swatch_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Variant pill shape** (`card_variant_pill_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Title size (mobile)** (`card_title_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Title size (desktop)** (`card_title_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Title color (color)** (`card_title_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Subtitle size (mobile)** (`card_subtitle_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Subtitle size (desktop)** (`card_subtitle_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Subtitle color (color)** (`card_subtitle_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Price size (mobile)** (`card_price_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Price size (desktop)** (`card_price_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Price color (color)** (`card_price_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Compare-at price color (color)** (`card_price_compare_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Variant size (mobile)** (`card_variant_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Variant size (desktop)** (`card_variant_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Variant color (color)** (`card_variant_color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Star color** (`card_star_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Button style** (`card_buy_style`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`)
- **Color** (`card_buy_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Button radius** (`card_buy_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Button size** (`card_buy_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Position** (`card_labels_position`): Top, left to right (`top-start`), Top, right to left (`top-end`), Left, top to bottom (`side-start`), Right, top to bottom (`side-end`)
- **Style** (`card_labels_schema`): Solid (`solid`), Outline (`outline`), Soft (`soft`)
- **Shape** (`card_labels_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Size** (`card_labels_size`): Small (`sm`), Medium (`md`), Large (`lg`)
- **Hot method** (`card_labels_hot_method`): Collection (`collection`), Tag (`tag`), Always (`always`)
- **Reduction type** (`card_reduction_type`): Percent (`percent`), Value (`value`)
- **New arrival method** (`card_new_method`): Collection (`collection`), Tag (`tag`), Date (`date`)
- **Position** (`card_themelabel_position`): Disabled (`disabled`), Below image (`below-image`), Below product vendors (`below-vendor`), Below product title (`below-title`), Below product subtitle (`below-subtitle`), Below product price (`below-price`), Below product variant swatches (`below-variant`), Below reviews rating (`below-star`), Below inventory label (`below-inventory`)
- **Style** (`card_themelabel_style`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`)
- **Shape** (`card_themelabel_shape`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Color** (`card_themelabel_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Show notice** (`card_inventory_notice`): Low only (`low`), Always (`always`)
- **Show count** (`card_inventory_count`): Never (`never`), Low only (`low`), Always (`always`)

### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Section class | `class` | text | md:py-5 py-3 | Tailwind utilities for this section. Space separated, e.g. mt-2 mb-4 px-6. Spacing scale: 0-10 plus 15 and 20 (1 = 0.25rem = 4px); responsive with md: / lg:, e.g. lg:px-20 lg:mt-10. |
| Paging | `show_paging` | select | btn |  |
| Show product total | `show_total` | checkbox | true |  |
| Show view button | `show_view` | checkbox | true |  |
| Enable filter | `show_filters` | checkbox | true |  |
| Show "Featured" | `coll_show_feat` | checkbox | false | Show the manual (Featured) sort option. |
| Related collections | `related_collections_style` | select | gallery-below |  |
| Show collection description | `show_collection_description` | checkbox | true |  |
| Position | `breadcrumbs` | select | above |  |
| Link color | `breadcrumbs_color` | select | gray-500 |  |
| Custom text color | `breadcrumbs_link_color` | color | #111827 | Only used when Link color is Custom. |
| Alignment | `breadcrumbs_align` | text_alignment | center |  |
| Items per page | `per_page` | range | 12 |  |
| Items per row (desktop) | `card_per_row` | range | 4 |  |
| Items per row (mobile) | `card_per_row_mob` | select | 2 |  |
| Enable masonry | `card_masonry` | checkbox | false | When default layout is grid. |

#### Option values

- **Paging** (`show_paging`): Infinite scroll (`ajax`), Show buttons (`btn`)
- **Related collections** (`related_collections_style`): Buttons (`buttons`), Gallery, above product cards (`gallery-above`), Gallery, below product cards (`gallery-below`)
- **Position** (`breadcrumbs`): Above top banner (`above`), Above page title (`above-title`), Below banner text (`below-text`), Below top banner (`below`), Hide (`hide`)
- **Link color** (`breadcrumbs_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Items per row (mobile)** (`card_per_row_mob`): 1 (`1`), 2 (`2`)

### Variant templates

`collection` is the primary template for this type. The variants below reuse the same main section, so they are documented here instead of having their own page:

- `collection.collection-sidebar`


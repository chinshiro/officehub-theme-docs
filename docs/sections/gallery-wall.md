---
title: "Gallery wall"
sidebar_position: 14
---

# Gallery wall

## Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_gallery-column` — Gallery column

### `_gallery-column` — Gallery column

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Column class | `class` | text |  |  |
| Width (desktop) | `column_width` | range | 25 |  |
| Width (mobile) | `column_width_mob` | range | 100 |  |
| Background | `bg` | color_background |  | Solid color or gradient. Leave empty for transparent. |
| Radius | `radius` | select | rounded-md |  |
| Shadow | `shadow` | select | none |  |
| Content vertical alignment | `valignment` | select | justify-end |  |
| Image position | `layout` | select | above |  |
| Overlay background | `overlay_bg` | color_background | linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 100%) |  |
| Text position | `text_position` | select | justify-start | When image position is Over image. |
| Image | `image` | image_picker |  |  |
| Crop image to ratio | `image_crop` | checkbox | true |  |
| Image ratio | `image_ratio` | select | 1.0 |  |
| Focal point | `crop_align` | select | center center |  |
| Heading | `title` | text |  |  |
| Tag | `title_tag` | select | h3 |  |
| Size | `title_size` | select | text-2xl |  |
| Color | `title_color` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background |  |  |
| Alignment (desktop) | `alignment` | text_alignment | center |  |
| Alignment (mobile) | `alignment_mob` | text_alignment | center |  |
| Text | `text` | richtext |  |  |
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

- **Radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`shadow`): None (`none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Content vertical alignment** (`valignment`): Top (`justify-start`), Middle (`justify-center`), Bottom (`justify-end`)
- **Image position** (`layout`): Above text (`above`), Below text (`below`), Over image (`overlay`)
- **Text position** (`text_position`): Top (`justify-start`), Middle (`justify-center`), Bottom (`justify-end`)
- **Image ratio** (`image_ratio`): Auto (``), Custom (3:1) (`3.0`), Ultrawide (21:9) (`2.33`), Double-width (2:1) (`2.0`), Widescreen/HD (16:9) (`1.78`), Classic/DSLR (3:2) (`1.5`), ISO Paper (1.4:1) (`1.4`), Standard Definition/SD (4:3) (`1.33`), Landscape (5:4) (`1.25`), Square (1:1) (`1.0`), Instagram Portrait (4:5) (`0.8`), Portrait Photography (3:4) (`0.75`), Pinterest Pin Ratio (2:3) (`0.67`), Portrait (9:16) (`0.56`)
- **Focal point** (`crop_align`): Top left (`top left`), Top center (`top center`), Top right (`top right`), Middle left (`center left`), Middle center (`center center`), Middle right (`center right`), Bottom left (`bottom left`), Bottom center (`bottom center`), Bottom right (`bottom right`)
- **Tag** (`title_tag`): h2 (`h2`), h3 (`h3`), h4 (`h4`), h5 (`h5`), h6 (`h6`), div (`div`)
- **Size** (`title_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Color** (`title_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Color** (`text_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Variant** (`button_variant`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`)
- **Color** (`button_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Size** (`button_size`): 3 Extra Small (`px-2 py-1 text-3xs`), 2 Extra Small (`px-2 py-1 text-2xs`), Extra Small (`px-2 py-1 text-xs`), Small (`px-3 py-1.5 text-sm`), Medium (`px-4 py-2 text-base`), Large (`px-5 py-2.5 text-lg`), Extra Large (`px-6 py-3 text-xl`), 2X Large (`px-8 py-4 text-2xl`), 3X Large (`px-10 py-5 text-3xl`), 4X Large (`px-15 py-6 text-4xl`), 5X Large (`px-15 py-7 text-5xl`), 6X Large (`px-20 py-8 text-6xl`), 7X Large (`px-20 py-10 text-7xl`), 8X Large (`px-20 py-10 text-8xl`), 9X Large (`px-20 py-10 text-9xl`)
- **Width** (`button_width`): Auto (`auto`), Full width (`full`)
- **Radius** (`button_radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`button_shadow`): None (`none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Icon** (`button_icon`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Icon position** (`button_icon_position`): Before (`start`), After (`end`)

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Enable inner spacing | `enable_spacing` | checkbox | true |  |
| Section class | `class` | text | py-4 lg:py-6 |  |
| Background | `bg` | color_background |  | Solid color or gradient. Leave empty for transparent. |
| Use theme background schema | `bg_schema` | checkbox | false |  |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Gap (desktop) | `column_gap` | range | 4 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Gap (mobile) | `column_gap_mob` | range | 2 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Horizontal alignment | `alignment` | select | start |  |
| Vertical alignment | `valignment` | select | start |  |

### Option values

- **Horizontal alignment** (`alignment`): Start (`start`), Center (`center`), End (`end`), Space between (`between`)
- **Vertical alignment** (`valignment`): Start (`start`), Center (`center`), End (`end`), Stretch (`stretch`)

## Presets

- Gallery wall

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

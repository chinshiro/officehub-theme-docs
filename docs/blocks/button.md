---
title: "Button"
sidebar_position: 3
---

# Button

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text | mb-4 |  |
| Label | `title` | text | Button |  |
| Link | `url` | url |  |  |
| Open in new tab | `target` | checkbox | false |  |
| Style | `variant` | select | solid |  |
| Color | `color` | select | primary | First five options follow the theme colors set in Theme settings. |
| Custom color | `custom_bg` | color_background |  | Solid: the resting fill. Outline and Ghost: the fill that appears on hover. Supports solid or gradient colors. |
| Custom text color | `text_color` | color |  | Label color when Color is set to Custom (applies at rest and on hover). Leave blank to auto-pick black/white from a solid custom fill's luminance. Preset colors use their own defaults. |
| Size | `size` | select | px-4 py-2 text-base |  |
| Width | `width` | select | auto |  |
| Radius | `radius` | select | rounded-md |  |
| Shadow | `shadow` | select | none |  |
| Icon | `icon` | select |  |  |
| Icon size | `icon_size` | range | 1 | Width and height of the icon, in rem (root em). 0 hides the icon. |
| Icon position | `icon_position` | select | start |  |
| Alignment (desktop) | `alignment` | text_alignment | left |  |
| Alignment (mobile) | `alignment_mob` | text_alignment | left |  |

### Option values

- **Style** (`variant`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`)
- **Color** (`color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Size** (`size`): 3 Extra Small (`px-2 py-1 text-3xs`), 2 Extra Small (`px-2 py-1 text-2xs`), Extra Small (`px-2 py-1 text-xs`), Small (`px-3 py-1.5 text-sm`), Medium (`px-4 py-2 text-base`), Large (`px-5 py-2.5 text-lg`), Extra Large (`px-6 py-3 text-xl`), 2X Large (`px-8 py-4 text-2xl`), 3X Large (`px-10 py-5 text-3xl`), 4X Large (`px-15 py-6 text-4xl`), 5X Large (`px-15 py-7 text-5xl`), 6X Large (`px-20 py-8 text-6xl`), 7X Large (`px-20 py-10 text-7xl`), 8X Large (`px-20 py-10 text-8xl`), 9X Large (`px-20 py-10 text-9xl`)
- **Width** (`width`): Auto (`auto`), Full width (`full`)
- **Radius** (`radius`): Square (`rounded-none`), Rounded small (`rounded-md`), Rounded medium (`rounded-xl`), Rounded large (`rounded-2xl`), Rounded extra large (`rounded-3xl`), Squircle (`rounded-squircle`), Circle (`rounded-circle`), Pill (`rounded-full`), Rounded top (`rounded-top`), Rounded bottom (`rounded-bottom`), Single corner (`rounded-corner`), Diagonal corners (`rounded-diagonal`), Arch (`rounded-arch`), Dome (`rounded-dome`), Cylinder (`rounded-cylinder`), Barrel (`rounded-barrel`), Leaf pointed (`rounded-leaf-point`), Leaf (`rounded-leaf`), Lens (`rounded-lens`), Petal (`rounded-petal`), Egg (`rounded-egg`), Egg inverted (`rounded-egg-inverted`), Shield (`rounded-shield`), Drop (`rounded-drop`), Diamond (`rounded-diamond`), Blob (`rounded-blob`), Amoeba (`rounded-amoeba`), Flower (`rounded-flower`), Mountain (`rounded-mountain`), Pebble (`rounded-pebble`), Bean (`rounded-bean`), Cloud (`rounded-cloud`)
- **Shadow** (`shadow`): None (`none`), Small (`shadow-sm`), Medium (`shadow`), Large (`shadow-lg`)
- **Icon** (`icon`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Icon position** (`icon_position`): Before text (`start`), After text (`end`)

## Presets

- Button


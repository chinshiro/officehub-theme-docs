---
title: "Footer"
sidebar_position: 12
---

# Footer

Section class: `section-footer`

## Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_footer-group` — Footer group
- `_footer-copyright` — Copyright

### `_footer-group` — Footer group

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Block class | `class` | text |  |  |
| Column width (desktop) | `column_width` | range | 25 |  |
| Column width (mobile) | `column_width_mob` | select | 100 | Used when the footer Mobile layout is set to Grid. Collapse layout always stacks full width. |
| Background | `bg` | color_background |  | Solid color or gradient. Leave empty for transparent. |
| Text color | `text_color` | select | base-text |  |
| Custom color | `text_color_custom` | color_background |  |  |
| Show logo | `show_logo` | select | hide |  |
| Logo height | `logo_height` | range | 50 | Only applies when a logo is shown. |
| Logo class | `logo_class` | text |  | Tailwind utilities for the logo image, e.g. mb-2 rounded. |
| Logo alignment | `logo_alignment` | text_alignment | left |  |
| Logo alignment (mobile) | `logo_alignment_mob` | text_alignment | left |  |
| Enable Follow on Shop | `enable_follow_on_shop` | checkbox | false |  |
| Collapsed by default | `collapsed` | checkbox | true | When the footer Mobile layout is Collapse, start this group closed. |

##### Option values

- **Column width (mobile)** (`column_width_mob`): Half (`50`), Full (`100`)
- **Text color** (`text_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Show logo** (`show_logo`): Light (`light`), Dark (`dark`), Hide (`hide`)

#### Blocks inside Footer group

- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`
- [Button](/blocks/button) — `button`
- [Navigation links](/blocks/navigation-links) — `navigation-links`
- [Newsletter form](/blocks/newsletter-form) — `newsletter-form`
- [Social media icons](/blocks/social-media-icons) — `social-media-icons`
- [Currency / language](/blocks/localization) — `localization`
- [Payment icons](/blocks/payment-icons) — `payment-icons`

### `_footer-copyright` — Copyright

#### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width content | `full_width` | checkbox | false |  |
| Block class | `class` | text | py-4 mt-4 |  |
| Background | `bg` | color_background |  | Solid color or gradient. Leave empty for transparent. |
| Show top divider | `show_divider` | checkbox | true |  |
| Divider color | `divider_color` | color | #e5e7eb |  |
| Text color | `color_mode` | select | base-text |  |
| Text color (custom) | `color` | color | #6b7280 |  |
| Copyright text | `copyright` | liquid |  |  |
| Text alignment (desktop) | `text_alignment` | text_alignment | left |  |
| Text alignment (mobile) | `text_alignment_mobile` | text_alignment | left |  |
| Copyright position | `position` | select | 0 |  |

##### Option values

- **Text color** (`color_mode`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Copyright position** (`position`): Left (`0`), Right (`2`)

#### Blocks inside Copyright

- [Payment icons](/blocks/payment-icons) — `payment-icons`
- [Currency / language](/blocks/localization) — `localization`
- [Social media icons](/blocks/social-media-icons) — `social-media-icons`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width content | `full_width` | checkbox | false |  |
| Section class | `class` | text | pt-6 pb-0 | Tailwind utilities for this section. Spacing scale: 0-10 plus 15 and 20 (1 = 0.25rem = 4px); responsive with md: / lg:. |
| Background | `bg` | color_background | #111827 | Supports gradient colors. |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Show top divider | `show_divider` | checkbox | false |  |
| Divider color | `divider_color` | color | #374151 |  |
| Mobile layout | `layout_mob` | select | collapse |  |
| Collapse border | `collapse_border` | select | bottom |  |
| Collapse border color | `collapse_border_color` | color | #374151 |  |
| Collapse icon color | `collapse_icon_color` | color |  | Colors the + toggle of every group, so they stay uniform even when a group sets its own text color. Leave empty to follow each group's text color. |
| Collapse border radius | `collapse_border_radius` | select | rounded-none |  |
| Show back-to-top button | `enable_backtotop` | checkbox | false |  |
| Button style | `backtotop_style` | select | ghost |  |
| Button color | `backtotop_color` | color | #ffffff |  |
| Button radius | `backtotop_radius` | select | rounded-full |  |
| Custom icon 1 | `custom_icon1` | select |  |  |
| Custom link 1 | `custom_url1` | url |  |  |
| Custom button color 1 | `custom_color1` | color | #ffffff |  |
| Custom icon 2 | `custom_icon2` | select |  |  |
| Custom link 2 | `custom_url2` | url |  |  |
| Custom button color 2 | `custom_color2` | color | #ffffff |  |
| Custom icon 3 | `custom_icon3` | select |  |  |
| Custom link 3 | `custom_url3` | url |  |  |
| Custom button color 3 | `custom_color3` | color | #ffffff |  |

### Option values

- **Mobile layout** (`layout_mob`): Grid (`grid`), Collapse (`collapse`)
- **Collapse border** (`collapse_border`): None (`none`), All (`all`), Left (heading) (`left`), Left (heading + content) (`left-con`), Bottom (heading) (`bottom`), Bottom (heading + content) (`bottom-con`)
- **Collapse border radius** (`collapse_border_radius`): None (`rounded-none`), Small (`rounded-sm`), Medium (`rounded`), Large (`rounded-md`), X-large (`rounded-lg`), 2X-large (`rounded-xl`), Circle (`rounded-full`)
- **Button style** (`backtotop_style`): Solid (`solid`), Outline (`outline`), Ghost (`ghost`)
- **Button radius** (`backtotop_radius`): None (`rounded-none`), Small (`rounded-sm`), Medium (`rounded`), Large (`rounded-md`), X-large (`rounded-lg`), 2X-large (`rounded-xl`), Circle (`rounded-full`)
- **Custom icon 1** (`custom_icon1`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Custom icon 2** (`custom_icon2`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)
- **Custom icon 3** (`custom_icon3`): None (``), 3D (`3d`), Account (`account`), Alert Circle (`alert_circle`), Alert Octagon (`alert_octagon`), Alert Triangle (`alert_triangle`), Arrow Right (`arrow-right`), At (`at`), Atom (`atom`), Award (`award`), Bag (`bag`), Basket (`basket`), Box (`box`), Briefcase (`briefcase`), Calculator (`calculator`), Calendar (`calendar`), Carambola (`carambola`), Cart (`cart`), Check (`check`), Check Circle (`check_circle`), Checkbox (`checkbox`), Chevron Down (`chevron-down`), Chevron Down (`chevron_down`), Chevron Down Circle (`chevron_down_circle`), Chevron Left (`chevron_left`), Chevron Left Circle (`chevron_left_circle`), Chevron Right (`chevron_right`), Chevron Right Circle (`chevron_right_circle`), Chevron Up (`chevron_up`), Chevron Up Circle (`chevron_up_circle`), Chrome (`chrome`), Circle (`circle`), Clock (`clock`), Close (`close`), Contact (`contact`), Credit Card (`credit_card`), Discount (`discount`), Dollar (`dollar`), Download (`download`), Edge (`edge`), Edit (`edit`), Email (`email`), Eye (`eye`), Feather (`feather`), Filter (`filter`), Fire (`fire`), Firefox (`firefox`), Gift (`gift`), Grid (`grid`), Headphones (`headphones`), Headset (`headset`), Heart (`heart`), Help (`help`), Home (`home`), Iron (`iron`), Leaf (`leaf`), List (`list`), List Details (`list_details`), Lock (`lock`), Lock Open (`lock_open`), Login (`login`), Logout (`logout`), Mail (`mail`), Mail Open (`mail_open`), Map Pin (`map_pin`), Menu (`menu`), Message Circle (`message_circle`), Minus (`minus`), Minus Circle (`minus_circle`), Minus Square (`minus_square`), Mobile (`mobile`), Movie (`movie`), Opera (`opera`), PDF (`pdf`), PDF File (`pdf_file`), Percent (`percent`), Phone (`phone`), Phone Call (`phone_call`), Photo (`photo`), Plane (`plane`), Play (`play`), Plus (`plus`), Plus Circle (`plus_circle`), Plus Square (`plus_square`), Point (`point`), Print (`print`), Progress Help (`progress_help`), Question Mark (`question_mark`), Return (`return`), Rosette (`rosette`), Rss (`rss`), Ruler (`ruler`), Safari (`safari`), Scissors (`scissors`), Search (`search`), Share (`share`), Shirt (`shirt`), Shoe (`shoe`), Star (`star`), Tag (`tag`), Tags (`tags`), Trash (`trash`), Truck (`truck`), User (`user`), Video (`video`), Wash (`wash`), Wash Gentle (`wash_gentle`), Wash Press (`wash_press`), Facebook (`facebook`), Twitter (`twitter`), X (`x`), Instagram (`instagram`), Linkedin (`linkedin`), Pinterest (`pinterest`), Tiktok (`tiktok`), Whatsapp (`whatsapp`), Youtube (`youtube`), Vimeo (`vimeo`), Tumblr (`tumblr`), Twitch (`twitch`), Threads (`threads`), Discord (`discord`), Mastodon (`mastodon`), Snapchat (`snapchat`), Spotify (`spotify`), Wechat (`wechat`), Meta (`meta`), Reddit (`reddit`)

## Presets

- Footer

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

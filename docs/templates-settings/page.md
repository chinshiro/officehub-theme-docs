---
title: "Template: page"
sidebar_position: 9
---

# Template: page

## Sections used

- `main-page` → `main-page` — main section, full settings in [Main section](#main-section)

## Main section

This template is driven by **Page** (`main-page`). Everything below is configured in the editor for that section only.

### Supported blocks

Private blocks (file names start with `_`) cannot be added by hand — the section or parent block places them automatically. Their settings are documented right here:

- `_sidebar` — Sidebar
- `_page-banner` — Page banner
- `_page` — Page body text

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

#### `_page` — Page body text

_This group has no configurable settings._

### Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Main section class | `class` | text | py-3 md:py-5 | Tailwind utilities for this section. Space separated, e.g. mt-2 mb-4 px-6. Spacing scale: 0-10 plus 15 and 20 (1 = 0.25rem = 4px); responsive with md: / lg:, e.g. lg:px-20 lg:mt-10. |
| Position | `breadcrumbs` | select | above |  |
| Link color | `breadcrumbs_color` | select | secondary |  |
| Custom text color | `breadcrumbs_link_color` | color | #111827 | Only used when Link color is Custom. |
| Alignment | `breadcrumbs_align` | text_alignment | center |  |

#### Option values

- **Position** (`breadcrumbs`): Above top banner (`above`), Above page title (`above-title`), Below banner text (`below-text`), Below top banner (`below`), Hide (`hide`)
- **Link color** (`breadcrumbs_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)

### Variant templates

`page` is the primary template for this type. The variants below reuse the same main section, so they are documented here instead of having their own page:

- `page.brand-story` — also uses `sections`, `image-with-text`, `rich-text`, `timelines`, `testimonials`
- `page.contact` — also uses `multicolumn`, `sections`
- `page.faq` — also uses `faq`
- `page.page-sidebar`


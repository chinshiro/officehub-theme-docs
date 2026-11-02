---
title: "FAQ"
sidebar_position: 8
---

# FAQ

## Supported blocks

These blocks can be added directly from the editor:

- [FAQ searchbar](/blocks/faq-searchbar) — `faq-searchbar`
- [Collapsible tab](/blocks/collapsible-tab) — `collapsible-tab`
- [Heading](/blocks/heading) — `heading`
- [Text](/blocks/text) — `text`

## Settings

| Setting | ID | Type | Default | Description |
|---|---|---|---|---|
| Full width | `full_width` | checkbox | false |  |
| Enable inner spacing | `enable_spacing` | checkbox | false |  |
| Block class | `class` | text | py-4 lg:py-6 |  |
| Background | `bg` | color_background |  | Supports solid or gradient colors. |
| Use theme background schema | `bg_schema` | checkbox | false |  |
| Fixed background | `bg_attachment` | checkbox | false |  |
| Search bar | `search_bar` | select | none |  |
| Heading | `title` | text |  |  |
| Heading tag | `title_tag` | select | h2 |  |
| Heading alignment | `title_alignment` | text_alignment | center |  |
| Heading size (mobile) | `title_size_mob` | select | text-2xl |  |
| Heading size (desktop) | `title_size` | select | text-3xl |  |
| Heading color | `title_color` | select | heading-text |  |
| Custom color | `title_color_custom` | color_background |  |  |
| Text | `text` | richtext |  |  |
| Text alignment | `text_alignment` | text_alignment | center |  |
| Text size (mobile) | `text_size_mob` | select | text-base |  |
| Text size (desktop) | `text_size` | select | text-base |  |
| Text color | `text_color` | select | base-text |  |
| Custom color | `text_color_custom` | color_background |  |  |
| Enable card style | `card_style` | checkbox | false |  |
| Card background | `card_bg` | color_background | #ffffff | Supports solid or gradient colors. |
| Card border color | `card_border` | color | #e5e7eb |  |
| Card radius | `card_radius` | select | rounded-xl |  |
| Card shadow | `card_shadow` | select | none |  |
| Card padding | `card_padding` | range | 4 | Spacing scale, 1 = 0.25rem (4px). |
| Show index column | `show_index` | checkbox | true |  |
| Width (desktop) | `index_width` | range | 30 |  |
| Heading | `index_heading` | text | About us |  |
| Heading tag | `index_tag` | select | h2 |  |
| Heading size (mobile) | `index_size_mob` | select | text-2xl |  |
| Heading size (desktop) | `index_size` | select | text-3xl |  |
| Heading color | `index_color` | select | heading-text |  |
| Custom color | `index_color_custom` | color_background |  |  |
| Heading alignment (desktop) | `index_alignment` | text_alignment | left |  |
| Heading alignment (mobile) | `index_alignment_mob` | text_alignment | left |  |
| Text | `index_text` | richtext | &lt;p&gt;Not found, try searching.&lt;/p&gt; |  |
| Text size (mobile) | `index_text_size_mob` | select | text-sm |  |
| Text size (desktop) | `index_text_size` | select | text-base |  |
| Custom text color | `index_text_color` | select | base-text |  |
| Custom color | `index_text_color_custom` | color_background |  |  |
| Text alignment (desktop) | `index_text_alignment` | text_alignment | left |  |
| Text alignment (mobile) | `index_text_alignment_mob` | text_alignment | left |  |
| Gap (desktop) | `gap` | range | 6 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |
| Gap (mobile) | `gap_mob` | range | 4 | Spacing scale, 1 = 0.25rem (4px). gap only supports 0-10. |

### Option values

- **Search bar** (`search_bar`): Above the list (`above`), Below index column (`below`), Hidden (`none`)
- **Heading tag** (`title_tag`): h1 (`h1`), h2 (`h2`), h3 (`h3`), h4 (`h4`), h5 (`h5`), h6 (`h6`), div (`div`)
- **Heading size (mobile)** (`title_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Heading size (desktop)** (`title_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Heading color** (`title_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Text size (mobile)** (`text_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Text size (desktop)** (`text_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Text color** (`text_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Card radius** (`card_radius`): Square (`rounded-none`), Rounded small (`rounded-sm`), Rounded (`rounded`), Rounded medium (`rounded-md`), Rounded large (`rounded-lg`), Rounded extra large (`rounded-xl`), Rounded 2X large (`rounded-2xl`), Rounded 3X large (`rounded-3xl`), Pill (`rounded-full`)
- **Card shadow** (`card_shadow`): None (`none`), Small (`sm`), Medium (`md`), Large (`lg`)
- **Heading tag** (`index_tag`): h1 (`h1`), h2 (`h2`), h3 (`h3`), h4 (`h4`), h5 (`h5`), h6 (`h6`), div (`div`)
- **Heading size (mobile)** (`index_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Heading size (desktop)** (`index_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Heading color** (`index_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)
- **Text size (mobile)** (`index_text_size_mob`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Text size (desktop)** (`index_text_size`): 3 Extra Small (`text-3xs`), 2 Extra Small (`text-2xs`), Extra Small (`text-xs`), Small (`text-sm`), Medium (`text-base`), Large (`text-lg`), Extra Large (`text-xl`), 2X Large (`text-2xl`), 3X Large (`text-3xl`), 4X Large (`text-4xl`), 5X Large (`text-5xl`), 6X Large (`text-6xl`), 7X Large (`text-7xl`), 8X Large (`text-8xl`), 9X Large (`text-9xl`)
- **Custom text color** (`index_text_color`): Primary (`primary`), Secondary (`secondary`), Success (`success`), Warning (`warning`), Danger (`danger`), Base text (`base-text`), Heading text (`heading-text`), Black (`black`), White (`white`), Gray 100 (`gray-100`), Gray 200 (`gray-200`), Gray 300 (`gray-300`), Gray 400 (`gray-400`), Gray 500 (`gray-500`), Gray 600 (`gray-600`), Gray 700 (`gray-700`), Gray 800 (`gray-800`), Gray 900 (`gray-900`), Random (`random`), Custom (`custom`)

## Presets

- FAQ

> 💡 Edit via **Shopify Admin → Online Store → Themes → Customize**.

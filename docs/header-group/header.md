---
title: Header
sidebar_position: 28
---

This section configures the top navigation bar, including logo, cart icon, and currency/language selectors.

---

## Section Settings

### Main Settings
- **Enable full width**: Expand the header to 100% viewport width.  
- **Position**: CSS positioning—choose `Fixed`, `Sticky`, or `Static`.  
- **Background**: Set a solid or gradient background color for the entire header.  
- **Or, use image**: Apply a predefined background image style from **[Theme Settings → Style Schemes → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
- **Text color**: Choose text color from theme color variables.  **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**
- **Enable transparent header**: Toggle transparent background (ideal for hero banners).

### Logos
- **Height (Desktop)**: Logo height on desktop (in `px`).  
- **Height (Mobile)**: Logo height on mobile (in `px`).  
- **Text color**: Text color for store name (used when no logo is uploaded).  
- **Text size**: Font size for store name.

### Navigation
- **Main menu**: Select the Shopify menu handle to use as the primary navigation.  
- **Style**: Apply a navbar styling scheme from **[Theme Settings → Style Schemes → Navbar Style Schema](/theme-settings/style-scheme-settings#-6-navbar-style-schema)**.  
- **Enable desktop navigation below**: Move desktop navigation to a second row beneath the logo.  
- **Alignment**: Horizontal alignment of desktop navigation (left, center, right).  
- **Highlight link**: Enter the exact name of a top-level menu item to display a highlight dot.  
- **Highlight color schema**: Color of the highlight indicator.  
- **Dropdown style**: Styling for submenu dropdowns, from **[Theme Settings → Style Schemes → Dropdown Style Schema](/theme-settings/style-scheme-settings#-5-dropdown-style-schema)**.  
- **Mobile show**: Off-canvas mobile menu direction:  
  - `Left To Right`  
  - `Right To Left`  
  - `Top To Bottom`  
  - `Bottom To Top`  
- **Enable featured products below mobile navigation**: Show a product carousel under the mobile menu.

### Icons Navbar
- **Style**: Icon styling preset navbar styling scheme from **[Theme Settings → Style Schemes → Navbar Style Schema](/theme-settings/style-scheme-settings#-6-navbar-style-schema)**.  
- **Size**: Global icon size for header icons (cart, search, etc.).

### Cart Icon
- **Show cart icon**: Toggle visibility of the cart icon.  
- **Show cart quantity numbers**: Display item count badge on the cart icon.  
- **Cart icon**: Choose icon style: `Bag`, `Basket`, or `Cart`.

### Search Icon
- **Enable search**: Show the search icon. 
  > ⚠️ **Note**: When enabled, ensure the [**[Modal top bar](/header-group/modal-top-bar)**] section is present in your theme—otherwise, the search modal won’t open.

### Social Media Icons
- **Icons**: Enter social platform codes (comma-separated). Supported:  
	```
  facebook, x, twitter, instagram, linkedin, pinterest, tiktok, whatsapp,  
  youtube, vimeo, tumblr, twitch, threads, discord, mastodon, snapchat, spotify, wechat, custom_icon  
  ```
- **Size**: Icon size (in `px` or relative units).  
- **Padding**: Internal spacing around each icon (in `px`).  
- **Show labels**: Display platform names below icons.  
- **Labels in second line**: Force labels to appear on a new line.  
- **Show border**: Add a border around each icon+label group.  
- **Border radius**: Corner roundness of the border.  
- **Border padding**: Spacing between border and inner content (in `px`).

### Country/Currency/Language
- **Enable country/currency selector**: Show currency switcher.  
- **Show country flag in currency**: Display flags in currency dropdown.  
- **Show country name**: Show country names alongside currencies.  
- **Enable language selector**: Show language switcher.  
- **Show country flag in language**: Display flags in language dropdown.  
- **Selector style**: Apply styling from **[Theme Settings → Style Schemes → Selector Style Schema](/theme-settings/style-scheme-settings#-4-selector-style-schema)**.  
- **Dropdown style**: Dropdown menu style from **[Theme Settings → Style Schemes → Dropdown Style Schema](/theme-settings/style-scheme-settings#-5-dropdown-style-schema)**.

---

## Blocks

The Header section supports two optional blocks:

### 1. Mega Navigation  
Create expansive dropdown menus for top-level navigation items.

#### Main Settings
- **Bind main menu link**  
  - **Main menu link name**: Enter the **exact name** of a top-level menu item (case-sensitive). Hovering over this item triggers the Mega menu.  
  - **Style**: Apply a Mega menu styling scheme from **[Theme Settings → Style Schemes → Mega Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-7-mega-style-schema)**.

- **Heading** (optional top banner in Mega menu)  
  - **Heading**: Title text  
  - **Tag**: HTML tag (`<h1>`–`<h6>` or `<div>`)  
  - **Size**: Font size from typography variables  
  - **Color schema**: Text color from theme variables  
  - **Alignment**: Text alignment

- **Text** (optional description below heading)  
  - **Text**: Rich text content  
  - **Size**, **Color schema**, **Alignment**: Same as above

- **Sub navigation**  
  - **Style**: Layout type—`tabs-horizontal`, `tabs-vertical`, or `grid`  
  - **Tabs style**: `nav-tabs` (standard) or `nav-pills` (capsule)  
  - **Number per row**: Columns in grid layout

- **Featured images**  
  - **Enable featured medias**: Show media (image/video) in Mega menu  
  - **Width**: Media width as percentage  
  - **Order**: Position—`left` or `right`

#### Supported Child Blocks
All child blocks share common settings:
- **Heading**: Tab or grid title  
- **Tag**: HTML tag for heading  
- **Url**: Link destination

Specific block types:
##### Mega products
Displays product cards. Settings follow **[Blocks → Subblocks of Specific Block → Product Cards](/blocks/subblocks/product-cards)**.  

##### Mega article
Renders a single blog article. Select from your published posts. 

##### Mega blog 
Shows recent articles from a selected blog.  
  - **Limit of article**: Max number of posts  
  - **Card style**: From **Cards Style Schema**  
  - **Per row**: Columns per row  
  - Full settings: **[Blocks → Subblocks of Specific Block → Blog Posts Cards](/blocks/subblocks/blog-posts-cards)**  

##### Mega collection
 Displays a product collection. Configure via **[Blocks → Specific Page Block → List Collections Content](/blocks/specific-page-block/list-collections-content)**.  

##### Mega menu link
Pulls structure from a **Shopify admin → Content → Menus**.  

##### Mega page
Embeds content from a selected page. 

##### Featured image 
Custom media + content block.  
  - **Card schema**: The featured image is displayed within a card container. Select a card styling preset from your **Cards Style Schema** (defined in **[Theme Settings → Style Schemes → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**).  
	- **Image**: Configure the image using the same settings as the **[Blocks → Basic Block → Image](/blocks/basic-block/image)** (e.g., cropping, ratio, mobile override, link).  
	- **Heading**: Customize the title using the same parameters as the **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)** (e.g., tag, size, color, alignment, icon).  
	- **Text**: Add and style rich text content using the same options as the **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.  
	- **Button**: Add a call-to-action button with settings matching the **[Blocks → Basic Block → Button](/blocks/basic-block/button)** (e.g., label, URL, style, color, size).

---

### 2. Featured Products  
A static block that appears below the mobile off-canvas menu.  
- Configuration follows **[Blocks → Composite Function Block → Featured Products](/blocks/composite-function-block/featured-products)**.  
- Can be hidden if not needed.
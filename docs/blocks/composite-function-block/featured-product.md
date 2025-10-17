---
title: Featured Product
sidebar_position: 104
---

The **Featured Product** block displays a single product with full detail—including media gallery, title, price, variant picker, and buy buttons—allowing customers to purchase directly from any page.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Block class**: Custom CSS class for spacing or layout overrides.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

**Product**
- **Product**: Select a specific product to feature.  
- **Gallery width**: Width of the media gallery container (e.g., `50%`, `60%`).  
- **Show description below gallery**: Display the product’s full description beneath the media.  
- **Enable sticky on scroll**: Keep the product info panel fixed while scrolling (ideal for long descriptions).

---

## Child Blocks

### Product Gallery  
Interactive media gallery powered by Swiper, supporting **images, videos, and 3D models**.

**Layout**: Gallery layout style:  
  - `Carousel - thumbnails top`: Main media in a carousel with thumbnail navigation above  
  - `Carousel - thumbnails bottom`: Thumbnails below the main media  
  - `Carousel - thumbnails left`: Thumbnails to the left of the main media  
  - `Carousel - thumbnails right`: Thumbnails to the right of the main media  
  - `One column`: All media displayed in a single vertical column  
  - `Two column`: Media arranged in two vertical columns  

**Media ratio**: Aspect ratio applied to all media (images, videos, and 3D models)—e.g., `16:9`, `1:1`, `3:4`, `21:9`, etc.
	- Auto
	- Custom (3:1) 
  - Ultrawide (21:9) 
  - Double-width (2:1)  
  - Widescreen / HD (16:9) 
  - Classic / DSLR (3:2)  
  - ISO Paper (1.4:1) 
  - Standard Definition/SD (4:3) 
  - Landscape (5:4)  
  - Square (1:1) 
  - Instagram Portrait (4:5) 
  - Portrait (3:4)  
  - Pinterest Pin (2:3) 
  - Portrait (9:16)

**Carousel Slide**
- **Slide effect**: `slide`, `fade`, `cube`, `overflow`, `flip`, `cards`, `creative`  
- **Autoplay delay**: Seconds between slides (`0` = disabled)  
- **Enable image zoom**: Allow click-to-zoom on images  
- **Zoom max ratio**: Zoom level (2x–10x)  
- **Enable mousewheel control**: Navigate slides via scroll wheel  
- **Show prev/next button on main gallery**: Toggle navigation arrows on main image  
- **Main gallery prev/next button size**: Button size as percentage

**Thumbnails**
- **Show prev/next button**: Navigation for thumbnail pagination  
- **Prev/next button size**: Thumbnail nav button size (%)  
- **Image width**: Fixed thumbnail width (in `px`)  
- **Crop image to ratio**: Enable cropping  
- **Image ratio**: Thumbnail aspect ratio  
	- Custom (3:1) 
  - Ultrawide (21:9) 
  - Double-width (2:1)  
  - Widescreen / HD (16:9) 
  - Classic / DSLR (3:2)  
  - ISO Paper (1.4:1) 
  - Standard Definition/SD (4:3) 
  - Landscape (5:4)  
  - Square (1:1) 
  - Instagram Portrait (4:5) 
  - Portrait (3:4)  
  - Pinterest Pin (2:3) 
  - Portrait (9:16)
- **Image alignment**: Cropping focus (`Top left`,`Top center`,`Top right`,`Middle left`,`Middle center`,`Middle right`,`Bottom left`,`Bottom center`,`Bottom right`)  
- **Border color (inactive)**: Default thumbnail border  
- **Border color (active)**: Border for selected thumbnail

**Media Images**
- **Crop image to media ratio**: Enforce gallery ratio on main images  
- **Image alignment**: Cropping focus for main images (Top left/Top center/Top right/Middle left/Middle center/Middle right/Bottom left/Bottom center/Bottom right) 
- **Show alt text over image**: Overlay alt text on image  
- **Alt text icon**: Prepend icon to alt text

**Media Videos**
- **Enable controls**: Show video player UI controls 
- **Enable clickToPlay**: Play/pause on click  
- **Enable autoplay**, **muted**, **loop**: Standard video behaviors  

When **Enable controls** is turned on, the following video control elements become available:

- **Large play button**: Displays a prominent play button centered over the video.  
- **Show play button**: Toggle visibility of the play/pause button in the control bar.  
- **Show progress**: Display the playback progress bar.  
- **Show current time**: Show the current playback time (e.g., `1:23`).  
- **Show duration**: Display the total video duration (e.g., `4:56`).  
- **Show mute**: Include a mute/unmute button.  
- **Show volume**: Show a volume slider for audio level adjustment.  
- **Show speed settings**: Allow users to change playback speed (e.g., 0.5x, 1x, 1.5x, 2x).  
- **Show fullscreen**: Display a button to toggle fullscreen mode.

**Media Models**
- **Background**: Container background color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**  
- **Automatic play**: Enable embedded model animations  
- **Automatic rotation**: Rotate model continuously  
- **Rotation speed**: Degrees per frame (higher = faster)

**Sales Status Label**
- **Show sale / sold out / pre-order**: Toggle visibility  
- **Style**: Badge styling from **[Theme Settings → Style scheme settings → Sales Status Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-11-sales-status-style-schema)**

**Reduction Label**
- **Show reduction**: Display discount badge  
- **Type**: `Percent` or `Value`  
- **Position**: `Top left`, `Top right`, `Left up`, `Left down`, `Right up`, `Right down`  
- **Background**: Color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**

**'New Arrival' Label**
- **Show 'New arrival' label**: Highlight new products  
- **Position**: Same as reduction label  
- **Background**: Color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**  
- **Method**: `Collection` (handle contains “new”), `Tag` (“New” tag), or `Date`  
- **Date limit**: Show if product created within X days

---

### Title  
Product title block (recommended as `<h1>` for SEO).

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**
- **Tag**: `<h1>`–`<h6>` or `<div>`  
- **Size**: Font size from **[Theme Settings → Basic Settings → Typography](/theme-settings/basic-settings#-5-typography)**  
- **Color schema**: Text color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**

### Price  
Displays current and compare-at pricing.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Show tax status and shipping policy link**: Toggle visibility of links to your store’s tax and shipping policy pages (typically displayed near the price).  
- **Show inventory transfer notice**: Display a notice when inventory is being transferred between locations (e.g., “Stock arriving soon”).

**Price**
- **Show product compare at price**: Show the original/strikethrough price when a product is on sale.  
- **Style**: Apply a pricing style preset from **[Theme Settings → Style scheme settings → Price Style Schema](/theme-settings/style-scheme-settings#-8-price-style-schema)**.

### Barcode  
Shows product barcode (if available).

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Buy Buttons  
Primary purchase controls.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Show quantity selector**: Toggle visibility of the quantity input field (e.g., “1”, “2”, “3”) for adding multiple units to cart.  
- **Show dynamic checkout button**: Display Shopify’s accelerated checkout buttons (e.g., Shop Pay, PayPal, Apple Pay) based on the customer’s device and region.  
- **Show backorder text**: Show a notice (e.g., “Available for backorder”) only for products that:  
  - Use Shopify inventory tracking  
  - Are set to “Continue selling when out of stock”  
- **Show pickup availability**: Display local pickup availability (e.g., “Available for pickup at Downtown Store”) if Shopify POS locations are configured.  
- **Show recipient information form for gift cards**: Show fields to enter recipient name, email, and message when the product is a **Shopify gift card**.

**Quantity Selector Style**
- **Size**: Quantity selector size—`small`, `default`, or `large`.  
- **Background**: Background color of the quantity input field, selected from color variables in **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Text/border color schema**: Text and border color scheme, also chosen from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

**'Add to cart' Button Style**
- **Style**: Button appearance—`button` (solid fill) or `outline` (hollow with border).  
- **Color schema**: Button color selected from the theme’s color variables in **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Size**: Button size—`small`, `default`, or `large`.

### Collapsible Tab  
Expandable content section (e.g., size guide, care instructions).

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  

**Collapsible style**  
  - **Border color schema**: Border color selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
  - **Border radius**: Corner style—`rounded1` to `rounded5`, `circle`, or `pill`.

**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.

**Collapsible content**  
  - **From richtext**: Enter content directly using the rich text editor.  
  - **Append liquid code**: Inject custom Liquid/HTML/JS.  
  - **Append page content**: Pull content from a selected Shopify page.  
  - **Default open**: Expand the section by default (not collapsed on load).  
  - **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Complementary Products  
Suggest add-on items.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  

**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.

**Product cards**:  
  - **Limit**: Maximum number of products to display.  
  - **Card style**: Visual styling for product cards, selected from **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**.  
  - **Display method**: Layout type—`Cards` (grid) or `Carousel` (sliding).  
  - **Crop image to ratio**: Enable cropping of product images to a specific aspect ratio.  
  - **Image ratio**: Choose the target aspect ratio (e.g., `1:1`, `16:9`, `3:4`).  
    - Shortest image
    - Tallest image
    - Auto
    - Custom (3:1) 
    - Ultrawide (21:9) 
    - Double-width (2:1)  
    - Widescreen / HD (16:9) 
    - Classic / DSLR (3:2)  
    - ISO Paper (1.4:1) 
    - Standard Definition/SD (4:3) 
    - Landscape (5:4)  
    - Square (1:1) 
    - Instagram Portrait (4:5) 
    - Portrait (3:4)  
    - Pinterest Pin (2:3) 
    - Portrait (9:16)
  - **Image alignment**: Control which part of the image is preserved during cropping (e.g., `Top left`,`Top center`,`Top right`,`Middle left`,`Middle center`,`Middle right`,`Bottom left`,`Bottom center`,`Bottom right`).  
  - **Text alignment**: Horizontal alignment of text within the card (`Left`, `Center`, `Right`).  
  - **Number per row**: Number of cards displayed per row (applies when **Display method = Cards**).  
  - **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Countdown Timer  
Urgency-driven countdown for promotions.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.  
- Full settings: **[Blocks → Basic Block → Countdown Timer](/blocks/basic-block/countdown-timer)**

### Custom Liquid  
Embed raw Liquid/HTML/JS.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.
- **Liquid code**: Enter custom Liquid code  
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Custom Option  
Collect custom product inputs (e.g., engraving).

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.
- **Custom option**: Supports the following form field types:  
  - `Form text`  
  - `Form radio`  
  - `Form checkbox`  
  - `Form select`  
  - `Form file`  
  - `Form textarea`  

  > For full configuration options (label, placeholder, validation, styling, layout, etc.), refer to: **[Blocks → Composite Function Block → Contact Form](/blocks/composite-function-block/contact-form#block-common-settings)**.

  > ⚠️ **Important**: When using this block inside a product context (e.g., to collect engraving text or customization details), ensure the **Applies to** parameter is set to **`Product`**. This ensures the input data is correctly passed to the cart and order.
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Description  
Render full product description.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Show in collapsible tab**: Enable collapsible (accordion-style) behavior for the content block.  
- **Collapsed**: Collapse the content by default on page load.  
- **Show tab border**: Display a visible border around the collapsible tab container.  
- **Border radius**: Corner roundness of the tab—options include `rounded1` to `rounded5`, `circle`, or `pill`.  
- **Border color schema**: Border color selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Divider  
Visual separator with optional title.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Divider title**: Text displayed above the divider line (e.g., “Details”, “Specifications”).  
- **Border color schema**: Color of the divider line, selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Text color schema**: Color of the divider title text, also chosen from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Dynamic Source  
Display product metafields.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.
- **Text content from here choose ->**: Connect to product metafield via database icon  
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Feature Rating  
Visual skill/feature rating bars.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  

**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.

**Segments Content**
- **Segments**: Total number of segments (e.g., 5 for a 5-star rating scale).  
- **Active segment**: Number of filled/active segments (e.g., 4 out of 5).  
- **Show number**: Toggle visibility of the numeric value (e.g., “4/5”).  
- **Active color schema**: Color for active segments, selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Segments size**: Size of each segment as a percentage of default (e.g., `120%` for larger bars).

**Label Text**
- **Show labels**: Display text labels on the left, middle, and/or right of the segment bar.  
- **Left label**: Text shown at the start (e.g., “Poor”).  
- **Middle label**: Text shown in the center (e.g., “Average”).  
- **Right label**: Text shown at the end (e.g., “Excellent”).  
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Featured Image  
Standalone image with optional heading.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.  
- **Child blocks**  
  - **Heading**: Title for the featured image. Configuration follows **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  
  - **Image**: Main image display. Settings follow **[Blocks → Basic Block → Image](/blocks/basic-block/image)**.

### Featured Links  
Promotional or informational links.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  

**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.

**Links Source**
- **Link url**: Enter or select the destination URL for a single link.  
- **Link text**: The visible label or text of the link (e.g., “Learn More”).  
- **Or, from menu**: Alternatively, select a Shopify menu (from **Content > Menus**) to automatically display multiple links.  
- **Link target**: Specify how the link opens:  
  - `_blank` – New tab/window  
  - `_self` – Same tab (default)  
  - `_parent` – Parent frame  
  - `_top` – Top-level browsing context

**Links Style**
- **Style**: Visual appearance—`button`, `outline`, or `link`.  
- **Color schema**: Text/button color selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Size**: Button size (`small`, `default`, `large`)—only applies when **Style** is `button` or `outline`. 

- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Inventory Level  
Real-time stock indicator.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Show inventory notice**: Condition for displaying the inventory status message—choose `Low` (only when stock is below threshold) or `Always` (show for all stock levels).  
- **Show count in inventory notice**: Whether to display the actual quantity:  
  - `Never`: Hide the number  
  - `Low`: Show only when stock is low  
  - `Always`: Always show the count  
- **Low inventory threshold**: The stock level below which a product is considered “low” (e.g., `5` means “Low stock” appears when ≤5 units remain).  
- **Style**: Visual styling for the inventory notice, selected from **[Theme Settings → Style scheme settings → Inventory Level Style Schema](/theme-settings/style-scheme-settings#-10-inventory-level-style-schema)**.
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Payment Icons  
Display accepted payment methods.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.
- **Payment icons**: Settings from **[Blocks → Basic Block → Payment Icons](/blocks/basic-block/payment-icons)**  
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Pop-up (Modal)  
Trigger a modal window.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  

**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.

**Pop up Link**
- **Pop up link text**: Label text for the button that triggers the modal (e.g., “View Details”, “Size Guide”).  
- **Style**: Button appearance—`button` (solid), `outline` (hollow), or `link` (text-only).  
- **Color schema**: Button color selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Size**: Button size—`small`, `default`, or `large` (only applies when **Style** is `button` or `outline`).

**Pop up Modal**
- **Content from page**: Select a Shopify page whose content will be displayed inside the modal.  
- **Modal size**: Choose from `Small`, `Default`, `Large`, `Extra large`, or `Fullscreen`.  
- **Modal status color**: Accent color for the modal’s top border or status indicator, chosen from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Modal with vertically centered**: Toggle whether the modal is centered vertically in the viewport.  
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Related Products  
Cross-sell similar items.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)** 

**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.

**Related Products**
- **Products**: Manually select specific products to display as related items.  
- **Limit**: Maximum number of related products shown.  
- **Show style**: Choose display format—`Card` (full product card with title, price, etc.) or `Image` (image-only grid).  
- **Crop image to ratio**: Enable cropping of product images to a consistent aspect ratio.  
- **Image ratio**: Select the target ratio (e.g., `1:1`, `16:9`, `3:4`).  
  - Shortest image
  - Tallest image
  - Auto
  - Custom (3:1) 
  - Ultrawide (21:9) 
  - Double-width (2:1)  
  - Widescreen / HD (16:9) 
  - Classic / DSLR (3:2)  
  - ISO Paper (1.4:1) 
  - Standard Definition/SD (4:3) 
  - Landscape (5:4)  
  - Square (1:1) 
  - Instagram Portrait (4:5) 
  - Portrait (3:4)  
  - Pinterest Pin (2:3) 
  - Portrait (9:16)
- **Image alignment**: Control focal point during cropping (`Top left`,`Top center`,`Top right`,`Middle left`,`Middle center`,`Middle right`,`Bottom left`,`Bottom center`,`Bottom right`, etc.).

**When style is Card**
- **Card style**: Apply a visual preset from **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**.  
- **Text alignment**: Horizontal alignment of text within the card (`Left`, `Center`, `Right`).  
- **Number per row**: Number of cards displayed per row.

**When style is Image**
- **Image width**: Set the width of each image (e.g., `100px`, `150px`).  
- **No spacing**: Remove internal padding/margin between images when enabled.  
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

**Animations on scroll**:
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**

### Reviews Stars  
Aggregate customer ratings.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Show reviews count**: Toggle visibility of the total number of customer reviews (e.g., “(42 reviews)”). 
- **Star size**: Size of the rating stars as a percentage of the default (e.g., `100%`, `120%`).  
- **Star color schema (inactive)**: Color for unselected stars, chosen from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Star color schema (active)**: Color for filled/selected stars, also selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

> ⚠️ **Note**: To display reviews and ratings, you must install a **third-party reviews app** from the Shopify App Store. The app must support **Shopify’s standard rating metafield** (`rating` and `review_count`) to ensure compatibility with this block. Color variables referenced here are defined in your theme’s global color settings.

### Richtext  
Custom rich-text content.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  

**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.

**Rich Text Content**
- **Rich text**: Enter your custom content using the rich text editor (supports headings, lists, links, etc.).  
- **Icon**: Choose an icon to display alongside the text, or select **No icon**.  
- **Icon size**: Icon size as a percentage of default (e.g., `100%`, `120%`).  
- **Icon color schema**: Icon color selected from **Theme Settings → Basic Settings → Colors**.  
- **Vertical alignment**: Vertical positioning of the icon relative to the text—`Top`, `Center`, or `Bottom`.

**Rich Text Style**
- **Background**: Background color of the rich text container, chosen from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Radius**: Corner style—`rounded1` to `rounded5`, `circle`, or `pill`.  
- **Color schema**: Text color, also selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Show in quick buy**: Display this collapsible block inside the quick-buy modal.

### Sharing  
Social sharing buttons.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
**Heading**: The collapsible tab’s title. Add a child **[Heading](/blocks/basic-block/heading)** block to display it. Omit the child block if no title is needed.
- **Heading line break**: Toggle whether the heading text wraps to a new line (useful for long titles or responsive layouts).  
- **Alignment**: Horizontal alignment of the entire sharing component—`Left`, `Center`, or `Right`.  
- **Show X (formerly Twitter)**: Display the X (Twitter) social sharing icon.  
- **Show Facebook**: Display the Facebook social sharing icon.

### SKU  
Display product SKU.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Variant Picker  
Product option selector.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Select the first available variant**: Automatically select the first in-stock variant when the page loads.  
- **Show for a single variant**: Display the variant picker even if the product has only one variant.  
- **Dynamic availability**: Update lower-level options based on selection:  
  - `Off`: Show all options regardless of stock  
  - `Show`: Gray out unavailable options  
  - `Hide`: Remove unavailable options from the list  
- **Variant style**: Choose how options are presented—`Buttons` or `Dropdown`.  
- **Swatches style**: Visual styling for color/size swatches, selected from **[Theme Settings → Style scheme settings → Variant Swatches Schema](/theme-settings/style-scheme-settings#-1-variant-swatches-schema)**.  
- **Buttons style**: Styling for variant buttons (when **Variant style = Buttons**), also using the **[Theme Settings → Style scheme settings → Variant Swatches Schema](/theme-settings/style-scheme-settings#-1-variant-swatches-schema)**.  
- **Show radio**: Display radio buttons for variant selection (alternative to swatches/buttons).  
- **Show swatches label text**: Show text labels (e.g., “Red”, “XL”) alongside swatch icons.  
- **Update url when variant selected**: Append the selected variant’s ID to the URL (e.g., `?variant=12345`) for direct linking.

**Size Guide**
- **Enable size guide**: Toggle visibility of the size guide link/button.  
- **Link label**: Text for the size guide button (e.g., “View Size Chart”).  
- **Variant option name**: The variant option (e.g., `Size`, `Taille`) this guide applies to.  
- **Page containing size guide**: Select a Shopify page that contains your size chart content.  
- **Style**: Button appearance—`button`, `outline`, or `link`.  
- **Color schema**: Button color selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

### Vendor  
Display product vendor name.

- **Block class**: The CSS class name for block containers, commonly used for spacing adjustments. Refer to the settings **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**
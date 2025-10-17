---
title: Footer
sidebar_position: 60
---

The **Footer** section appears at the bottom of every page and consists of two main components: a flexible **Footer group** area (for columns of content) and a fixed **Copyright** block.

## Settings

- **Enable full width**: Expand the footer to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire footer container.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

**Mobile Layout**
- **Mobile layout**: Layout method for mobile devices
  - `Grid`: Display all footer columns in a responsive grid.  
  - `Collapse`: Stack columns and allow them to expand/collapse like accordions.  
- **Show collapse border** (only available when **Mobile layout = Collapse**):  
  - `None`: No borders shown.  
  - `All`: Borders around both heading and content areas.  
  - `Left | heading`: Vertical border only on the left side of the heading.  
  - `Left | heading & content`: Vertical border on the left of both heading and content.  
  - `Bottom | heading`: Horizontal border below the heading only.  
  - `Bottom | heading & content`: Horizontal border below both heading and content. 
- **Collapse border color**: Border color selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Collapse border radius**: Corner roundness for collapsed items (e.g., `Rounded 1–5`, `Pill`, `Circle`).

---

## Footer Group

A reusable column block for organizing footer content (e.g., links, contact info, newsletter).

### Settings
- **Block name**: Internal name for identification in the Theme Editor sidebar.  
- **Block width**: Column width as a percentage (e.g., `25%`, `33.33%`).  
- **Show logo**: Display your store’s logo at the top of this column.  
- **Logo height**: Logo height in `px`.  
- **Enable Follow on Shop**: Show Shopify’s “Follow on Shop” button (if enabled in Shopify admin).

**Mobile**
- **Block width**:  
  - `Half` (50% width, two columns per row)  
  - `Wide` (100% width, full-width column)  
- **Collapsed**: Start in collapsed state on mobile (only applies when **Mobile layout = Collapse**).

### Supported Child Blocks
#### Heading 
> Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**. 

#### Text
> Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**. 

#### Button 
> Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**. 

#### Currency/Language 
> Settings follow **[Blocks → Basic Block → Currency Language](/blocks/basic-block/currency-language)**. 

#### Navigation
> Settings follow **[Blocks → Basic Block → Navigation](/blocks/basic-block/navigation)**. 

#### Newsletter form 
> Settings follow **[Blocks → Basic Block → Newsletter Form](/blocks/basic-block/newsletter-form)**. 

#### Payment icons 
> Settings follow **[Blocks → Basic Block → Payment Icons](/blocks/basic-block/payment-icons)**. 

#### Social media icons 
> Settings follow **[Blocks → Basic Block → Social Media Icons](/blocks/basic-block/social-media-icons)**. 

---

## Copyright

The bottom bar displaying legal and brand information.

- **Enable full width**: Expand the copyright bar to 100% width.  
- **Block class**: Custom CSS class for the copyright container.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**
- **Text color**: Copyright text color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Show divider**: Display a top border above the copyright text.  
- **Divider color**: Divider line color from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Copyright text**: Customizable text with Liquid support.  
  > 💡 Example: `© {{ "now" | date: "%Y" }} Your Store. All rights reserved.`  
- **Position**: Text alignment—`left` or `right`.

### Supported Child Blocks
#### Currency/Language 
> Settings follow **[Blocks → Basic Block → Currency Language](/blocks/basic-block/currency-language)**.

#### Social media icons 
> Settings follow **[Blocks → Basic Block → Social Media Icons](/blocks/basic-block/social-media-icons)**. 

#### Payment icons
> Settings follow **[Blocks → Basic Block → Payment Icons](/blocks/basic-block/payment-icons)**. 

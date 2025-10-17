---
title: Faq Collapsible Tabs
sidebar_position: 102
---

The **Faq Collapsible Tabs** block displays a set of frequently asked questions with collapsible answers. It supports an optional index sidebar for easy navigation and includes a built-in search bar for large FAQ sets.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Block class**: Custom CSS class for spacing or layout adjustments.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.

### Index Column
- **Show index column**: Toggle a sidebar that lists all FAQ headings as clickable links.  
- **Width**: Width of the index column as a percentage (e.g., `25%`).  
- **Heading**: Title for the index column (e.g., “How can we help?”).  
- **Size**: Font size of the index heading, using typography variables from **[Theme Settings → Basic Settings → Typography](/theme-settings/basic-settings#-5-typography)**.  
- **Color schema**: Text color for the index heading, selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

## Child Blocks

### Heading
> The question title for each FAQ item. Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

### Text
> The collapsible answer content (supports rich text). Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**. 

### FAQ search bar
> A live-search input that filters FAQs as users type.  Settings follow **[Blocks → Basic Block → Faq Search Bar](/blocks/basic-block/faq-search-bar)**.  

### Collapsible tab
> The interactive container that toggles answer visibility (automatically generated per FAQ pair). Settings follow **[Blocks → Basic Block → Collapsible Tab](/blocks/basic-block/collapsible-tab)**.  
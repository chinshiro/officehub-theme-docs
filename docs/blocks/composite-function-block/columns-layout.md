---
title: Columns Layout
sidebar_position: 97
---

The **Columns Layout** block enables flexible multi-column arrangements within any standard section. It acts as a container for one or more **Column** blocks, each of which can hold any other block type (e.g., images, text, product cards, forms), allowing for highly customizable side-by-side content layouts.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Block class**: Custom CSS class for spacing or layout overrides.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)** 
- **Horizontal alignment**: Align the column group—`Left`, `Center`, or `Right`.  
- **Vertical alignment**: Vertical positioning within the container—`Top`, `Center`, or `Bottom`.

## Child Block

Only one type of child block is supported:

### Column  
Each **Column** defines a single vertical content area.

- **Column class**: Custom CSS class for the column (e.g., for spacing or responsive behavior). **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Column width**: Width of the column as a percentage of the container (e.g., `50%` for two equal columns).  
- **Enable sticky top**: Keep this column fixed at the top of the viewport while scrolling (ideal for sidebars or persistent content).

> 💡 **Note**: Inside each **Column**, you can add **any block supported by the theme**—including headings, images, product cards, forms, videos, and more—enabling complex, magazine-style layouts without code.
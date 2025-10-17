---
title: Multi Column
sidebar_position: 110
---

The **Multi Column** block creates a responsive grid of content cards, each combining an image, heading, text, and button. Ideal for features, services, testimonials, or product highlights in a clean, structured layout.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Block class**: Custom CSS class for spacing or layout overrides.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Column Cards
- **Per row on desktop**: Number of cards displayed per row on desktop (e.g., 2, 3, 4).  
- **Per row on mobile**: Number of cards per row on mobile devices (typically 1 or 2).

## Child Blocks

### Heading
Section title for the entire multi-column block. Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

### Text
Supporting description below the heading. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.

### Column Card
Each individual card in the grid.

#### Settings
- **Block class**: CSS class for the individual card container. **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**
- **Card style**: Visual preset for the card (background, border, shadow, etc.), selected from **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**.

#### Child Blocks

##### Image
> Card image (supports cropping, ratio, and mobile override). Settings follow **[Blocks → Basic Block → Image](/blocks/basic-block/image)**. 

##### 3D model
> Interactive GLB/GLTF model. Settings follow **[Blocks → Basic Block → 3D model](/blocks/basic-block/3d-model)**.  

##### Video
> Embedded or self-hosted video. Settings follow **[Blocks → Basic Block → Video](/blocks/basic-block/video)**. 

##### Heading
> Card title. Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

##### Text
> Card description or excerpt. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**. 

##### Button
> Card call-to-action (e.g., “Learn More”). Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.
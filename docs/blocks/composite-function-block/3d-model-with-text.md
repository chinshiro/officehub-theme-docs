---
title: 3D Model With Text
sidebar_position: 94
---

The **3D Model With Text** block displays an interactive 3D model alongside descriptive content (heading, text, and button). Ideal for showcasing products with rich visual context.

## Settings

- **Enable full width**: Expand the block to 100% viewport width. See: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)** 
- **Container width**: Width of the entire block container as a percentage (e.g., `90%`, `100%`).  
- **Layout**: Arrangement of model and text:  
  - `Overlay`: Text appears over the 3D model  
  - `Text left`: Text on the left, model on the right  
  - `Text right`: Text on the right, model on the left  
- **Overlay opacity**: Background opacity (0–100%) behind text when **Layout = Overlay**.  
- **3D model width**: Width of the 3D model area as a percentage of the container.

## Child Blocks

- **3D model**: Embed a 3D model (GLB/GLTF). Settings follow **[Blocks → Basic Block → 3D Model](/blocks/basic-block/3d-model)**.  
- **Heading**: Add a title above or beside the model. Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  
- **Text**: Include rich-text description content. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.  
- **Button**: Add a call-to-action link or button. Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.
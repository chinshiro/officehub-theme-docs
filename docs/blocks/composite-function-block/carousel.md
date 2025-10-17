---
title: Carousel
sidebar_position: 96
---

The **Carousel** block is a responsive slideshow component based on Bootstrap’s carousel functionality. It supports images, videos, and 3D models as slide content.

## Settings

- **Enable full width**: Expand the carousel to 100% of the viewport width.  
- **Enable auto play**: Automatically cycle through slides.  
- **Interval**: Time between slide transitions in milliseconds (e.g., `2000` = 2 seconds).  
- **Show prev/next button**: Display navigation arrows on the left and right.  
- **Show pagination**: Show indicator dots at the bottom to navigate between slides.

## Child Blocks

The carousel supports three types of slide items. Each shares the following common settings:

### Common Slide Settings
- **Slide class**: Custom CSS class for the individual slide container (useful for spacing or layout overrides).  **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**
- **Overlay opacity**: Opacity (0–100%) of the dark overlay behind text when using overlaid content.  
- **Text width**: Width of the text content area as a percentage of the slide.  
- **Text position**: Placement of the text overlay. Options:  
  - `Top left`  
  - `Top center`  
  - `Top right`  
  - `Center left`  
  - `Center`  
  - `Center right`  
  - `Bottom left`  
  - `Bottom center`  
  - `Bottom right`  
- **Text shadow**: Toggle text shadow for better readability over media.

### Carousel Item – Image
Contains:
- **Image**: Main background or foreground image block. See **[Block → Basic Block → Image](/blocks/basic-block/image).**
- **Heading**: Overlay title.  See **[Block → Basic Block → Heading](/blocks/basic-block/heading).**
- **Text**: Overlay description or caption. See **[Block → Basic Block → Text](/blocks/basic-block/text).**

### Carousel Item – Video
Contains:
- **Video**: Embedded or uploaded video (MP4, YouTube, Vimeo).  See **[Block → Basic Block → Video](/blocks/basic-block/video).**
- **Heading**: Overlay title.  See **[Block → Basic Block → Heading](/blocks/basic-block/heading).**
- **Text**: Overlay description or caption. See **[Block → Basic Block → Text](/blocks/basic-block/text).**

### Carousel Item – 3D Model
Contains:
- **3D model**: Interactive GLB/GLTF model. See **[Block → Basic Block → 3D Model](/blocks/basic-block/3d-model).**
- **Heading**: Overlay title.  See **[Block → Basic Block → Heading](/blocks/basic-block/heading).**
- **Text**: Overlay description or caption. See **[Block → Basic Block → Text](/blocks/basic-block/text).**
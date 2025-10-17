---
title: Slideshow
sidebar_position: 114
---

The **Slideshow** block creates a full-featured carousel banner that supports **images**, **videos**, and **3D models** as slide content. Ideal for hero banners, promotional campaigns, or immersive storytelling at the top of your homepage or landing pages.

## Settings

- **Enable full width**: Expand the slideshow to 100% of the viewport width.

**Slideshow Settings**
- **Slide effect**: Transition animation—`slide`, `fade`, `cube`, `overflow`, `flip`, `cards`, or `creative`.  
- **Autoplay delay**: Time between slides in seconds (`0` = disabled).  
- **Enable mousewheel control**: Allow users to navigate slides using the mouse scroll wheel.  
- **Show prev/next button**: Display navigation arrows on the left and right.  
- **Prev/next button size**: Button size as a percentage of default (e.g., `120%`).

**Pagination**
- **Show pagination**: Toggle visibility of slide indicators.  
- **Style**:  
  - `Bullets`: Circular dots  
  - `Fraction`: “1 / 5” counter  
  - `Progressbar`: Horizontal progress bar  
- **Color (active)**: Color of the current/active indicator.  
- **Color (inactive)**: Color of inactive indicators.  
- **Opacity**: Overall opacity of pagination (0–100%).  
- **Height**: Height of the progress bar (for `Progressbar` style).  
- **Bullets width**: Diameter of bullet indicators.  
- **Bullets radius**: Corner roundness (`0` = square, `50%` = circle).  
- **Bullets spacing**: Horizontal gap between bullets.

## Child Blocks

### Slide – Image  
A slide containing a static image with overlay content.

#### Settings
- **Overlay class**: Custom CSS class for the text overlay container (e.g., for spacing). See: **[Blocks → Overview → General Settings](/blocks/overview#general-settings).**  
- **Overlay opacity**: Background opacity (0–100%) behind text when using overlaid layout.  
- **Text width**: Width of the text area as a percentage of the slide.  
- **Text position**: Placement of overlay content:  
  - `Top left`, `Top center`, `Top right`  
  - `Center left`, `Center`, `Center right`  
  - `Bottom left`, `Bottom center`, `Bottom right`  
- **Text shadow**: Toggle shadow for better text readability over media.

#### Child Blocks
##### Image
> Background or foreground image. Settings follow **[Blocks → Basic Block → Image](/blocks/basic-block/image)**.  

##### Heading
> Overlay title. Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

##### Text
> Overlay description. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**. 

##### Button
> Call-to-action link. Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.

### Slide – 3D Model  
A slide featuring an interactive 3D model with overlay content.

#### Settings
- **Overlay class**: Custom CSS class for the text overlay container (e.g., for spacing). See: **[Blocks → Overview → General Settings](/blocks/overview#general-settings).**  
- **Overlay opacity**: Background opacity (0–100%) behind text when using overlaid layout.  
- **Text width**: Width of the text area as a percentage of the slide.  
- **Text position**: Placement of overlay content:  
  - `Top left`, `Top center`, `Top right`  
  - `Center left`, `Center`, `Center right`  
  - `Bottom left`, `Bottom center`, `Bottom right`  
- **Text shadow**: Toggle shadow for better text readability over media.

#### Child Blocks
##### 3D model
> Interactive GLB/GLTF model. Settings follow **[Blocks → Basic Block → 3D Model](/blocks/basic-block/3d-model)**.  

##### Heading
> Overlay title. Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

##### Text
> Overlay description. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**. 

##### Button
> Call-to-action link. Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.

### Slide – Video  
A slide with embedded or self-hosted video and overlay content.

#### Settings
- **Overlay class**: Custom CSS class for the text overlay container (e.g., for spacing). See: **[Blocks → Overview → General Settings](/blocks/overview#general-settings).**  
- **Overlay opacity**: Background opacity (0–100%) behind text when using overlaid layout.  
- **Text width**: Width of the text area as a percentage of the slide.  
- **Text position**: Placement of overlay content:  
  - `Top left`, `Top center`, `Top right`  
  - `Center left`, `Center`, `Center right`  
  - `Bottom left`, `Bottom center`, `Bottom right`  
- **Text shadow**: Toggle shadow for better text readability over media.

#### Child Blocks
##### Video
> Video media (MP4, YouTube, Vimeo, etc.). Settings follow **[Blocks → Basic Block → Video](/blocks/basic-block/video)**.  

##### Heading
> Overlay title. Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

##### Text
> Overlay description. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**. 

##### Button
> Call-to-action link. Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.

> ⚠️ **Note**: For performance and accessibility, avoid autoplaying videos with sound. Use muted autoplay when appropriate.
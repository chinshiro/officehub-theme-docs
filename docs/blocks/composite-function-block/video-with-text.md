---
title: Video With Text
sidebar_position: 118
---

The **Video With Text** block combines a video with descriptive content (heading, text, and button) in a flexible layout. Perfect for product demos, brand stories, or explainer content that benefits from both visual and textual context.

## Settings

- **Enable full width**: Expand the block to 100% of the viewport width.  
- **Block class**: Custom CSS class for spacing or layout overrides.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)** 
- **Container width**: Width of the entire block container as a percentage (e.g., `90%`, `100%`).  
- **Layout**: Choose content arrangement:  
  - `Overlay`: Text and buttons float over the video  
  - `Text left`: Text on the left, video on the right  
  - `Text right`: Text on the right, video on the left  

**Overlay**
(Applies only when **Layout = Overlay**)
- **Overlay opacity**: Background opacity (0–100%) behind text for better readability.  
- **Show play button**: Display a prominent play button below the text to trigger video playback.  
- **Play button alignment**: Horizontal alignment of the play button—`Left`, `Center`, or `Right`.

**Video**
(Applies when **Layout = Text left** or **Text right**)
- **Video width**: Width of the video area as a percentage of the container (e.g., `60%`).

## Child Blocks

### Heading
> Section title (e.g., “How It Works”). Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

### Text
> Supporting description or narrative. Settings follow **[Blocks → Basic Block → Text](/blocks/basic-block/text)**.  

### Button
> Call-to-action link (e.g., “Watch Full Video”). Settings follow **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  

### Video
> Embedded or self-hosted video (MP4, YouTube, Vimeo, etc.). Settings follow **[Blocks → Basic Block → Video](/blocks/basic-block/video)**.
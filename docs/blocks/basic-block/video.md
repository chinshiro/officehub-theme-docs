---
title: Video
sidebar_position: 69
---

A versatile video block for embedding and playing videos from multiple sources. Supports self-hosted, adaptive streaming (HLS/m3u8), and external platforms.

> 💡 **Note**: Video sources are prioritized in the following order:  
> **1. Video upload** → **2. M3u8 video URL** → **3. External video**  
> Only the first valid source is used. Use **M3u8** for large videos to improve loading and streaming performance.

## Main Settings (Desktop & Tablet)

<img src={require('/img/086.webp').default} alt="Video block settings" style={{ float: 'left', marginRight: '30px' }} />
- **Video upload**: Upload an MP4 file via **Shopify Admin > Content > Files**. MP4 offers the best cross-browser compatibility.  
- **M3u8 video URL**: Enter the URL of an HLS (`.m3u8`) manifest file for adaptive bitrate streaming—ideal for large or high-resolution videos.  
- **External video**: Embed videos from **YouTube** or **Vimeo** by pasting the full video URL (e.g., `https://youtu.be/...`).  
- **Poster image**: Custom fallback image shown before playback starts or on unsupported devices.  
- **Video ratio**: Aspect ratio of the video container.
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
<div style={{ clear: 'both' }} />

## Smartphone (optional)

Override video sources and styling specifically for mobile devices:

<img src={require('/img/087.webp').default} alt="Video Smartphone (optional) settings" style={{ float: 'left', marginRight: '30px' }} />
- **Video upload**: Mobile-optimized video file (e.g., lower resolution).  
- **M3u8 video URL**: Mobile-specific HLS stream (optional).  
- **External video**: Mobile fallback (rarely needed—external platforms handle responsiveness).  
- **Poster image**: Mobile-specific poster image.  
- **Video ratio**: Aspect ratio for mobile (e.g., `9:16` for vertical video).
<div style={{ clear: 'both' }} />

## Style
<img src={require('/img/088.webp').default} alt="Video Style settings" style={{ float: 'left', marginRight: '30px' }} />
- **Radius**: Controls corner rounding of the video. Options include:
  > `rounded-0`: no corner, `rounded-1`, `rounded-2`, `rounded-3`,`rounded-4`,`rounded-5`,`rounded-circle`,`rounded-pill`.
<div style={{ clear: 'both' }} />

## Playback Settings

<img src={require('/img/089.webp').default} alt="Video Playback Settings settings" style={{ float: 'left', marginRight: '30px' }} />
- **Enable controls**: Show the video control bar.  
  When enabled, the following components can be toggled:
  - **Large play button**: Centered play button overlay  
  - **Show play button**: Play/pause button in the control bar  
  - **Show progress**: Seekable progress bar  
  - **Show current time**: Elapsed time display  
  - **Show duration**: Total video length  
  - **Show mute**: Mute/unmute toggle  
  - **Show volume**: Volume slider  
  - **Show speed settings**: Playback speed menu (e.g., 0.5x–2x)  
  - **Show fullscreen**: Fullscreen toggle button  

- **Enable clickToPlay**: Start/pause playback when the video area is clicked.  
- **Enable autoplay**: Automatically start playback on page load (*often blocked by browsers unless muted*).  
- **Enable muted**: Mute audio by default (required for autoplay on most browsers).  
- **Enable loop**: Restart video automatically when it ends.
<div style={{ clear: 'both' }} />

## Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
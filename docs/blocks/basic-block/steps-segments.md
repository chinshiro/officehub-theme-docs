---
title: Steps Segments
sidebar_position: 79
---

A visual indicator block that displays progress, ratings, or step-based scales (e.g., “Low – Medium – High” or “1 of 5 steps complete”). Commonly used for product fit scores, onboarding progress, or satisfaction scales.

## Steps Segments Parameters

- **Segments**: Total number of segments (dots) to display (e.g., `5` for a 5-point scale).  
- **Active segment**: Number of segments to mark as active/filled (e.g., `3` out of 5).  
- **Show labels**: Toggle visibility of descriptive labels below the segments.  
- **Left label**: Text shown under the first (leftmost) segment (e.g., “Poor”).  
- **Middle label**: Text shown under the center segment (e.g., “Average”).  
- **Right label**: Text shown under the last (rightmost) segment (e.g., “Excellent”).

## Style

- **Dot color schema (active)**: Color of filled/active dots, selected from theme color variables.  
- **Dot color schema (inactive)**: Color of unfilled/inactive dots.  
- **Labels color schema**: Text color for all labels.  
- **Border size**: Thickness of the dot border, in pixels (`px`).  
- **Dot size**: Diameter of each dot, in `px`.  
- **Show count**: Display a numeric indicator (e.g., “3/5”) alongside the segments.

## Animations on Scroll

- Apply entrance animations (e.g., fade, slide) as the Steps Segments block enters the viewport.  
- Requires **“Enabled animate element on scroll”** to be turned on in **Theme Settings > Advanced**.  
- Configuration follows standard scroll animation settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
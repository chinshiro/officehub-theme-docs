---
title: Button
sidebar_position: 66
---

A block for creating buttons or links.

## Main Parameters

- **Block class**: CSS class applied to the block container. For details, see: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)** 
- **Label**: The visible text of the button or link.  
- **Url**: The destination URL (e.g., `/collections`, `https://example.com`).  
- **Target**: How the link opens:  
  - `_blank` – Opens in a new browser tab/window  
  - `_self` – Opens in the same tab (default)  
  - `_parent` – Opens in the parent frame (used in iframes)  
  - `_top` – Opens in the full body of the window (breaks out of frames)

## Style

- **Style**: Visual appearance of the element:  
  - `Button` – Solid background with full fill  
  - `Button outline` – Hollow with border; background appears only on hover  
  - `Button ghost` – No border or background by default; both appear on hover  
  - `Link` – Text-only link with no button styling  

- **Color schema**: Choose a color from the theme’s predefined color variables in **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)** (e.g., `primary`, `secondary`, `danger`).  

- **Alignment (desktop)**: Horizontal alignment on desktop (left, center, right).  
- **Alignment (mobile)**: Horizontal alignment on mobile devices.

When link style is button (i.e., Style = Button, Button outline, or Button ghost)

- **Radius**: Corner roundness (e.g., `Rounded 1–5`, `Pill`, `Circle`).  
- **Size**: Button size – `Small`, `Default`, or `Large`.

## Add Icon

Optionally prepend or append an SVG icon to the heading.

- **Icon**: Choose from the theme’s built-in icon dropdown.  
- **Size**: Icon size (e.g., small, medium, large, or custom scale).  
- **Color schema**: Icon color, selected from theme color variables.  
- **Position**: Placement of the icon—`Before` (left of heading) or `After` (right of heading).

## Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
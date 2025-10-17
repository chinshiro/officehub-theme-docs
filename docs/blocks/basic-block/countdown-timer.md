---
title: Countdown Timer
sidebar_position: 71
---

Countdown Timer  
A countdown component for displaying time-limited promotions or sales.

## Parameters

### Block Class
- **Block class**: Custom CSS class applied to the block container for additional styling or spacing control. **[Blocks → Overview → General Settings](/blocks/overview#general-settings)** 

---

### Countdown Timer
- **Divider type**: Symbol used between time units. Options:  
  - `Colon` – Standard `:` (e.g., `02:15:30:45`)  
  - `Dot` – Small centered dot `•`  
  - `Line` – Vertical bar `|`  
  - `None` – No separator  
- **End date**: Required. The date when the countdown ends. Format: `YYYY-MM-DD`.  
- **End time (optional)**: The exact end time in 24-hour format (e.g., `17:00`). Uses your store’s configured timezone.  
- **End text**: Message displayed after the countdown expires (e.g., “Sale ended!” or “Offer expired”).  
- **Hide the timer when the date and time elapses**: Toggle to automatically hide the entire timer once the end time is reached.

---

### Countdown Style
- **Show wide countdown timer**: Expand the timer to 100% container width.  
- **Background**: Background color of the countdown container.  
- **Radius**: Corner roundness (e.g., `Rounded 1–5`, `Pill`, `Circle`).  
- **Alignment**: Horizontal alignment of the countdown content (left, center, right).  
- **Number color schema**: Text color for the countdown digits, selected from theme color variables.  
- **Number size**: Font size of the countdown numbers.  
- **Show labels**: Toggle visibility of time unit labels (e.g., “Days”, “Hours”).  
- **Labels size**: Font size of the labels.  
- **Labels color schema**: Text color for the labels, selected from theme color variables.

---

### Animations on Scroll
- Enable entrance animations as block enter the viewport.  
- Configuration follows the standard **Animations on Scroll** settings.  
- See: **[Blocks → Overview → Animations on scroll](/blocks/overview#animations-on-scroll)**
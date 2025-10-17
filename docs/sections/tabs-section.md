---
title: Tabs Section
sidebar_position: 55
---

# Tabs Section

The **Tabs Section** creates a tabbed interface that allows users to switch between different content panes within the same area. Unlike the Scrollspy Section (which scrolls the page), this section **hides inactive panes** and only displays the content of the currently selected tab—ideal for organizing dense information like specifications, reviews, or care instructions.

> 💡 **Key difference from Scrollspy Section**:  
> - **Tabs Section**: Clicking a tab instantly shows/hides content (no page scroll).  
> - **Scrollspy Section**: Clicking a tab scrolls to an anchored section; content remains on-page.

## Child Block: Tab / Scrollspy Pane

Each **Tab / Scrollspy Pane** represents a single tab and its associated content container.

### Settings
- **Name**: The label displayed in the tab navigation (e.g., “Specifications”, “Reviews”).  
- **Block class**: Custom CSS class for the section (useful for spacing or styling).  
- **Active show**: Manually set this pane as the initially active/highlighted tab on page load.

### Child Blocks
- Supports **all `@theme` blocks** (e.g., Heading, Text, Product Cards, Image, etc.).  
- Also supports **`@app` blocks** (app embeds and app blocks), enabling dynamic third-party content within tabs.
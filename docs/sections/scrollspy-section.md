---
title: Scrollspy Section
sidebar_position: 53
---

The **Scrollspy Section** creates an interactive tabbed interface where:
- Clicking a tab scrolls the page to its corresponding content area.
- As the user scrolls, the active tab is automatically highlighted based on the visible section.

This is ideal for long-form pages (e.g., product details, FAQs, or landing pages) that benefit from in-page navigation.

## Child Block: Tab / Scrollspy Pane

Each **Tab / Scrollspy Pane** represents a single tab and its associated content container.

### Settings
- **Name**: The label displayed in the tab navigation (e.g., “Specifications”, “Reviews”).  
- **Block class**: Custom CSS class for the section (useful for spacing or styling).  
- **Active show**: Manually set this pane as the initially active/highlighted tab on page load.

### Child Blocks
- Supports **all `@theme` blocks** (e.g., Heading, Text, Product Cards, Image, etc.).  
- Also supports **`@app` blocks** (app embeds and app blocks), enabling dynamic third-party content within tabs.
---
title: Overview
sidebar_position: 63
---

import Link from '@docusaurus/Link';

TaboQ theme provides a set of universal block components that can be freely added to any section. These blocks ensure consistent design and flexible layout control across your store.

## General Settings

### Full width / Background

The following settings are available in nearly every main block and section, allowing you to customize layout, spacing, and appearance uniformly.
	
	![General Block Settings](/img/038.webp)

- **Enable full width**: Expands the block container to 100% of the viewport width (ignoring the site’s maximum content width). Ideal for full-bleed banners or backgrounds.  
- **Block class**: Adds custom CSS classes to the block container—commonly used for utility classes like spacing (`mt-4`, `pb-6`) or custom styling hooks.  
	>Spacing utilities that apply to all breakpoints, from xs to xxl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

	>The classes are named using the format `{property}{sides}-{size}` for xs and `{property}{sides}-{breakpoint}-{size}` for sm, md, lg, xl, and xxl.

	>Where property is one of:
	> - **m** - for classes that set margin
	> - **p** - for classes that set padding

	>Where sides is one of:
	> - **t** - for classes that set `margin-top` or `padding-top`
	> - **b** - for classes that set `margin-bottom` or `padding-bottom`
	> - **s** - (start) for classes that set `margin-left` or `padding-left` in LTR, `margin-right` or `padding-right` in RTL
	> - **e** - (end) for classes that set `margin-right` or `padding-right` in LTR, `margin-left` or `padding-left` in RTL
	> - **x** - for classes that set both `*-left` and `*-right`
	> - **y** - for classes that set both `*-top` and `*-bottom`
	> - **blank** - for classes that set a `margin` or `padding` on all 4 sides of the element

	>Where size is one of:
	> - **0** - for classes that eliminate the margin or padding by setting it to 0
	> - **1** - (by default) for classes that set the margin or padding to 0.25rem
	> - **2** - (by default) for classes that set the margin or padding to 0.5rem
	> - **3** - (by default) for classes that set the margin or padding to 1rem
	> - **4** - (by default) for classes that set the margin or padding to 1.5rem
	> - **5** - (by default) for classes that set the margin or padding to 2rem
	> - **6** - (by default) for classes that set the margin or padding to 2.5rem
	> - auto - for classes that set the margin to auto
	
	>Examples:
	>```
	>py-md-6 py-4
	>```

- **Background**: Sets a solid color or gradient background for the block container.  
- **Or, use image**: Instead of a solid background, apply a predefined background image style from your **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)** (configured in Theme Settings). This option leverages your pre-saved image, repeat, position, and attachment settings for consistency.

### Animations on scroll

Scroll animations require the **AOS (Animate On Scroll)** library (`aos.js`) to be loaded. To enable this feature, go to **Theme Settings → Advanced** and turn on **“Enabled animate element on scroll”**.

Once enabled, you can configure scroll animations on individual blocks using the following parameters:
	
	![Animations on scroll](/img/039.webp)

- **Animation**: The type of entrance effect. Options include:  
  `fade`, `fade-up`, `fade-down`, `fade-left`, `fade-right`,  
  `flip-up`, `flip-down`, `flip-left`, `flip-right`,  
  `zoom-in`, `zoom-out`, `slide-up`, `slide-down`, etc.

- **Easing effects**: Controls the acceleration curve of the animation.  
  → Keep the default value unless you have a specific motion design requirement.

- **Anchor Placement**: Defines where in the viewport the animation should trigger.  
  Options: `top-bottom`, `top-center`, `top-top`, `center-bottom`, etc.  
  (e.g., `top-bottom` means the animation starts when the top of the element hits the bottom of the viewport)

- **Duration**: How long the animation lasts, in **milliseconds (ms)**.  
  Example: `600` = 0.6 seconds.

- **Delay**: Time to wait before starting the animation after it’s triggered, in **milliseconds (ms)**.  
  Example: `200` = 0.2-second delay.

## Blocks category
**Blocks** are the modular, reusable components that power your TaboQ theme. They can be added to sections, nested within other blocks, or used to build complex layouts—all without writing code.

This section is organized into four categories to help you find the right block for your needs:

<div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>

<div style={{ 
  backgroundColor: 'var(--ifm-card-background-color)', 
  padding: '1.5rem', 
  borderRadius: 'var(--ifm-global-radius)', 
  width: '300px',
  boxShadow: 'var(--ifm-global-shadow-lw)'
}}>
  <h3>🧱 Basic Block</h3>
  <p>Foundational elements: Heading, Text, Button, Image, Video, 3D Model, Countdown Timer, and more.</p>
  <Link 
    to="/blocks/basic-block/heading" 
    className="button button--primary button--lg"
    style={{ marginTop: '1rem' }}
  >
    <span>Explore →</span>
  </Link>
</div>

<div style={{ 
  backgroundColor: 'var(--ifm-card-background-color)', 
  padding: '1.5rem', 
  borderRadius: 'var(--ifm-global-radius)', 
  width: '300px',
  boxShadow: 'var(--ifm-global-shadow-lw)'
}}>
  <h3>📄 Specific Page Block</h3>
  <p>Blocks for native pages: List Collections, Blog Posts Lists, and more.</p>
  <Link 
    to="/blocks/specific-page-block/article-body-text" 
    className="button button--primary button--lg"
    style={{ marginTop: '1rem' }}
  >
    <span>Explore →</span>
  </Link>
</div>

<div style={{ 
  backgroundColor: 'var(--ifm-card-background-color)', 
  padding: '1.5rem', 
  borderRadius: 'var(--ifm-global-radius)', 
  width: '300px',
  boxShadow: 'var(--ifm-global-shadow-lw)'
}}>
  <h3>🔍 Subblocks of Specific Block</h3>
  <p>Specialized child blocks: Product Cards, Cart Checkout, Filters, Variant Picker, and more.</p>
  <Link 
    to="/blocks/subblocks/page-top-banner" 
    className="button button--primary button--lg"
    style={{ marginTop: '1rem' }}
  >
    <span>Explore →</span>
  </Link>
</div>

<div style={{ 
  backgroundColor: 'var(--ifm-card-background-color)', 
  padding: '1.5rem', 
  borderRadius: 'var(--ifm-global-radius)', 
  width: '300px',
  boxShadow: 'var(--ifm-global-shadow-lw)'
}}>
  <h3>🧩 Composite Function Block</h3>
  <p>Advanced features: Contact Form, FAQ Tabs, Discount Code, Pop Up, Custom Liquid, and more.</p>
  <Link 
    to="/blocks/composite-function-block/3d-model-with-text" 
    className="button button--primary button--lg"
    style={{ marginTop: '1rem' }}
  >
    <span>Explore →</span>
  </Link>
</div>

</div>
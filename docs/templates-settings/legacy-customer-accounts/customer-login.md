---
title: Customer Login
sidebar_position: 124
---

The **Customer Login** section is the main container for the `main-login` template, used on customer account login and password reset pages (e.g., `/account/login`, `/account/recover`). It provides a branded, secure interface for user authentication.

## Settings

### Layout & Background
- **Enable full width content**: Expand the login page to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire login section.  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Login Card
- **Card style**: Visual preset for the login form container from **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**.  
- **Width**: Card width as a percentage or fixed value (e.g., `100%`, `50%`).  
- **Alignment**: Horizontal position—`left`, `center`, or `right`.  
- **Logo**: Display your store logo above the form (uses **Dark** logo by default).  
	- **Dark**: Display your primary (dark) logo  
	- **Light**: Display your alternate (light) logo—ideal for dark backgrounds  
	- **Store name**: Show your store name as text (uses font from **Theme Settings → Typography**)  
	- **Hide**: Display nothing (minimalist look)
- **Enable Sign in with Shop**: Show Shopify’s “Sign in with Shop” button for faster checkout (requires Shop app integration).

### Form Style
- **Input style**: Styling for email/password fields from **[Theme Settings → Style scheme settings → Input Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-9-input-style-schema)**.  
- **Forgot password color schema**: Link color for “Forgot your password?” from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.  
- **Icon lock color schema**: Color of the lock icon in the password field, from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

---

## Child Blocks

### Heading - Login
> Main title (e.g., “Sign in to your account”). Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  
### Sign in button
> Primary login button. Full settings managed via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  
### Create account link
> “Create account” call-to-action (links to `/account/register`). Styled as a text link or button. 
	Full settings managed via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  
### Heading – Reset your password*
> Title for the password recovery form (e.g., “Reset your password”). Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  
### Reset password button
> Submit button for password reset requests. Configured via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.
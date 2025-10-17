---
title: Customer Reset Password
sidebar_position: 130
---

The **Customer Reset Password** section is the main container for the `main-reset_password` template, used on the password recovery page (`/account/reset/[token]`). It provides a secure, branded form for customers to reset their account password.

## Settings

- **Enable full width content**: Expand the reset password form area to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire section (useful for spacing or layout overrides).  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Reset Card
- **Card style**: Visual styling for the form container (border, shadow, radius) from **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**.  
- **Width**: Form width as a percentage (e.g., `100%`, `60%`).  
- **Alignment**: Horizontal alignment—`left`, `center`, or `right`.  
- **Logo**: Optional logo displayed at the top of the form (overrides store logo if set).  
- **Input style**: Styling for the password fields, from **[Theme Settings → Style scheme settings → Input Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-9-input-style-schema)**.

---

## Child Blocks

### Heading – Reset password
> The main title of the reset form.  Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

### Button – Reset password
> Primary action button to confirm the new password.  Full settings managed via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  

> 💡 All child blocks inherit global theme styles and can be customized via the Theme Editor.
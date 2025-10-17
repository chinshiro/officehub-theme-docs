---
title: Customer Register
sidebar_position: 129
---

The **Customer Register** section is the main container for the `main-register` template, used on the customer account registration page (`/account/register`). It provides a clean, branded form for new users to create an account.

## Settings

- **Enable full width content**: Expand the registration form area to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire section (useful for spacing or layout overrides).  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Register Card
- **Card style**: Visual styling for the form container (border, shadow, radius) from **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**.  
- **Width**: Form width as a percentage (e.g., `100%`, `60%`).  
- **Alignment**: Horizontal alignment—`left`, `center`, or `right`.  
- **Logo**: Optional logo displayed at the top of the form (overrides store logo if set).  
- **Input style**: Styling for all form fields (name, email, password), from **[Theme Settings → Style scheme settings → Input Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-9-input-style-schema)**.

---

## Child Blocks

### Heading – Create account
> The main title of the registration form.  Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

### Submit button – Create account
> Primary action button to submit the form.  Full settings managed via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  

### Login link – Log in here
> Link to the login page for existing customers.  Full settings managed via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  

### Return link – Return to Store
> Link back to the homepage or previous page.  Full settings managed via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  

> 💡 All child blocks inherit global theme styles but can be further customized via their respective block settings in the Theme Editor.
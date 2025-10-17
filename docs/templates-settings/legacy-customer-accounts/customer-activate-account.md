---
title: Customer Activate Account
sidebar_position: 126
---

The **Customer Activate Account** section is the main container for the `main-activate_account` template, used when a customer receives an invitation to create an account (e.g., via staff-initiated invite or wholesale onboarding). It provides a secure interface to set a password and activate the account—or decline the invitation.

## Settings

- **Enable full width content**: Expand the activation form area to 100% of the viewport width.  
- **Section class**: Custom CSS class for the entire section (useful for spacing or layout overrides).  
- **Background**: Set a solid or gradient background color.  
- **Or, use image**: Apply a background image using a preset from **[Theme Settings → Style scheme settings → Background Image Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-2-background-image-schema)**.  
  > All four settings above follow: **[Blocks → Overview → General Settings](/blocks/overview#general-settings)**

### Activate Card
- **Card style**: Visual styling for the form container (border, shadow, radius) from **[Theme Settings → Style scheme settings → Cards Style Schema](/theme-settings/style-scheme-settings#-3-cards-style-schema)**.  
- **Width**: Form width as a percentage (e.g., `100%`, `60%`).  
- **Alignment**: Horizontal alignment—`left`, `center`, or `right`.  
- **Logo**: Optional logo displayed at the top of the form (overrides store logo if set).  
- **Input style**: Styling for the password fields, from **[Theme Settings → Style scheme settings → Input Style Schema](/theme-settings/style-scheme-settings#%EF%B8%8F-9-input-style-schema)**.  
- **Icon lock color**: Color of the lock icon (used to indicate secure password entry), selected from **[Theme Settings → Basic Settings → Colors](/theme-settings/basic-settings#-4-colors)**.

---

## Child Blocks

### Heading – Activate account
> The main title of the activation form.  Settings follow **[Blocks → Basic Block → Heading](/blocks/basic-block/heading)**.  

### Button – Activate account
> Primary action button to confirm and activate the account with a new password. Full settings managed via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.   

### Button – Decline invitation
> Option to reject the account invitation (removes the pending account).  Full settings managed via **[Blocks → Basic Block → Button](/blocks/basic-block/button)**.  

> 💡 All child blocks inherit global theme styles and can be further customized via the Theme Editor.
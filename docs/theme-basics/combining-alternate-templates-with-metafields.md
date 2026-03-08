---
title: Combining Alternate Templates with Metafields
sidebar_position: 17
---

# Combining Alternate Templates with Metafields

Before diving into this guide, we recommend reviewing our articles on:
- [Managing Alternate Templates](/theme-basics/managing-alternate-templates)
- [Using Metafields and Metaobjects](/theme-basics/using-metafields-and-metaobjects)

These two powerful Shopify features—**alternate templates** and **metafields**—are often seen as separate tools. But when used **together**, they unlock a flexible, scalable, and maintainable way to customize your store.

---

## 🤔 When to Use Templates vs. Metafields?

A common point of confusion is:  
> *“Should I create a new template or use a metafield?”*

Here’s a simple rule of thumb:

| OfficeHub | Solution |
|--------|--------|
| **Sections differ** (e.g., one product needs specs table, another needs a demo video) | ➡️ **Create alternate templates** |
| **Sections are the same, but content varies per product** | ➡️ **Use metafields** |

✅ **Best practice**: **Combine both** for maximum flexibility and efficiency.

---

## 🧵 Real-World Example: Office Computers vs. Office Sofas

Imagine your B2C store sells two very different product categories with distinct presentation needs:

### 💻 **Office Computers**
- Show standard product info (price, images, description)
- Display a **unique “技术规格”** for each model (e.g., CPU, RAM, SSD capacity)—**different for every SKU**

### 🛋️ **Office Sofas**
- Show standard product info
- Include a **“Space matching suggestions” video** that’s **identical for all sofas** (e.g., a 60-second video showing how the sofa fits in a modern office)

### ✅ Ideal Setup:

#### 1. **Create Two Alternate Templates**
- `product.office-computer` → includes:  
  - Default product section  
  - A **rich text section** (to display technical specs)
- `product.office-sofa` → includes:  
  - Default product section  
  - A **video section** (with a fixed styling video)

> Assign the correct template to each product in the Shopify admin.

#### 2. **Use Metafields Only Where Needed**
- For **Office Computers**:  
  - Create a **product metafield** named `technical_specs` (type: *Rich text*)  
  - In the `product.office-computer` template, connect this metafield to the rich text section  
  - Now each computer model can show its **own detailed specs**—no extra templates needed!

- For **Office Sofas**:  
  - Since the video is the **same for all**, just **upload it directly** in the `product.office-sofa` template  
  - Updating the video once updates it for **every sofa**

---

## 🚫 What *Not* to Do

❌ **Creating a separate template for every computer model** (e.g., `computer-dell-xps`, `computer-lenovo-thinkpad`, etc.) just to change the specs.

**Why this is bad**:
- Leads to **template bloat** (dozens or hundreds of templates)
- Makes store management **slow and error-prone**
- Increases risk of **inconsistencies** during updates
- Violates Shopify’s best practices for maintainability

> 🔁 Remember: **Templates define structure. Metafields define content.**

---

## 💡 Key Benefits of This Approach

- ✅ **Only 2 templates** for 2 product categories—clean and scalable  
- ✅ **Dynamic, per-product content** without code  
- ✅ Easy to update: change a video once, or edit specs per product  
- ✅ Future-proof: add new computers or sofas without touching templates

---

## 🛠️ How to Implement

1. **Create metafields** (Shopify Admin > Settings > Metafields > Products)  
   - Name: `Technical Specs`  
   - Type: *Rich text*
2. **Create alternate templates** via Theme Editor  
   - Name them clearly: `office-computer`, `office-sofa`
3. **Connect the metafield** in the computer template using the 🗃️ database icon
4. **Assign templates** to products in the Shopify admin

📘 For detailed steps, refer to:
- [Managing Alternate Templates](#)
- [Using Metafields and Metaobjects](#)

---

> 🌟 **Final Tip**: Use templates for **layout differences**, and metafields for **content variations**. Together, they give you enterprise-level flexibility—without a single line of custom code.
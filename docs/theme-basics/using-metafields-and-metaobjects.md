---
title: Using Metafields and Metaobjects
sidebar_position: 15
---

# Using Metafields and Metaobjects

**Metafields** and **metaobjects** are powerful Shopify features that let you store and display **custom data**—beyond what’s available in the standard Shopify admin—directly on your online store, **without writing code**.

While incredibly useful, they can feel complex at first. This guide explains what they are, when to use them, and how to display them in your theme.

---

## 🏷️ What Are Metafields?

**Metafields** let you attach **custom information** to Shopify resources like products, collections, pages, and more—information that isn’t supported natively in the admin.

### Common Use Cases:
- Product **ingredients** or **materials**
- **Launch date** or **seasonal availability**
- **Volume capacity** (e.g., “500ml”)
- **Care instructions** (e.g., “Machine wash cold”)
- **Explanatory videos** (via URL or embed)
- Internal **SKU notes** or **supplier codes**

> ✅ Example: You sell skincare products and want to show a **“How to Use”** guide that’s unique to each item. Since Shopify doesn’t have a built-in field for this, you’d use a metafield.

### How to Use Metafields:
1. **Create** a metafield in **Shopify Admin > Settings > Metafields**.
2. **Assign** it to a resource type (e.g., “Products”).
3. **Fill in** the value for each product.
4. **Display** it on your store using the **Theme Editor** (see below).

📘 For step-by-step instructions, see [Shopify’s official metafields guide](https://help.shopify.com/en/manual/custom-data/metafields).

> 🛠️ Need help setting up metafields? Contact [Shopify Support](https://help.shopify.com/).

---

## 🖼️ Displaying Metafields in Your Theme

Once created, metafields can be **connected directly in the Theme Editor**—no coding required.

### To connect a metafield:
1. Open the **Theme Editor** (Online Store > Themes > Customize).
2. Select a section or block that supports dynamic content (e.g., a product info section).
3. Next to a compatible setting (e.g., a text field), click the **database icon** 🗃️.

   ![Database icon for connecting metafields in Shopify Theme Editor](/img/012.webp)

4. Choose the metafield you want to display from the list.

> ⚠️ **Important**:  
> - Metafields must **match the setting type** (e.g., an *image* metafield can only connect to an image setting).  
> - Some metafield types (e.g., **PDF files**, **JSON**, or **file references**) **cannot be connected** in the editor.  
> - **Variant-level metafields** are **not supported** in the Theme Editor—you’ll need a developer to display them.

> 💡 **Tip**: If you have a specific use case that isn’t supported, share it with [Shopify Support](https://help.shopify.com/). Your feedback helps shape future features!

---

## 📦 What Are Metaobjects?

**Metaobjects** are **groups of related metafields** treated as a single structured entity. Think of them as “custom content types.”

### Example Use Case:
You sell furniture and want to show **designer profiles** (name, bio, photo, country) across multiple product pages. Instead of creating 4 separate metafields per product, you create **one metaobject** called “Designer,” then link it to products.

### When to Use Metaobjects:
- Managing **complex, reusable content** (e.g., team members, certifications, size charts)
- Avoiding repetitive metafield setup
- Building **structured data relationships**

> ⚠️ **Note**: Metaobjects are **advanced** and rarely needed for new stores. Most merchants start with basic metafields and adopt metaobjects only as their store scales.

📘 Learn more in [Shopify’s metaobjects documentation](https://help.shopify.com/en/manual/metaobjects).

---

## 🧭 Best Practices & Recommendations

- ✅ **Start simple**: Use metafields before diving into metaobjects.
- ✅ **Name clearly**: Use descriptive names like `product.care_instructions` (Shopify auto-generates handles).
- ❌ **Don’t overuse**: Only create metafields you’ll actually display or use.
- 🛠️ **For variants or unsupported types**: Hire a [Shopify Expert](https://www.shopify.com/experts) for custom development.

> 💡 **Remember**: The goal is to **enhance your store—not complicate it**. Use metafields to solve real customer or business needs, not just because you can.

---

> 🌟 **Final Tip**: Metafields unlock endless customization—while keeping your store fast, maintainable, and upgrade-safe. Use them wisely!
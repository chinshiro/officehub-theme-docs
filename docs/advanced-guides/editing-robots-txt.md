---
title: Editing Robots.txt
sidebar_position: 146
---

# Editing Robots.txt

Editing the `robots.txt` file is an **advanced and high-risk action**. The default `robots.txt` provided by Shopify is already **optimized for SEO**, and in most cases, **should not be modified**.

:::warning
Even a small syntax error in `robots.txt` can **block search engines from indexing your entire store**, resulting in **zero organic traffic**.  
**Our support team cannot be held responsible** for issues caused by incorrect `robots.txt` customizations. Only proceed if you fully understand the implications.
:::

---

## 🤖 What Is robots.txt?

Search engines like Google use automated programs called **crawlers** (or bots) to discover and index web pages. The `robots.txt` file acts as a set of instructions that tells these crawlers:
- Which pages or directories **should be crawled**
- Which pages **should be ignored**

All Shopify stores come with a **default, SEO-friendly `robots.txt`** that:
- Allows crawling of product, collection, blog, and page URLs  
- Blocks administrative and duplicate URLs (e.g., cart, search, sort parameters)  
- Prevents indexing of low-value pages that could dilute SEO

You can view your store’s current file at:  
`https://your-store.com/robots.txt`

---

## 🛠️ Can You Customize robots.txt?

Yes—but **only if absolutely necessary** (e.g., blocking staging pages, restricting API endpoints, or complying with legal requirements).

### Important Notes:
- Shopify **does not create a custom `robots.txt` by default**—your store uses Shopify’s managed version.  
- To override it, you must **manually create a `robots.txt.liquid` file** in your theme’s **Assets** folder.  
- Once created, **your version replaces Shopify’s default entirely**—use with extreme caution.

📘 For step-by-step instructions, see [Shopify’s official documentation on robots.txt](https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt#edit-robots-txt-liquid).

---

## ✅ When Might You Need to Edit robots.txt?

Very rare scenarios include:
- Blocking specific URL patterns (e.g., `/apps/`, `/search?q=*`)  
- Preventing indexing of a password-protected staging theme  
- Complying with regional data regulations

> 🚫 **Do NOT edit robots.txt to**:  
> - “Improve SEO” (the default is already optimal)  
> - Hide low-quality content (fix the content instead)  
> - Block competitors (it doesn’t work that way)

---

## 🔒 Best Practice

**Leave it alone unless directed by an SEO specialist or legal requirement.**  
If you’re unsure, **do not create or modify** `robots.txt.liquid`.

> 💡 **Remember**: A missing or invalid `robots.txt` is often safer than a misconfigured one. Search engines will simply crawl your site using standard rules.
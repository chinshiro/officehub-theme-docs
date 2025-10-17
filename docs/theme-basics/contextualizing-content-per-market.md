---
title: Contextualizing Content Per Market
sidebar_position: 23
---

# Contextualizing Content Per Market

**Shopify Markets** lets you tailor your store experience for customers in different countries—not just by language or currency, but by **customizing content itself**.

With **market contextualization**, you can:
- Show a **different slideshow image** for customers in Japan vs. France  
- **Feature a locally relevant product** on your homepage in Germany  
- Highlight a **region-specific collection** in your “Featured” section for the U.S.

---

## 🌍 Prerequisites

Before using market contextualization:
1. You must have **at least two active markets** set up in **Shopify Admin > Settings > Markets**.
2. Ensure your theme is **published** (contextualization only works on the live theme).

📘 Learn how to set up markets: [Shopify’s Markets documentation](https://help.shopify.com/en/manual/markets)

---

## ✏️ How to Customize Content Per Market

1. Open the **Theme Editor** (Online Store > Themes > Customize).
2. At the top of the editor, use the **market picker** to select the market you want to customize (e.g., “France – EUR”).

   ![Market selector in Shopify Theme Editor](/img/020.webp)

3. Edit any section or block as needed (e.g., change an image, swap a product, update text).
4. Once saved, a **small green icon** 🟢 will appear next to any contextualized element, indicating it’s customized for that market.

	![Section in Market](/img/021.webp)

> ✅ Changes apply **only to the selected market**—the default market and other markets remain unaffected.

---

## ❓ Frequently Asked Questions

### **I made changes, but they don’t appear on my live store. Why?**

This is a common issue! Here’s why:

- The **Theme Editor always shows the default market** by default.
- Your **live store shows the contextualized version** for your current location (based on IP or manual selection).
- If you’ve customized a market, **changes to the default market won’t sync automatically** to contextualized versions.

✅ **Solution**:  
After editing the default market, **repeat the change in each contextualized market** where you want it to appear.

> 🔍 Tip: Use **private browsing** or a **VPN** to preview your store as a customer in another country.

---

### **What’s the difference between translation and contextualization?**

| Feature | Translation (e.g., via *Translate & Adapt*) | Contextualization |
|--------|---------------------------------------------|------------------|
| **Purpose** | Translate existing content into other languages | Create **different layouts or content** per market |
| **Use case** | “Add to cart” → “Ajouter au panier” | Show **winter coats** in Canada, **swimwear** in Australia |
| **Complexity** | Low — content stays synced across markets | High — each market becomes independent |
| **Maintenance** | Easy — one source of truth | Hard — changes must be applied per market |

> ✅ **Best Practice**:  
> - Use **translation** for language-only changes.  
> - Use **contextualization sparingly**—only when you need truly different experiences (e.g., product assortment, promotions, imagery).

---

### **Can I delete a contextualization?**

Yes. If you no longer need market-specific content:
- In the Theme Editor, switch to the contextualized market.
- Click the **“Reset to default”** option (usually appears near the green contextualization icon).
- This removes the override and reverts the section/block to match the default market.

📘 Full instructions: [Shopify’s guide to managing contextualized content](https://help.shopify.com/en/manual/online-store/themes/theme-structure/contextualized-content)

---

## ⚠️ Important Considerations

- **Performance**: Each contextualized market increases management overhead—avoid overusing it.
- **SEO**: Ensure localized content includes relevant keywords for each market.
- **Testing**: Always preview your store in each market to verify accuracy.

> 🌟 **Final Tip**: Start with **translation + minor contextualization** (e.g., hero banners). Only expand to full page overrides if your business truly requires it.
---
title: Improving Store Performance
sidebar_position: 145
---

Before reading this article, we strongly recommend reviewing **[Understanding Pagespeed Score](/advanced-guides/understanding-pagespeed-score)** to grasp core performance concepts. Performance optimization is an ongoing effort—not a one-time fix.

---

## 🚫 Reducing the Usage of Apps  
**Potential improvement: Very High**

Apps are the **#1 cause of performance degradation**. A single poorly coded app can reduce your Pagespeed score by **10–20 points**.

- ✅ **Not all apps impact performance**: Backend-only apps (e.g., inventory sync) often have no frontend effect.  
- ❌ **Frontend apps** (e.g., pop-ups, reviews, loyalty) inject scripts that slow down your store.  
- 🛑 **Before installing**: Ask: *“Is this app essential to my business?”* If not, skip it.  
- 💬 **Contact developers** to understand their performance practices.

---

## 🧹 Removing App "Dead Code"  
**Potential improvement: Very High**

When you uninstall an app, it **revokes the developer’s access**—but **doesn’t automatically remove its code** from your theme. This “dead code” lingers and slows your store.

- ✅ **Best practice**: After uninstalling, **contact the app developer** to confirm if manual cleanup is needed.  
- 🔍 **Note**: Modern apps using **App Blocks** (Online Store 2.0) **auto-remove** their code—no cleanup required.

---

## 🖼️ Optimizing Images  
**Potential improvement: Very High**

Shopify optimizes images **after upload**, but **pre-compression is critical**.

- ✅ **Before uploading**:  
  - Use **[TinyPNG](https://tinypng.com/)** or **[Squoosh](https://squoosh.app/)** to compress JPG/PNG.  
  - Convert to **WEBP** (smaller than JPG/PNG with same quality).  
- 🤖 **Automate**: Use apps like **Crush.pics** to auto-optimize new uploads.

---

## 📦 Using the Appropriate Image Format  
**Potential improvement: High**

- ❌ **Avoid GIF**: Extremely heavy; use **MP4 video** for animations instead.  
- ⚠️ **Limit PNG**: Only use when **transparency is required** (JPG doesn’t support it). PNG files are **2–3× larger** than JPG.  
- ✅ **Prefer WEBP or JPG**: Best balance of quality and file size.

---

## 🔄 Upgrading Your Theme  
**Potential improvement: High**

We regularly release **performance-optimized updates** with:
- Bug fixes  
- New features  
- **Faster code** (e.g., lighter JavaScript, improved lazy loading)

✅ **Action**: Check for updates in **Shopify Admin > Themes** and **upgrade** if you’re on an older version.

---

## 🧱 Using Sections Responsibly  
**Potential improvement: Medium**

Each section adds HTML, CSS, and JavaScript. More sections = slower load.

- ✅ **Limit to 10–12 sections per page** (see [Best Practices for Using Sections](/theme-basics/best-practices-for-using-sections)).  
- ❌ Avoid stacking multiple heavy sections (e.g., 3 carousels + video + 3D model).

---

## 🔤 Limiting the Number of Fonts  
**Potential improvement: Medium**

Custom fonts require **extra downloads**, delaying text rendering.

- ✅ **Use system fonts** (e.g., `System UI`, `San Francisco`, `Segoe UI`)—they’re **pre-installed** on all devices.  
- ❌ Avoid loading multiple Google Fonts or custom web fonts.

---

## 🎥 Limiting the Number of Videos  
**Potential improvement: Medium**

Videos enhance UX but impact performance—even with lazy loading.

- ✅ **Max 4–6 videos per page**.  
- ✅ **Use MP4** (hosted on Shopify) instead of **YouTube/Vimeo** (third-party scripts slow load times).  
- 🎯 Place videos **below the fold** to avoid blocking LCP.

---

## 📊 Using Analytics Responsibly  
**Potential improvement: Medium**

**Never add analytics code directly** to your theme.

- ✅ **Use Shopify’s native integrations**:  
  - Google Analytics → **Shopify Admin > Settings > Analytics**  
  - Meta Pixel → **Shopify Admin > Marketing > Pixels**  
- ❌ Avoid pasting tracking scripts into `theme.liquid`—this blocks rendering.

---

## ⚙️ Removing Costly Features  
**Potential improvement: Medium**

Some Shopify features add heavy JavaScript:

- **Dynamic checkout buttons** (Apple Pay, PayPal, etc.)  
- **Shopify Inbox**  
- **Wishlist apps**

✅ **Trade-off**: Disabling these **may improve performance** but **could reduce conversions**.  
🔬 **Test first**: Run **A/B tests** to measure impact on sales vs. speed.

---

## 🌫️ Turning Off Page Transitions  
**Potential improvement: Small**

Some themes (e.g., Impact, Prestige) offer **fade-in/fade-out page transitions**. While visually smooth, they add **~150ms artificial delay** per navigation.

✅ **To disable**:  
1. Open **Theme Editor**  
2. Go to **Theme Settings > Animation**  
3. Turn off **“Show page transition”**

> ⚠️ **Note**: Scenario does **not include page transitions** by default—this setting only applies if you’ve added it via custom code.

---

## 🚀 Final Tip: Prioritize High-Impact Actions

Focus on the **top 3 fixes** first:
1. **Audit and remove unused apps**  
2. **Compress and convert images to WEBP**  
3. **Limit sections to 12 per page**

These alone can boost your score by **20–30 points**—with minimal effort.

> 🔗 **Next step**: Hire a vetted expert from the **[Shopify Partner Directory](https://www.shopify.com/experts)** for advanced optimization (e.g., custom code cleanup, LCP tuning).

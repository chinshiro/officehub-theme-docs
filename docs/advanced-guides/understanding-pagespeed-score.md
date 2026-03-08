---
title: Understanding Pagespeed Score
sidebar_position: 140
---

Performance is a complex yet critical topic—and a common source of confusion for merchants. This guide addresses shared concerns and provides **actionable, realistic advice** to improve your store’s performance—without chasing misleading scores.

---

## 📊 Measuring Your Store Performance

Many tools exist (e.g., **PageSpeed Insights**, **Lighthouse**), but we recommend using **Shopify’s built-in performance score** (powered by Lighthouse and adapted for e-commerce).  
📘 Learn more in [Shopify’s official performance documentation](https://help.shopify.com/en/manual/online-store/web-performance).

---

## ❓ Is Performance Important?

**Yes—but context matters.**

- ✅ **Good performance** improves SEO and reduces bounce rates.  
- ⚠️ **But**: A high **Pagespeed score ≠ business success**.  
- E-commerce stores **require rich media, apps, and dynamic features**—unlike simple blogs. These inherently impact scores.

> 🎯 **Key insight**: If an app or feature **boosts sales** but lowers your score by 10–15 points, **it’s often worth it**. Prioritize **user experience and conversion** over perfect scores.

---

## 🧩 How Does the Theme Impact Performance?

All **Scenario themes are performance-optimized**:
- Minimal, efficient JavaScript and CSS  
- Smart image loading (e.g., LCP-aware lazy loading)  
- Zero layout shifts (CLS-optimized by default)

> ✅ **Trust us**: We’ve spent hundreds of hours optimizing code. **The theme is rarely the bottleneck.**  
> If your store is slow, the cause is almost always **apps, media, or third-party scripts**—not the theme.

---

## 🆚 “But the Free Theme Is Faster!”

It’s true that **Dawn** (Shopify’s free theme) may score slightly higher—but it’s not an apples-to-apples comparison:

| Feature | Dawn (Free) | Scenario (Premium) |
|--------|------------|----------------|
| Sections | ~10 basic sections | 50+ advanced sections |
| Media | Basic image support | Video, 3D models, galleries, carousels |
| UX | Minimal interactivity | Rich interactions, quick-buy, sticky elements |

> 💡 **Trade-off**: Advanced features = slightly lower scores. But if they **increase conversions**, the trade-off is justified.

---

## 🎯 What’s a “Good” Performance Score?

Forget “100.” For **real-world e-commerce stores**, here’s a realistic benchmark:

| Score Range | Interpretation |
|-----------|----------------|
| **70+** | Excellent. Faster than 99% of websites. **No action needed.** |
| **45–70** | Good. Functional for most users. Optimize only if you have bandwidth. |
| **25–45** | Acceptable, but may feel slow on mobile or 3G. Consider light cleanup. |
| **< 25** | Poor. Likely hurting SEO and conversions. **Take action.** |

> 📌 **Goal**: Aim for **≥50**. Anything above **70** is exceptional for a feature-rich store.

---

## ⚠️ Beware of “90+ Score” Promises

Avoid “performance apps” or freelancers (e.g., on Fiverr) promising **90+ scores** for $50. These often:

- **Break core functionality** (cart, checkout, analytics)  
- **Hide content from Google** (via delayed rendering)  
- **Disable essential scripts** (payment, tracking, personalization)

> 🛑 **Result**: Higher scores—but **lower sales, broken tracking, and lost data**. Not worth the risk.

---

## 🌐 Understanding Core Web Vitals

Google’s **Core Web Vitals** directly impact your Pagespeed score. Here’s how Scenario handles them—and what you can do:

### 📏 CLS (Cumulative Layout Shift)
- **What it is**: Unexpected layout shifts (e.g., images jumping after load).  
- **Scenario status**: **Optimized by default** (no CLS from theme).  
- **Your action**:  
  - Avoid apps that inject content after load  
  - Use `width`/`height` on images  
  - Prefer system fonts over custom web fonts (or use `font-display: swap`)

### 🖼️ LCP (Largest Contentful Paint)
- **What it is**: Time to load the main visual element (e.g., hero image, product photo).  
- **Scenario status**: Smart preloading for likely LCP elements.  
- **Your action**:  
  - Place **slideshow or text hero** as the **first section** on homepage  
  - **Compress images** (use **WEBP**, max **2560px wide**)  
  - Avoid huge hero videos on slow connections

### ⚡ FID / INP (Interaction Metrics)
- **FID** (First Input Delay) is being replaced by **INP** (Interaction to Next Paint) in 2024.  
- Measures responsiveness to clicks, taps, and scrolls.  
- **Scenario status**: Lightweight, deferred JavaScript.  
- **Your action**:  
  - **Remove unused apps** (biggest cause of poor INP)  
  - **Limit heavy sections** (e.g., only 1 slideshow per page)  
  - Avoid “mega-menus” with 100+ links

---

## 🛠️ What Can You Actually Do?

Focus on **high-impact, low-effort wins**:

1. **Audit apps**: Remove any unused or redundant apps.  
2. **Optimize images**: Convert to **WEBP**, compress, and use proper dimensions.  
3. **Limit sections**: Keep pages under **15 sections** (see [Best Practices for Using Sections](/theme-basics/best-practices-for-using-sections)).  
4. **Avoid custom code**: Unless absolutely necessary—every script adds weight.  
5. **Test on real devices**: Use **Chrome DevTools > Lighthouse** on mobile 3G throttling.

> 🔗 **Next step**: See our full guide: [Improving Store Performance](/advanced-guides/improving-store-performance).

---

> 💡 **Final Thought**:  
> **Don’t optimize for robots—optimize for humans.**  
> A store that loads in **2.5 seconds** with **great UX** will always outperform a “100-score” store that feels empty and lifeless.
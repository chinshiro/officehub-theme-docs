#!/bin/bash

# generate-docs.sh
# 自动生成 OfficeHub 主题文档的所有 .md 文件（带 front matter）
# 运行前确保在 Docusaurus 项目根目录

set -e

DOCS_DIR="docs"

echo "📁 确保 docs 目录存在..."
mkdir -p "$DOCS_DIR"

# 定义所有文档路径
paths=(
  # Getting Started
  "getting-started/overview"
  "getting-started/support-policy"
  "getting-started/browser-support"
  "getting-started/accessibility"
  "getting-started/theme-licensing-and-transfers"
  "getting-started/theme-changelog"

  # Theme Basics
  "theme-basics/editing-your-theme"
  "theme-basics/updating-your-theme"
  "theme-basics/using-sections-blocks-responsibly"
  "theme-basics/seo-best-practices"
  "theme-basics/changing-default-theme-content"
  "theme-basics/understanding-sections-and-blocks"
  "theme-basics/managing-alternate-templates"
  "theme-basics/using-metafields-and-metaobjects"
  "theme-basics/understanding-app-embeds-app-blocks"
  "theme-basics/combining-alternate-templates-with-metafields"
  "theme-basics/multi-languages-currencies-internationalization"
  "theme-basics/image-size-recommendations"
  "theme-basics/remove-powered-by-shopify-link"
  "theme-basics/access-the-collaborator-code"
  "theme-basics/hiring-shopify-expert"
  "theme-basics/contextualizing-content-per-market"
  "theme-basics/b2b-features"

  # Theme Settings
  "theme-settings/layout-root"
  "theme-settings/logo"
  "theme-settings/favicon"
  "theme-settings/colors"
  "theme-settings/typography"
  "theme-settings/cart"
  "theme-settings/currency-format"
  "theme-settings/social-media"
  "theme-settings/translation"
  "theme-settings/swatches"
  "theme-settings/variant-swatches-schema"
  "theme-settings/background-image-schema"
  "theme-settings/cards-style-schema"
  "theme-settings/selector-style-schema"
  "theme-settings/dropdown-style-schema"
  "theme-settings/navbar-style-schema"
  "theme-settings/mega-style-schema"
  "theme-settings/price-style-schema"
  "theme-settings/input-style-schema"
  "theme-settings/inventory-level-style-schema"
  "theme-settings/sales-status-style-schema"
  "theme-settings/search-style-schema"
  "theme-settings/tags-style-schema"
  "theme-settings/advanced"
  "theme-settings/custom-css"

  # Header Group
  "header-group/announcement-bar"
  "header-group/header"
  "header-group/modal-top-bar"

  # Sections
  "sections/featured-collection"
  "sections/featured-product"
  "sections/rich-text"
  "sections/image-with-text"
  "sections/slideshow"
  "sections/newsletter"
  "sections/custom-liquid"
  "sections/3d-model-with-text"
  "sections/background-video"
  "sections/blog-posts"
  "sections/carousel"
  "sections/contact-us"
  "sections/countdown-timer"
  "sections/faq"
  "sections/general-section"
  "sections/hotspots"
  "sections/key-features"
  "sections/map-dealer-multi-store"
  "sections/map-main-store"
  "sections/multi-columns"
  "sections/pop-up"
  "sections/product-description"
  "sections/scrolling-banner"
  "sections/scrollspy-section"
  "sections/sidebar-section"
  "sections/store-messages"
  "sections/tabs-section"
  "sections/testimonials"
  "sections/timelines"
  "sections/video-with-text"

  # Footer Group
  "footer-group/store-messages"
  "footer-group/footer"

  # Overlay Group
  "overlay-group/cart-sidebar"
  "overlay-group/pop-up"

  # Blocks - Basic Block
  "blocks/basic-block/heading"
  "blocks/basic-block/text"
  "blocks/basic-block/button"
  "blocks/basic-block/3d-model"
  "blocks/basic-block/image"
  "blocks/basic-block/video"
  "blocks/basic-block/collapsible-tab"
  "blocks/basic-block/countdown-timer"
  "blocks/basic-block/currency-language"
  "blocks/basic-block/faq-search-bar"
  "blocks/basic-block/navigation"
  "blocks/basic-block/newsletter-form"
  "blocks/basic-block/payment-icons"
  "blocks/basic-block/stars"
  "blocks/basic-block/steps-segments"
  "blocks/basic-block/store-map"
  "blocks/basic-block/dealer-multi-store-map"
  "blocks/basic-block/social-media-icons"

  # Blocks - Specific Page Block
  "blocks/specific-page-block/article-body-text"
  "blocks/specific-page-block/blog-posts-lists"
  "blocks/specific-page-block/list-collections-content"
  "blocks/specific-page-block/page-body-text"
  "blocks/specific-page-block/product-description"

  # Blocks - Subblocks
  "blocks/subblocks/blog-posts-cards"
  "blocks/subblocks/product-cards"
  "blocks/subblocks/carousel-item-image"
  "blocks/subblocks/carousel-item-3d-model"
  "blocks/subblocks/carousel-item-video"
  "blocks/subblocks/cart-checkout"
  "blocks/subblocks/column"
  "blocks/subblocks/filters"

  # Blocks - Composite Function Block
  "blocks/composite-function-block/3d-model-with-text"
  "blocks/composite-function-block/blog-posts"
  "blocks/composite-function-block/carousel"
  "blocks/composite-function-block/column-card"
  "blocks/composite-function-block/columns-layout"
  "blocks/composite-function-block/contact-form"
  "blocks/composite-function-block/contact-us"
  "blocks/composite-function-block/custom-liquid-block"
  "blocks/composite-function-block/discount-code"
  "blocks/composite-function-block/faq-collapsible-tabs"
  "blocks/composite-function-block/featured-collection"
  "blocks/composite-function-block/featured-product"
  "blocks/composite-function-block/featured-products"
  "blocks/composite-function-block/hotspots"
  "blocks/composite-function-block/image-with-text"
  "blocks/composite-function-block/key-features"
  "blocks/composite-function-block/map-main-store"
  "blocks/composite-function-block/multi-column"
  "blocks/composite-function-block/newsletter"
  "blocks/composite-function-block/rich-text"
  "blocks/composite-function-block/scrolling-banner"
  "blocks/composite-function-block/slideshow"
  "blocks/composite-function-block/store-messages"
  "blocks/composite-function-block/testimonials"
  "blocks/composite-function-block/timelines"
  "blocks/composite-function-block/video-with-text"

  # Templates Settings
  "templates-settings/products"
  "templates-settings/collections"
  "templates-settings/collections-list"
  "templates-settings/gift-card"
  "templates-settings/cart"
  "templates-settings/legacy-customer-accounts/customer-login"
  "templates-settings/legacy-customer-accounts/customer-account"
  "templates-settings/legacy-customer-accounts/customer-activate-account"
  "templates-settings/legacy-customer-accounts/customer-addresses"
  "templates-settings/legacy-customer-accounts/customer-order"
  "templates-settings/legacy-customer-accounts/customer-register"
  "templates-settings/legacy-customer-accounts/customer-reset-password"
  "templates-settings/pages/default-page"
  "templates-settings/pages/page-sidebar"
  "templates-settings/pages/creating-contact-page"
  "templates-settings/pages/creating-faq-page"
  "templates-settings/blogs/default-blog"
  "templates-settings/blogs/blog-sidebar"
  "templates-settings/blog-posts/default-blog-post"
  "templates-settings/blog-posts/article-sidebar"
  "templates-settings/search"
  "templates-settings/password"
  "templates-settings/404-page"

  # Advanced Guides
  "advanced-guides/understanding-pagespeed-score"
  "advanced-guides/improving-store-performance"
  "advanced-guides/editing-robots-txt"

  # Root-level doc
  "contacting-support"
)

echo "📝 开始生成 ${#paths[@]} 个 Markdown 文件（带 front matter）..."

# 为 sidebar_position 计数
counter=1

for path in "${paths[@]}"; do
  dir=$(dirname "$path")
  filename=$(basename "$path")
  mkdir -p "$DOCS_DIR/$dir"
  
  # 生成标题（kebab-case 转 Title Case）
  title=$(echo "$filename" | sed -E 's/-/ /g' | awk '{
    for(i=1; i<=NF; i++) {
      $i = toupper(substr($i,1,1)) tolower(substr($i,2))
    }
    print
  }')
  
  # 生成分类标题（用于 overview 类型文档的引导内容）
  category=""
  if [[ "$path" == *"getting-started"* ]]; then
    category="Getting Started"
  elif [[ "$path" == *"theme-basics"* ]]; then
    category="Theme Basics"
  elif [[ "$path" == *"theme-settings"* ]]; then
    category="Theme Settings"
  elif [[ "$path" == *"header-group"* ]]; then
    category="Header"
  elif [[ "$path" == *"sections"* ]]; then
    category="Sections"
  elif [[ "$path" == *"blocks"* ]]; then
    category="Blocks"
  elif [[ "$path" == *"templates-settings"* ]]; then
    category="Templates"
  elif [[ "$path" == *"advanced-guides"* ]]; then
    category="Advanced Guides"
  elif [[ "$path" == "contacting-support" ]]; then
    category="Support"
  fi

  # 内容模板
  if [[ "$filename" == "overview" ]] || [[ "$filename" == *"changelog"* ]] || [[ "$path" == "contacting-support" ]]; then
    # 特殊页面使用通用描述
    content="This guide provides an overview of $category features and configuration options."
  else
    content="Configure and customize your **$title** component in the Shopify Theme Editor."
  fi

  # 写入文件（带 front matter）
  cat > "$DOCS_DIR/$path.md" <<EOF
---
title: $title
sidebar_position: $counter
---

# $title

$content

> 💡 **Tip**: Access this setting via **Shopify Admin → Online Store → Themes → Customize**.

## Key Features

- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## How to Use

1. Go to **Customize**
2. Navigate to the relevant section
3. Adjust settings as needed
4. Click **Save**

---

For further assistance, see [Contacting Support](../contacting-support).
EOF

  echo "✅ Created: $DOCS_DIR/$path.md (position: $counter)"
  ((counter++))
done

echo ""
echo "🎉 成功生成 ${#paths[@]} 个文档文件！"
echo "📁 所有文件位于: $DOCS_DIR/"
echo ""
echo "下一步："
echo "1. 编辑 docs/ 中的 .md 文件，替换占位内容"
echo "2. 运行 'npm start' 预览文档"
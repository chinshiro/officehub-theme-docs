module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/support-policy',
        'getting-started/browser-support',
        'getting-started/accessibility',
        'getting-started/theme-licensing-and-transfers',
        'getting-started/theme-changelog'
      ],
    },
    {
      type: 'category',
      label: 'Theme Basics',
      collapsed: true,
      items: [
        'theme-basics/index',
        'theme-basics/editing-your-theme',
        'theme-basics/updating-your-theme',
        'theme-basics/best-practices-for-using-sections',
        'theme-basics/seo-best-practices',
        'theme-basics/changing-default-theme-content',
        'theme-basics/understanding-sections-and-blocks',
        'theme-basics/managing-alternate-templates',
        'theme-basics/using-metafields-and-metaobjects',
        'theme-basics/understanding-app-embeds-app-blocks',
        'theme-basics/combining-alternate-templates-with-metafields',
        'theme-basics/multi-languages-currencies-internationalization',
        'theme-basics/image-size-recommendations',
        'theme-basics/remove-powered-by-shopify-link',
        'theme-basics/access-the-collaborator-code',
        'theme-basics/hiring-shopify-expert',
        'theme-basics/contextualizing-content-per-market',
        'theme-basics/wholesale-and-quantity-discounts'
      ],
    },
    {
      type: 'category',
      label: 'Theme Settings',
      collapsed: true,
      items: [
        'theme-settings/basic-settings',
        'theme-settings/style-scheme-settings'
      ],
    },
    {
      type: 'category',
      label: 'Header Group',
      collapsed: true,
      items: [
        'header-group/announcement-bar',
        'header-group/header',
        'header-group/modal-top-bar'
      ],
    },
    {
      type: 'category',
      label: 'Sections',
      collapsed: true,
      items: [
        'sections/index',
        'sections/featured-collection',
        'sections/featured-product',
        'sections/rich-text',
        'sections/image-with-text',
        'sections/slideshow',
        'sections/newsletter',
        'sections/custom-liquid',
        'sections/3d-model-with-text',
        'sections/background-video',
        'sections/blog-posts',
        'sections/contact-us',
        'sections/countdown-timer',
        'sections/faq',
        'sections/general-section',
        'sections/hotspots',
        'sections/key-features',
        'sections/map-dealer-multi-store',
        'sections/map-main-store',
        'sections/multi-columns',
        'sections/product-description',
        'sections/scrolling-banner',
        'sections/scrollspy-section',
        'sections/sidebar-section',
        'sections/tabs-section',
        'sections/testimonials',
        'sections/timelines',
        'sections/video-with-text'
      ],
    },
    {
      type: 'category',
      label: 'Footer Group',
      collapsed: true,
      items: [
        'footer-group/store-messages',
        'footer-group/footer'
      ],
    },
    {
      type: 'category',
      label: 'Overlay Group',
      collapsed: true,
      items: [
        'overlay-group/cart-sidebar',
        'overlay-group/pop-up'
      ],
    },
    {
      type: 'category',
      label: 'Blocks',
      collapsed: true,
      items: [
        'blocks/overview',
        {
          type: 'category',
          label: 'Basic Block',
          collapsed: true,
          items: [
            'blocks/basic-block/heading',
            'blocks/basic-block/text',
            'blocks/basic-block/button',
            'blocks/basic-block/3d-model',
            'blocks/basic-block/image',
            'blocks/basic-block/video',
            'blocks/basic-block/collapsible-tab',
            'blocks/basic-block/contact-form',
            'blocks/basic-block/countdown-timer',
            'blocks/basic-block/currency-language',
            'blocks/basic-block/discount-code',
            'blocks/basic-block/faq-search-bar',
            'blocks/basic-block/navigation',
            'blocks/basic-block/newsletter-form',
            'blocks/basic-block/payment-icons',
            'blocks/basic-block/stars',
            'blocks/basic-block/steps-segments',
            'blocks/basic-block/store-map',
            'blocks/basic-block/dealer-multi-store-map',
            'blocks/basic-block/social-media-icons'
          ],
        },
        {
          type: 'category',
          label: 'Specific Block',
          collapsed: true,
          items: [
            'blocks/specific-block/article-body-text',
            'blocks/specific-block/blog-posts-lists',
            'blocks/specific-block/list-collections-content',
            'blocks/specific-block/page-body-text',
            'blocks/specific-block/product-description',
            'blocks/specific-block/page-top-banner',
            'blocks/specific-block/blog-posts-cards',
            'blocks/specific-block/product-cards',
            'blocks/specific-block/cart-checkout',
            'blocks/specific-block/column',
            'blocks/specific-block/filters',
            'blocks/specific-block/slide-grid'
          ],
        },
        {
          type: 'category',
          label: 'Function Block',
          collapsed: true,
          items: [
            'blocks/function-block/3d-model-with-text',
            'blocks/function-block/blog-posts',
            'blocks/function-block/columns-layout',
            'blocks/function-block/contact-us',
            'blocks/function-block/custom-liquid-block',
            'blocks/function-block/faq-collapsible-tabs',
            'blocks/function-block/featured-collection',
            'blocks/function-block/featured-product',
            'blocks/function-block/featured-products',
            'blocks/function-block/hotspots',
            'blocks/function-block/image-with-text',
            'blocks/function-block/key-features',
            'blocks/function-block/map-main-store',
            'blocks/function-block/multi-column',
            'blocks/function-block/newsletter',
            'blocks/function-block/rich-text',
            'blocks/function-block/scrolling-banner',
            'blocks/function-block/slideshow',
            'blocks/function-block/store-messages',
            'blocks/function-block/testimonials',
            'blocks/function-block/timelines',
            'blocks/function-block/video-with-text'
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Templates Settings',
      collapsed: true,
      items: [
        'templates-settings/products',
        'templates-settings/collections',
        'templates-settings/collections-list',
        'templates-settings/gift-card',
        'templates-settings/cart',
        {
          type: 'category',
          label: 'Legacy Customer Accounts',
          collapsed: true,
          items: [
            'templates-settings/legacy-customer-accounts/customer-login',
            'templates-settings/legacy-customer-accounts/customer-account',
            'templates-settings/legacy-customer-accounts/customer-activate-account',
            'templates-settings/legacy-customer-accounts/customer-addresses',
            'templates-settings/legacy-customer-accounts/customer-order',
            'templates-settings/legacy-customer-accounts/customer-register',
            'templates-settings/legacy-customer-accounts/customer-reset-password'
          ],
        },
        {
          type: 'category',
          label: 'Pages',
          collapsed: true,
          items: [
            'templates-settings/pages/default-page',
            'templates-settings/pages/page-sidebar'
          ],
        },
        {
          type: 'category',
          label: 'Blogs',
          collapsed: true,
          items: [
            'templates-settings/blogs/default-blog',
            'templates-settings/blogs/blog-sidebar'
          ],
        },
        {
          type: 'category',
          label: 'Blog Posts',
          collapsed: true,
          items: [
            'templates-settings/blog-posts/default-blog-post',
            'templates-settings/blog-posts/article-sidebar'
          ],
        },
        'templates-settings/search',
        'templates-settings/password',
        'templates-settings/page-404'
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      collapsed: true,
      items: [
        'advanced-guides/understanding-pagespeed-score',
        'advanced-guides/improving-store-performance',
        'advanced-guides/editing-robots-txt'
      ],
    },
    'contacting-support'
  ],
};
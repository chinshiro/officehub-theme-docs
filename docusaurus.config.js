module.exports = {
  title: 'OfficeHub Theme Documentation',
  tagline: 'Professional Shopify theme for modern stores',
  url: 'https://docs.chinshiro.com',
  baseUrl: '/',
  organizationName: 'chinshiro',
  projectName: 'scenario-theme-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        // language: ['en', 'zh'],
        searchResultLimits: 8
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OfficeHub Theme',
      items: [
        {
          type: 'doc',
          docId: 'getting-started/overview',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'search',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'contacting-support',
          position: 'right',
          label: 'Support',
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} OfficeHub Theme`,
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  },
};
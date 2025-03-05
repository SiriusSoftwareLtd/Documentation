// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Developer Docs",
  tagline: "Documentation for all projects",
  favicon: "https://cdn.sirius.menu/assets/favicons/favicon.ico?v=4",

  // GitHub pages deployment config.
  url: "https://docs.sirius.menu",
  baseUrl: "/",
  organizationName: "SiriusDevelopmentGroup",
  projectName: "Documentation",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          id: "default",
          path: "docs/rayfield",
          routeBasePath: "/rayfield",
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        sizes: [320, 640, 960, 1280, 1600, 1920],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sense",
        path: "docs/sense",
        routeBasePath: "/sense",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
        [
      "@docusaurus/plugin-content-docs",
      {
        id: "gen2",
        path: "docs/gen2",
        routeBasePath: "/gen2",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "staff",
        path: "docs/staff",
        routeBasePath: "/staff",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "faq",
        path: "docs/faq",
        routeBasePath: "/faq",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "arrayfield",
        path: "docs/arrayfield",
        routeBasePath: "/community/arrayfield",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      metadata: [
        { name: "theme-color", content: "#2B2D31" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://docs.sirius.menu" },
        { property: "og:locale", content: "en" },
        { property: "og:site_name", content: "Sirius Documentation" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      image: "img/Docs.png",
      navbar: {
        title: "Developer Docs",
        style: "dark",
        items: [
          {
            to: "/rayfield",
            label: "Rayfield",
            position: "left",
          },
          {
            to: "/sense",
            label: "Sense",
            position: "left",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      prism: {
        additionalLanguages: ["lua"],
        defaultLanguage: "lua",
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        indexName: "sirius",
        appId: "1D0S0MU0VG",
        apiKey: "218e98f8fe60c8ae1d3fc79ecfc3be97",
        contextualSearch: false,
      },
      footer: {
        copyright: `Copyright © 2025 Sirius. All rights reserved. `,
      },
    }),
};

module.exports = config;

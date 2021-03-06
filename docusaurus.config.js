const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'wookiist TIL',
  tagline: 'wookiist TIL',
  url: 'https://til.wookiist.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/wookii.ico',
  organizationName: 'wookiist', // Usually your GitHub org/user name.
  projectName: 'til.wookiist.dev', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wookiist/twl/edit/documentation/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'wookiist TIL',
        logo: {
          alt: 'wookiist TIL',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'main',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://wookiist.dev',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/wookiist',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} wookiist. Built by wookiist and with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'scala', 'docker'],
      },
    }),
});

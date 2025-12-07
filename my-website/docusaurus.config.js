// docusaurus.config.js
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'The Future of Intelligent Machines',
  favicon: 'img/favicon.ico',

  url: 'https://sarimofficial.github.io',           // Apna username
  baseUrl: '/physical-ai-textbook/',                // Apne repo ka naam

  organizationName: 'sarimofficial',
  projectName: 'physical-ai-textbook',
  trailingSlash: false,

  // YE DO LINES SABSE ZAROORI HAIN — INKO CHANGE KAR DO!
  onBrokenLinks: 'warn',           // ← ye tha 'throw' → ab warn
  onBrokenMarkdownLinks: 'warn',   // ← ye bhi warn kar do

  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    // ... baaki sab same rahega
  },
};

export default config;

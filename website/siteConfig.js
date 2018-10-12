/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Luís Silva',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://scontent.flis1-1.fna.fbcdn.net/v/t31.0-8/23735995_1674280279312175_7527285910664902411_o.jpg?_nc_cat=100&oh=52a827ec4e8488cf3664c944853e0d1c&oe=5C4C4ADB',
    infoLink: 'https://www.facebook.com/ofantasticoluis',
    pinned: true,
    teamRole:'Funder'
  },
  {
    caption: 'Tiago Ramalho',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/20258438_1893652067570862_4019107659665964412_n.jpg?_nc_cat=111&oh=b69b337a86923445d87ed7b445acd224&oe=5C4F4156',
    infoLink: 'https://www.facebook.com/tiago.ramalho.319',
    pinned: true,
    teamRole:'Funder'
  },
  {
    caption: 'João Branquinho',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/31961250_2154421264585360_6076543030578380800_n.jpg?_nc_cat=101&oh=dfee87e635c8789ebb190fcc25ad482a&oe=5C529A05',
    infoLink: 'https://www.facebook.com/joaobranqs',
    pinned: true,
    teamRole:'Funder'
  },
  {
    caption: 'Gabriel Patrício',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/30704992_2064972400209417_7976331465782303438_n.jpg?_nc_cat=101&oh=d62ded4f227fa49a989e00504ddcf113&oe=5C1A136A',
    infoLink: 'https://www.facebook.com/este.nick.ninguem.usou',
    pinned: true,
    teamRole:'Funder'
  },
  {
    caption: 'João Maia',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/38439945_975142589342211_1081673812551925760_o.jpg?_nc_cat=105&oh=148dd270e3e1d28c578f73b39ce712c0&oe=5C49AF1B',
    infoLink: 'https://www.facebook.com/jonny.maia.96',
    pinned: true,
    teamRole:'Funder'
  },
];

const otherUsers = [
  {
    caption: 'Silvério Pereira',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-1/14724396_1113947275362450_613072931269831208_n.jpg?_nc_cat=103&oh=cf553299ad66d385c0f1a63587dfa52b&oe=5C5F8959',
    infoLink: 'https://www.facebook.com/silverio.73.69.6C.76.65.72.79.75.0A',
    pinned: false,
  },
  {
    caption: 'Raquel Ramos',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://scontent.flis1-1.fna.fbcdn.net/v/t1.0-9/12009778_1648708265385417_7956226796353469267_n.jpg?_nc_cat=100&oh=6f153f155e9cba259cc11ed5d5c6a249&oe=5C185A08',
    infoLink: 'https://www.facebook.com/profile.php?id=100007387786214',
    pinned: false,
  },
];

const siteConfig = {
  title: 'Roadini', // Title for your website.
  tagline: 'The next big thing',
  url: 'https://Roadini.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Roadini.github.io',
  organizationName: 'Roadini',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'APIs'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users, otherUsers,

  /* path to images for header/footer */
  headerIcon: 'img/icon.png',
  footerIcon: 'img/icon.png',
  favicon: 'img/favicon/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2b4141',
    secondaryColor: '#99ddc8',
  },

  /* 9ee493; daf7dc; abc8c0 */

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Roboto",
      "Slab"
    ],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} by Pastel`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.svg',
  twitterImage: 'img/docusaurus.svg',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/roadini/roadini.github.io',
};

module.exports = siteConfig;

import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Ponjo Studios",
  description: "The official documentation for Ponjo Studios and its services.",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "https://benpetrillo.dev/favicon.png" }],
  ],
  themeConfig: {

    search: {
      provider: 'local'
    },

    outline: {
      level: "deep",
      label: "Table of Contents"
    },

    logo: "/favicon-small.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Elixir Music', link: '/docs/elixir-music/api' },
      {
        text: "Cypher Network",
        items: [
          {text: "Privacy Policy", link: "/docs/cypher-network/privacy-policy"},
          {text: "Terms of Service", link: "/docs/cypher-network/tos"},
        ],
      },
      {
        text: "External Links",
        items: [
          { text: "Ponjo.Pastes", link: "https://pastes.benpetrillo.dev" },
          { text: "Ponjo Studios", link: "https://ponjo.benpetrillo.dev" },
          { text: "Ben Petrillo", link: "https://benpetrillo.dev" }
        ]
      }
    ],
    sidebar: [
      {
        text: "Elixir Music",
        items: [
          { text: "API Documentation", link: "/docs/elixir-music/api"}
        ]
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/PonjoTeam" }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-Present <a href="https://github.com/benjaspet">Ben Petrillo</a>, <a href="https://github.com/kingrainbow44">KingRainbow44</a>.'
    },
    editLink: {
      pattern: 'https://github.com/benjaspet/ponjo-docs',
      text: "Edit this page on GitHub!"
    },
    lastUpdated: true
  },
});

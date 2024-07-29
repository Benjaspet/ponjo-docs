import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Ponjo Studios",
  description: "The official documentation for Ponjo Studios and its services.",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "https://benpetrillo.dev/favicon.png" }],
  ],
  markdown: {
    lineNumbers: true
  },

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
      { text: "Home", link: "/" },
      {
        text: "Personal Projects",
        items: [
          { text: "EONET UI", link: "/docs/personal-projects/eonet-ui" },
          { text: "Hexagonal Reversi", link: "/docs/personal-projects/hexagonal-reversi" },
          { text: "Fakebook Web Crawler", link: "/docs/personal-projects/fakebook-web-crawler.md" },
          { text: "Dur.ai • Language Model", link: "/docs/personal-projects/durai" },
          { text: "Helios Practice", link: "/docs/personal-projects/helios-practice" }
        ]
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
          { text: "Setup & Usage", link: "/docs/elixir-music/setup"},
          { text: "API Documentation", link: "/docs/elixir-music/api"},
          { text: "Privacy Policy", link: "/docs/elixir-music/privacy"}
        ]
      },
      {
        text: "Ponjo.Pastes",
        items: [
          { text: "About The Service", link: "/docs/ponjo-pastes/about"},
          { text: "API Documentation", link: "/docs/ponjo-pastes/api"},
        ]
      },
      {
        text: "Cypher Network",
        items: [
          { text: "Setup & Usage", link: "/docs/cypher-network/setup"},
          { text: "Privacy Policy", link: "/docs/cypher-network/privacy-policy"}
        ]
      },
      {
        text: "Personal Projects",
        items: [
          { text: "Hexagonal Reversi", link: "/docs/personal-projects/hexagonal-reversi"},
          { text: "Fakebook Web Crawler", link: "/docs/personal-projects/fakebook-web-crawler"},
          { text: "Dur.ai • Language Model", link: "/docs/personal-projects/durai"},
          { text: "Helios Practice", link: "/docs/personal-projects/helios-practice"},
        ]
      }
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

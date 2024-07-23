import * as vitepress from "vitepress";

export default vitepress.defineConfig({
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
      { text: 'Elixir Music', link: '/docs/elixir-music/api' }
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
    ]
  },
});

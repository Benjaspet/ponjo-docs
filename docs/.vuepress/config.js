import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  title: "Ponjo Studios",
  description: "The official documentation for Ponjo Studios and its projects.",
  head: [
    ["link", { rel: "icon", href: "https://benpetrillo.dev/favicon.png" }],
  ],
  plugins: [],
  theme: defaultTheme({
    logo: "https://benpetrillo.dev/favicon-small.png",
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Ponjo Pastes",
        children: [
          {
            text: "Getting Started",
            target: "_self",
            children: [
              "/ponjo-pastes/api-docs.md",
              "/ponjo-pastes/wrapper-docs.md",
            ],
          },
          {
            text: "External Links",
            children: [
              {
                text: "pastes.benpetrillo.dev",
                link: "https://pastes.benpetrillo.dev",
              },
              {
                text: "Source Code",
                link: "https://github.com/benjaspet/ponjo-pastes",
              },
            ],
          },
        ],
      },
      {
        text: "GitHub",
        link: "https://github.com/ponjoteam",
      },
      {
        text: "My Portfolio",
        link: "https://benpetrillo.dev",
      },
      {
        text: 'Group',
        prefix: '/group/',
        children: ['foo.md', 'bar.md'],
      },
    ],
  }),
  lang: "en-US",
  bundler: viteBundler(),
})

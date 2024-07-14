import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: "Ponjo Studios",
  description: "The official documentation for Ponjo Studios and its related services.",
  head: [
    ['link', { rel: 'icon', href: 'https://benpetrillo.dev/favicon.png' }],
  ],
  plugins: [],

  theme: defaultTheme({

    logo: 'https://benpetrillo.dev/favicon.png',

    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'GitHub',
        link: "https://github.com/ponjoteam",
      },
      {
        text: 'My Portfolio',
        link: "https://benpetrillo.dev",
      },
    ],
  }),

  bundler: viteBundler(),
})

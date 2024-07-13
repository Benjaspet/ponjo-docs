import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { appendDatePlugin } from '@vuepress/plugin-append-date'

export default defineUserConfig({
  lang: 'en-US',
  title: "Ponjo Studios",
  description: "The official documentation for Ponjo Studios and its related services.",
  head: [
    ['link', { rel: 'icon', href: 'https://benpetrillo.dev/favicon.png' }],
  ],
  plugins: [
      appendDatePlugin(),
  ],

  theme: defaultTheme({

    logo: 'https://benpetrillo.dev/favicon.png',

    sidebar: [
      {
        text: "Home",
        link: '/',
      },
      {
        text: "Get Started",
        children: [
          {
            text: "Intro",
            link: '/get-started',
          },
          {
            text: "Deployment",
            link: '/elixir-music',
          },
        ]
      }
    ],

    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Get Started',
        children: [
          {
            text: 'Intro',
            link: '/get-started',
          },
          {
            text: 'Deployment',
            link: '/elixir-music',
          },
        ]
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

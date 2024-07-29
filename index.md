---
layout: home
title: Home • Ponjo Studios
description: The official documentation for Ponjo Studios and its services. A development team committed to building innovative software.
head:
  - - meta
    - property: og:title
      content: Home • Ponjo Studios
  - - meta
    - property: og:site_name
      content: Ponjo Studios
  - - meta
    - property: og:description
      content: The official documentation for Ponjo Studios and its services. A development team committed to building innovative software.
  - - meta
    - name: theme-color
      content: "#4295f4"
hero:
  name: "Ponjo Studios"
  text: "Documentation"
  tagline: The official documentation for Ponjo Studios and its services. A development team committed to building innovative software.
  image:
    src: /favicon-small.png
    alt: Ponjo Studios Logo
  actions:
    - theme: brand
      text: Our Projects
      link: /docs/our-projects
    - theme: alt
      text: Meet Our Team
      link: https://ponjo.benpetrillo.dev
features:
  - title: Ponjo.Pastes
    details: Your go-to platform for sharing code snippets with ease and efficiency. Join the community that offers a seamless experience to store, manage, and share your code in a few clicks.
  - title: Elixir Music
    details: A feature-rich music application for Discord that offers the ability to play tracks, playlists, and more to your Discord voice channels. Create custom playlists and use our interactive API.
---

<script setup>
import { VPTeamMembers } from "vitepress/theme";

const members = [
  {
    avatar: "https://avatars.githubusercontent.com/u/66958528?v=4",
    name: "Ben Petrillo",
    title: "Creator & Lead Software Engineer",
    sponsor: "https://www.paypal.com/paypalme/benpetrillo",
    actionText: "Support Me",
    links: [
      { icon: "github", link: "https://github.com/benjaspet" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/ben-petrillo/" },
      { icon: { svg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" class="svg-inline--fa fa-copy " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path></svg>' }, link: "https://benpetrillo.dev" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/27646710?v=4",
    name: "Magix (KingRainbow44)",
    title: "Software Engineer, Elixir Music",
    sponsor: "https://ko-fi.com/kingrainbow44",
    actionText: "Support Me",
    links: [
      { icon: "github", link: "https://github.com/kingrainbow44" },
      { icon: "discord", link: "https://discord.com/users/252090676068614145" }
    ]
  },
  {
    avatar: "./leqends-avatar.png",
    name: "Leqend",
    title: "Software Engineer, Cypher Network",
    sponsor: "https://github.com/Leqends",
    actionText: "Support Me",
    links: [
      { icon: "github", link: "https://github.com/Leqends" },
      { icon: "discord", link: "https://discord.com/users/368571560207843329" }
    ]
  },
]
</script>

### Meet Our Development Team

<VPTeamMembers size="small" :members="members" />
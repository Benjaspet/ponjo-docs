export const themeData = JSON.parse("{\"logo\":\"https://benpetrillo.dev/favicon.png\",\"sidebar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Get Started\",\"children\":[{\"text\":\"Intro\",\"link\":\"/get-started\"},{\"text\":\"Deployment\",\"link\":\"/elixir-music\"}]}],\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Get Started\",\"children\":[{\"text\":\"Intro\",\"link\":\"/get-started\"},{\"text\":\"Deployment\",\"link\":\"/elixir-music\"}]},{\"text\":\"GitHub\",\"link\":\"https://github.com/ponjoteam\"},{\"text\":\"My Portfolio\",\"link\":\"https://benpetrillo.dev\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

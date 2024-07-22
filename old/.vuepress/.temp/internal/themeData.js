export const themeData = JSON.parse("{\"logo\":\"https://benpetrillo.dev/favicon-small.png\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Elixir Music\",\"children\":[{\"text\":\"API Docs\",\"link\":\"/elixir-music/api-docs.md\"}]},{\"text\":\"Ponjo Pastes\",\"children\":[{\"text\":\"Getting Started\",\"target\":\"_self\",\"children\":[\"/ponjo-pastes/api-docs.md\",\"/ponjo-pastes/wrapper-docs.md\"]},{\"text\":\"External Links\",\"children\":[{\"text\":\"pastes.benpetrillo.dev\",\"link\":\"https://pastes.benpetrillo.dev\"},{\"text\":\"Source Code\",\"link\":\"https://github.com/benjaspet/ponjo-pastes\"}]}]},{\"text\":\"Cypher Network\",\"children\":[{\"text\":\"Terms of Service\",\"link\":\"/cypher-network/tos.md\"},{\"text\":\"Privacy Policy\",\"link\":\"/cypher-network/privacy-policy.md\"}]},{\"text\":\"GitHub\",\"link\":\"https://github.com/ponjoteam\"},{\"text\":\"My Portfolio\",\"link\":\"https://benpetrillo.dev\"},{\"text\":\"Group\",\"prefix\":\"/group/\",\"children\":[\"foo.md\",\"bar.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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

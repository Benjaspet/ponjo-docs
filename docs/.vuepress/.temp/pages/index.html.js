import comp from "/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"Explore\",\"link\":\"/services.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Ponjo API\",\"details\":\"A developer utility API to integrate services by Ponjo Studios with your work, with a focus on simplicity.\"},{\"title\":\"Elixir Music\",\"details\":\"Full setup documentation for Elixir, an advanced music bot for Discord, as well as documentation for its API.\"},{\"title\":\"Ponjo Pastes\",\"details\":\"Complete API documentation for Ponjo Pastes, a simple and easy-to-use code and plain text sharing service.\"}],\"footer\":\"MIT Licensed | Copyright © 2024 Ben Petrillo.\"},\"headers\":[],\"git\":{\"updatedTime\":1720914713000,\"contributors\":[{\"name\":\"EerieAlchemist\",\"email\":\"66958528+EerieAlchemist@users.noreply.github.com\",\"commits\":7},{\"name\":\"Benjaspet\",\"email\":\"benpetrillo.bp@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

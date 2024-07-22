export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/elixir-music/api-docs.html", { loader: () => import(/* webpackChunkName: "elixir-music_api-docs.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/elixir-music/api-docs.html.js"), meta: {"title":"API Documentation"} }],
  ["/cypher-network/privacy-policy.html", { loader: () => import(/* webpackChunkName: "cypher-network_privacy-policy.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/cypher-network/privacy-policy.html.js"), meta: {"title":"Privacy Policy for Cypher Network"} }],
  ["/cypher-network/tos.html", { loader: () => import(/* webpackChunkName: "cypher-network_tos.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/cypher-network/tos.html.js"), meta: {"title":"Terms of Service for Cypher Network"} }],
  ["/policy/privacy-policy.html", { loader: () => import(/* webpackChunkName: "policy_privacy-policy.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/policy/privacy-policy.html.js"), meta: {"title":""} }],
  ["/policy/terms-of-service.html", { loader: () => import(/* webpackChunkName: "policy_terms-of-service.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/policy/terms-of-service.html.js"), meta: {"title":""} }],
  ["/ponjo-pastes/api-docs.html", { loader: () => import(/* webpackChunkName: "ponjo-pastes_api-docs.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/ponjo-pastes/api-docs.html.js"), meta: {"title":"Ponjo Pastes API"} }],
  ["/ponjo-pastes/wrapper-docs.html", { loader: () => import(/* webpackChunkName: "ponjo-pastes_wrapper-docs.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/ponjo-pastes/wrapper-docs.html.js"), meta: {"title":"Ponjo Pastes Wrapper"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Development/Personal/ponjo-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

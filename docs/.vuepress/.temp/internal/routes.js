export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/ponjo-pastes/api-docs.html", { loader: () => import(/* webpackChunkName: "ponjo-pastes_api-docs.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/ponjo-pastes/api-docs.html.js"), meta: {"title":"Ponjo Pastes API"} }],
  ["/ponjo-pastes/wrapper-docs.html", { loader: () => import(/* webpackChunkName: "ponjo-pastes_wrapper-docs.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/ponjo-pastes/wrapper-docs.html.js"), meta: {"title":"Ponjo Pastes Wrapper"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/policy/privacy-policy.html", { loader: () => import(/* webpackChunkName: "policy_privacy-policy.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/policy/privacy-policy.html.js"), meta: {"title":""} }],
  ["/policy/terms-of-service.html", { loader: () => import(/* webpackChunkName: "policy_terms-of-service.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/policy/terms-of-service.html.js"), meta: {"title":""} }],
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

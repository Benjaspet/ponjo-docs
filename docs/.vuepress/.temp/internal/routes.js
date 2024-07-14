export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/elixir-music.html", { loader: () => import(/* webpackChunkName: "elixir-music.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/elixir-music.html.js"), meta: {"title":"Elixir Music"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/services.html", { loader: () => import(/* webpackChunkName: "services.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/services.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/benpetrillo/GitHub/Personal/ponjo-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

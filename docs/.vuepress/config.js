module.exports = {
    title: "Ponjo Docs",
    description: "A revolutionary API serving all of your developer utility needs.",
    port: 8000,
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://raw.githubusercontent.com/Eerie6560/Archives/main/images/icons/Crescent-Logo.png"}],
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        lastUpdated: "Last Updated",
        nav: [
            {text: "API Docs", link: "/docs/api/"},
            {text: "Discord Docs", link: "/docs/discord/"},
            {
                text: "Links",
                items: [
                    {text: "Discord", link: "https://ponjo.club/discord"},
                    {text: "Portfolio", link: "https://benpetrillo.dev"}
                ]
            }
        ],
        sidebar: [
            {
                title: "Ponjo API",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ["/ponjo-api/Guide.md", "Guide"],
                    ["/ponjo-api/Endpoints.md", "Endpoints"]
                ]
            },
            {
                title: "Endpoints",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"]
                ]
            },
            {
                title: "Ponjo API 2",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ["/ponjo-api/Guide.md", "Guide"],
                    ["/ponjo-api/Endpoints.md", "Endpoints"]
                ]
            },
        ],
        logo: "https://raw.githubusercontent.com/Eerie6560/Archives/main/images/icons/Crescent-Logo.png",
    }
}
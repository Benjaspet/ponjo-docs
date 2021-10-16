module.exports = {
    title: "Ponjo Docs",
    description: "The official documentation for all Ponjo Team services.",
    port: 8000,
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://raw.githubusercontent.com/Eerie6560/Archives/main/images/icons/Crescent-Logo.png"}],
        ['script', {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}]
    ],
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        lastUpdated: "Last Updated",
        nav: [
            {text: "Ponjo API Docs", link: ""},
            {text: "Pronoun API Docs", link: ""},
            {text: "Matte.css Docs", link: ""},
            {text: "Elixir Music", link: ""},
            {text: "RoboEerie", link: ""},
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
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                    ["/ponjo-api/endpoints/SCP-Endpoint.md", "SCP Foundation"],
                    ["/ponjo-api/endpoints/Utility.md", "Utility"],
                    ["/ponjo-api/endpoints/Game-Queries.md", "Game Queries"],
                ]
            },
        ],
        logo: "https://raw.githubusercontent.com/Eerie6560/Archives/main/images/icons/Crescent-Logo.png",
    }
}
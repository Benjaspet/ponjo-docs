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
            {text: "Elixir Music", link: "https://ponjo.club/invites/elixir"},
            {text: "Ben's Portfolio", link: "https://benpetrillo.dev"},
            {text: "Discord", link: "https://ponjo.club/discord"},
        ],
        sidebar: [
            {
                title: "Ponjo API",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ["/ponjo-api/Guide.md", "Guide"],
                    ["/ponjo-api/Endpoints.md", "Endpoints"],
                    ["/ponjo-api/ErrorResponses.md", "Handling Errors"]
                ]
            },
            {
                title: "Endpoints",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ["/ponjo-api/endpoints/DataEndpoint.md", "Data Endpoint"],
                    ["/ponjo-api/endpoints/SCPEndpoint.md", "SCP Endpoint"],
                    ["/ponjo-api/endpoints/DeckEndpoint.md", "Card Deck Endpoint"],
                    ["/ponjo-api/endpoints/PrideEndpoint.md", "Pride Endpoint"],
                    ["/ponjo-api/endpoints/ServiceEndpoint.md", "Service Endpoint"],
                    ["/ponjo-api/endpoints/GameQueryEndpoint.md", "Game Query Endpoint"],
                    ["/ponjo-api/endpoints/UtilityEndpoint.md", "Utility Endpoint"],
                    ["/ponjo-api/endpoints/ElixirEndpoint.md", "Elixir Music API"]
                ]
            },
            {
                title: "Elixir Music",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ["/elixir/ElixirMusic.md", "Bot Setup"],
                    ["/elixir/Tutorial.md", "Guide"],
                    ["/elixir/ElixirPrivacy.md", "Privacy Policy"]
                ]
            }
        ],
        logo: "https://raw.githubusercontent.com/Eerie6560/Archives/main/images/icons/Crescent-Logo.png",
    }
}
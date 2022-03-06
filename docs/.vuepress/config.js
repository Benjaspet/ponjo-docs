module.exports = {
    title: "Ponjo Studios Documentation",
    description: "The official documentation for all Ponjo Studios services.",
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
            {text: "Our Website", link: "https://ponjo.club"},
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
                    ["/ponjo-api/ErrorResponses.md", "Handling Errors"],
                    ["/ponjo-api/endpoints/DataEndpoint.md", "Data Endpoint"],
                    ["/ponjo-api/endpoints/DeckEndpoint.md", "Card Deck Endpoint"],
                    ["/ponjo-api/endpoints/ElixirEndpoint.md", "Elixir Endpoint"],
                    ["/ponjo-api/endpoints/GameQueryEndpoint.md", "Game Query Endpoint"],
                    ["/ponjo-api/endpoints/ImageManipulationEndpoint.md", "Image Endpoint"],
                    ["/ponjo-api/endpoints/MiscellaneousEndpoint.md", "Miscellaneous Endpoint"],
                    ["/ponjo-api/endpoints/PrideEndpoint.md", "Pride Endpoint"],
                    ["/ponjo-api/endpoints/RandomEndpoint.md", "Random Endpoint"],
                    ["/ponjo-api/endpoints/SCPEndpoint.md", "SCP Endpoint"],
                    ["/ponjo-api/endpoints/ServiceEndpoint.md", "Service Endpoint"]
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
            },
            {
                title: "AdvancedCommandHandler",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ["/ach/Setup.md", "Setup"],
                    ["/ach/Examples.md", "Examples"],
                    ["/ach/ClassesAndMethods.md", "Classes & Methods"]
                ]
            },
        ],
        logo: "https://raw.githubusercontent.com/Eerie6560/Archives/main/images/icons/Crescent-Logo.png",
    }
}
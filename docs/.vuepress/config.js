module.exports = {
    title: "Ponjo API",
    description: "A revolutionary API serving all of your developer utility needs.",
    port: 8000,
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "./images/API-Logo.png"}],
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
                title: "Welcome!",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    "/Ponjo-API.md"
                ]
            },
            {
                title: "Ponjo API",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    "/ponjo-api/Getting-Started.md"
                ]
            },
            {
                title: "Links",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ["", "Home"],
                    ["", "Discord"],
                    ["", "Support"]
                ]
            },
        ],
        logo: "https://raw.githubusercontent.com/Eerie6560/Archives/main/images/icons/Crescent-Logo.png",
    }
}
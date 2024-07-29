# API Documentation • Ponjo.Pastes

We provide a public API for developers to interact with the service programmatically. This API
allows you to create, read, update, and delete pastes, as well as view information about the
service.

:::tip About The Service
Your go-to platform for sharing code snippets with ease and efficiency. Join the community that 
offers a seamless experience to store, manage, and share your code in just a few clicks. Whether 
you're collaborating on a project, seeking feedback, or simply archiving your work, Ponjo.Pastes 
ensures your snippets are always accessible and secure. Say goodbye to clutter and confusion—we're 
here to streamline your workflow and keep your code organized. Your code deserves a better home.
:::

## API Endpoints

The base endpoint of the API is 
[https://pastes.benpetrillo.dev/api/v2](https://pastes.benpetrillo.dev/api/v2).

### <Badge type="tip" text="GET"/> /pastes/get/[{paste.id}](#)

Get information about a specific paste.

| String Param |                    Description                     | Required? |
|:------------:|:--------------------------------------------------:|:---------:|
|  `paste.id`  |            The identifier of the paste.            |    yes    |
| Query Param  |                    Description                     | Required? |
|    `raw`     |     `boolean` – Display in plain-text format?      |    yes    |

Sample Response

```json
{
  "id": "dqJLOtgJZVl8nTz",
  "title": "Generate Content",
  "content": "As the city lights flickered to life... Maya felt like she was home.",
  "codeblock": false,
  "views": 8,
  "likes": 0,
  "createdAt": "2024-07-29T00:04:30.604Z"
}
```

### <Badge type="tip" text="GET"/> /pastes/search

Search for a paste by its content.

| Query Param |           Description            | Required? |
|:-----------:|:--------------------------------:|:---------:|
|     `q`     | The search query, as a `string`. |    yes    |

Sample Response

```json
{
  "pastes": [
    {
      "id": "Y5Dlj9xOPAAMAnx",
      "title": "",
      "content": "{\r\n  \"name\": \"cypher-network\",\r\n  \"author\": \"Ben Petrillo\",\r\n  \"version\": \"0.1.0\",\r\n  \"main\": \"src/CypherNetwork.ts\",\r\n  \"description\": \"Keep tabs on your VALORANT data with ease.\",\r\n  \"scripts\": {\r\n    \"lint\": \"prettier . -w\",\r\n    \"build\": \"bun build src/CypherNetwork.ts --outfile=dist/index.js --minify --target=bun\",\r\n    \"start\": \"bun run src/CypherNetwork.ts\",\r\n    \"start:dev\": \"bun --watch run src/CypherNetwork.ts\"\r\n  },\r\n  \"dependencies\": {\r\n    \"@discordjs/rest\": \"^0.1.0-canary.0\",\r\n    \"discord.js\": \"^13.17.1\"\r\n  },\r\n  \"devDependencies\": {\r\n    \"@trivago/prettier-plugin-sort-imports\": \"^4.3.0\",\r\n    \"bun-types\": \"^1.1.18\",\r\n    \"discord-api-types\": \"^0.23.1\",\r\n    \"prettier\": \"^3.3.2\"\r\n  }\r\n}",
      "codeblock": true,
      "views": 1,
      "likes": 0,
      "createdAt": "2024-07-16T17:31:58.735Z"
    },
    {
      "id": "FIvNeFERAa0TWb1",
      "title": "so cool ong",
      "content": "/*\r\n * Copyright © 2023 Ben Petrillo. All rights reserved.\r\n *\r\n * Project licensed under the MIT License: https://www.mit.edu/~amini/LICENSE.md\r\n *\r\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\r\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\r\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\r\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\r\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\r\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\r\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE\r\n * OR OTHER DEALINGS IN THE SOFTWARE.\r\n *\r\n * All portions of this software are available for public use, provided that\r\n * credit is given to the original author(s).\r\n */\r\nimport {\r\n    ApplicationCommandData,\r\n    Client,\r\n    CommandInteraction,\r\n    EmbedBuilder\r\n} from \"discord.js\";\r\n\r\nimport { ApplicationCommandOptionType } from \"discord-api-types/v10\";\r\n\r\nimport CypherNetworkConstants from \"@constants/CypherNetworkConstants\";\r\n\r\nimport Command from \"@structs/Command\";\r\n\r\nimport EmbedUtil from \"@utils/EmbedUtil\";\r\n\r\nimport { ApplicationCommand } from \"@defs/ApplicationCommand\";\r\n\r\nimport fetch from \"node-fetch\";\r\n\r\nexport default class AccountCommand\r\n    extends Command\r\n    implements ApplicationCommand\r\n{\r\n    private readonly client: Client;\r\n\r\n    constructor(client: Client) {\r\n        super(\"account\", {\r\n            name: \"account\",\r\n            description: \"Get VALORANT account details.\",\r\n            options: [\r\n                {\r\n                    name: \"name\",\r\n                    description: \"The user's name'.\",\r\n                    type: ApplicationCommandOptionType.String,\r\n                    required: true\r\n                },\r\n                {\r\n                    name: \"tag\",\r\n                    description: \"The user's tag.\",\r\n                    type: ApplicationCommandOptionType.String,\r\n                    required: true\r\n                },\r\n                {\r\n                    name: \"card\",\r\n                    description: \"Display only the user's card data.\",\r\n                    type: ApplicationCommandOptionType.Boolean,\r\n                    required: false\r\n                }\r\n            ]\r\n        });\r\n        this.client = client;\r\n    }\r\n\r\n    public async execute(interaction: CommandInteraction): Promise<void> {\r\n        if (!interaction.isChatInputCommand()) return;\r\n\r\n        const name: string = encodeURIComponent(\r\n            interaction.options.getString(\"name\")!\r\n        );\r\n        const tag: string = encodeURIComponent(\r\n            interaction.options.getString(\"tag\")!\r\n        );\r\n\r\n        const card: boolean = interaction.options.getBoolean(\"card\") || false;\r\n        await interaction.deferReply();\r\n        try {\r\n            await fetch(\r\n                `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}?api_key=HDEV-04d0ed17-947a-49c0-871a-41ca3314250d`\r\n            )\r\n                .then((response) => response.json())\r\n                .then(async (res) => {\r\n                    const { data } = res;\r\n                    const puuid: string = data.puuid;\r\n                    const region: string = data.region.toUpperCase();\r\n                    const accountLevel: number = data.account_level;\r\n                    const smallCard: string = data.card.small;\r\n                    const largeCard: string = data.card.large;\r\n                    const wideCard: string = data.card.wide;\r\n                    const cardId: string = data.card.id;\r\n                    if (card) {\r\n                        const embed = new EmbedBuilder()\r\n                            .setAuthor({\r\n                                name: `${data.name}#${data.tag} [Level ${accountLevel}]`,\r\n                                iconURL: smallCard\r\n                            })\r\n                            .setColor(\r\n                                CypherNetworkConstants.DEFAULT_EMBED_COLOR()\r\n                            )\r\n                            .setImage(wideCard)\r\n                            .setThumbnail(largeCard)\r\n                            .setDescription(\r\n                                `• Small Card Link: [click here!](${smallCard})` +\r\n                                    `\\n` +\r\n                                    `• Large Card Link: [click here!](${largeCard})` +\r\n                                    `\\n` +\r\n                                    `• Wide Card Link: [click here!](${wideCard})`\r\n                            )\r\n                            .setFooter({\r\n                                text: \"Cypher Network\",\r\n                                iconURL: this.client.user?.displayAvatarURL()\r\n                            })\r\n                            .setTimestamp()\r\n                            .toJSON();\r\n                        return void (await interaction.editReply({\r\n                            embeds: [embed]\r\n                        }));\r\n                    }\r\n                    const embed = new EmbedBuilder()\r\n                        .setAuthor({\r\n                            name: `${data.name}#${data.tag} [Level ${accountLevel}]`,\r\n                            iconURL: smallCard\r\n                        })\r\n                        .setColor(CypherNetworkConstants.DEFAULT_EMBED_COLOR())\r\n                        .setImage(wideCard)\r\n                        .setDescription(\r\n                            `• Region: **${region}**` +\r\n                                `\\n` +\r\n                                `• Account Level: **${accountLevel}**` +\r\n                                `\\n` +\r\n                                `• PUUID: **${puuid}**` +\r\n                                `\\n` +\r\n                                `• Card ID: **${cardId}**`\r\n                        )\r\n                        .setFooter({\r\n                            text: \"Cypher Network\",\r\n                            iconURL: this.client.user?.displayAvatarURL()\r\n                        })\r\n                        .setTimestamp();\r\n                    return void (await interaction.editReply({\r\n                        embeds: [embed]\r\n                    }));\r\n                });\r\n        } catch (e) {\r\n            console.log(e);\r\n            return void (await interaction.editReply({\r\n                embeds: [EmbedUtil.getErrorEmbed(\"An error occurred.\")]\r\n            }));\r\n        }\r\n    }\r\n\r\n    public getName(): string {\r\n        return this.name;\r\n    }\r\n\r\n    public getCommandData(): ApplicationCommandData {\r\n        return this.data;\r\n    }\r\n}\r\n",
      "codeblock": true,
      "views": 10,
      "likes": 0,
      "createdAt": "2024-07-17T01:35:50.786Z"
    },
    {
      "id": "5mI0Zegfdto0k50",
      "title": "Alex",
      "content": "The man's name was Alex, and he had always been a bit of a loner. He had never been very good at making friends, and as a result, he had grown accustomed to spending most of his time alone. He was a computer science major in college, and he had always been passionate about software engineering. He spent countless hours coding and learning new programming languages, and he was determined to land a job in the field after graduation. Despite his hard work and dedication, Alex struggled to find an internship. He applied to dozens of companies, but no one seemed to want to give him a chance. He was beginning to feel discouraged and frustrated, and he started to wonder if he was simply not cut out for the field. One day, Alex decided to take a walk around campus to clear his head. As he was walking, he stumbled upon a flyer for a local hackathon. The prize was a free internship at a prestigious tech company, and Alex knew he had to sign up. He spent the next few days preparing for the hackathon, and on the day of the event, he arrived early and ready to go. The hackathon was a disaster. Alex's team didn't work well together, and they struggled to come up with a decent idea. They ended up presenting a half-baked project, and they didn't even make it to the final round. Alex was devastated. He had been so sure that the hackathon was his ticket to an internship, and now it seemed like that opportunity was slipping away from him. As the semester drew to a close, Alex found himself feeling more and more isolated. He had no friends, no internship, and no sense of direction. He started to wonder if he had made a mistake by majoring in computer science. Maybe he should have chosen a different field, one that was more social and less competitive. Despite his doubts, Alex refused to give up. He spent the summer working on personal projects and building his portfolio. He also started attending industry events and networking with other software engineers. Slowly but surely, he started to make connections and learn more about the field. But just as things were starting to look up, Alex received an email from the career services office at his college. The email informed him that he had been placed on academic probation due to his low grades. Alex was furious. He had worked so hard to get good grades, and now it seemed like it hadn't been enough. Feeling defeated, Alex retreated to his room and spent the rest of the day in bed. He didn't know what to do or where to turn. He felt like he had hit rock bottom, and he didn't know how to climb back out. But as he lay in bed, Alex started to think about all the things he had learned. He thought about the code he had written, the problems he had solved, and the people he had met. He realized that he was not a failure, and that he had a lot to offer. He slowly got out of bed and began to make a plan. Over the next few weeks, Alex poured all of his energy into his studies. He worked tirelessly to improve his grades, and he started to see results. He also started to attend more industry events and networking sessions. He met other software engineers and learned more about the field. As the semester drew to a close, Alex felt a sense of pride and accomplishment. He had worked hard to turn his life around, and it had paid off. He had improved his grades, made connections in the industry, and gained a new sense of confidence. But despite all of his progress, Alex still struggled to find an internship. He applied to dozens of companies, but no one seemed to want to give him a chance. He started to feel discouraged and frustrated, and he wondered if he would ever be able to break into the field. Just when Alex thought things couldn't get any worse, he received an email from a company he had applied to months ago. The email informed him that they had decided to move forward with another candidate, and that they would not be offering him an internship. Alex was devastated. He had been so sure that this was the opportunity he had been waiting for, and now it seemed like it was slipping away from him. Feeling defeated, Alex retreated to his room and spent the rest of the day in bed. He didn't know what to do or where to turn. He felt like he had hit rock bottom, and he didn't know how to climb back out. But as he lay in bed, Alex started to think about all the things he had learned. He thought about the code he had written, the problems he had solved, and the people he had met. He realized that he was not a failure, and that he had a lot to offer. He slowly got out of bed and began to make a plan. Over the next few weeks, Alex poured all of his energy into his personal projects. He worked tirelessly to build his portfolio and improve his skills. He also started to attend more industry events and networking sessions. He met other software engineers and learned more about the field. As the summer drew to a close, Alex felt a sense of pride and accomplishment. He had worked hard to turn his life around, and it had paid off. He had improved his skills, made connections in the industry, and gained a new sense of confidence. And then, just as Alex was starting to feel like he was finally on the right track, he received an email from a company he had applied to months ago. The email informed him that they had decided to offer him an internship, and that they would like him to start in a few weeks. Alex was overjoyed. He had finally landed the internship he had been working towards for so long. From that day on, Alex's life started to change. He worked hard at his internship and proved himself to be a valuable member of the team. He made connections and built relationships with his coworkers, and he started to feel like he was finally a part of something. He realized that he didn't need friends to be happy, but he did need to be happy with himself. And he was. Years later, Alex would look back on this time in his life and realize that it was a turning point. It was a time of great struggle and hardship, but it was also a time of great growth and learning. He learned that he was capable of overcoming any obstacle, and that he was strong enough to achieve his goals. And he learned that sometimes, all it takes is a little bit of perseverance and determination to turn your life around.",
      "codeblock": false,
      "views": 8,
      "likes": 0,
      "createdAt": "2024-07-25T17:40:36.883Z"
    }
  ]
}
```

### <Badge type="warning" text="POST"/> /pastes/create

Create a paste with the given data. The paste data should be provided through the request
body in `JSON` format.

| Request Body |              Description               | Required? |
|:------------:|:--------------------------------------:|:---------:|
|   `title`    |            The paste title.            |    no     |
|  `content`   |           The paste content.           |    yes    |
| `codeblock`  | `boolean` – Is this paste a codeblock? |    no     |

Sample Response

```json
{
    "id": "ZXmH8RXZvfcsjzQ",
    "title": "Cool Title",
    "content": "This is some paste content.",
    "codeblock": false,
    "views": 0,
    "likes": 0,
    "createdAt": "2024-07-29T00:37:19.766Z"
}
```

### <Badge type="tip" text="GET"/> /pastes/getAll

Get a list of all pastes.
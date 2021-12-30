## Creating The Handler

`BotClient.ts`

```ts
import {Intents} from "discord.js";
import {AdvancedCommandHandler} from "./AdvancedCommandHandler";
import TestCommand from "./TestCommand";

const client: Client = new Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS],
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false,
    }
});

const handler: AdvancedCommandHandler = new AdvancedCommandHandler(client)
    .registerCommands([new TestCommand(client)])

client.login("TOKEN-HERE").then(response => console.log("Logged in!"));

export default {client, handler};
```
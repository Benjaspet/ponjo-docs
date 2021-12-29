## Creating The Handler

- In order to create the command handler, you'll need to pass in a valid Discord.js client.
- Once you've created your client, you must create a new command handler.
  - Next, make sure to pass in the client you created.
  - Pass in the array of `AdvancedCommand`s you want to use.
- Log into your client and then start creating your command files using the example format below.

`BotClient.ts`

```ts
import {Intents} from "discord.js";
import {AdvancedCommandHandler} from "./AdvancedCommandHandler";
import TestCommand from "./TestCommand";

// Creating a new client with options.

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

`TestCommand.ts`

```ts
import AdvancedCommand from "./AdvancedCommand";
import {IAdvancedCommand} from "./IAdvancedCommand";
import {Client, CommandInteraction} from "discord.js";
import CommandBuilder from "./CommandBuilder";
import OptionBuilder from "./OptionBuilder";

export default class TestCommand extends AdvancedCommand implements IAdvancedCommand {

    private readonly client: Client;

    constructor(client: Client) {
        super("test",
            new CommandBuilder()
                .setName("test")
                .setDescription("A test command.")
                .addOption(
                    new OptionBuilder()
                        .setName("option1")
                        .setDescription("An option for the test command.")
                        .setType("STRING")
                        .setRequired(true)
                        .setAutocompletable(false)
                        .addChoices([])
                        .build()
                ).build().getData());
        this.client = client;
    }

    public async execute(interaction: CommandInteraction): Promise<void> {
        await interaction.reply("This is a test command.");
    }
}
```
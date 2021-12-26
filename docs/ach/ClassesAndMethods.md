## AdvancedCommandHandler

### Constructor

```ts
new AdvancedCommandHandler(client, options);
```

- Create a new instance of the command handler.

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `client` | `Client` | The Discord client. | `true` |
| `options` | `AdvancedCommandHandlerOptions` | The options. | `true` |

### Methods

`getCommand()`
- Get a command by name.
- Returns: `AdvancedCommand`

| Parameter | Type | Description |
:---: | :---: | :---:
| `client` | `Client` | The Discord client to use. |
| `options` | `AdvancedCommandHandlerOptions` | The options for the command handler. |

`deployAll()`
- Deploy all application commands.
- Returns: `Promise<void>`

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `commands` | `AdvancedCommand[]` | The `AdvancedCommand` instances to deploy. | `true` |
| `guilds?` | `string` | The guild(s) to deploy the commands to. | `false` |

`registerCommands()`
- Register a list of commands to the command handler.
- Returns: `AdvancedCommandHandler`

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `commands` | `AdvancedCommand[]` | The `AdvancedCommand` instances to register. | `true` |

`deleteAll()`
- Delete all application commands.
- Returns: `Promise<void>`

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `guilds?` | `string` | The guild(s) to delete the commands from. | `false` |

`getAllCommandData()`
- Fetch all command data.
- Returns: `AdvancedCommandData[]`

## CommandBuilder

### Constructor

```ts
new CommandBuilder();
```

- Create a new instance of the command builder.

### Methods

`setName()`
- Set the name of this command instance.
- Returns: `CommandBuilder`

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `name` | `string` | The name of this command. | `true` |

`setDescription()`
- Set the description of this command instance.
- Returns: `CommandBuilder`

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `description` | `string` | The description of this command. | `true` |

`addOption()`
- Add an option to this command instance.
- Returns: `CommandBuilder`

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `option` | `AdvancedCommandOptionData` | The option to add. | `true` |

`addOptions()`
- Add a list of options to this command instance.
- Returns: `CommandBuilder`

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `options` | `AdvancedCommandOptionData[]` | The list of options to add. | `true` |

`build()`
- Build the command instance.
- Throws: `InvalidCommandDataException`
- Returns: [`AdvancedCommandData`](../../ach/Types.md)

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `option` | `AdvancedCommandOptionData` | The option to add. | `true` |
## Classes

### Constructor

```ts
new AdvancedCommandHandler(client, options);
```

- Create a new instance of the command handler.

| **Parameter** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| `client` | `Client` | The Discord client. | `true` |
| `options` | `AdvancedCommandHandlerOptions` | The options. | `true` |

## Methods

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


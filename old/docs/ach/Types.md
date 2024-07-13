## AdvancedCommandData

- The raw JSON application command data that will be sent directly to the Discord API.

| **Parameter** | **Type** | **Required** | **Description** |
| :---: | :---: | :---: | :---: |
| `name` | `string` | `true` | The name for this command. |
| `description` | `string` | `true` | The description for this command. |
| `options` | `AdvancedCommandOptionData[]` | `false` | The list of options for this command. |

## AdvancedCommandOptionData

- The raw JSON component for a command option that will be added to the command data.

| **Parameter** | **Type** | **Required** | **Description** |
| :---: | :---: | :---: | :---: |
| `name` | `string` | `true` | The name for this option. |
| `description` | `string` | `true` | The description for this option. |
| `type` | `ApplicationCommandOptionType` | `true` | The type of this option. |
| `required` | `boolean` | `false` | Whether or not this option is required. |
| `autocomplete` | `boolean` | `false` | If this option should support autocomplete. |
| `choices` | `AdvancedCommandChoice` | `false` | The list of choices for this option. |
The base URL for the API is [https://gameapi.benpetrillo.dev](https://gameapi.benpetrillo.dev)

## /v3/haloinfinite/stats/:username

- Get Halo Infinite player statistics by username.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `username` | `string` | The username of the player. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Connection | `string` | `keep-alive` | `false` |

## /v3/lol/stats/:player

- Get League of Legends player statistics by username.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `player` | `string` | The player to fetch. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Connection | `string` | `keep-alive` | `false` |

## /v3/status

- Get live game data for a variety of games.
- Request method: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Connection | `string` | `keep-alive` | `false` |
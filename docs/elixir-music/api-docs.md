# API Documentation

Elixir Music has its own public API. The base URL of the API can be found
below, and is as follows:

[https://elixir.benpetrillo.dev](https://elixir.benpetrillo.dev)

## Endpoints

### `POST /api/v1/player/join`

- Have Elixir join a specific voice channel.

| **Parameter** |     **Type**     |      **Details**      |
|:-------------:|:----------------:|:---------------------:|
|   `guildId`   |   `snowflake`    |     The guild ID.     |
|  `channelId`  |   `snowflake`    | The voice channel ID. |
|  **Header**   |     **Type**     |    **Description**    |
| Authorization | `Bearer <token>` |     Your API key.     |
|  Connection   |     `string`     |     `keep-alive`      |

### Sample Response

```json
{
  "message": "Elixir has joined the voice channel.",
  "channel_id": "988895088434360395",
  "guild_id": "988895087989784576"
}
```
#### Status Codes
- `200 OK` - The request was successful.
- `400 Bad Request` - The request was malformed or missing required parameters.
- `401 Unauthorized` - The API key was missing or invalid.
- `404 Not Found` - The guild or voice channel was not found.
- `409 Conflict` - Elixir is already in a voice channel.
- `500 Internal Server Error` - An error occurred on the server.
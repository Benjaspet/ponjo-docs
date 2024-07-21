# API Documentation

Elixir Music has its own public API. The base URL of the API, where all 
requests originate, is as follows:

[https://elixir.benpetrillo.dev/api/v1](https://elixir.benpetrillo.dev)

## Endpoints

### `POST /{guild}/join/{channel}`

- Have Elixir join a specific voice channel.

| **Parameter** |     **Type**     |      **Details**      |
|:-------------:|:----------------:|:---------------------:|
|    `guild`    |   `snowflake`    |     The guild ID.     |
|   `channel`   |   `snowflake`    | The voice channel ID. |
|  **Header**   |     **Type**     |    **Description**    |
| Authorization | `Bearer <token>` |     Your API key.     |

#### Sample Response

```json
{
  "message": "Elixir has joined the voice channel.",
  "channel_id": "988895088434360395",
  "guild_id": "988895087989784576"
}
```
#### Status Codes
- `200 OK` - Successful request.
- `400 Bad Request` - Malformed or missing parameters. More often than not, this is because a required parameter was missing.
- `401 Unauthorized` - You are not authorized to make this request, likely because your API key is invalid or missing from the request body when making a request to a route that requires it.
- `409 Conflict` - Elixir is already in a voice channel. The bot must leave the current channel first before joining another.
- `500 Internal Server Error` - A server-side error occurred. This is likely on our end. If it persists, do not hesitate to contact us at [admin@benpetrillo.dev](mailto:admin@benpetrillo.dev).

### `GET /{guild}/nowplaying`

- Get the track that is currently playing in a guild.

| **Parameter** |     **Type**     |      **Details**      |
|:-------------:|:----------------:|:---------------------:|
|    `guild`    |   `snowflake`    |     The guild ID.     |

#### Sample Response

```json
{
  "title": "Tuyo (Narcos Theme)",
  "author": "Rodrigo Amarante",
  "duration": 151,
  "formattedDuration": "00:18/02:31",
  "uri": "https://open.spotify.com/track/6g2BiiVQqY5v1S4HIrM54F",
  "thumbnail": "https://i.scdn.co/image/ab67616d0000b27364d924aebcb26f08aac1bf3b",
  "position": 2220,
  "isStream": false,
  "identifier": "6g2BiiVQqY5v1S4HIrM54F",
  "requestedBy": "460177285954142208"
}
```
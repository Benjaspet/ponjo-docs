# API Documentation

Elixir Music has its own public API. The base URL of the API, where all 
requests originate, is as follows:

[https://elixir.benpetrillo.dev/api/v1](https://elixir.benpetrillo.dev)

## Endpoints

### `POST /{guild}/join`

- Connect Elixir to the specified voice channel in the provided guild, if it exists.

|  **Parameter**  |     **Type**     |      **Details**      |
|:---------------:|:----------------:|:---------------------:|
|     `guild`     |   `snowflake`    |     The guild ID.     |
|   **Header**    |     **Type**     |      **Details**      |
| `Authorization` | `Bearer <token>` |     Your API key.     |
|    **Body**     |     **Type**     |      **Details**      |
|    `channel`    |   `snowflake`    | The voice channel ID. |
|     `user`      |   `snowflake`    |     The user ID.      |

#### Sample Response

```json
{
  "guild": "766045633697021973",
  "channel": "766045633697021978",
  "user": "460177285954142208",
  "message": "Successfully joined the voice channel."
}
```

### `POST /{guild}/volume`

- Change the volume of the player in the provided guild, if it exists.
- The volume must be between 0 and 100.

|  **Parameter**  |     **Type**     |      **Details**      |
|:---------------:|:----------------:|:---------------------:|
|     `guild`     |   `snowflake`    |     The guild ID.     |
|   **Header**    |     **Type**     |      **Details**      |
| `Authorization` | `Bearer <token>` |     Your API key.     |
|    **Body**     |     **Type**     |      **Details**      |
|     `user`      |   `snowflake`    |     The user ID.      |
|    `volume`     |      `int`       | The volume amplifier. |

#### Sample Response

```json
{
  "guild": "766045633697021973",
  "user": "460177285954142208",
  "message": "Successfully changed the volume to 45."
}
```

### `POST /{guild}/play`

- Play a track or playlist in the provided guild. If a track is already playing, the track will be added to the queue.
- The `query` parameter can be a supported track URL or search query.

|  **Parameter**  |     **Type**     |       **Details**        |
|:---------------:|:----------------:|:------------------------:|
|     `guild`     |   `snowflake`    |      The guild ID.       |
|   **Header**    |     **Type**     |       **Details**        |
| `Authorization` | `Bearer <token>` |      Your API key.       |
|    **Body**     |     **Type**     |       **Details**        |
|     `user`      |   `snowflake`    |       The user ID.       |
|     `query`     |     `string`     | The URL or search query. |

#### Sample Response

```json
[
  {
    "title": "Andrés Cepeda - Magia ft. Sebastián Yatra",
    "author": "Andrés Cepeda",
    "duration": 203,
    "formattedDuration": "00:00/03:23",
    "uri": "https://www.youtube.com/watch?v=_n1o4D6G_XE",
    "thumbnail": "https://i.ytimg.com/vi/_n1o4D6G_XE/default.jpg",
    "position": 0,
    "isStream": false,
    "identifier": "_n1o4D6G_XE",
    "requestedBy": "946443578849243156"
  },
  {
    "title": "Pedro Capó, Farruko - Calma (Remix - Official Video)",
    "author": "Pedro Capó",
    "duration": 238,
    "formattedDuration": "00:00/03:58",
    "uri": "https://www.youtube.com/watch?v=1_zgKRBrT0Y",
    "thumbnail": "https://i.ytimg.com/vi/1_zgKRBrT0Y/default.jpg",
    "position": 0,
    "isStream": false,
    "identifier": "1_zgKRBrT0Y",
    "requestedBy": "946443578849243156"
  },
  {
    "title": "Bacilos - Caraluna (Official Music Video)",
    "author": "Warner Música",
    "duration": 269,
    "formattedDuration": "00:00/04:29",
    "uri": "https://www.youtube.com/watch?v=-zgDXIi1uYw",
    "thumbnail": "https://i.ytimg.com/vi/-zgDXIi1uYw/default.jpg",
    "position": 0,
    "isStream": false,
    "identifier": "-zgDXIi1uYw",
    "requestedBy": "946443578849243156"
  }
]
```

#### Sample Response #2

```json
{
    "title": "my ex's best friend (with blackbear)",
    "author": "mgk",
    "duration": 139,
    "formattedDuration": "00:00/02:19",
    "uri": "https://open.spotify.com/track/7kDUspsoYfLkWnZR7qwHZl",
    "thumbnail": "https://i.scdn.co/image/ab67616d0000b273d4d4929a3a86fe2f9fadbd42",
    "position": 0,
    "isStream": false,
    "identifier": "7kDUspsoYfLkWnZR7qwHZl",
    "requestedBy": "946443578849243156"
}
```


### `POST /{guild}/stop`

- Destroy the player in the provided guild.

|  **Parameter**  |     **Type**     |  **Details**  |
|:---------------:|:----------------:|:-------------:|
|     `guild`     |   `snowflake`    | The guild ID. |
|   **Header**    |     **Type**     |  **Details**  |
| `Authorization` | `Bearer <token>` | Your API key. |
|    **Body**     |     **Type**     |  **Details**  |
|     `user`      |   `snowflake`    | The user ID.  |

#### Sample Response

```json
{
  "guild": "766045633697021973",
  "user": "460177285954142208",
  "message": "Successfully stopped the player."
}
```

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

## Status Codes
- `200 OK` - Successful request.
- `400 Bad Request` - Malformed or missing parameters. More often than not, this is because a required parameter was missing.
- `401 Unauthorized` - You are not authorized to make this request, likely because your API key is invalid or missing from the request body when making a request to a route that requires it.
- `500 Internal Server Error` - A server-side error occurred. This is likely on our end. If it persists, do not hesitate to contact us at [admin@benpetrillo.dev](mailto:admin@benpetrillo.dev).
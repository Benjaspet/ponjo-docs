# API Documentation

Elixir Music has an API that allows you to access music queues, custom playlists,
and more from your own applications. This documentation will guide you through
the available endpoints and how to use them. The base URL of the API is as follows:

[https://elixir.benpetrillo.dev/api/v1](https://elixir.benpetrillo.dev)

## Authentication

*Read-only* endpoints do not require authentications. On the contrary, it is necessary
for us to enforce authentication on *write* endpoints to ensure that only the appropriate
users can modify the state of the player in a guild. In almost all cases, users with
*administrative privileges* in a guild will be able to generate an API key to use
the endpoints that modify the state of the player in a guild.

API keys are bound to a `user.id` and a `guild.id`. This means that each API
key is restricted for use in a single guild. To generate an API key, you must
be an administrator in the guild in which you wish to generate the key.

To generate an API key, run `/genkey` in the guild for which the key will be associated.
Please note: API keys are sensitive information and should be treated as such. Do not
share your API key with anyone, as it can be used to modify the state of the player
in your guild.

API keys are generate on a one-time basis. If you happen to lose yours, contact us
at [admin@benpetrillo.dev](mailto:admin@benpetrillo.dev) with your guild ID and user ID.



## Endpoints

### <Badge type="warning" text="POST"/> /[{guild.id}](https://discord.com/developers/docs/resources/guild#guild-object)/join

Connect Elixir to a voice channel in the provided guild. Elixir *must be* in the same guild as the 
voice channel to which it is connecting. Will return a `400 Bad Request` if the voice channel
or guild is invalid or not found.


|  String Param   |                         Description                         | Required |
|:---------------:|:-----------------------------------------------------------:|:--------:|
|   `guild.id`    |        The guild in which the voice channel resides.        |   yes    |
|     Header      |                         Description                         | Required |
| `Authorization` |                      `Bearer {token}`                       |   yes    |
|  Request Body   |                         Description                         | Required |
|  `channel.id`   |     The voice channel ID to which Elixir will connect.      |   yes    |
|    `user.id`    | The id of the user who requested to join the voice channel. |   yes    |

Sample Response

```json
{
  "guild": "766045633697021973",
  "channel": "766045633697021978",
  "user": "460177285954142208",
  "message": "Successfully joined the voice channel."
}
```

### <Badge type="warning" text="POST"/> /[{guild.id}](https://discord.com/developers/docs/resources/guild#guild-object)/volume

Change the volume of the audio player in a guild. The volume must be an `int` between
0 and 100, inclusive. Will return a `400 Bad Request` if the volume is out of range.

|  String Param   |               Description                | Required? |
|:---------------:|:----------------------------------------:|:---------:|
|   `guild.id`    | The guild in which to change the volume. |    yes    |
| Request Header  |               Description                |           |
| `Authorization` |             `Bearer {token}`             |    yes    |
|  Request Body   |               Description                |           |
|    `user.id`    |  The user associated with the API key.   |    yes    |
|    `volume`     |    The volume amplifier, as an `int`.    |    yes    |

Sample Response

```json
{
  "guild": "766045633697021973",
  "user": "460177285954142208",
  "message": "Successfully changed the volume to 45."
}
```

### <Badge type="warning" text="POST"/> /[{guild.id}](https://discord.com/developers/docs/resources/guild#guild-object)/play

Play a track or playlist in a guild. The `query` parameter can be a supported track URL
or an arbitrary search query. If the query is a search query, the first result that is found
using our backend will be played. Both playlists and singular tracks are supported.
Will return a `400 Bad Request` if the query is invalid, or a `404 Not Found` if no 
track is found.

|  String Param   |               Description                | Required? |
|:---------------:|:----------------------------------------:|:---------:|
|   `guild.id`    | The guild in which to change the volume. |    yes    |
| Request Header  |               Description                |           |
| `Authorization` |             `Bearer {token}`             |    yes    |
|  Request Body   |               Description                |           |
|    `user.id`    |  The user associated with the API key.   |    yes    |
|     `query`     |     The URL or search query to play.     |    yes    |

Sample Response

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

Sample Response #2

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


### <Badge type="warning" text="POST"/> /[{guild.id}](https://discord.com/developers/docs/resources/guild#guild-object)/stop

Destroy the audio player in a guild.

|  String Param   |                   Description                   | Required? |
|:---------------:|:-----------------------------------------------:|:---------:|
|   `guild.id`    | The guild in which to destroy the audio player. |    yes    |
| Request Header  |                   Description                   |           |
| `Authorization` |                `Bearer {token}`                 |    yes    |
|  Request Body   |                   Description                   |           |
|    `user.id`    |      The user associated with the API key.      |    yes    |

Sample Response

```json
{
  "guild": "766045633697021973",
  "user": "460177285954142208",
  "message": "Successfully stopped the player."
}
```

### <Badge type="info" text="GET"/> /[{guild.id}](https://discord.com/developers/docs/resources/guild#guild-object)/nowplaying

Get the data of the track that is currently playing in a guild. Will return a `410 Gone` if
no track is currently playing.

|  String Param   |                  Description                   | Required? |
|:---------------:|:----------------------------------------------:|:---------:|
|   `guild.id`    | The guild in which to fetch the current track. |    yes    |
| Request Header  |                  Description                   |           |
| `Authorization` |                `Bearer {token}`                |    no     |

Sample Response

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

## HTTP Status Codes
- `200 OK` - Successful request.
- `400 Bad Request` - Malformed or missing parameters. More often than not, this is because a required parameter was missing, either in the URL itself or in the request body. Double-check the documentation.
- `401 Unauthorized` - You are not authorized to make this request, likely because your API key is invalid or missing from the request body when making a request to a route that requires it. Make sure your API key is associated with the guild you are trying to access.
- `500 Internal Server Error` - A server-side error occurred. This is likely on our end. If it persists, do not hesitate to contact us at [admin@benpetrillo.dev](mailto:admin@benpetrillo.dev).
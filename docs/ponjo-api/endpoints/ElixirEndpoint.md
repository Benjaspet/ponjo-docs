## /v1/elixir/queue

- Get the music queue for a guild. 
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| `bot` | `snowflake` | The bot ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "queue": [
    {
      "title": "Boney M. - Rasputin (Sopot Festival 1979) (VOD)",
      "author": "BoneyMVEVO",
      "length": 269000,
      "identifier": "16y1AkoZkmQ",
      "isStream": false,
      "uri": "https://www.youtube.com/watch?v=16y1AkoZkmQ"
    },
    {
      "title": "Queen – Bohemian Rhapsody (Official Video Remastered)",
      "author": "Queen Official",
      "length": 359000,
      "identifier": "fJ9rUzIMcZQ",
      "isStream": false,
      "uri": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
    }
  ],
  "timestamps": {
    "date": "1/31/2022, 5:13:31 AM",
    "unix": 1643606011
  }
}
```

## /v1/elixir/nowplaying

- Get information about the track currently playing in a guild.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| `bot` | `snowflake` | The bot ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "nowplaying": {
    "title": "Queen - Don't Stop Me Now (Official Video)",
    "author": "Queen Official",
    "length": 212000,
    "identifier": "HgzGwKwLmgM",
    "isStream": false,
    "uri": "https://www.youtube.com/watch?v=HgzGwKwLmgM",
    "position": 2620
  },
  "timestamps": {
    "date": "1/31/2022, 5:16:37 AM",
    "unix": 1643606197
  }
}
```

## /v1/elixir/pause

- Pause the music player in a guild.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| `bot` | `snowflake` | The bot ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "message": "Successfully paused the player.",
  "timestamps": {
    "date": "2/10/2022, 3:14:08 AM",
    "unix": 1644462849
  }
}
```

## /v1/elixir/resume

- Resume the music player in a guild.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| `bot` | `snowflake` | The bot ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "message": "Successfully resumed the player.",
  "timestamps": {
    "date": "2/10/2022, 3:14:08 AM",
    "unix": 1644462849
  }
}
```

## /v1/elixir/shuffle

- Shuffle the music queue in a guild.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| `bot` | `snowflake` | The bot ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "message": "Successfully shuffled the queue.",
  "timestamps": {
    "date": "2/10/2022, 3:15:13 AM",
    "unix": 1644462914
  }
}
```

## /v1/elixir/play

- Play a track or playlist in a guild.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| `channel` | `snowflake` | The voice channel ID. | `true` |
| `bot` | `snowflake` | The bot ID. | `true` |
| `query` | `base64 or string` | The track or playlist to play. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "title": "Dream ft. PmBata - Roadtrip (Official Lyric Video)",
    "author": "Dream Music",
    "length": 134000,
    "identifier": "Ow_PNMtMGhU",
    "isStream": false,
    "uri": "https://www.youtube.com/watch?v=Ow_PNMtMGhU"
  },
  "timestamps": {
    "date": "2/10/2022, 3:18:23 AM",
    "unix": 1644463104
  }
}
```

## /v1/elixir/playlist/fetch

- Fetch a custom playlist by ID.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `id` | `string` | The custom playlist ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "info": {
      "id": "eerievacation",
      "name": "Caribbean Groove",
      "description": "Some chill vacation-themed tracks.",
      "playlistCoverUrl": "https://media.cntraveler.com/photos/60e612ae0a709e97d73d9c60/1:1/w_3840,h_3840,c_limit/Beach%20Vacation%20Packing%20List-2021_GettyImages-1030311160.jpg",
      "author": "460177285954142208",
      "volume": 100
    },
    "tracks": [
      {
        "title": "Copacabana",
        "url": "https://open.spotify.com/track/4QuhF1hA9hDWaXM7pvXgLv",
        "artist": "Steel Drum Island",
        "duration": 258640,
        "isrc": "ushm80892301"
      },
      {
        "title": "Matilda",
        "url": "https://open.spotify.com/track/079IZgk3Cq5hZExxWlSoIw",
        "artist": "Steeldrums & Island Music",
        "duration": 179066,
        "isrc": "BBA019100471"
      },
      {
        "title": "Island Party",
        "url": "https://open.spotify.com/track/1bXuNC1nB4G7D8dL38xs1r",
        "artist": "Caribbean Sound",
        "duration": 157335,
        "isrc": "USA2P1496871"
      },
      {
        "title": "Limbo Rock",
        "url": "https://open.spotify.com/track/0mHUITW2RJhEeTRHIMUD4i",
        "artist": "Steel Drum Island",
        "duration": 217493,
        "isrc": "ushm80885231"
      }
    ],
    "options": {
      "shuffle": false,
      "repeat": false
    }
  },
  "timestamps": {
    "date": "2/11/2022, 9:42:38 AM",
    "unix": 1644590559
  }
}
```

## /v1/elixir/playlist/queue

- Queue a custom playlist by ID.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `id` | `string` | The custom playlist ID. | `true` |
| `guild` | `snowflake` | The guild ID. | `true` |
| `channel` | `snowflake` | The channel ID. | `true` |
| `bot` | `snowflake` | The bot ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "messages": "Successfully queued the custom playlist.",
  "timestamps": {
    "date": "2/11/2022, 9:44:45 AM",
    "unix": 1644590685
  }
}
```

## /v1/elixir/join

- Have Elixir join a voice channel.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| `channel` | `snowflake` | The channel ID. | `true` |
| `bot` | `snowflake` | The bot ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "messages": "Successfully joined the voice channel.",
  "timestamps": {
    "date": "2/11/2022, 9:44:45 AM",
    "unix": 1644590685
  }
}
```
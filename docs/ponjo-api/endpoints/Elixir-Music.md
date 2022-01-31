## Guild Queue

Get the music queue for a guild.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```
GET https://app.ponjo.club/v1/elixir/queue?guild=887516061266755585
```

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

## Pause Player

Pause the music player in a guild.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```
GET https://app.ponjo.club/v1/elixir/pause?guild=887516061266755585
```

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "message": "Successfully paused the player.",
  "timestamps": {
    "date": "1/31/2022, 5:15:08 AM",
    "unix": 1643606108
  }
}
```

## Resume Player

Resume the music player in a guild.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```
GET https://app.ponjo.club/v1/elixir/resume?guild=887516061266755585
```

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "message": "Successfully resumed the player.",
  "timestamps": {
    "date": "1/31/2022, 5:15:40 AM",
    "unix": 1643606140
  }
}
```

## Get Now Playing Track

Get information about the track currently playing in a guild.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```
GET https://app.ponjo.club/v1/elixir/nowplaying?guild=887516061266755585
```

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

## Play A Track

Load and play a track in a voice channel.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
| `query` | `base64 string` | The search query. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```
GET https://app.ponjo.club/v1/elixir/play?guild=887516061266755585&query=aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1qbVQxcHlCRGloOA
```

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "title": "WCC 2022 Awards Ceremony",
    "author": "CODS",
    "length": 1130000,
    "identifier": "Pn04-FP6u-Y",
    "isStream": false,
    "uri": "https://www.youtube.com/watch?v=Pn04-FP6u-Y"
  },
  "timestamps": {
    "date": "1/31/2022, 5:19:18 AM",
    "unix": 1643606358
  }
}
```
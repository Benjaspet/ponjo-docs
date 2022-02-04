## /v1/elixir/queue

- Get the music queue for a guild. 
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
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
- Request type: `PUT`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `guild` | `snowflake` | The guild ID. | `true` |
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
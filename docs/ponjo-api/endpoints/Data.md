## /v1/color

- View information on any hex color.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `hex` | `string` | The hex code to search for. | `true` |
| `format` | `string` | The format of the response. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `false` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "message": "OK",
  "hex": "F8B112",
  "name": "Dark Tangerine",
  "hueHex": "#FFA500",
  "hueName": "Orange",
  "match": false,
  "image": "https://app.ponjo.club/v1/color?hex=F8B112&format=png",
  "timestamps": {
    "date": "11/24/2021, 8:31:15 PM",
    "unix": 1637785876
  }
}
```

## /v1/chatbot

- Receive a response from an AI chatbot.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `message` | `string` | The message to send. | `true` |
| `name` | `?string` | The chatbot's name. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "chatbot": {
    "name": "Bob",
    "response": "Ahoi! How are you doing?"
  },
  "timestamps": {
    "date": "1/31/2022, 10:57:59 PM",
    "unix": 1643669879
  }
}
```

## /v1/meme

- Get a random meme from Reddit.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `count` | `int` | The amount of memes to fetch. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "memes": [
    {
      "title": "Patrick's character development",
      "image": "https://i.redd.it/fb7v8bfqk7f81.jpg",
      "link": "https://www.reddit.com/r/meme/comments/shsz8b/patricks_character_development/",
      "stats": {
        "author": "smol_boi-_-",
        "comments": 36,
        "likes": 7456,
        "dislikes": 0,
        "nsfw": false,
        "subreddit": "meme",
        "subredditName": "r/meme",
        "id": "shsz8b",
        "voteRatio": 0.97
      }
    },
    {
      "title": "Morals or whatever",
      "image": "https://i.redd.it/tqegegauh7f81.jpg",
      "link": "https://www.reddit.com/r/meme/comments/shspln/morals_or_whatever/",
      "stats": {
        "author": "STEELJAW116",
        "comments": 62,
        "likes": 7550,
        "dislikes": 0,
        "nsfw": false,
        "subreddit": "meme",
        "subredditName": "r/meme",
        "id": "shspln",
        "voteRatio": 0.98
      }
    }
  ],
  "timestamps": {
    "date": "2/1/2022, 6:14:02 PM",
    "unix": 1643739242
  }
}
```

## /v1/weather

- Get the weather information & forecasts for an area.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `location` | `string` | The location of the weather. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
    "status": 200,
    "data": [
        {
            "location": {
                "name": "Boston, MA",
                "lat": "42.359",
                "long": "-71.059",
                "timezone": "-4",
                "alert": "",
                "degreetype": "F",
                "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
            },
            "current": {
                "temperature": "32",
                "skycode": "26",
                "skytext": "Cloudy",
                "date": "2022-02-01",
                "observationtime": "13:45:00",
                "observationpoint": "Boston, MA",
                "feelslike": "26",
                "humidity": "64",
                "winddisplay": "7 mph East",
                "day": "Tuesday",
                "shortday": "Tue",
                "windspeed": "7 mph",
                "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/26.gif"
            },
            "forecast": [
                {
                    "low": "13",
                    "high": "29",
                    "skycodeday": "31",
                    "skytextday": "Mostly Clear",
                    "date": "2022-01-31",
                    "day": "Monday",
                    "shortday": "Mon",
                    "precip": ""
                },
                {
                    "low": "31",
                    "high": "35",
                    "skycodeday": "26",
                    "skytextday": "Cloudy",
                    "date": "2022-02-01",
                    "day": "Tuesday",
                    "shortday": "Tue",
                    "precip": "10"
                },
                {
                    "low": "38",
                    "high": "40",
                    "skycodeday": "26",
                    "skytextday": "Cloudy",
                    "date": "2022-02-02",
                    "day": "Wednesday",
                    "shortday": "Wed",
                    "precip": "50"
                },
                {
                    "low": "29",
                    "high": "44",
                    "skycodeday": "26",
                    "skytextday": "Cloudy",
                    "date": "2022-02-03",
                    "day": "Thursday",
                    "shortday": "Thu",
                    "precip": "80"
                },
                {
                    "low": "17",
                    "high": "43",
                    "skycodeday": "16",
                    "skytextday": "Snow",
                    "date": "2022-02-04",
                    "day": "Friday",
                    "shortday": "Fri",
                    "precip": "100"
                }
            ]
        }
    ],
    "timestamps": {
        "date": "2/1/2022, 6:17:09 PM",
        "unix": 1643739430
    }
}
```
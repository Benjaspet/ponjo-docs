## /v1/affirmations

- Retrieve a confidence-boosting affirmation.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `count` | `integer` | The amount of affirmations to return. | `true` |
| **Header** | **Type** | **Description** |
| Authorization | `string` | Your API access key. | `true` |
| Content-Type | `string` | `application/json` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "affirmation": "You know more than you knew yesterday.",
  "timestamps": {
    "date": "10/2/2021, 9:56:31 PM",
    "unix": 1633226192
  }
}
```

## /v1/captcha

- Create a captcha with its resolution.
- Request method: `GET`

| **Header** | **Type** | **Description** |
| :---: | :---: | :---: | 
| Authorization | `string` | Your API access key. |
| Content-Type | `string` | `application/json` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "data": {
    "value": "CMWMBT",
    "imgData": "data:image/jpeg;base64,/9j/2wBDAAgGBgcGBQg..."
  },
  "timestamps": {
    "date": "10/16/2021, 10:25:50 AM",
    "unix": 1634394350
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

## /v1/meme

- Get a random meme from Reddit.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `count` | `integer` | The amount of memes to fetch. | `false` |
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
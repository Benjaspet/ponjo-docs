## /v1/roboeerie/tags

- Fetch an amount of tags for the RoboEerie Discord bot.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `count` | `integer` | The amount of tags. | `false` |
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
      "tag": "mystery",
      "content": "https://images-ext-1.discordapp.net/external/bPXPRsqqqG1Q-u09qoSvSkrfL92ZnYltmkWVyOTa-9g/https/c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif",
      "author": "460177285954142208",
      "guild": "828296827882831913",
      "createdAt": "2021-10-18T03:06:36.374Z",
      "updatedAt": "2021-10-19T02:04:54.132Z"
    },
    {
      "tag": "eerie",
      "content": "Hey there! I'm Eerie (also known as [Ben](https://benpetrillo.dev/profile)) and I'm an 18-year-old high school student, developer, gamer, and creative writer. I also enjoy spending time with friends. During the school year, I'm quite busy and have less time for development. With respect to development, I work on both the frontend and the backend, developing websites, web applications, and more. I have approximately three years of experience in fullstack development, with most experience in Java, PHP, JavaScript, and TypeScript.",
      "author": "460177285954142208",
      "guild": "828296827882831913",
      "createdAt": "2021-10-18T03:15:34.493Z",
      "updatedAt": "2021-10-24T20:25:27.075Z"
    },
    {
      "tag": "discord.py",
      "content": "https://discord.gg/dpy",
      "author": "460177285954142208",
      "guild": "828296827882831913",
      "createdAt": "2021-10-18T11:02:39.206Z",
      "updatedAt": "2021-10-18T11:02:39.206Z"
    }
  ],
  "timestamps": {
    "date": "2/4/2022, 1:07:18 PM",
    "unix": 1643980038
  }
}
```

## /v1/urlshortener/create

- Create a shortened URL.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `url` | `uri string` | The URL to shorten. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "full": "https://google.com",
    "short": "nEZJUWxcA",
    "clicks": 0,
    "_id": "61fd259786b2f34dbd74ad96",
    "createdAt": "2022-02-04T13:09:43.903Z",
    "updatedAt": "2022-02-04T13:09:43.903Z"
  },
  "timestamps": {
    "date": "2/4/2022, 1:09:44 PM",
    "unix": 1643980184
  }
}
```

## /v1/urlshortener/all

- Get all shortened URLs.
- Request type: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "shortURLs": [
    {
      "_id": "619bbdda3e0469819f0460fb",
      "full": "https://ponjo.club",
      "short": "2znh9YcjJ",
      "clicks": 5,
      "createdAt": "2021-11-22T15:57:14.605Z",
      "updatedAt": "2021-11-24T16:17:28.068Z"
    },
    {
      "_id": "61f4ae3af515c6ab512c2e6c",
      "full": "https://tryitands.ee/",
      "short": "kDv8PsEuw",
      "clicks": 1,
      "createdAt": "2022-01-29T03:02:18.677Z",
      "updatedAt": "2022-01-29T03:02:49.952Z"
    },
    {
      "_id": "61fd259786b2f34dbd74ad96",
      "full": "https://google.com",
      "short": "nEZJUWxcA",
      "clicks": 0,
      "createdAt": "2022-02-04T13:09:43.903Z",
      "updatedAt": "2022-02-04T13:09:43.903Z"
    }
  ],
  "timestamps": {
    "date": "2/4/2022, 1:11:21 PM",
    "unix": 1643980282
  }
}
```
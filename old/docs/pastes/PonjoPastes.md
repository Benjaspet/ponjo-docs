The base URL of the API is [https://pastes.ponjo.club](https://pastes.ponjo.club).

## /api/v1/fetch/:id

- Fetch a paste by ID.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `id` | `string` | The ID of the paste. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "message": "Success.",
  "paste": {
    "content": "An apple a day keeps the doctor away.",
    "id": "mvDZ1RZJG",
    "url": "https://pastes.ponjo.club/mvDZ1RZJG",
    "contentLength": 37
  }
}
```

## /api/v1/all

- Fetch an array of all pastes.
- Request method: `GET`

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "message": "Success.",
  "total": 3,
  "pastes": [
    {
      "id": "adAHqW2PY",
      "title": "sdfsdf",
      "content": "private static readonly foo: string = \"bar\";",
      "codeblock": true
    },
    {
      "id": "ap6M6Aoli",
      "title": "youtube ip rotator",
      "content": "package com.sedmelluq.lava.extensions.youtuberotator...",
      "codeblock": true
    },
    {
      "id": "vdtdQTVXG",
      "title": "Cyberpunk 2020 Street Weapons",
      "content": "Blackhands Street Weapons\r\nhttps://the-eye.eu/public/Books/rpg.rem.uz/Cyberpunk/Cyberpunk%202020/Cyberpunk%202020%20-%20CP3461%20Blackhand%27s%20Street%20Weapons.pdf",
      "codeblock": false
    }
  ]
}
```

## /api/v1/create

- Create a paste.
- Request method: `PUT`
- This method requires a request body.

| **Body Type** | **Details** | **Required** |
| :---: | :---: | :---: |
| `text/plain` | The guild ID. | `true` |
| **Header** | **Type** | **Required** |
| Content-Type | `text/plain` | `true` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "message": "Success.",
  "paste": {
    "content": "An apple a day keeps the doctor away.",
    "id": "mvDZ1RZJG",
    "url": "https://pastes.ponjo.club/mvDZ1RZJG",
    "contentLength": 37
  }
}
```

#### Example API Usage

- TypeScript:

```ts
import * as axios from "axios";
import {AxiosRequestConfig} from "axios";

const requestConfig: AxiosRequestConfig = {
    url: "https://pastes.ponjo.club/api/v1/create",
    method: "PUT",
    data: "Hello world!"
};

await axios.put(requestConfig)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
```
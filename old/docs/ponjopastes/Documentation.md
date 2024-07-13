## /api/v1/fetch/:id

- Fetch a paste by ID.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `id` | `string` | The ID of the paste to fetch. | `true` |
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

## /api/v1/create

- Create a paste.
- Request method: `PUT`
- This method requires a request body.

| **Body Type** | **Details** | **Required** |
| :---: | :---: | :---: |
| `text/plain` | The content of your paste. | `true` |
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
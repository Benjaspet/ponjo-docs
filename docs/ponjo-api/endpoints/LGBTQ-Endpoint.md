## Pride Avatar

<img src="../../../images/lgbtq/ProgressPride.png" alt="Pride" width="91" height="54">

Add pride flairs to your profile picture.

| **Parameter** | **Type** | **Details** |
| :---: | :---: | :---: | 
| `flair` | `string` | The flair to add. |
| `avatar` | `string` | The encoded URL of the avatar. |
| `?format` | `string` | The format of the response. |
| **Header** | **Type** | **Description** |
| Authorization | `string` | Your API access key. |

> Method: `POST` Accepted formats: `png`, `jpg`, `base64`

### Sample Request

```http request
POST https://app.ponjo.club/v1/pride/avatar?flair=bisexual&avatar=https%3A%2F%2Fraw.githubusercontent.com%2FEerie6560%2FArchives%2Fmain%2Fimages%2Ficons%2FCrescent-Logo.png&format=png
```

### Successful Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "data": {
    "flair": "Bisexual",
    "format": "png",
    "avatar": {
      "base64": "data:image/png;base64,iVBORw0KGgo...",
      "png": "https://app.ponjo.club/v1/pride/avatar?flair=bisexual&avatar=https%3A%2F%2Fraw.githubusercontent.com%2FEerie6560%2FArchives%2Fmain%2Fimages%2Ficons%2FCrescent-Logo.png&format=png",
      "jpg": "https://app.ponjo.club/v1/pride/avatar?flair=bisexual&avatar=https%3A%2F%2Fraw.githubusercontent.com%2FEerie6560%2FArchives%2Fmain%2Fimages%2Ficons%2FCrescent-Logo.png&format=jpg"
    }
  },
  "timestamps": {
    "date": "10/12/2021, 6:21:39 PM",
    "unix": 1634077300
  }
}
```
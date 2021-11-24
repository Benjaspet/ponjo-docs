## Color Information

View information on any hex color.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `hex` | `string` | The hex code to search for. | `true` |
| `format` | `string` | The format of the response. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `false` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```shell
GET https://app.ponjo.club/v1/color?hex=F8B112&format=json
```

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
## Affirmations

Retrieve a confidence-boosting affirmation.

| **Parameter** | **Type** | **Details** |
| :---: | :---: | :---: | 
| `count` | `integer` | The amount of affirmations to return. |
| **Header** | **Type** | **Description** |
| Authorization | `string` | Your API access key. |
| Content-Type | `string` | `application/json` |

#### Method
> This endpoint uses a `GET` request.

### Sample Responses

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

## /v1/qr

- Generate a QR code.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `text` | `string` | The text for the QR code. | `true` |
| `size` | `integer` | The size of the QR code. | `true` |
| `background` | `uri string` | The background image. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```
<QR.png> img/png
```
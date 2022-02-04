## Hex Color Data

Get data and assets of a hex color.

| **Parameter** | **Type** | **Details** |
| :---: | :---: | :---: | 
| `hex` | `string` | The hex code of the color. |
| **Header** | **Type** | **Description** |
| Authorization | `string` | Your API access key. |
| Content-Type | `string` | `application/json` or `img/png` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```shell
# METHOD: GET
https://app.ponjo.club/v1/color?hex=32a852
```

### Sample Responses

🟢 **Status: 200** ─ Success.

```json
{
  "status": "not completed"
}
```

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

## Captcha Data

Create a captcha with its resolution.

| **Header** | **Type** | **Description** |
| :---: | :---: | :---: | 
| Authorization | `string` | Your API access key. |
| Content-Type | `string` | `application/json` |

#### Method
> This endpoint uses a `GET` request.

### Sample Responses

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
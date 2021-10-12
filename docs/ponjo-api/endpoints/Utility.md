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
🔴 **Status: 400** ─ Invalid syntax.
```json
{
  "status": 400,
  "message": "Invalid syntax.",
  "timestamps": {
    "date": "10/1/2021, 12:39:42 PM",
    "unix": 1633091982
  }
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
🔴 **Status: 400** ─ Invalid syntax.
```json
{
  "status": 400,
  "message": "Invalid syntax.",
  "timestamps": {
    "date": "10/1/2021, 12:39:42 PM",
    "unix": 1633091982
  }
}
```
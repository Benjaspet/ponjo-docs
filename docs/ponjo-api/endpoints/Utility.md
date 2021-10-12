## Hex Color Data

![](https://img.shields.io/badge/-GET%20REQUEST!-20ab43?style=flat)

Get data and assets of a hex color.

| **Parameter** | **Type** | **Details** |
| :---: | :---: | :---: | 
| `hex` | `string` | The hex code of the color. |
| **Header** | **Type** | **Description** |
| Authorization | `string` | Your API access key. |
| Content-Type | `string` | `application/json` or `img/png` |

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
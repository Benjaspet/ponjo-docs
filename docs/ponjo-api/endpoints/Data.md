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
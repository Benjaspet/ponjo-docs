## Error Responses

Here you can find documentation of all error responses for all API endpoints.

### 🔴 400 ─ Bad Request

- Malformed request syntax.
- Invalid request message framing.

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

### 🔴 401 ─ Unauthorized

- Lack of a valid API key.

```json
{
  "status": 401,
  "message": "Invalid API key provided.",
  "timestamps": {
    "date": "10/1/2021, 12:39:42 PM",
    "unix": 1633091982
  }
}
```

### 🔴 404 ─ Not Found

- The specified API route is invalid or does not exist.
- The specified file or path cannot be found by the server.

```json
{
  "status": 404,
  "message": "Invalid API key provided.",
  "timestamps": {
    "date": "10/1/2021, 12:39:42 PM",
    "unix": 1633091982
  }
}
```
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
  "message": "The requested URL was not found on our servers.",
  "timestamps": {
    "date": "10/16/2021, 9:02:49 PM",
    "unix": 1634418169
  }
}
```

### 🔴 410 ─ Gone

- The requested resource does not exist, contains invalid data, or is not available.

```json
{
  "status": 410,
  "message": "Resource is not available.",
  "timestamps": {
    "date": "10/16/2021, 9:02:49 PM",
    "unix": 1634418169
  }
}
```

### 🔴 429 ─ Too Many Requests

- You've sent too many requests in a given timeframe.
- You've been ratelimited.
- Most ratelimits expire after 15 minutes.

```json
{
  "status": 429,
  "message": "Too many requests. Please try again later.",
  "timestamps": {
    "date": "10/1/2021, 12:39:42 PM",
    "unix": 1633091982
  }
}
```

### 🔴 500 ─ Internal Server Error

- An unexpected condition caused the server to fail to satisfy the request.
- This error is returned when no other error code can be provided.

```json
{
  "status": 500,
  "message": "Invalid API key provided.",
  "timestamps": {
    "date": "10/1/2021, 12:39:42 PM",
    "unix": 1633091982
  }
}
```
### 🔴 504 ─ Gateway Timeout

- The API was not able to send a response in time.
- This is usually prevalent on the Game Query endpoint when an invalid host is queried, or it is not online.

```json
{
  "status": 504,
  "message": "Query timed out.",
  "timestamps": {
    "date": "10/1/2021, 12:26:17 PM",
    "unix": 1633091178
  }
}
```
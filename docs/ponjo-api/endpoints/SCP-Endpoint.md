## SCP Item

Easily retrieve data on any SCP item.

| **Parameter** | **Type** | **Details** |
| :---: | :---: | :---: | 
| `item` | `int` | The SCP number to search. |
| **Header** | **Type** | **Description** |
| Authorization | `string` | Your API access key. |
| Content-Type | `string` | `application/json` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```shell
# METHOD: GET
https://app.ponjo.club/v1/scp?item=1445
```

### Sample Responses

🟢 **Status: 200** ─ Success.
```json
{    
  "status": 200,    
  "data": {        
    "url": "https://www.scpwiki.com/scp-061",        
    "scp": "SCP-061",        
    "class": "Safe",        
    "procedures": []
  },    
  "timestamps": {        
    "date": "10/3/2021, 5:48:28 PM",        
    "unix": 1633297709
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

## SCP Personnel
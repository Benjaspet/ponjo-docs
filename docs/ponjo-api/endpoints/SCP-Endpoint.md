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
https://app.ponjo.club/v1/scp?item=952
```

### Sample Responses

🟢 **Status: 200** ─ Success.
```json
{
  "status": 400,
  "data": {
    "status": 200,
    "item": "SCP-952",
    "class": "Keter",
    "description": "Description: SCP-952 is an anomalous subgenre of math rock known as \"NP Rock\", defined primarily by a specific arrangement of instrumental configurations, subject matter, and esoteric musical technique. Evidence suggests that the culmination of these components is the cause of SCP-952's anomalous properties.",
    "procedures": "Special Containment Procedures: Musical projects under the effects of SCP-952 are to be terminated by any means possible, and any physical media storing recordings of SCP-952-influenced music are to be copied onto a Standardized Type-C antimemetic storage device, then destroyed. Venues that have hosted SCP-952-infected musicians are to be closed until such a point when it can be confirmed that none of the staff are affected.",
    "imageSrc": "https://scp-wiki.wdfiles.com/local--files/scp-952/HighwayAsh.png"
  },
  "timestamps": {
    "date": "10/12/2021, 6:21:39 PM",
    "unix": 1634077300
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
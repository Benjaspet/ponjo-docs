# Minecraft: Java Edition

Query a Minecraft: Java Edition server.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `host` | `string` | The IP address of the server to query. | `true` |
| `port` | `bigInt` | The port of the server. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Content-Type | `string` | `application/json` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```https request
GET https://app.ponjo.club/v1/query/minecraft?host=lunar.gg&port=25565
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

# Minecraft: Bedrock Edition

Query a Minecraft: Bedrock Edition server.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `host` | `string` | The IP address of the server to query. | `true` |
| `port` | `bigInt` | The port of the server. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Content-Type | `string` | `application/json` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```https request
GET https://app.ponjo.club/v1/query/bedrock?host=vasar.land&port=19800
```

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "host": "vasar.land",
  "port": 19132,
  "srvRecord": null,
  "gameType": "SMP",
  "version": "v1.17.30",
  "software": "PocketMine-MP 3.23.1: Worlds 3.0.6",
  "plugins": [
    "DEVirion 1.2.7",
    "Vasar_Practice 4"
  ],
  "levelName": "lobby",
  "latency": 57,
  "players": {
    "online": 9,
    "max": 100,
    "list": [
      "LeqitLqma",
      "Czeoh",
      "Patotocapo",
      "LUGO SANTIAGO",
      "strikingfire425",
      "ReachIsToggled",
      "Jalmarri0",
      "KingShadow4487",
      "P0TIONSTATUS"
    ]
  },
  "timestamps": {
    "date": "10/2/2021, 5:03:28 PM",
    "unix": 1633194208
  }
}
```
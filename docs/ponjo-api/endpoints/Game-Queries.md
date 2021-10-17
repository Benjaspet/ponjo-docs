## Minecraft: Java Edition

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
GET https://app.ponjo.club/v1/query/mcjava?host=mc.hypixel.net&port=25565
```

### Sample Responses

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "host": "mc.hypixel.net",
  "port": 25565,
  "srvRecord": null,
  "version": "Requires MC 1.8 / 1.17",
  "protocolVersion": 47,
  "players": {
    "online": 82079,
    "maxOnline": 200000,
    "list": []
  },
  "latency": 115,
  "motd": {
    "version": {
      "name": "Requires MC 1.8 / 1.17",
      "protocol": 47
    },
    "players": {
      "max": 200000,
      "online": 82079,
      "sample": []
    },
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAA..."
  },
  "timestamps": {
    "date": "10/17/2021, 4:49:54 PM",
    "unix": 1634503794
  }
}
```

## Minecraft: Bedrock Edition

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
GET https://app.ponjo.club/v1/query/mcbe?host=vasar.land&port=19132
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
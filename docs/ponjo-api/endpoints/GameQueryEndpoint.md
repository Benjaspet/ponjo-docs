## /v1/query/ark

- Query an Ark: Survival Evolved server.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `host` | `string` | The IP address of the server to query. | `true` |
| `port` | `int` | The port of the server. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Content-Type | `string` | `application/json` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "name": "MTSArk.co.uk [ARENA] Capture the Artifact - (v342.22)",
    "map": "ArenaModMap",
    "password": false,
    "raw": {
      "protocol": 17,
      "folder": "ark_survival_evolved",
      "game": "ARK: Survival Evolved",
      "appId": 346110,
      "numplayers": 56,
      "numbots": 0,
      "listentype": "d",
      "environment": "w",
      "secure": 1,
      "version": "1.0.0.0",
      "steamid": "90155733339275266",
      "tags": [
        "",
        "OWNINGID:90155733339275266",
        "OWNINGNAME:90155733339275266",
        "NUMOPENPUBCONN:15",
        "P2PADDR:90155733339275266",
        "P2PPORT:7790",
        "LEGACY_i:0"
      ]
    },
    "maxplayers": 60,
    "players": [
      {
        "name": "sir.jooe",
        "raw": {
          "score": 0,
          "time": 24532.75390625
        }
      },
      {
        "name": "Gollum_07",
        "raw": {
          "score": 0,
          "time": 7740.06591796875
        }
      },
      {
        "name": "Chickenmaster56",
        "raw": {
          "score": 0,
          "time": 7736.474609375
        }
      },
      {
        "name": "123",
        "raw": {
          "score": 0,
          "time": 5900.70751953125
        }
      }
    ],
    "bots": [],
    "connect": "85.190.148.87:7790",
    "ping": 96
  },
  "timestamps": {
    "date": "2/1/2022, 5:50:13 PM",
    "unix": 1643737813
  }
}
```

## /v1/query/fivem

- Query a FiveM server.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `host` | `string` | The IP address of the server to query. | `true` |
| `port` | `int` | The port of the server. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Content-Type | `string` | `application/json` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "name": "^0WhatPixel Roleplay ^5|| ^0New Public Server ^5|| ...",
    "map": "fivem-map-hipster",
    "players": {
      "online": 4,
      "max": "80",
      "list": [
        {
          "name": "wes ",
          "raw": {
            "ping": 112
          }
        },
        {
          "name": "Jadow",
          "raw": {
            "ping": 113
          }
        },
        {
          "name": "GAMBXT",
          "raw": {
            "ping": 51
          }
        },
        {
          "name": "Ghost Hendrix",
          "raw": {
            "ping": 20
          }
        }
      ]
    },
    "assets": {
      "vars": {
        "Dev": "WPRP",
        "Discord": "https://discord.gg/wprp",
        "Website": "https://whatpixelrp.com",
        "activitypubFeed": "WhatPixelRP@mstdn.social"
      },
      "icon": "iVBORw0KGgoAAAANSUhEUgAAAGAAAABg..."
    }
  },
  "timestamps": {
    "date": "2/1/2022, 5:45:37 PM",
    "unix": 1643737538
  }
}
```

## /v1/query/mcbe

- Query a Minecraft: Bedrock Edition server.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `host` | `string` | The IP address of the server to query. | `true` |
| `port` | `int` | The port of the server. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Content-Type | `string` | `application/json` | `false` |

### Sample Response

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

## /v1/query/mcjava

- Query a Minecraft: Java Edition server.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `host` | `string` | The IP address of the server to query. | `true` |
| `port` | `int` | The port of the server. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Content-Type | `string` | `application/json` | `false` |

### Sample Response

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
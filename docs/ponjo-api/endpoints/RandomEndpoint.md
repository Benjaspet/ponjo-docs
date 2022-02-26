## /v1/random/month

- Get a random month of the year.
- Request type: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "data": "March",
  "timestamps": {
    "date": "2/26/2022, 8:00:47 PM",
    "unix": 1645905648
  }
}
```

## /v1/random/timezone

- Get a random timezone.
- Request type: `GET`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "data": [
    {
      "timezone": {
        "name": "UTC+12",
        "abbr": "U",
        "offset": 12,
        "isdst": false,
        "text": "(UTC+12:00) Coordinated Universal Time+12",
        "utc": [
          "Etc/GMT-12",
          "Pacific/Funafuti",
          "Pacific/Kwajalein",
          "Pacific/Majuro",
          "Pacific/Nauru",
          "Pacific/Tarawa",
          "Pacific/Wake",
          "Pacific/Wallis"
        ]
      }
    }
  ],
  "timestamps": {
    "date": "2/26/2022, 8:01:40 PM",
    "unix": 1645905701
  }
}
```

## /v1/random/userprofile

- Get a random user profile.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `count` | `integer` | The amount of profiles. | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "data": [
    {
      "age": 45,
      "name": "Ida Floyd",
      "gender": "Male",
      "address": "1891 Tudo Way",
      "city": "Abanetmih",
      "state": "AK",
      "email": "fepa@ga.ai",
      "birthday": "1992-10-06T17:01:09.042Z",
      "company": "Dial Corporation",
      "ip": "116.203.178.58",
      "macAddress": "30:CC:DE:F4:1F:15",
      "ssn": "311-05-4395",
      "postCode": "P7K 8G9",
      "isBlackOrLatino": false,
      "children": [
        {
          "age": 11,
          "name": "Lily",
          "gender": "Male",
          "birthday": "2003-11-23T15:59:16.379Z",
          "favorites": {
            "animal": "Silkworm",
            "color": "#4c99b6"
          }
        },
        {
          "age": 6,
          "name": "Keith",
          "gender": "Female",
          "birthday": "1986-12-02T23:36:34.512Z",
          "favorites": {
            "animal": "Bearded Dragon",
            "color": "#5ef"
          }
        }
      ],
      "favorites": {
        "animal": "Fox",
        "color": "0xd2866a",
        "currency": {
          "code": "KMF",
          "name": "Comoros Franc"
        }
      }
    }
  ],
  "timestamps": {
    "date": "2/21/2022, 4:29:08 AM",
    "unix": 1645417748
  }
}
```
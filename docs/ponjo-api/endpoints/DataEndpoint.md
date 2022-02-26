## /v1/covid

- Fetch coronavirus statistics for a nation.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `country` | `string` | The country to search. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `false` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "country": "Russia",
    "countryData": {
      "latitude": 60,
      "longitude": 100,
      "flag": "https://app.ponjo.club/assets/flags/ru.png"
    },
    "covidData": {
      "active": 1669545,
      "critical": 2300,
      "cases": {
        "total": 12452765,
        "today": 168201
      },
      "deaths": {
        "total": 334039,
        "today": 682
      },
      "recovered": {
        "total": 10449181,
        "today": 58449
      }
    }
  },
  "timestamps": {
    "date": "2/4/2022, 1:23:10 PM",
    "unix": 1643980991
  }
}
```

## /v1/weather

- Get the weather information & forecasts for an area.
- Request method: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `location` | `string` | The location of the weather. | `true` |
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
            "location": {
                "name": "Boston, MA",
                "lat": "42.359",
                "long": "-71.059",
                "timezone": "-4",
                "alert": "",
                "degreetype": "F",
                "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
            },
            "current": {
                "temperature": "32",
                "skycode": "26",
                "skytext": "Cloudy",
                "date": "2022-02-01",
                "observationtime": "13:45:00",
                "observationpoint": "Boston, MA",
                "feelslike": "26",
                "humidity": "64",
                "winddisplay": "7 mph East",
                "day": "Tuesday",
                "shortday": "Tue",
                "windspeed": "7 mph",
                "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/26.gif"
            },
            "forecast": [
                {
                    "low": "13",
                    "high": "29",
                    "skycodeday": "31",
                    "skytextday": "Mostly Clear",
                    "date": "2022-01-31",
                    "day": "Monday",
                    "shortday": "Mon",
                    "precip": ""
                },
                {
                    "low": "31",
                    "high": "35",
                    "skycodeday": "26",
                    "skytextday": "Cloudy",
                    "date": "2022-02-01",
                    "day": "Tuesday",
                    "shortday": "Tue",
                    "precip": "10"
                },
                {
                    "low": "38",
                    "high": "40",
                    "skycodeday": "26",
                    "skytextday": "Cloudy",
                    "date": "2022-02-02",
                    "day": "Wednesday",
                    "shortday": "Wed",
                    "precip": "50"
                },
                {
                    "low": "29",
                    "high": "44",
                    "skycodeday": "26",
                    "skytextday": "Cloudy",
                    "date": "2022-02-03",
                    "day": "Thursday",
                    "shortday": "Thu",
                    "precip": "80"
                },
                {
                    "low": "17",
                    "high": "43",
                    "skycodeday": "16",
                    "skytextday": "Snow",
                    "date": "2022-02-04",
                    "day": "Friday",
                    "shortday": "Fri",
                    "precip": "100"
                }
            ]
        }
    ],
    "timestamps": {
        "date": "2/1/2022, 6:17:09 PM",
        "unix": 1643739430
    }
}
```
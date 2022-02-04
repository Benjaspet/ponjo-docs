## /v1/pride/flags

<img src="../../../images/lgbtq/ProgressPride.png" alt="Pride" width="91" height="54">

- Get an image of a pride flag.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `type` | `string` | The type of pride flag. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```
<Pansexual.png> img/png
```

## /v1/pride/orientations

- Get info on a sexual or romantic orientation.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `type` | `string` | `sexual` or `romantic`. | `true` |
| `q` | `string` | The search query. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
    "status": 200,
    "filterType": "sexual",
    "data": [
        {
            "name": "Aro-ace Spectrum",
            "aliases": [
                "aspec",
                "ace-spec",
                "ace spectrum"
            ],
            "definition": "A shortened version of asexual/aromantic spectrum; an umbrella...",
            "flag": "https://app.ponjo.club/v1/pride/flags/aroace"
        },
        {
            "name": "Abrosexual",
            "aliases": [
                "abro"
            ],
            "definition": "A sexual orientation described by a fluid sexual attraction, meaning...",
            "flag": "https://app.ponjo.club/v1/pride/flags/abrosexual"
        },
        {
            "name": "Asexual",
            "aliases": [
                "ace"
            ],
            "definition": "A sexual orientation characterized by lack of sexual attraction...",
            "flag": "https://app.ponjo.club/v1/pride/flags/asexual"
        }
    ],
    "timestamps": {
        "date": "2/1/2022, 6:32:32 PM",
        "unix": 1643740353
    }
}
```

## /v1/pride/avatar

- Create a pride-flaired avatar.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `flair` | `string` | The flair to add. | `true` |
| `avatar` | `uri string` | The avatar URL. | `true` |
| `format` | `string` | `png` or `jpeg` or `base64` | `false` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

```json
{
    "status": 200,
    "timestamps": {
        "date": "2/1/2022, 6:37:53 PM",
        "unix": 1643740673
    },
    "image": {
        "flair": "bisexual",
        "input": "https://raw.githubusercontent.com/Eerie6560/Archives/main/images/icons/Crescent-Logo.png",
        "output": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAA..."
    }
}
```
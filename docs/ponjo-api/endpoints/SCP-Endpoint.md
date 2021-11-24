## SCP Item

Easily retrieve data on any SCP item.

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `item` | `int` | The SCP number to search. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```shell
GET https://app.ponjo.club/v1/scp?item=005
```

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": {
    "status": 200,
    "item": "SCP-005",
    "class": "Safe",
    "description": "In appearance, SCP-005 resembles an ornate key, displaying the characteristics of a typical mass produced key used in the 1920s. The key was discovered when a civilian used it to infiltrate a high security facility. SCP-005 seems to have the unique ability to open any and all forms of lock (See Appendix A), be they mechanical or digital, with relative ease. The origin of this ability has yet to be determined.",
    "procedures": "SCP-005 poses no immediate risk in any direct sense. Even so, its unique functions require special measures be taken to restrict access and manipulation of the object. Approval of at least one (1) Level 4 personnel is required for the removal of the object from its containment area.",
    "imageSrc": "https://scp-wiki.wdfiles.com/local--files/scp-005/SCP-005.jpg"
  },
  "timestamps": {
    "date": "11/24/2021, 8:37:20 PM",
    "unix": 1637786240
  }
}
```

## SCP Task Forces

Get all SCP Foundation task forces.

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```shell
GET https://app.ponjo.club/v1/scp/taskforces
```

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "data": [
    {
      "MTF Alpha-1": {
        "name": "MTF Alpha-1 (\"Red Right Hand\")",
        "description": "Task Force Mission: Mobile Task Force Alpha-1 is a task force that reports directly to the O5 Council and is used in situations that require the strictest operational security. The task force consists of the Foundation's best and most loyal operatives. Further information regarding MTF Alpha-1 is classified Level 5.",
        "logo": "https://scp-wiki.wdfiles.com/local--resized-images/task-forces/Alpha1.png/small.jpg"
      }
    },
    {
      "MTF Alpha-4": {
        "name": "MTF Alpha-4 (\"Pony Express\")",
        "description": "Task Force Mission: Mobile Task Force Alpha-4 consists primarily of personnel trained to act as undercover employees and specialize in tracking, intercepting, and securing anomalous objects sent through postal and package delivery services worldwide.",
        "logo": "https://scp-wiki.wdfiles.com/local--resized-images/task-forces/Alpha4.png/small.jpg"
      }
    },
    {
      "MTF Alpha-9": {
        "name": "MTF Alpha-9 (\"Last Hope\")",
        "description": "Task Force Mission: The reborn Omega-7. A Mobile Task Force explicitly intended to train and utilize humanoid SCP objects in the field.",
        "logo": "https://scp-wiki.wdfiles.com/local--resized-images/task-forces/alpha9alt.png/small.jpg"
      }
    },
    {
      "MTF Beta-4": {
        "name": "MTF Beta-4 (\"Castaways\")",
        "description": "Task Force Mission: MTF Beta-4 is a task force created with the sole purpose of assisting and monitoring GoI-466 (Wilson's Wildlife Solutions) in their interactions with local fauna-based anomalies.",
        "logo": "https://scp-wiki.wdfiles.com/local--resized-images/task-forces/beta4.png/small.jpg"
      }
    }
  ],
  "timestamps": {
    "date": "11/24/2021, 8:42:36 PM",
    "unix": 1637786557
  }
}
```

## SCP Branches

Get all SCP Foundation branches.

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

#### Method
> This endpoint uses a `GET` request.

### Sample Request

```shell
GET https://app.ponjo.club/v1/scp/branches
```

### Sample Response

🟢 **Status: 200** ─ Success.
```json
{
  "status": 200,
  "branches": {
    "base": {
      "logo": "https://scp-int.wdfiles.com/local--files/main/scp-logo-en-400.png",
      "about": null
    },
    "pride": {
      "logo": "https://i.kym-cdn.com/photos/images/facebook/001/386/104/41d.png",
      "about": null
    },
    "international": {
      "logo": "https://scp-wiki.wdfiles.com/local--files/scp-international/scp-logo-int.png",
      "about": "The International Translation Archive contains translations of SCP articles, tales, canons and other articles from all the different branches."
    },
    "russian": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-ru-400.png",
      "about": "Фонд SCP существует и действует подпольно и тайно, сдерживая аномалии, чтобы гарантировать нормальное состояние."
    },
    "spanish": {
      "logo": "https://o5command-int.wdfiles.com/local--files/tech-team:graphic-templates/scp-logo-es-400.png",
      "about": "La Fundación SCP existe y opera de manera clandestina y secreta conteniendo anomalías para asegurar la normalidad."
    }
  },
  "timestamps": {
    "date": "11/24/2021, 8:40:31 PM",
    "unix": 1637786432
  }
}
```
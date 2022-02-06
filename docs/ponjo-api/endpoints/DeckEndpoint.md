## /v1/decks/evalhand

- Evaluate any poker hand.
- Hands must have 3, 5, 6, or 7 cards.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `hand` | `string` | The hand to evaluate. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success. `Hand: AH,KD,KH,AS,AD`
```json
{
  "status": 200,
  "hand": {
    "name": "full house",
    "type": 7,
    "rank": 156,
    "value": 28828
  },
  "timestamps": {
    "date": "2/6/2022, 8:54:23 PM",
    "unix": 1644180864
  }
}
```

## /v1/decks/create

- Create a virtual deck of cards.
- Request type: `POST`

| **Header** | **Type** | **Description** | **Required** |
| :---: | :---: | :---: | :---: |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "deckId": "b927-420-fe70e6",
  "deck": [
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "TH",
    "JH"
  ],
  "data": {
    "shuffled": false,
    "remainingCards": 52
  },
  "timestamps": {
    "date": "2/6/2022, 8:56:22 PM",
    "unix": 1644180982
  }
}
```

## /v1/decks/find

- Fetch a virtual deck of cards by ID.
- Request type: `GET`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `id` | `string` | The deck ID to fetch. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "deckId": "b927-420-fe70e6",
  "deck": [
    "JH",
    "2C",
    "6C",
    "7C",
    "KH",
    "JS",
    "7H",
    "5D",
    "AH"
  ],
  "data": {
    "shuffled": true,
    "remainingCards": 52
  },
  "timestamps": {
    "date": "2/6/2022, 8:56:22 PM",
    "unix": 1644180982
  }
}
```

## /v1/decks/shuffle

- Shuffle a deck of cards by ID.
- Request type: `PATCH`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `id` | `string` | The deck ID to shuffle. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

### Sample Response

🟢 **Status: 200** ─ Success.

```json
{
  "status": 200,
  "deckId": "b927-420-fe70e6",
  "deck": [
    "3C",
    "5C",
    "QH",
    "KC",
    "2D",
    "4C",
    "8D"
  ],
  "details": {
    "shuffled": true,
    "remainingCards": 52
  },
  "timestamps": {
    "date": "2/6/2022, 8:58:27 PM",
    "unix": 1644181108
  }
}
```

## /v1/decks/draw

- Draw cards from a virtual deck.
- Request type: `PATCH`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `id` | `string` | The deck ID. | `true` |
| `count` | `integer` | The amount of cards to draw. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

```json
{
  "status": 200,
  "deckId": "b927-420-fe70e6",
  "deck": [
    "8D",
    "2S",
    "8C",
    "9C",
    "TC",
    "4H",
    "3D",
    "QC",
    "5S",
    "AS"
  ],
  "details": {
    "remainingCards": 46,
    "drawnCards": [
      {
        "code": "KC",
        "image": "https://app.ponjo.club/assets/cards/KC.png",
        "suit": "C",
        "value": "K",
        "iteration": 1
      },
      {
        "code": "2D",
        "image": "https://app.ponjo.club/assets/cards/2D.png",
        "suit": "D",
        "value": "2",
        "iteration": 2
      },
      {
        "code": "4C",
        "image": "https://app.ponjo.club/assets/cards/4C.png",
        "suit": "C",
        "value": "4",
        "iteration": 3
      }
    ],
    "amountDrawn": 3
  },
  "timestamps": {
    "date": "2/6/2022, 9:01:52 PM",
    "unix": 1644181313
  }
}
```

## /v1/decks/reset

- Reset a virtual deck of cards.
- Request type: `POST`

| **Parameter** | **Type** | **Details** | **Required** |
| :---: | :---: | :---: | :---: |
| `id` | `string` | The deck ID. | `true` |
| **Header** | **Type** | **Description** | **Required** |
| Authorization | `string` | Your API access key. | `true` |
| Connection | `string` | `keep-alive` | `false` |

```json
{
    "status": 200,
    "deckId": "b927-420-fe70e6",
    "deck": [
        "2H",
        "3H",
        "4H",
        "5H",
        "6H",
        "7H"
    ],
    "data": {
        "shuffled": false,
        "remainingCards": 52
    },
    "timestamps": {
        "date": "2/6/2022, 9:04:04 PM",
        "unix": 1644181445
    }
}
```
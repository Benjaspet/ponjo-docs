## Getting Started

The Ponjo API serves all your developer utility needs. Countless endpoints, fast response times, and JSON responses. Integrating utility services into your application has never been easier. To use the Ponjo API, you need to obtain authentication.

::: warning INTERACTING WITH THE API
You must have a valid API key in order to use the Ponjo API. To request a key, contact [benpetrillo@ponjo.club](mailto:benpetrillo@ponjo.club) or contact a staff member in [our Discord server.](https://ponjo.club/discord)
Once you've obtained an API key, check out the endpoints page linked below. For troubleshooting, reference our FAQ below.
:::

## All Endpoints

The Ponjo API has numerous endpoints to assist you in creating a flexible, responsive, and productive application. The API uses an easy-to-use JSON response format, allowing for simple integration.

## Frequently Asked Questions

#### What is the base URL of the API?

For version 1, the base URL is [https://app.ponjo.club/v1](https://app.ponjo.club/v1)

#### What endpoints are available to the public?

Most endpoints of the API are free to use. However, an API key is required in order to make requests to each endpoint. If you're interested in using the Ponjo API and would like to request an access key, make a ticket on [our Discord server.](https://ponjo.club/discord)

#### I've been ratelimited. How can I fix this?

The API automatically ratelimits for two reasons. Ratelimiting can last from 10 minutes to an hour, depending on the severity.
- You might have reached your daily quota. Most users are limited to 2,500 API requests per day.
- You may be sending too many requests per second. The API will automatically ratelimit if more than 20 requests are sent from the same API address in 5 seconds.
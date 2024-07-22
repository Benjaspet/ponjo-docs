# Ponjo Pastes API
---

Here you can find the full API documentation for Ponjo Pastes. Ponjo Pastes is a simple and
easy-to-use code and plain text sharing service, optimized for developers.

As a developer, I know how much I have to save data, code snippets, and other information for
later use. I did this so frequently that I ended up creating my own private Discord server with
just me in it, where I could save all my code snippets and other information. After giving it some
thought, I realized that this was suboptimal, and I knew that I could create a better solution.

This is where the idea for Ponjo Pastes came into play. Now you can store you favorite code
snippets – that you KNOW you'll need later – in a safe and secure place, accessible from anywhere,
with automatic syntax highlighting, courtesy of [Highlight.js](https://highlightjs.org),
for over 200 languages. All data is thoroughly encrypted before it is stored. For more details
on how Ponjo Studios stores and handles your data, please refer to our
[Privacy Policy](../policy/privacy-policy.md).

## Authentication

::: tip Do this first!
Endpoints that modify existing data or access otherwise sensitive information require authentication. 
:::

## Endpoints

### `GET /api/v2/pastes/all`
- Get all public paste data from the API.

### `GET /api/v2/pastes/fetch/:id`
- Fetch a specific paste by its unique ID.

### `POST /api/v2/pastes/create`
- Create a new paste.

### `POST /api/v2/pastes/update/:id`
- Edit an existing paste.

### `DELETE /api/v2/pastes/delete/:id`
- Delete a paste by its unique ID.
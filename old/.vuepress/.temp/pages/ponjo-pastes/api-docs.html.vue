<template><div><h1 id="ponjo-pastes-api" tabindex="-1"><a class="header-anchor" href="#ponjo-pastes-api"><span>Ponjo Pastes API</span></a></h1>
<hr>
<p>Here you can find the full API documentation for Ponjo Pastes. Ponjo Pastes is a simple and
easy-to-use code and plain text sharing service, optimized for developers.</p>
<p>As a developer, I know how much I have to save data, code snippets, and other information for
later use. I did this so frequently that I ended up creating my own private Discord server with
just me in it, where I could save all my code snippets and other information. After giving it some
thought, I realized that this was suboptimal, and I knew that I could create a better solution.</p>
<p>This is where the idea for Ponjo Pastes came into play. Now you can store you favorite code
snippets – that you KNOW you'll need later – in a safe and secure place, accessible from anywhere,
with automatic syntax highlighting, courtesy of <a href="https://highlightjs.org" target="_blank" rel="noopener noreferrer">Highlight.js</a>,
for over 200 languages. All data is thoroughly encrypted before it is stored. For more details
on how Ponjo Studios stores and handles your data, please refer to our
<RouteLink to="/policy/privacy-policy.html">Privacy Policy</RouteLink>.</p>
<h2 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">Do this first!</p>
<p>Endpoints that modify existing data or access otherwise sensitive information require authentication.</p>
</div>
<h2 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints"><span>Endpoints</span></a></h2>
<h3 id="get-api-v2-pastes-all" tabindex="-1"><a class="header-anchor" href="#get-api-v2-pastes-all"><span><code v-pre>GET /api/v2/pastes/all</code></span></a></h3>
<ul>
<li>Get all public paste data from the API.</li>
</ul>
<h3 id="get-api-v2-pastes-fetch-id" tabindex="-1"><a class="header-anchor" href="#get-api-v2-pastes-fetch-id"><span><code v-pre>GET /api/v2/pastes/fetch/:id</code></span></a></h3>
<ul>
<li>Fetch a specific paste by its unique ID.</li>
</ul>
<h3 id="post-api-v2-pastes-create" tabindex="-1"><a class="header-anchor" href="#post-api-v2-pastes-create"><span><code v-pre>POST /api/v2/pastes/create</code></span></a></h3>
<ul>
<li>Create a new paste.</li>
</ul>
<h3 id="post-api-v2-pastes-update-id" tabindex="-1"><a class="header-anchor" href="#post-api-v2-pastes-update-id"><span><code v-pre>POST /api/v2/pastes/update/:id</code></span></a></h3>
<ul>
<li>Edit an existing paste.</li>
</ul>
<h3 id="delete-api-v2-pastes-delete-id" tabindex="-1"><a class="header-anchor" href="#delete-api-v2-pastes-delete-id"><span><code v-pre>DELETE /api/v2/pastes/delete/:id</code></span></a></h3>
<ul>
<li>Delete a paste by its unique ID.</li>
</ul>
</div></template>



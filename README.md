<!-- BADGE LINKS -->
[npm]: https://www.npmjs.com/package/youtubei.js
[versions]: https://www.npmjs.com/package/youtubei.js?activeTab=versions
[codefactor]: https://www.codefactor.io/repository/github/luanrt/youtube.js
[actions]: https://github.com/LuanRT/YouTube.js/actions
[discord]: https://discord.gg/syDu7Yks54

<div align="center">
  <br/>
  <p>
    <a href="https://github.com/LuanRT/YouTube.js">
      <img src="https://luanrt.github.io/assets/img/ytjs.svg" alt="YouTube.js Logo" width="200" />
    </a>
  </p>
  <p>A JavaScript client for YouTube's internal API.<br/>Works on Node.js, Deno, modern browsers, and more.</p>

[![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)][discord]
[![CI](https://github.com/LuanRT/YouTube.js/actions/workflows/test.yml/badge.svg)][actions]
[![NPM Version](https://img.shields.io/npm/v/youtubei.js?color=%2335C757)][versions]
[![Downloads](https://img.shields.io/npm/dt/youtubei.js)][npm]
[![Codefactor](https://www.codefactor.io/repository/github/luanrt/youtube.js/badge)][codefactor]

</div>

## Installation

Before installing, make sure your environment meets the [prerequisites](https://ytjs.dev/guide/getting-started.html#prerequisites).

```bash
# NPM
npm install youtubei.js@latest

# Yarn
yarn add youtubei.js@latest

# Git (edge version)
npm install github:LuanRT/YouTube.js

# Deno
deno add npm:youtubei.js@latest
```

Deno (deprecated):
```ts
import { Innertube } from 'https://deno.land/x/youtubei/deno.ts';
```

## Basic Usage

```ts
import { Innertube } from 'youtubei.js';
const innertube = await Innertube.create(/* options */);
```

For detailed usage, read the [YouTube.js Guide and API Documentation](https://ytjs.dev).

## Cloudflare Workers Usage & Deployment

To deploy and use YouTube.js on Cloudflare Workers, follow these steps:

### 1. Prerequisites
- Node.js installed on your system.
- A Cloudflare account.
- `wrangler` CLI installed (`npm install -g wrangler` or via `npx wrangler`).

### 2. Project Setup
Create a new project directory and initialize Wrangler:

```bash
mkdir my-cf-worker
cd my-cf-worker
npm init -y
npm install youtubei.js@latest
npm install -D wrangler typescript @cloudflare/workers-types
```

### 3. Configure `wrangler.toml`
Create a `wrangler.toml` file in your project root directory:

```toml
name = "my-youtubei-worker"
main = "src/index.ts"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]
```

### 4. Write Worker Code (`src/index.ts`)
Import `Innertube` specifically from `youtubei.js/cf-worker`:

```ts
import { Innertube } from 'youtubei.js/cf-worker';

export interface Env {}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    // Note: Initialize Innertube inside the fetch handler, not in the global scope
    const yt = await Innertube.create();

    const video = await yt.getInfo('jNQXAC9IVRw');

    return new Response(JSON.stringify({
      title: video.basic_info.title,
      description: video.basic_info.short_description,
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  },
};
```

### 5. Local Development & Deployment

**Local testing:**
```bash
npx wrangler dev
```

**Deploy to Cloudflare Workers:**
```bash
npx wrangler deploy
```

## Contributing
All contributions are welcome, big or small. If you want to contribute, take a look at the [issues page](https://github.com/LuanRT/YouTube.js/issues) and our [guidelines](https://github.com/LuanRT/YouTube.js/blob/main/CONTRIBUTING.md).

## Contributors
<a href="https://github.com/LuanRT/YouTube.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LuanRT/YouTube.js" />
</a>

## Disclaimer
This project is not affiliated with, endorsed, or sponsored by YouTube or any of its affiliates or subsidiaries. All trademarks, logos, and brand names used in this project are the property of their respective owners and are used solely to describe the services provided.

As such, any usage of trademarks to refer to such services is considered nominative use. If you have any questions or concerns, please contact me.

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<p align="right">
(<a href="#top">back to top</a>)
</p>

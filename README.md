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
  <p>A JavaScript client for YouTube's private API</p>

[![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)][discord]
[![CI](https://github.com/LuanRT/YouTube.js/actions/workflows/test.yml/badge.svg)][actions]
[![NPM Version](https://img.shields.io/npm/v/youtubei.js?color=%2335C757)][versions]
[![Downloads](https://img.shields.io/npm/dt/youtubei.js)][npm]
[![Codefactor](https://www.codefactor.io/repository/github/luanrt/youtube.js/badge)][codefactor]

</div>

YouTube.js is a JavaScript client for YouTube's private API, known as "InnerTube". It allows you to interact with YouTube programmatically, providing access to videos, comments, live chats, streaming data and more. It works seamlessly across Node.js, Deno, and modern browsers.

## Installation

Before installing, make sure your environment meets the [prerequisites](https://ytjs.dev/guide/getting-started.html#prerequisites).

```bash
# NPM
npm install youtubei.js@latest

# Yarn
yarn add youtubei.js@latest

# Git (edge version)
npm install github:LuanRT/YouTube.js
```

Deno:
```ts
import { Innertube } from 'https://deno.land/x/youtubei/deno.ts';
```

## Basic Usage

```ts
// const { Innertube } = require('youtubei.js');
import { Innertube } from 'youtubei.js';
const innertube = await Innertube.create(/* options */);
```

For detailed usage, check out the [YouTube.js Guide and API Documentation](https://ytjs.dev).

## Contributing
We welcome all contributions, issues and feature requests, whether small or large. If you want to contribute, feel free to check out our [issues page](https://github.com/LuanRT/YouTube.js/issues) and our [guidelines](https://github.com/LuanRT/YouTube.js/blob/main/CONTRIBUTING.md).

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

<!-- Hi there, fellow coder :) -->

<!-- BADGE LINKS -->
[npm]: https://www.npmjs.com/package/youtubei.js
[versions]: https://www.npmjs.com/package/youtubei.js?activeTab=versions
[codefactor]: https://www.codefactor.io/repository/github/luanrt/youtube.js
[actions]: https://github.com/LuanRT/YouTube.js/actions
[say-thanks]: https://saythanks.io/to/LuanRT
[ko-fi]:https://ko-fi.com/luanrt
[github-sponsors]:https://github.com/sponsors/LuanRT

<!-- OTHER LINKS -->
[project]: https://github.com/LuanRT/YouTube.js
[twitter]: https://twitter.com/lrt_nooneknows
[nodejs]: https://nodejs.org
[gatecrasher]: https://github.com/gatecrasher777/ytcog
[gizmodo]: https://gizmodo.com/how-project-innertube-helped-pull-youtube-out-of-the-gu-1704946491

<!-- INTRODUCTION -->
<h1 align=center>
  YouTube.js
</h1>

<p align=center>
  <i>
    A full-featured wrapper around the Innertube API, which is what YouTube itself uses.
  </i>
</p>

<p align="center">
  <a href="https://github.com/LuanRT/YouTube.js/issues">
    Report Bug
  </a>
  ·
  <a href="https://github.com/LuanRT/YouTube.js/issues">
    Request Feature
  </a>
</p>

<!-- BADGES -->
<div align="center">

  [![Tests](https://github.com/LuanRT/YouTube.js/actions/workflows/node.js.yml/badge.svg)][actions]
  [![Latest version](https://img.shields.io/npm/v/youtubei.js?color=%2335C757)][versions]
  [![Codefactor](https://www.codefactor.io/repository/github/luanrt/youtube.js/badge)][codefactor]
  [![Monthly downloads](https://img.shields.io/npm/dm/youtubei.js)][npm]
  [![Say thanks](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)][say-thanks]
  <br>
  [![Donate](https://img.shields.io/badge/donate-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)][github-sponsors]

</div>

___

> WIP- Documentation for YouTube.js 2.0.0

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#disclaimer">Disclaimer</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About

Innertube is an API used across all YouTube clients, it was created to simplify[^1] the internal structure of the platform in a way that updates, tweaks, and experiments can be easily made. This library handles all the low-level communication with Innertube, providing a simple, fast, and efficient way to interact with YouTube programmatically.

And huge thanks to [@gatecrasher777][gatecrasher] for his research on the workings of the Innertube API!

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- [NodeJS][nodejs] v14 or greater

To verify things are set up
properly, run this:
```bash
node --version
```

### Installation
- NPM:
```bash
npm install youtubei.js@latest
```
- Yarn:
```bash
yarn add youtubei.js@latest
```
- Git (bleeding-edge version):
```bash
npm install git+https://github.com/LuanRT/YouTube.js.git
```

<!-- USAGE -->
## Usage

Create an Innertube instance (or session):
```js
// const Innertube = require('youtubei.js');
import Innertube from 'youtubei.js';
const youtube = await new Innertube({ gl: 'US' });
```
## API

## Innertube : `object`

* Innertube : `object`
  * [.getInfo(video_id)](#getinfo) ⇒ `function`
  * [.getBasicInfo(video_id)](#getbasicinfo) ⇒ `function`
  * [.search(query, filters?)](#ytsearch) ⇒ `function`

<a name="getinfo"></a>
### getInfo(video_id)

Retrieves video info, including playback data and even layout elements such as menus, buttons etc — all nicely parsed.

**Returns**: [`Promise.<VideoInfo>`](https://github.com/LuanRT/YouTube.js/blob/main/typings/lib/parser/youtube/VideoInfo.d.ts)

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The id of the video |

**Methods & Getters**:

- [`<info>#like()`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/VideoInfo.d.ts#L98)
  - Likes the video.

- [`<info>#dislike()`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/VideoInfo.d.ts#L108)
  - Dislikes the video.

- [`<info>#removeLike()`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/VideoInfo.d.ts#L118)
  - Removes like/dislike.

- [`<info>#filters`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/VideoInfo.d.ts#L124)
  - Returns filters that can be applied to the watch next feed.

- [`<info>#selectFilter(name)`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/VideoInfo.d.ts#L79)
  - Applies given filter to the watch next feed and returns a new instance of [`VideoInfo`](https://github.com/LuanRT/YouTube.js/blob/main/typings/lib/parser/youtube/VideoInfo.d.ts).

- [`<info>#getWatchNextContinuation()`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/VideoInfo.d.ts#L87)
  - Retrieves next batch of items for the [watch next feed](https://github.com/LuanRT/YouTube.js/blob/main/typings/lib/parser/youtube/VideoInfo.d.ts).

- [`<info>#page`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/VideoInfo.d.ts#L125)
  - Returns original InnerTube response (sanitized).

<a name="getbasicinfo"></a>
### getBasicInfo(video_id)

Suitable for cases where you only need basic video metadata, much faster than `getInfo()`.

**Returns**: [`Promise.<VideoInfo>`](https://github.com/LuanRT/YouTube.js/blob/main/typings/lib/parser/youtube/VideoInfo.d.ts)

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The id of the video |

<a name="ytsearch"></a>
### search(query, filters?)

Searches the given query on YouTube.

**Returns**: [`Promise.<Search>`](https://github.com/LuanRT/YouTube.js/blob/3f22a44ba9dd96575f609b0349bab5f50490c9fe/typings/lib/parser/youtube/Search.d.ts)

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | The search query |
| filters | `object` | Search filters |

**Supported search filters**:
* type: `all` | `video` | `channel` | `playlist` | `movie`
* upload_date: `all` | `hour` | `today` | `week` | `month` | `year`
* duration: `all` | `short` | `medium` | `long`
* sort_by: `relevance` | `rating` | `upload_date` | `view_count`

**Methods & Getters**:

- [`<search>#selectRefinementCard(SearchRefinementCard | string)`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/Search.d.ts#L34)
  - Applies given refinement card and returns a new [Search](https://github.com/LuanRT/YouTube.js/blob/main/typings/lib/parser/youtube/Search.d.ts#L34) instance.

- [`<search>#refinement_card_queries`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/Search.d.ts#L36)
  - Returns available refinement cards, this is a simplified version of the [refinement cards](https://github.com/LuanRT/YouTube.js/blob/3f22a44ba9dd96575f609b0349bab5f50490c9fe/typings/lib/parser/youtube/Search.d.ts#L25#L30) object.

- [`<search>#getContinuation()`](https://github.com/LuanRT/YouTube.js/blob/1681a9b84cdf059ef176b4faadab05866bad0754/typings/lib/parser/youtube/Search.d.ts#L42)
  - Retrieves next batch of results.

<a name="ythomefeed"></a>
### getHomeFeed()

Retrieves YouTube's home feed.

**Returns**: [`Promise.<FilterableFeed>`](https://github.com/LuanRT/YouTube.js/blob/main/typings/lib/core/FilterableFeed.d.ts)

<!-- CONTRIBUTING -->
## Contributing
Contributions, issues and feature requests are welcome.
Feel free to check [issues page](https://github.com/LuanRT/YouTube.js/issues) if you want to contribute.

<!-- CONTRIBUTORS -->
## Contributors
<a href="https://github.com/LuanRT/YouTube.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LuanRT/YouTube.js" />
</a>

<!-- CONTACT -->
## Contact

LuanRT  - [@lrt_nooneknows][twitter] - luan.lrt4@gmail.com

Project Link: [https://github.com/LuanRT/YouTube.js][project]

## Disclaimer
This project is not affiliated with, endorsed, or sponsored by YouTube or any of their affiliates or subsidiaries.
All trademarks, logos and brand names are the property of their respective owners, and are used only to directly describe the services being provided, as such, any usage of trademarks to refer to such services is considered nominative use.

Should you have any questions or concerns please contact me directly via email.

<!-- Footnotes -->
[^1]: https://gizmodo.com/how-project-innertube-helped-pull-youtube-out-of-the-gu-1704946491

<!-- LICENSE -->
## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<p align="right">
(<a href="#top">back to top</a>)
</p>
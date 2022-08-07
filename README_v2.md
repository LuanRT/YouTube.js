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
    A full-featured wrapper around the InnerTube API, which is what YouTube itself uses.
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

InnerTube is an API used across all YouTube clients, it was created to simplify[^1] the internal structure of the platform in a way that updates, tweaks, and experiments can be easily made. This library handles all the low-level communication with Innertube, providing a simple, fast, and efficient way to interact with YouTube programmatically.

If you have any questions or need help, feel free to contact us on our chat server [here](https://discord.gg/syDu7Yks54).

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
YouTube.js runs on Node.js, Deno and in modern browsers.

It requires a runtime with the following features:
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - On Node we use [undici]()'s fetch implementation which requires Node.js 16.8+. You may provide your own fetch implementation if you need to use an older version. See [providing your own fetch implementation](#custom-fetch) for more information. 
  - The `Response` object returned by fetch must thus be spec compliant and return a `ReadableStream` object if you want to use the `VideoInfo#download` method. (Implementations like `node-fetch` returns a non-standard `Readable` object.)
- [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) and [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) required.

### Installation

```bash
# NPM
npm install youtubei.js@latest

# Yarn
yarn add youtubei.js@latest

# Git (edge version)
npm install github:LuanRT/YouTube.js
```

**TODO: Deno install instructions (esm.sh possibly?)**

<!-- USAGE -->
## Usage
Create an InnerTube instance:
```ts
// const { Innertube } = require('youtubei.js');
import { Innertube } from 'youtubei.js';
const youtube = await Innertube.create();
```

## Browser Usage
To use YouTube.js in the browser you must proxy requests through your own server. You can see our simple reference implementation in Deno in [`examples/browser/proxy/deno.ts`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/proxy/deno.ts).

You may provide your own fetch implementation to be used by YouTube.js. Which we will use here to modify and send the requests to through our proxy. See [`examples/browser/web`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/web) for an simple example using [Vite](https://vitejs.dev/).

```ts
// Pre-bundled version for the web
import { Innertube } from 'youtubei.js/bundle/browser';
await Innertube.create({
  fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
    // Modify the request
    // and send it to the proxy

    // fetch the url
    return fetch(request, init);
  }
});
```

### Streaming
YouTube.js supports streaming of videos in the browser by converting YouTube's streaming data into a MPEG-DASH manifest.

The example below uses [`dash.js`](https://github.com/Dash-Industry-Forum/dash.js) to play the video.

```ts
import { Innertube } from 'youtubei.js';
import dashjs from 'dashjs';

const youtube = await Innertube.create({ /* setup - see above */ });

// get the video info
const videoInfo = await youtube.getInfo('videoId');

// now convert to a dash manifest
// again - to be able to stream the video in the browser - we must proxy the requests through our own server
// to do this, we provide a method to transform the urls before writing them to the manifest
const manifest = videoInfo.toDash(url => {
  // modify the url
  // and return it
  return url;
});

const uri = "data:application/dash+xml;charset=utf-8;base64," + btoa(manifest);

const videoElement = document.getElementById('video_player');

const player = dashjs.MediaPlayer().create();
player.initialize(videoElement, uri, true);
```

Our browser example in [`examples/browser/web`]() provides a full working example.

<a name="custom-fetch"></a>

## Providing your own fetch implementation
You may provide your own fetch implementation to be used by YouTube.js. This may be useful in some cases to modify the requests before they are sent and transform the responses before they are returned (eg. for proxies).

```ts
// provide a fetch implementation
const yt = await Innertube.create({
  fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
    // make the request with your own fetch implementation
    // and return the response
    return new Response(
      /* ... */
    );
  }
});
```

<a name="caching"></a>

## Caching
To improve performance, you may wish to cache the transformed player instance which we use to decode the streaming urls.

Our cache uses the `node:fs` module in Node-like environments, `Deno.writeFile` in Deno and `indexedDB` in browsers.

```ts
import { Innertube, UniversalCache } from 'youtubei.js';
// By default, cache stores files in the OS temp directory (or indexedDB in browsers).
const yt = await Innertube.create({
  cache: new UniversalCache()
});

// You may wish to make the cache persistent (on Node and Deno)
const yt = await Innertube.create({
  cache: new UniversalCache(
    // Enables persistent caching
    true, 
    // Path to the cache directory, will create the directory if it doesn't exist
    './.cache' 
  )
});
```

## API

* Innertube

  <!-- TODO: write API refs for these -->
  * [.session](#session)
  * [.account](#account)
  * [.interact](#interact)
  * [.playlist](#playlist)
  * [.music](#music)
  * [.studio](#studio)
  ___
  * [.getInfo(video_id)](#getinfo)
  * [.getBasicInfo(video_id)](#getbasicinfo)
  * [.search(query, filters?)](#search)
  * [.getSearchSuggestions(query)](#getsearchsuggestions)
  * [.getComments(video_id, sort_by?)](#getcomments)
  * [.getHomeFeed()](#gethomefeed)
  * [.getLibrary()](#getlibrary)
  * [.getHistory()](#gethistory)
  * [.getTrending()](#gettrending)
  * [.getSubscriptionsFeed()](#getsubscriptionsfeed)
  * [.getChannel(id)](#getchannel)
  * [.getNotifications()](#getnotifications)
  * [.getUnseenNotificationsCount()](#getunseennotificationscount)
  * [.getPlaylist(id)](#getplaylist)
  * [.getStreamingData(video_id, options)](#getstreamingdata)
  * [.download(video_id, options?)](#download)
  
<a name="getinfo"></a>
### getInfo(video_id)

Retrieves video info, including playback data and even layout elements such as menus, buttons etc — all nicely parsed.

**Returns**: `Promise.<VideoInfo>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The id of the video |

**Methods & Getters**:

- `<info>#like()`
  - Likes the video.

- `<info>#dislike()`
  - Dislikes the video.

- `<info>#removeLike()`
  - Removes like/dislike.

- `<info>#filters`
  - Returns filters that can be applied to the watch next feed.

- `<info>#selectFilter(name)`
  - Applies given filter to the watch next feed and returns a new instance of [`VideoInfo`](https://github.com/LuanRT/YouTube.js/blob/main/typings/lib/parser/youtube/VideoInfo.d.ts).

- `<info>#getWatchNextContinuation()`
  - Retrieves next batch of items for the [watch next feed](https://github.com/LuanRT/YouTube.js/blob/main/typings/lib/parser/youtube/VideoInfo.d.ts).

- `<info>#page`
  - Returns original InnerTube response (sanitized).

<a name="getbasicinfo"></a>
### getBasicInfo(video_id)

Suitable for cases where you only need basic video metadata, much faster than `getInfo()`.

**Returns**: `Promise.<VideoInfo>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The id of the video |

<a name="search"></a>
### search(query, filters?)

Searches the given query on YouTube.

**Returns**: `Promise.<Search>`

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | The search query |
| filters | `SearchFilters` | Search filters |

**Methods & Getters**:

- `<search>#selectRefinementCard(SearchRefinementCard | string)`
  - Applies given refinement card and returns a new Search instance.

- `<search>#refinement_card_queries`
  - Returns available refinement cards, this is a simplified version of the `refinement_cards` object.

- `<search>#getContinuation()`
  - Retrieves next batch of results.

<a name="getsearchsuggestions"></a>
### getSearchSuggestions(query)
Retrieves search suggestions for given query.

**Returns**: `Promise.<string[]>`

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | The search query |


<a name="getcomments"></a>
### getComments(video_id, sort_by?)
Retrieves comments for given video.

**Returns**: `Promise.<Comments>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The video id |
| sort_by | `string` | Can be: `TOP_COMMENTS` or `NEWEST_FIRST` |


<a name="gethomefeed"></a>
### getHomeFeed()
Retrieves YouTube's home feed.

**Returns**: `Promise.<FilterableFeed>`

<a name="getlibrary"></a>
### getLibrary()
Retrieves the account's library.

**Returns**: `Promise.<Library>`

<a name="gethistory"></a>
### getHistory()
Retrieves watch history.

**Returns**: `Promise.<History>`

<a name="gettrending"></a>
### getTrending()
Retrieves trending content.

**Returns**: `Promise.<TabbedFeed>`

<a name="getsubscriptionsfeed"></a>
### getSubscriptionsFeed()
Retrieves subscriptions feed.

**Returns**: `Promise.<Feed>`

<a name="getchannel"></a>
### getChannel(id)
Retrieves contents for a given channel.

**Returns**: `Promise.<Channel>`

| Param | Type | Description |
| --- | --- | --- |
| id | `string` | Channel id |


<a name="getnotifications"></a>
### getNotifications()
Retrieves notifications.

**Returns**: `Promise.<NotificationsMenu>`

<a name="getunseennotificationscount"></a>
### getUnseenNotificationsCount()
Retrieves unseen notifications count.

**Returns**: `Promise.<number>`

<a name="getplaylist"></a>
### getPlaylist(id)
Retrieves playlist contents.

**Returns**: `Promise.<Playlist>`

| Param | Type | Description |
| --- | --- | --- |
| id | `string` | Playlist id |


<a name="getstreamingdata"></a>
### getStreamingData(video_id, options)
Returns deciphered streaming data.

**Returns**: `Promise.<object>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |
| options | `FormatOptions` | Format options |


<a name="download"></a>
### download(video_id, options?)
Downloads a given video.

**Returns**: `Promise.<ReadableStream<Uint8Array>>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |
| options | `DownloadOptions` | Download options |


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
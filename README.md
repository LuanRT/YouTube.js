<!-- BADGE LINKS -->
[npm]: https://www.npmjs.com/package/youtubei.js
[versions]: https://www.npmjs.com/package/youtubei.js?activeTab=versions
[codefactor]: https://www.codefactor.io/repository/github/luanrt/youtube.js
[actions]: https://github.com/LuanRT/YouTube.js/actions
[say-thanks]: https://saythanks.io/to/LuanRT
[github-sponsors]:https://github.com/sponsors/LuanRT

<!-- OTHER LINKS -->
[project]: https://github.com/LuanRT/YouTube.js
[twitter]: https://twitter.com/thesciencephile
[discord]: https://discord.gg/syDu7Yks54
[nodejs]: https://nodejs.org

<h1 align=center>YouTube.js</h1>

<p align=center>A full-featured wrapper around the InnerTube API</p>

<div align="center">

  [![Tests](https://github.com/LuanRT/YouTube.js/actions/workflows/node.js.yml/badge.svg)][actions]
  [![NPM Version](https://img.shields.io/npm/v/youtubei.js?color=%2335C757)][versions]
  [![Codefactor](https://www.codefactor.io/repository/github/luanrt/youtube.js/badge)][codefactor]
  [![Downloads](https://img.shields.io/npm/dt/youtubei.js)][npm]
  [![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)][discord]
  [![Say thanks](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)][say-thanks]
  <br>
  [![Donate](https://img.shields.io/badge/donate-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)][github-sponsors]
 
</div>

<p align="center">
 <a><sub>Special thanks to:<sub></a>
</p>

<table align="center">
  <body>
    <tr>
      <td align="center">
        <a href="https://serpapi.com/" target="_blank">
          <img width="80" alt="SerpApi" src="https://luanrt.is-a.dev/assets/img/serpapi.svg" />
          <br>
          <b>
           <sub>
             Scrape Google and other search engines from a fast, easy and complete API.
           </sub>
          </b>
        </a>
      </td>
    </tr>
  </body>
</table>

___

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
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
        <li><a href="#browser-usage">Browser Usage</a></li>
        <li><a href="#caching">Caching</a></li>
        <li><a href="#api">API</a></li>
      </ul>
    </li>
    <li><a href="#extending-the-library">Extending the library</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#disclaimer">Disclaimer</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Description

InnerTube is an API used by all YouTube clients. It was created to simplify the deployment of new features and experiments across the platform[^1]. This library handles all the low-level communication with InnerTube, providing a simple, and efficient way to interact with YouTube programmatically. It is designed to emulate an actual client as closely as possible, including how API responses are parsed.

If you have any questions or need help, feel free to reach out to us on our [Discord server][discord] or open an issue [here](https://github.com/LuanRT/YouTube.js/issues).

## Getting Started

### Prerequisites
YouTube.js runs on Node.js, Deno, and modern browsers.

It requires a runtime with the following features:
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - On Node we use [undici]()'s fetch implementation which requires Node.js 16.8+. You may provide your fetch implementation if you need to use an older version. See [providing your own fetch implementation](#custom-fetch) for more information. 
  - The `Response` object returned by fetch must thus be spec compliant and return a `ReadableStream` object if you want to use the `VideoInfo#download` method. (Implementations like `node-fetch` returns a non-standard `Readable` object.)
- [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) and [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) are required.

### Installation

```bash
# NPM
npm install youtubei.js@latest

# Yarn
yarn add youtubei.js@latest

# Git (edge version)
npm install github:LuanRT/YouTube.js
```

**TODO:** Deno install instructions (deno.land)

## Usage
Create an InnerTube instance:
```ts
// const { Innertube } = require('youtubei.js');
import { Innertube } from 'youtubei.js';
const youtube = await Innertube.create();
```

## Browser Usage
To use YouTube.js in the browser you must proxy requests through your own server. You can see our simple reference implementation in Deno in [`examples/browser/proxy/deno.ts`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/proxy/deno.ts).

You may provide your own fetch implementation to be used by YouTube.js. Which we will use here to modify and send the requests through our proxy. See [`examples/browser/web`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/web) for a simple example using [Vite](https://vitejs.dev/).

```ts
// Pre-bundled version for the web
import { Innertube } from 'youtubei.js/bundle/browser';
await Innertube.create({
  fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
    // Modify the request
    // and send it to the proxy

    // fetch the URL
    return fetch(request, init);
  }
});
```

### Streaming
YouTube.js supports streaming of videos in the browser by converting YouTube's streaming data into an MPEG-DASH manifest.

The example below uses [`dash.js`](https://github.com/Dash-Industry-Forum/dash.js) to play the video.

```ts
import { Innertube } from 'youtubei.js';
import dashjs from 'dashjs';

const youtube = await Innertube.create({ /* setup - see above */ });

// get the video info
const videoInfo = await youtube.getInfo('videoId');

// now convert to a dash manifest
// again - to be able to stream the video in the browser - we must proxy the requests through our own server
// to do this, we provide a method to transform the URLs before writing them to the manifest
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

Our browser example in [`examples/browser/web`](https://github.com/LuanRT/YouTube.js/blob/main/examples/browser/web) provides a fully working example.
<a name="custom-fetch"></a>

## Providing your own fetch implementation
You may provide your own fetch implementation to be used by YouTube.js. This can be useful in some cases to modify the requests before they are sent and transform the responses before they are returned (eg. for proxies).
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

Our cache uses the `node:fs` module in Node-like environments, `Deno.writeFile` in Deno, and `indexedDB` in browsers.

```ts
import { Innertube, Platform } from 'youtubei.js';
// By default, cache stores files in the OS temp directory (or indexedDB in browsers).
const yt = await Innertube.create({
  cache: new Platform.shim.Cache()
});

// You may wish to make the cache persistent (on Node and Deno)
const yt = await Innertube.create({
  cache: new Platform.shim.Cache(
    // Enables persistent caching
    true, 
    // Path to the cache directory will create the directory if it doesn't exist
    './.cache' 
  )
});
```

## API

* `Innertube`

  <details>
  <summary>Objects</summary>
  <p>
  
  * [.session](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/session.md)
  * [.account](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/account.md)
  * [.interact](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/interaction-manager.md)
  * [.playlist](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/playlist.md)
  * [.music](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/music.md)
  * [.studio](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/studio.md)
  * [.kids](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/kids.md)
 
  </p>
  </details> 
  

  <details>
  <summary>Methods</summary>
  <p>
  
  * [.getInfo(video_id, client?)](#getinfo)
  * [.getBasicInfo(video_id, client?)](#getbasicinfo)
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
  * [.resolveURL(url)](#resolveurl)
  * [.call(endpoint, args?)](#call)
  
  </p>
  </details> 

<a name="getinfo"></a>
### getInfo(video_id, client?)

Retrieves video info, including playback data and even layout elements such as menus, buttons, etc — all nicely parsed.

**Returns**: `Promise.<VideoInfo>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The id of the video |
| client? | `InnerTubeClient` | `WEB`, `ANDROID`, `YTMUSIC`, `YTMUSIC_ANDROID` or `TV_EMBEDDED` |

<details>
<summary>Methods & Getters</summary>
<p>

- `<info>#like()`
  - Likes the video.

- `<info>#dislike()`
  - Dislikes the video.

- `<info>#removeLike()`
  - Removes like/dislike.

- `<info>#getLiveChat()`
  - Returns a LiveChat instance.

- `<info>#chooseFormat(options)`
  - Used to choose streaming data formats.

- `<info>#toDash(url_transformer?, format_filter?)`
  - Converts streaming data to an MPEG-DASH manifest.

- `<info>#download(options)`
  - Downloads the video. See [download](#download).

- `<info>#filters`
  - Returns filters that can be applied to the watch next feed.

- `<info>#selectFilter(name)`
  - Applies the given filter to the watch next feed and returns a new instance of [`VideoInfo`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/youtube/VideoInfo.ts).

- `<info>#getWatchNextContinuation()`
  - Retrieves the next batch of items for the watch next feed.

- `<info>#addToWatchHistory()`
  - Adds the video to the watch history.

- `<info>#page`
  - Returns original InnerTube response (sanitized).

</p>
</details> 

<a name="getbasicinfo"></a>
### getBasicInfo(video_id, client?)

Suitable for cases where you only need basic video metadata. Also, it is faster than [`getInfo()`](#getinfo).

**Returns**: `Promise.<VideoInfo>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The id of the video |
| client? | `InnerTubeClient` | `WEB`, `ANDROID`, `YTMUSIC_ANDROID`, `YTMUSIC`, `TV_EMBEDDED` |

<a name="search"></a>
### search(query, filters?)

Searches the given query on YouTube.

**Returns**: `Promise.<Search>`

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | The search query |
| filters? | `SearchFilters` | Search filters |

<details>
<summary>Methods & Getters</summary>
<p>

- `<search>#selectRefinementCard(SearchRefinementCard | string)`
  - Applies given refinement card and returns a new Search instance.

- `<search>#refinement_card_queries`
  - Returns available refinement cards, this is a simplified version of the `refinement_cards` object.

- `<search>#getContinuation()`
  - Retrieves next batch of results.

</p>
</details> 

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

See [`./examples/comments`](https://github.com/LuanRT/YouTube.js/blob/main/examples/comments) for examples.

<a name="gethomefeed"></a>
### getHomeFeed()
Retrieves YouTube's home feed.

**Returns**: `Promise.<HomeFeed>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<home_feed>#videos`
  - Returns all videos in the home feed.

- `<home_feed>#posts`
  - Returns all posts in the home feed.

- `<home_feed>#shelves`
  - Returns all shelves in the home feed.

- `<home_feed>#filters`
  - Returns available filters.

- `<home_feed>#applyFilter(name | ChipCloudChip)`
  - Applies given filter and returns a new HomeFeed instance.

- `<home_feed>#getContinuation()`
  - Retrieves feed continuation.

</p>
</details> 

<a name="getlibrary"></a>
### getLibrary()
Retrieves the account's library.

**Returns**: `Promise.<Library>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<library>#history`
- `<library>#watch_later`
- `<library>#liked_videos`
- `<library>#playlists`
- `<library>#clips`
- `<library>#page`
  - Returns original InnerTube response (sanitized).

</p>
</details> 

<a name="gethistory"></a>
### getHistory()
Retrieves watch history.

**Returns**: `Promise.<History>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<history>#getContinuation()`
  - Retrieves next batch of contents.

</p>
</details> 

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

<details>
<summary>Methods & Getters</summary>
<p>

- `<channel>#getVideos()`
- `<channel>#getShorts()`
- `<channel>#getLiveStreams()`
- `<channel>#getPlaylists()`
- `<channel>#getHome()`
- `<channel>#getCommunity()`
- `<channel>#getChannels()`
- `<channel>#getAbout()`
- `<channel>#search(query)`
- `<channel>#applyFilter(filter)`
- `<channel>#applyContentTypeFilter(content_type_filter)`
- `<channel>#applySort(sort)`
- `<channel>#getContinuation()`
- `<channel>#filters`
- `<channel>#content_type_filters`
- `<channel>#sort_filters`
- `<channel>#page`

</p>
</details> 

See [`./examples/channel`](https://github.com/LuanRT/YouTube.js/blob/main/examples/channel) for examples.

<a name="getnotifications"></a>
### getNotifications()
Retrieves notifications.

**Returns**: `Promise.<NotificationsMenu>`

<details>
<summary>Methods & Getter</summary>
<p>

- `<notifications>#getContinuation()`
  - Retrieves next batch of notifications.

</p>
</details>

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

<details>
<summary>Methods & Getter</summary>
<p>

- `<playlist>#items`
  - Returns the items of the playlist.

</p>
</details>

<a name="getstreamingdata"></a>
### getStreamingData(video_id, options)
Returns deciphered streaming data.

**Note:**
It is recommended to retrieve streaming data from a `VideoInfo`/`TrackInfo` object instead if you want to select formats manually, example:
```ts
const info = await yt.getBasicInfo('somevideoid');
const url = info.streaming_data?.formats[0].decipher(yt.session.player);
console.info('Playback url:', url);
```

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

See [`./examples/download`](https://github.com/LuanRT/YouTube.js/blob/main/examples/download) for examples.

<a name="resolveurl"></a>
### resolveURL(url)
Resolves a given url.

**Returns**: `Promise.<NavigationEndpoint>`

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | Url to resolve |

<a name="call"></a>
### call(endpoint, args?)
Utility to call navigation endpoints.

**Returns**: `Promise.<ActionsResponse | ParsedResponse>`

| Param | Type | Description |
| --- | --- | --- |
| endpoint | `NavigationEndpoint` | The target endpoint |
| args? | `object` | Additional payload arguments |
 
## Extending the library

YouTube.js is completely modular and easy to extend. Almost all methods, classes, and utilities used internally are exposed and can be used to implement your own extensions without having to modify the library's source code.

For example, let's say we want to implement a method to retrieve video info manually. We can do that by using an instance of the `Actions` class:

```ts
import { Innertube } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create();

  async function getVideoInfo(videoId: string) {
    const videoInfo = await yt.actions.execute('/player', {
      // anything added here will be merged with the default payload and sent to InnerTube.
      videoId,
      client: 'YTMUSIC', // InnerTube client, can be ANDROID, YTMUSIC, YTMUSIC_ANDROID, WEB or TV_EMBEDDED
      parse: true // tells YouTube.js to parse the response, this is not sent to InnerTube.
    });

    return videoInfo;
  }

  const videoInfo = await getVideoInfo('jLTOuvBTLxA');
  console.info(videoInfo);
})();
```

Or perhaps there's a `NavigationEndpoint` in a parsed response and we want to call it to see what happens:

```ts
import { Innertube, YTNodes } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create();

  const artist = await yt.music.getArtist('UC52ZqHVQz5OoGhvbWiRal6g');
  const albums = artist.sections[1].as(YTNodes.MusicCarouselShelf);

  // Say we want to click the “More” button:
  const button = albums.as(YTNodes.MusicCarouselShelf).header?.more_content;

  if (button) {
    // After making sure it exists, we can call its navigation endpoint:
    const page = await button.endpoint.call(yt.actions);
    console.info(page);
  }
})();
```

### Parser

YouTube.js' parser allows you to parse InnerTube responses and turn their nodes into strongly typed objects that can be easily manipulated. It also provides a set of utility methods that make working with InnerTube much easier.

Example:
```ts
// See ./examples/parser

import { Parser, YTNodes } from 'youtubei.js';
import { readFileSync } from 'fs';

// Artist page response from YouTube Music
const data = readFileSync('./artist.json').toString();

const page = Parser.parseResponse(JSON.parse(data));

const header = page.header?.item().as(YTNodes.MusicImmersiveHeader, YTNodes.MusicVisualHeader);

console.info('Header:', header);

/**
 * The parser encapsulates all arrays in a proxy object.
 * A proxy intercepts access to the actual data, allowing
 * the parser to add type safety and many utility methods
 * that make working with InnerTube much easier.
 */
const tab = page.contents.item().as(YTNodes.SingleColumnBrowseResults).tabs.firstOfType(YTNodes.Tab);


if (!tab)
  throw new Error('Target tab not found');

if (!tab.content)
  throw new Error('Target tab appears to be empty');
  
const sections = tab.content?.as(YTNodes.SectionList).contents.array().as(YTNodes.MusicCarouselShelf, YTNodes.MusicDescriptionShelf, YTNodes.MusicShelf);

console.info('Sections:', sections);
```

Documentation for the parser can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/src/parser).

<!-- CONTRIBUTING -->
## Contributing
Contributions, issues, and feature requests are welcome.
Feel free to check the [issues page](https://github.com/LuanRT/YouTube.js/issues) and our [guidelines](https://github.com/LuanRT/YouTube.js/blob/main/CONTRIBUTING.md) if you want to contribute.

Thank you to all the wonderful people who have contributed to this project:
<a href="https://github.com/LuanRT/YouTube.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LuanRT/YouTube.js" />
</a>

## Contact

LuanRT  - [@thesciencephile][twitter] - luan.lrt4@gmail.com

Project Link: [https://github.com/LuanRT/YouTube.js][project]

## Disclaimer
This project is not affiliated with, endorsed, or sponsored by YouTube or any of its affiliates or subsidiaries.
All trademarks, logos, and brand names are the property of their respective owners and are used only to directly describe the services being provided, as such, any usage of trademarks to refer to such services is considered nominative use.

Should you have any questions or concerns please contact me directly via email.

[^1]: https://gizmodo.com/how-project-innertube-helped-pull-youtube-out-of-the-gu-1704946491

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<p align=" right">
(<a href="#top">back to top</a>)
</p>

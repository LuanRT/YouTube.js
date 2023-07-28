<!-- BADGE LINKS -->
[npm]: https://www.npmjs.com/package/youtubei.js
[versions]: https://www.npmjs.com/package/youtubei.js?activeTab=versions
[codefactor]: https://www.codefactor.io/repository/github/luanrt/youtube.js
[actions]: https://github.com/LuanRT/YouTube.js/actions
[collaborators]: https://github.com/LuanRT/YouTube.js/blob/main/COLLABORATORS.md

<!-- OTHER LINKS -->
[project]: https://github.com/LuanRT/YouTube.js
[twitter]: https://twitter.com/thesciencephile
[discord]: https://discord.gg/syDu7Yks54

<h1 align=center>YouTube.js</h1>

<p align=center>A full-featured wrapper around the InnerTube API</p>

<div align="center">

  [![CI](https://github.com/LuanRT/YouTube.js/actions/workflows/test.yml/badge.svg)][actions]
  [![NPM Version](https://img.shields.io/npm/v/youtubei.js?color=%2335C757)][versions]
  [![Codefactor](https://www.codefactor.io/repository/github/luanrt/youtube.js/badge)][codefactor]
  [![Downloads](https://img.shields.io/npm/dt/youtubei.js)][npm]
  [![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)][discord]
  <br>
  [![Donate](https://img.shields.io/badge/donate-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)][collaborators]
 
</div>

<div align="center">
  <p>
    <sup>Special thanks to:</sup>
    <br>
    <br>
    <a href="https://serpapi.com" target="_blank">
      <img width="80" alt="SerpApi" src="https://luanrt.github.io/assets/img/serpapi.svg" />
      <br>
      <sub>
        API to get search engine results with ease.
      </sub>
    </a>
  </p>
</div>
<br>
<hr>
<br>

## Table of Contents
<ol>
   <li>
      <a href="#description">Description</a>
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

## Description

InnerTube is an API used by all YouTube clients. It was created to simplify the deployment of new features and experiments across the platform [^1]. This library manages all low-level communication with InnerTube, providing a simple and efficient way to interact with YouTube programmatically. Its design aims to closely emulate an actual client, including the parsing of API responses.

If you have any questions or need help, feel free to reach out to us on our [Discord server][discord] or open an issue [here](https://github.com/LuanRT/YouTube.js/issues).

## Getting Started

### Prerequisites
YouTube.js runs on Node.js, Deno, and modern browsers.

It requires a runtime with the following features:
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - On Node, we use [undici](https://github.com/nodejs/undici)'s fetch implementation, which requires Node.js 16.8+. If you need to use an older version, you may provide your own fetch implementation. See [providing your own fetch implementation](#custom-fetch) for more information. 
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

When using Deno, you can import YouTube.js directly from deno.land:
```ts
import { Innertube } from 'https://deno.land/x/youtubei/deno.ts';
```

## Usage
Create an InnerTube instance:
```ts
// const { Innertube } = require('youtubei.js');
import { Innertube } from 'youtubei.js';
const youtube = await Innertube.create(/* options */);
```

### Initialization Options
<details>
<summary>Click to expand</summary>

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `lang` | `string` | Language. | `en` |
| `location` | `string` | Geolocation. | `US` |
| `account_index` | `number` | The account index to use. This is useful if you have multiple accounts logged in. **NOTE:** Only works if you are signed in with cookies. | `0` |
| `visitor_data` | `string` | Setting this to a valid and persistent visitor data string will allow YouTube to give this session tailored content even when not logged in. A good way to get a valid one is by either grabbing it from a browser or calling InnerTube's `/visitor_id` endpoint. | `undefined` |
| `retrieve_player` | `boolean` | Specifies whether to retrieve the JS player. Disabling this will make session creation faster. **NOTE:** Deciphering formats is not possible without the JS player. | `true` |
| `enable_safety_mode` | `boolean` | Specifies whether to enable safety mode. This will prevent the session from loading any potentially unsafe content. | `false` |
| `generate_session_locally` | `boolean` | Specifies whether to generate the session data locally or retrieve it from YouTube. This can be useful if you need more performance. | `false` |
| `device_category` | `DeviceCategory` | Platform to use for the session. | `DESKTOP` |
| `client_type` | `ClientType` | InnerTube client type. | `WEB` |
| `timezone` | `string` | The time zone. | `*` |
| `cache` | `ICache` | Used to cache the deciphering functions from the JS player. | `undefined` |
| `cookie` | `string` | YouTube cookies. | `undefined` |
| `fetch` | `FetchFunction` | Fetch function to use. | `fetch` |

</details>

## Browser Usage
To use YouTube.js in the browser, you must proxy requests through your own server. You can see our simple reference implementation in Deno at [`examples/browser/proxy/deno.ts`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/proxy/deno.ts).

You may provide your own fetch implementation to be used by YouTube.js, which we will use to modify and send the requests through a proxy. See [`examples/browser/web`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/web) for a simple example using [Vite](https://vitejs.dev/).

```ts
// Multiple exports are available for the web.
// Unbundled ESM version
import { Innertube } from 'youtubei.js/web';
// Bundled ESM version
// import { Innertube } from 'youtubei.js/web.bundle';
// Production Bundled ESM version
// import { Innertube } from 'youtubei.js/web.bundle.min';
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
import { Innertube } from 'youtubei.js/web';
import dashjs from 'dashjs';

const youtube = await Innertube.create({ /* setup - see above */ });

// get the video info
const videoInfo = await youtube.getInfo('videoId');

// now convert to a dash manifest
// again - to be able to stream the video in the browser - we must proxy the requests through our own server
// to do this, we provide a method to transform the URLs before writing them to the manifest
const manifest = await videoInfo.toDash(url => {
  // modify the url
  // and return it
  return url;
});

const uri = "data:application/dash+xml;charset=utf-8;base64," + btoa(manifest);

const videoElement = document.getElementById('video_player');

const player = dashjs.MediaPlayer().create();
player.initialize(videoElement, uri, true);
```

A fully working example can be found in [`examples/browser/web`](https://github.com/LuanRT/YouTube.js/blob/main/examples/browser/web). Alternatively, you can view it live at [ytjsexample.pages.dev](https://ytjsexample.pages.dev/).

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
Caching the transformed player instance can greatly improve the performance. Our `UniversalCache` implementation uses different caching methods depending on the environment.

In Node.js, we use the `node:fs` module, `Deno.writeFile()` in Deno, and `indexedDB` in browsers.

By default, the cache stores data in the operating system's temporary directory (or `indexedDB` in browsers). You can make this cache persistent by specifying the path to the cache directory, which will be created if it doesn't exist.

```ts
import { Innertube, UniversalCache } from 'youtubei.js';
// Create a cache that stores files in the OS temp directory (or indexedDB in browsers) by default.
const yt = await Innertube.create({
  cache: new UniversalCache(false)
});

// You may want to create a persistent cache instead (on Node and Deno).
const yt = await Innertube.create({
  cache: new UniversalCache(
    // Enables persistent caching
    true, 
    // Path to the cache directory. The directory will be created if it doesn't exist
    './.cache' 
  )
});
```

## API

* `Innertube`

  <details>
  <summary>Properties</summary>
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
  
  * [.getInfo(target, client?)](#getinfo)
  * [.getBasicInfo(video_id, client?)](#getbasicinfo)
  * [.search(query, filters?)](#search)
  * [.getSearchSuggestions(query)](#getsearchsuggestions)
  * [.getComments(video_id, sort_by?)](#getcomments)
  * [.getHomeFeed()](#gethomefeed)
  * [.getGuide()](#getguide)
  * [.getLibrary()](#getlibrary)
  * [.getHistory()](#gethistory)
  * [.getTrending()](#gettrending)
  * [.getSubscriptionsFeed()](#getsubscriptionsfeed)
  * [.getChannel(id)](#getchannel)
  * [.getNotifications()](#getnotifications)
  * [.getUnseenNotificationsCount()](#getunseennotificationscount)
  * [.getPlaylist(id)](#getplaylist)
  * [.getHashtag(hashtag)](#gethashtag)
  * [.getStreamingData(video_id, options)](#getstreamingdata)
  * [.download(video_id, options?)](#download)
  * [.resolveURL(url)](#resolveurl)
  * [.call(endpoint, args?)](#call)
  
  </p>
  </details> 

<a name="getinfo"></a>
### `getInfo(target, client?)`

Retrieves video info.

**Returns**: `Promise<VideoInfo>`

| Param | Type | Description |
| --- | --- | --- |
| target | `string` \| `NavigationEndpoint` | If `string`, the id of the video. If `NavigationEndpoint`, the endpoint of watchable elements such as `Video`, `Mix` and `Playlist`. To clarify, valid endpoints have payloads containing at least `videoId` and optionally `playlistId`, `params` and `index`. |
| client? | `InnerTubeClient` | `WEB`, `ANDROID`, `YTMUSIC`, `YTMUSIC_ANDROID` or `TV_EMBEDDED` |

<details>
<summary>Methods & Getters</summary>
<p>

- `<info>#like()`
  - Likes the video.

- `<info>#dislike()`
  - Dislikes the video.

- `<info>#removeRating()`
  - Removes like/dislike.

- `<info>#getLiveChat()`
  - Returns a LiveChat instance.

- `<info>#getTrailerInfo()`
  - Returns trailer info in a new `VideoInfo` instance, or `null` if none. Typically available for non-purchased movies or films.

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

- `<info>#autoplay_video_endpoint`
  - Returns the endpoint of the video for Autoplay.

- `<info>#has_trailer`
  - Checks if trailer is available.

- `<info>#page`
  - Returns original InnerTube response (sanitized).

</p>
</details> 

<a name="getbasicinfo"></a>
### `getBasicInfo(video_id, client?)`

Suitable for cases where you only need basic video metadata. Also, it is faster than [`getInfo()`](#getinfo).

**Returns**: `Promise<VideoInfo>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The id of the video |
| client? | `InnerTubeClient` | `WEB`, `ANDROID`, `YTMUSIC_ANDROID`, `YTMUSIC`, `TV_EMBEDDED` |

<a name="search"></a>
### `search(query, filters?)`

Searches the given query on YouTube.

**Returns**: `Promise<Search>`

> **Note**
> `Search` extends the [`Feed`](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/feed.md) class.

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | The search query |
| filters? | `SearchFilters` | Search filters |


<details>
<summary>Search Filters</summary>

| Filter | Type | Value | Description |
| --- | --- | --- | --- |
| upload_date | `string` | `all` \| `hour` \| `today` \| `week` \| `month` \| `year` | Filter by upload date |
| type | `string` | `all` \| `video` \| `channel` \| `playlist` \| `movie` | Filter by type |
| duration | `string` | `all` \| `short` \| `medium` \| `long` | Filter by duration |
| sort_by | `string` | `relevance` \| `rating` \| `upload_date` \| `view_count` | Sort by |
| features | `string[]` | `hd` \| `subtitles` \| `creative_commons` \| `3d` \| `live` \| `purchased` \| `4k` \| `360` \| `location` \| `hdr` \| `vr180` | Filter by features |

</details>

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
### `getSearchSuggestions(query)`
Retrieves search suggestions for given query.

**Returns**: `Promise<string[]>`

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | The search query |

<a name="getcomments"></a>
### `getComments(video_id, sort_by?)`
Retrieves comments for given video.

**Returns**: `Promise<Comments>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The video id |
| sort_by | `string` | Can be: `TOP_COMMENTS` or `NEWEST_FIRST` |

See [`./examples/comments`](https://github.com/LuanRT/YouTube.js/blob/main/examples/comments) for examples.

<a name="gethomefeed"></a>
### `getHomeFeed()`
Retrieves YouTube's home feed.

**Returns**: `Promise<HomeFeed>`

> **Note**
> `HomeFeed` extends the [`FilterableFeed`](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/filterable-feed.md) class.

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

<a name="getguide"></a>
### `getGuide()`
Retrieves YouTube's content guide.

**Returns**: `Promise<Guide>`

<a name="getlibrary"></a>
### `getLibrary()`
Retrieves the account's library.

**Returns**: `Promise<Library>`

> **Note**
> `Library` extends the [`Feed`](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/feed.md) class.

<details>
<summary>Methods & Getters</summary>
<p>

- `<library>#history`
- `<library>#watch_later`
- `<library>#liked_videos`
- `<library>#playlists_section`
- `<library>#clips`

</p>
</details> 

<a name="gethistory"></a>
### `getHistory()`
Retrieves watch history.

**Returns**: `Promise<History>`

> **Note**
> `History` extends the [`Feed`](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/feed.md) class.

<details>
<summary>Methods & Getters</summary>
<p>

- `<history>#getContinuation()`
  - Retrieves next batch of contents.

</p>
</details> 

<a name="gettrending"></a>
### `getTrending()`
Retrieves trending content.

**Returns**: `Promise<TabbedFeed<IBrowseResponse>>`

<a name="getsubscriptionsfeed"></a>
### `getSubscriptionsFeed()`
Retrieves the subscriptions feed.

**Returns**: `Promise<Feed<IBrowseResponse>>`

<a name="getchannel"></a>
### `getChannel(id)`
Retrieves contents for a given channel.

**Returns**: `Promise<Channel>`

> **Note**
> `Channel` extends the [`TabbedFeed`](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/tabbed-feed.md) class.

| Param | Type | Description |
| --- | --- | --- |
| id | `string` | Channel id |

<details>
<summary>Methods & Getters</summary>
<p>

- `<channel>#getVideos()`
- `<channel>#getShorts()`
- `<channel>#getLiveStreams()`
- `<channel>#getReleases()`
- `<channel>#getPodcasts()`
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
### `getNotifications()`
Retrieves notifications.

**Returns**: `Promise<NotificationsMenu>`

<details>
<summary>Methods & Getter</summary>
<p>

- `<notifications>#getContinuation()`
  - Retrieves next batch of notifications.

</p>
</details>

<a name="getunseennotificationscount"></a>
### `getUnseenNotificationsCount()`
Retrieves unseen notifications count.

**Returns**: `Promise<number>`

<a name="getplaylist"></a>
### `getPlaylist(id)`
Retrieves playlist contents.

**Returns**: `Promise<Playlist>`

> **Note**
> `Playlist` extends the [`Feed`](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/feed.md) class.

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

<a name="gethashtag"></a>
### `getHashtag(hashtag)`
Retrieves a given hashtag's page.

**Returns**: `Promise<HashtagFeed>`

> **Note**
> `HashtagFeed` extends the [`FilterableFeed`](https://github.com/LuanRT/YouTube.js/blob/main/docs/API/filterable-feed.md) class.

| Param | Type | Description |
| --- | --- | --- |
| hashtag | `string` | The hashtag |

<details>
<summary>Methods & Getter</summary>
<p>

- `<hashtag>#applyFilter(filter)`
  - Applies given filter and returns a new `HashtagFeed` instance.
- `<hashtag>#getContinuation()`
  - Retrieves next batch of contents.

</p>
</details>

<a name="getstreamingdata"></a>
### `getStreamingData(video_id, options)`
Returns deciphered streaming data.

> **Note**
> This method will be deprecated in the future. We recommend retrieving streaming data from a `VideoInfo` or `TrackInfo` object instead if you want to select formats manually. Please refer to the following example:

```ts
const info = await yt.getBasicInfo('somevideoid');

const url = info.streaming_data?.formats[0].decipher(yt.session.player);
console.info('Playback url:', url);

// or:
const format = info.chooseFormat({ type: 'audio', quality: 'best' });
const url = format?.decipher(yt.session.player);
console.info('Playback url:', url);
```

**Returns**: `Promise<object>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |
| options | `FormatOptions` | Format options |

<a name="download"></a>
### `download(video_id, options?)`
Downloads a given video.

**Returns**: `Promise<ReadableStream<Uint8Array>>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |
| options | `DownloadOptions` | Download options |

See [`./examples/download`](https://github.com/LuanRT/YouTube.js/blob/main/examples/download) for examples.

<a name="resolveurl"></a>
### `resolveURL(url)`
Resolves a given url.

**Returns**: `Promise<NavigationEndpoint>`

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | Url to resolve |

<a name="call"></a>
### `call(endpoint, args?)`
Utility to call navigation endpoints.

**Returns**: `Promise<T extends IParsedResponse | IParsedResponse | ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| endpoint | `NavigationEndpoint` | The target endpoint |
| args? | `object` | Additional payload arguments |
 
## Extending the library

YouTube.js is modular and easy to extend. Most of the methods, classes, and utilities used internally are exposed and can be used to implement your own extensions without having to modify the library's source code.

For example, let's say we want to implement a method to retrieve video info. We can do that by using an instance of the `Actions` class:
```ts
import { Innertube } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create();

  async function getVideoInfo(videoId: string) {
    const videoInfo = await yt.actions.execute('/player', {
      // You can add any additional payloads here, and they'll merge with the default payload sent to InnerTube.
      videoId,
      client: 'YTMUSIC', // InnerTube client options: ANDROID, YTMUSIC, YTMUSIC_ANDROID, WEB, or TV_EMBEDDED.
      parse: true // tells YouTube.js to parse the response (not sent to InnerTube).
    });

    return videoInfo;
  }

  const videoInfo = await getVideoInfo('jLTOuvBTLxA');
  console.info(videoInfo);
})();
```

Alternatively, suppose we locate a `NavigationEndpoint` in a parsed response and want to see what happens when we call it:
```ts
import { Innertube, YTNodes } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create();

  const artist = await yt.music.getArtist('UC52ZqHVQz5OoGhvbWiRal6g');
  const albums = artist.sections[1].as(YTNodes.MusicCarouselShelf);

  // Let's imagine that we wish to click on the “More” button:
  const button = albums.as(YTNodes.MusicCarouselShelf).header?.more_content;

  if (button) {
    // Having ensured that it exists, we can then call its navigation endpoint using the following code:
    const page = await button.endpoint.call(yt.actions, { parse: true });
    console.info(page);
  }
})();
```

### Parser

YouTube.js' parser enables you to parse InnerTube responses and convert their nodes into strongly-typed objects that are simple to manipulate. Additionally, it provides numerous utility methods that make working with InnerTube a breeze.

Here's an example of its usage:
```ts
// See ./examples/parser

import { Parser, YTNodes } from 'youtubei.js';
import { readFileSync } from 'fs';

// YouTube Music's artist page response
const data = readFileSync('./artist.json').toString();

const page = Parser.parseResponse(JSON.parse(data));

const header = page.header?.item().as(YTNodes.MusicImmersiveHeader, YTNodes.MusicVisualHeader);

console.info('Header:', header);

// The parser uses a proxy object to add type safety and utility methods for working with InnerTube's data arrays:
const tab = page.contents?.item().as(YTNodes.SingleColumnBrowseResults).tabs.firstOfType(YTNodes.Tab);

if (!tab)
  throw new Error('Target tab not found');

if (!tab.content)
  throw new Error('Target tab appears to be empty');
  
const sections = tab.content?.as(YTNodes.SectionList).contents.as(YTNodes.MusicCarouselShelf, YTNodes.MusicDescriptionShelf, YTNodes.MusicShelf);

console.info('Sections:', sections);
```

Documentation for the parser can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/src/parser).

## Contributing
We welcome all contributions, issues and feature requests, whether small or large. If you want to contribute, feel free to check out our [issues page](https://github.com/LuanRT/YouTube.js/issues) and our [guidelines](https://github.com/LuanRT/YouTube.js/blob/main/CONTRIBUTING.md).

We are immensely grateful to all the wonderful people who have contributed to this project. A special shoutout to all our contributors! 🎉
<a href="https://github.com/LuanRT/YouTube.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LuanRT/YouTube.js" />
</a>

## Contact

LuanRT  - [@thesciencephile][twitter] - luan.lrt4@gmail.com

Project Link: [https://github.com/LuanRT/YouTube.js][project]

## Disclaimer
This project is not affiliated with, endorsed, or sponsored by YouTube or any of its affiliates or subsidiaries. All trademarks, logos, and brand names used in this project are the property of their respective owners and are used solely to describe the services provided.

As such, any usage of trademarks to refer to such services is considered nominative use. If you have any questions or concerns, please contact me directly via email.

[^1]: https://gizmodo.com/how-project-innertube-helped-pull-youtube-out-of-the-gu-1704946491

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<p align=" right">
(<a href="#top">back to top</a>)
</p>

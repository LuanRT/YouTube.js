[youtubei.js](../README.md) / Innertube

# Class: Innertube

Provides access to various services and modules in the YouTube API.

## Example

```ts
import { Innertube, UniversalCache } from 'youtubei.js';
const innertube = await Innertube.create({ cache: new UniversalCache(true)});
```

## Constructors

### new Innertube()

> **new Innertube**(`session`): [`Innertube`](Innertube.md)

#### Parameters

• **session**: [`Session`](Session.md)

#### Returns

[`Innertube`](Innertube.md)

#### Defined in

[src/Innertube.ts:55](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L55)

## Accessors

### account

> `get` **account**(): [`AccountManager`](../namespaces/Managers/classes/AccountManager.md)

An interface for managing and retrieving account information.

#### Returns

[`AccountManager`](../namespaces/Managers/classes/AccountManager.md)

#### Defined in

[src/Innertube.ts:466](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L466)

***

### actions

> `get` **actions**(): [`Actions`](Actions.md)

An internal class used to dispatch requests.

#### Returns

[`Actions`](Actions.md)

#### Defined in

[src/Innertube.ts:487](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L487)

***

### interact

> `get` **interact**(): [`InteractionManager`](../namespaces/Managers/classes/InteractionManager.md)

An interface for directly interacting with certain YouTube features.

#### Returns

[`InteractionManager`](../namespaces/Managers/classes/InteractionManager.md)

#### Defined in

[src/Innertube.ts:480](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L480)

***

### kids

> `get` **kids**(): [`Kids`](../namespaces/Clients/classes/Kids.md)

An interface for interacting with YouTube Kids.

#### Returns

[`Kids`](../namespaces/Clients/classes/Kids.md)

#### Defined in

[src/Innertube.ts:459](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L459)

***

### music

> `get` **music**(): [`Music`](../namespaces/Clients/classes/Music.md)

An interface for interacting with YouTube Music.

#### Returns

[`Music`](../namespaces/Clients/classes/Music.md)

#### Defined in

[src/Innertube.ts:445](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L445)

***

### playlist

> `get` **playlist**(): [`PlaylistManager`](../namespaces/Managers/classes/PlaylistManager.md)

An interface for managing playlists.

#### Returns

[`PlaylistManager`](../namespaces/Managers/classes/PlaylistManager.md)

#### Defined in

[src/Innertube.ts:473](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L473)

***

### session

> `get` **session**(): [`Session`](Session.md)

The session used by this instance.

#### Returns

[`Session`](Session.md)

#### Defined in

[src/Innertube.ts:494](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L494)

***

### studio

> `get` **studio**(): [`Studio`](../namespaces/Clients/classes/Studio.md)

An interface for interacting with YouTube Studio.

#### Returns

[`Studio`](../namespaces/Clients/classes/Studio.md)

#### Defined in

[src/Innertube.ts:452](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L452)

## Methods

### call()

#### call(endpoint, args)

> **call**\<`T`\>(`endpoint`, `args`): `Promise`\<`T`\>

Utility method to call an endpoint without having to use [Actions](Actions.md).

##### Type Parameters

• **T** *extends* [`IParsedResponse`](../namespaces/APIResponseTypes/interfaces/IParsedResponse.md)

##### Parameters

• **endpoint**: [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **args**

• **args.parse**: `true`

##### Returns

`Promise`\<`T`\>

##### Defined in

[src/Innertube.ts:436](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L436)

#### call(endpoint, args)

> **call**(`endpoint`, `args`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Parameters

• **endpoint**: [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **args?**

• **args.parse?**: `false`

##### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Defined in

[src/Innertube.ts:437](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L437)

***

### download()

> **download**(`video_id`, `options`?): `Promise`\<`ReadableStream`\<`Uint8Array`\>\>

Downloads a given video. If all you need the direct download link, see [getStreamingData](Innertube.md#getstreamingdata).
If you wish to retrieve the video info too, have a look at [getBasicInfo](Innertube.md#getbasicinfo) or [getInfo](Innertube.md#getinfo).

#### Parameters

• **video\_id**: `string`

The video id.

• **options?**: [`DownloadOptions`](../namespaces/Types/interfaces/DownloadOptions.md)

Download options.

#### Returns

`Promise`\<`ReadableStream`\<`Uint8Array`\>\>

#### Defined in

[src/Innertube.ts:416](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L416)

***

### getBasicInfo()

> **getBasicInfo**(`video_id`, `client`?): `Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Defined in

[src/Innertube.ts:102](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L102)

***

### getChannel()

> **getChannel**(`id`): `Promise`\<[`Channel`](../namespaces/YT/classes/Channel.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`Channel`](../namespaces/YT/classes/Channel.md)\>

#### Defined in

[src/Innertube.ts:335](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L335)

***

### getChannelsFeed()

> **getChannelsFeed**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:329](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L329)

***

### getComments()

> **getComments**(`video_id`, `sort_by`?, `comment_id`?): `Promise`\<[`Comments`](../namespaces/YT/classes/Comments.md)\>

#### Parameters

• **video\_id**: `string`

• **sort\_by?**: `"TOP_COMMENTS"` \| `"NEWEST_FIRST"`

• **comment\_id?**: `string`

#### Returns

`Promise`\<[`Comments`](../namespaces/YT/classes/Comments.md)\>

#### Defined in

[src/Innertube.ts:250](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L250)

***

### getCourses()

> **getCourses**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:317](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L317)

***

### getGuide()

> **getGuide**(): `Promise`\<[`Guide`](../namespaces/YT/classes/Guide.md)\>

#### Returns

`Promise`\<[`Guide`](../namespaces/YT/classes/Guide.md)\>

#### Defined in

[src/Innertube.ts:294](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L294)

***

### getHashtag()

> **getHashtag**(`hashtag`): `Promise`\<[`HashtagFeed`](../namespaces/YT/classes/HashtagFeed.md)\>

#### Parameters

• **hashtag**: `string`

#### Returns

`Promise`\<[`HashtagFeed`](../namespaces/YT/classes/HashtagFeed.md)\>

#### Defined in

[src/Innertube.ts:375](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L375)

***

### getHistory()

> **getHistory**(): `Promise`\<[`History`](../namespaces/YT/classes/History.md)\>

#### Returns

`Promise`\<[`History`](../namespaces/YT/classes/History.md)\>

#### Defined in

[src/Innertube.ts:305](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L305)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../namespaces/YT/classes/HomeFeed.md)\>

#### Returns

`Promise`\<[`HomeFeed`](../namespaces/YT/classes/HomeFeed.md)\>

#### Defined in

[src/Innertube.ts:288](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L288)

***

### getInfo()

> **getInfo**(`target`, `client`?): `Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Parameters

• **target**: `string` \| [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Defined in

[src/Innertube.ts:63](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L63)

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../namespaces/YT/classes/Library.md)\>

#### Returns

`Promise`\<[`Library`](../namespaces/YT/classes/Library.md)\>

#### Defined in

[src/Innertube.ts:299](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L299)

***

### getNotifications()

> **getNotifications**(): `Promise`\<[`NotificationsMenu`](../namespaces/YT/classes/NotificationsMenu.md)\>

#### Returns

`Promise`\<[`NotificationsMenu`](../namespaces/YT/classes/NotificationsMenu.md)\>

#### Defined in

[src/Innertube.ts:342](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L342)

***

### getPlaylist()

> **getPlaylist**(`id`): `Promise`\<[`Playlist`](../namespaces/YT/classes/Playlist.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`Playlist`](../namespaces/YT/classes/Playlist.md)\>

#### Defined in

[src/Innertube.ts:362](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L362)

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

Retrieves the user's playlists.

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:356](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L356)

***

### getSearchSuggestions()

> **getSearchSuggestions**(`query`): `Promise`\<`string`[]\>

#### Parameters

• **query**: `string`

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/Innertube.ts:231](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L231)

***

### getShortsVideoInfo()

> **getShortsVideoInfo**(`video_id`, `client`?): `Promise`\<[`ShortFormVideoInfo`](../namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`ShortFormVideoInfo`](../namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

#### Defined in

[src/Innertube.ts:127](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L127)

***

### getStreamingData()

> **getStreamingData**(`video_id`, `options`): `Promise`\<[`Format`](../namespaces/Misc/classes/Format.md)\>

An alternative to [download](Innertube.md#download).
Returns deciphered streaming data.

If you wish to retrieve the video info too, have a look at [getBasicInfo](Innertube.md#getbasicinfo) or [getInfo](Innertube.md#getinfo).

#### Parameters

• **video\_id**: `string`

The video id.

• **options**: [`FormatOptions`](../namespaces/Types/interfaces/FormatOptions.md) = `{}`

Format options.

#### Returns

`Promise`\<[`Format`](../namespaces/Misc/classes/Format.md)\>

#### Defined in

[src/Innertube.ts:401](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L401)

***

### getSubscriptionsFeed()

> **getSubscriptionsFeed**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:323](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L323)

***

### getTrending()

> **getTrending**(): `Promise`\<[`TabbedFeed`](../namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`TabbedFeed`](../namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:311](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L311)

***

### getUnseenNotificationsCount()

> **getUnseenNotificationsCount**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/Innertube.ts:347](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L347)

***

### resolveURL()

> **resolveURL**(`url`): `Promise`\<[`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)\>

Resolves the given URL.

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<[`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)\>

#### Defined in

[src/Innertube.ts:424](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L424)

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../namespaces/YT/classes/Search.md)\>

#### Parameters

• **query**: `string`

• **filters**: [`SearchFilters`](../namespaces/Types/type-aliases/SearchFilters.md) = `{}`

#### Returns

`Promise`\<[`Search`](../namespaces/YT/classes/Search.md)\>

#### Defined in

[src/Innertube.ts:160](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L160)

***

### create()

> `static` **create**(`config`): `Promise`\<[`Innertube`](Innertube.md)\>

#### Parameters

• **config**: [`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<[`Innertube`](Innertube.md)\>

#### Defined in

[src/Innertube.ts:59](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/Innertube.ts#L59)

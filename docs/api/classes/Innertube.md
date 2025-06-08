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

[src/Innertube.ts:65](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L65)

## Accessors

### account

> `get` **account**(): [`AccountManager`](../namespaces/Managers/classes/AccountManager.md)

An interface for managing and retrieving account information.

#### Returns

[`AccountManager`](../namespaces/Managers/classes/AccountManager.md)

#### Defined in

[src/Innertube.ts:602](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L602)

***

### actions

> `get` **actions**(): [`Actions`](Actions.md)

An internal class used to dispatch requests.

#### Returns

[`Actions`](Actions.md)

#### Defined in

[src/Innertube.ts:623](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L623)

***

### interact

> `get` **interact**(): [`InteractionManager`](../namespaces/Managers/classes/InteractionManager.md)

An interface for directly interacting with certain YouTube features.

#### Returns

[`InteractionManager`](../namespaces/Managers/classes/InteractionManager.md)

#### Defined in

[src/Innertube.ts:616](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L616)

***

### kids

> `get` **kids**(): [`Kids`](../namespaces/Clients/classes/Kids.md)

An interface for interacting with YouTube Kids.

#### Returns

[`Kids`](../namespaces/Clients/classes/Kids.md)

#### Defined in

[src/Innertube.ts:595](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L595)

***

### music

> `get` **music**(): [`Music`](../namespaces/Clients/classes/Music.md)

An interface for interacting with YouTube Music.

#### Returns

[`Music`](../namespaces/Clients/classes/Music.md)

#### Defined in

[src/Innertube.ts:581](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L581)

***

### playlist

> `get` **playlist**(): [`PlaylistManager`](../namespaces/Managers/classes/PlaylistManager.md)

An interface for managing playlists.

#### Returns

[`PlaylistManager`](../namespaces/Managers/classes/PlaylistManager.md)

#### Defined in

[src/Innertube.ts:609](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L609)

***

### session

> `get` **session**(): [`Session`](Session.md)

The session used by this instance.

#### Returns

[`Session`](Session.md)

#### Defined in

[src/Innertube.ts:630](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L630)

***

### studio

> `get` **studio**(): [`Studio`](../namespaces/Clients/classes/Studio.md)

An interface for interacting with YouTube Studio.

#### Returns

[`Studio`](../namespaces/Clients/classes/Studio.md)

#### Defined in

[src/Innertube.ts:588](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L588)

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

[src/Innertube.ts:572](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L572)

#### call(endpoint, args)

> **call**(`endpoint`, `args`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Parameters

• **endpoint**: [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **args?**

• **args.parse?**: `false`

##### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Defined in

[src/Innertube.ts:573](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L573)

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

[src/Innertube.ts:462](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L462)

***

### getAttestationChallenge()

> **getAttestationChallenge**(`engagement_type`, `ids`?): `Promise`\<[`IGetChallengeResponse`](../namespaces/APIResponseTypes/type-aliases/IGetChallengeResponse.md)\>

Fetches an attestation challenge.

#### Parameters

• **engagement\_type**: [`EngagementType`](../namespaces/Types/type-aliases/EngagementType.md)

• **ids?**: `Record`\<`string`, `any`\>[]

#### Returns

`Promise`\<[`IGetChallengeResponse`](../namespaces/APIResponseTypes/type-aliases/IGetChallengeResponse.md)\>

#### Defined in

[src/Innertube.ts:558](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L558)

***

### getBasicInfo()

> **getBasicInfo**(`video_id`, `client`?): `Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Defined in

[src/Innertube.ts:118](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L118)

***

### getChannel()

> **getChannel**(`id`): `Promise`\<[`Channel`](../namespaces/YT/classes/Channel.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`Channel`](../namespaces/YT/classes/Channel.md)\>

#### Defined in

[src/Innertube.ts:381](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L381)

***

### getChannelsFeed()

> **getChannelsFeed**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:375](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L375)

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

[src/Innertube.ts:296](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L296)

***

### getCourses()

> **getCourses**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:363](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L363)

***

### getGuide()

> **getGuide**(): `Promise`\<[`Guide`](../namespaces/YT/classes/Guide.md)\>

#### Returns

`Promise`\<[`Guide`](../namespaces/YT/classes/Guide.md)\>

#### Defined in

[src/Innertube.ts:340](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L340)

***

### getHashtag()

> **getHashtag**(`hashtag`): `Promise`\<[`HashtagFeed`](../namespaces/YT/classes/HashtagFeed.md)\>

#### Parameters

• **hashtag**: `string`

#### Returns

`Promise`\<[`HashtagFeed`](../namespaces/YT/classes/HashtagFeed.md)\>

#### Defined in

[src/Innertube.ts:421](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L421)

***

### getHistory()

> **getHistory**(): `Promise`\<[`History`](../namespaces/YT/classes/History.md)\>

#### Returns

`Promise`\<[`History`](../namespaces/YT/classes/History.md)\>

#### Defined in

[src/Innertube.ts:351](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L351)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../namespaces/YT/classes/HomeFeed.md)\>

#### Returns

`Promise`\<[`HomeFeed`](../namespaces/YT/classes/HomeFeed.md)\>

#### Defined in

[src/Innertube.ts:334](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L334)

***

### getInfo()

> **getInfo**(`target`, `client`?): `Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Parameters

• **target**: `string` \| [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Defined in

[src/Innertube.ts:73](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L73)

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../namespaces/YT/classes/Library.md)\>

#### Returns

`Promise`\<[`Library`](../namespaces/YT/classes/Library.md)\>

#### Defined in

[src/Innertube.ts:345](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L345)

***

### getNotifications()

> **getNotifications**(): `Promise`\<[`NotificationsMenu`](../namespaces/YT/classes/NotificationsMenu.md)\>

#### Returns

`Promise`\<[`NotificationsMenu`](../namespaces/YT/classes/NotificationsMenu.md)\>

#### Defined in

[src/Innertube.ts:388](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L388)

***

### getPlaylist()

> **getPlaylist**(`id`): `Promise`\<[`Playlist`](../namespaces/YT/classes/Playlist.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`Playlist`](../namespaces/YT/classes/Playlist.md)\>

#### Defined in

[src/Innertube.ts:408](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L408)

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

Retrieves the user's playlists.

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:402](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L402)

***

### getPost()

> **getPost**(`post_id`, `channel_id`): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

Gets a post page given a post id and the channel id

#### Parameters

• **post\_id**: `string`

• **channel\_id**: `string`

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:482](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L482)

***

### getPostComments()

> **getPostComments**(`post_id`, `channel_id`, `sort_by`?): `Promise`\<[`Comments`](../namespaces/YT/classes/Comments.md)\>

Gets the comments of a post.

#### Parameters

• **post\_id**: `string`

• **channel\_id**: `string`

• **sort\_by?**: `"TOP_COMMENTS"` \| `"NEWEST_FIRST"`

#### Returns

`Promise`\<[`Comments`](../namespaces/YT/classes/Comments.md)\>

#### Defined in

[src/Innertube.ts:506](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L506)

***

### getSearchSuggestions()

> **getSearchSuggestions**(`query`, `previous_query`?): `Promise`\<`string`[]\>

#### Parameters

• **query**: `string`

• **previous\_query?**: `string`

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/Innertube.ts:267](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L267)

***

### getShortsVideoInfo()

> **getShortsVideoInfo**(`video_id`, `client`?): `Promise`\<[`ShortFormVideoInfo`](../namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`ShortFormVideoInfo`](../namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

#### Defined in

[src/Innertube.ts:156](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L156)

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

[src/Innertube.ts:447](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L447)

***

### getSubscriptionsFeed()

> **getSubscriptionsFeed**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:369](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L369)

***

### getTrending()

> **getTrending**(): `Promise`\<[`TabbedFeed`](../namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`TabbedFeed`](../namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:357](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L357)

***

### getUnseenNotificationsCount()

> **getUnseenNotificationsCount**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/Innertube.ts:393](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L393)

***

### resolveURL()

> **resolveURL**(`url`): `Promise`\<[`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)\>

Resolves the given URL.

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<[`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)\>

#### Defined in

[src/Innertube.ts:470](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L470)

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../namespaces/YT/classes/Search.md)\>

#### Parameters

• **query**: `string`

• **filters**: [`SearchFilters`](../namespaces/Types/type-aliases/SearchFilters.md) = `{}`

#### Returns

`Promise`\<[`Search`](../namespaces/YT/classes/Search.md)\>

#### Defined in

[src/Innertube.ts:191](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L191)

***

### create()

> `static` **create**(`config`): `Promise`\<[`Innertube`](Innertube.md)\>

#### Parameters

• **config**: [`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<[`Innertube`](Innertube.md)\>

#### Defined in

[src/Innertube.ts:69](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/Innertube.ts#L69)

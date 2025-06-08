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

[src/Innertube.ts:65](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L65)

## Accessors

### account

> `get` **account**(): [`AccountManager`](../namespaces/Managers/classes/AccountManager.md)

An interface for managing and retrieving account information.

#### Returns

[`AccountManager`](../namespaces/Managers/classes/AccountManager.md)

#### Defined in

[src/Innertube.ts:588](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L588)

***

### actions

> `get` **actions**(): [`Actions`](Actions.md)

An internal class used to dispatch requests.

#### Returns

[`Actions`](Actions.md)

#### Defined in

[src/Innertube.ts:609](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L609)

***

### interact

> `get` **interact**(): [`InteractionManager`](../namespaces/Managers/classes/InteractionManager.md)

An interface for directly interacting with certain YouTube features.

#### Returns

[`InteractionManager`](../namespaces/Managers/classes/InteractionManager.md)

#### Defined in

[src/Innertube.ts:602](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L602)

***

### kids

> `get` **kids**(): [`Kids`](../namespaces/Clients/classes/Kids.md)

An interface for interacting with YouTube Kids.

#### Returns

[`Kids`](../namespaces/Clients/classes/Kids.md)

#### Defined in

[src/Innertube.ts:581](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L581)

***

### music

> `get` **music**(): [`Music`](../namespaces/Clients/classes/Music.md)

An interface for interacting with YouTube Music.

#### Returns

[`Music`](../namespaces/Clients/classes/Music.md)

#### Defined in

[src/Innertube.ts:567](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L567)

***

### playlist

> `get` **playlist**(): [`PlaylistManager`](../namespaces/Managers/classes/PlaylistManager.md)

An interface for managing playlists.

#### Returns

[`PlaylistManager`](../namespaces/Managers/classes/PlaylistManager.md)

#### Defined in

[src/Innertube.ts:595](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L595)

***

### session

> `get` **session**(): [`Session`](Session.md)

The session used by this instance.

#### Returns

[`Session`](Session.md)

#### Defined in

[src/Innertube.ts:616](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L616)

***

### studio

> `get` **studio**(): [`Studio`](../namespaces/Clients/classes/Studio.md)

An interface for interacting with YouTube Studio.

#### Returns

[`Studio`](../namespaces/Clients/classes/Studio.md)

#### Defined in

[src/Innertube.ts:574](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L574)

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

[src/Innertube.ts:558](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L558)

#### call(endpoint, args)

> **call**(`endpoint`, `args`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Parameters

• **endpoint**: [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **args?**

• **args.parse?**: `false`

##### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Defined in

[src/Innertube.ts:559](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L559)

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

[src/Innertube.ts:448](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L448)

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

[src/Innertube.ts:544](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L544)

***

### getBasicInfo()

> **getBasicInfo**(`video_id`, `client`?): `Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Defined in

[src/Innertube.ts:116](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L116)

***

### getChannel()

> **getChannel**(`id`): `Promise`\<[`Channel`](../namespaces/YT/classes/Channel.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`Channel`](../namespaces/YT/classes/Channel.md)\>

#### Defined in

[src/Innertube.ts:367](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L367)

***

### getChannelsFeed()

> **getChannelsFeed**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:361](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L361)

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

[src/Innertube.ts:282](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L282)

***

### getCourses()

> **getCourses**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:349](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L349)

***

### getGuide()

> **getGuide**(): `Promise`\<[`Guide`](../namespaces/YT/classes/Guide.md)\>

#### Returns

`Promise`\<[`Guide`](../namespaces/YT/classes/Guide.md)\>

#### Defined in

[src/Innertube.ts:326](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L326)

***

### getHashtag()

> **getHashtag**(`hashtag`): `Promise`\<[`HashtagFeed`](../namespaces/YT/classes/HashtagFeed.md)\>

#### Parameters

• **hashtag**: `string`

#### Returns

`Promise`\<[`HashtagFeed`](../namespaces/YT/classes/HashtagFeed.md)\>

#### Defined in

[src/Innertube.ts:407](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L407)

***

### getHistory()

> **getHistory**(): `Promise`\<[`History`](../namespaces/YT/classes/History.md)\>

#### Returns

`Promise`\<[`History`](../namespaces/YT/classes/History.md)\>

#### Defined in

[src/Innertube.ts:337](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L337)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../namespaces/YT/classes/HomeFeed.md)\>

#### Returns

`Promise`\<[`HomeFeed`](../namespaces/YT/classes/HomeFeed.md)\>

#### Defined in

[src/Innertube.ts:320](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L320)

***

### getInfo()

> **getInfo**(`target`, `client`?): `Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Parameters

• **target**: `string` \| [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Defined in

[src/Innertube.ts:73](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L73)

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../namespaces/YT/classes/Library.md)\>

#### Returns

`Promise`\<[`Library`](../namespaces/YT/classes/Library.md)\>

#### Defined in

[src/Innertube.ts:331](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L331)

***

### getNotifications()

> **getNotifications**(): `Promise`\<[`NotificationsMenu`](../namespaces/YT/classes/NotificationsMenu.md)\>

#### Returns

`Promise`\<[`NotificationsMenu`](../namespaces/YT/classes/NotificationsMenu.md)\>

#### Defined in

[src/Innertube.ts:374](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L374)

***

### getPlaylist()

> **getPlaylist**(`id`): `Promise`\<[`Playlist`](../namespaces/YT/classes/Playlist.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`Playlist`](../namespaces/YT/classes/Playlist.md)\>

#### Defined in

[src/Innertube.ts:394](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L394)

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

Retrieves the user's playlists.

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:388](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L388)

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

[src/Innertube.ts:468](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L468)

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

[src/Innertube.ts:492](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L492)

***

### getSearchSuggestions()

> **getSearchSuggestions**(`query`, `previous_query`?): `Promise`\<`string`[]\>

#### Parameters

• **query**: `string`

• **previous\_query?**: `string`

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/Innertube.ts:255](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L255)

***

### getShortsVideoInfo()

> **getShortsVideoInfo**(`video_id`, `client`?): `Promise`\<[`ShortFormVideoInfo`](../namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`ShortFormVideoInfo`](../namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

#### Defined in

[src/Innertube.ts:146](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L146)

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

[src/Innertube.ts:433](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L433)

***

### getSubscriptionsFeed()

> **getSubscriptionsFeed**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:355](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L355)

***

### getTrending()

> **getTrending**(): `Promise`\<[`TabbedFeed`](../namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`TabbedFeed`](../namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:343](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L343)

***

### getUnseenNotificationsCount()

> **getUnseenNotificationsCount**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/Innertube.ts:379](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L379)

***

### resolveURL()

> **resolveURL**(`url`): `Promise`\<[`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)\>

Resolves the given URL.

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<[`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)\>

#### Defined in

[src/Innertube.ts:456](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L456)

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../namespaces/YT/classes/Search.md)\>

#### Parameters

• **query**: `string`

• **filters**: [`SearchFilters`](../namespaces/Types/type-aliases/SearchFilters.md) = `{}`

#### Returns

`Promise`\<[`Search`](../namespaces/YT/classes/Search.md)\>

#### Defined in

[src/Innertube.ts:179](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L179)

***

### create()

> `static` **create**(`config`): `Promise`\<[`Innertube`](Innertube.md)\>

#### Parameters

• **config**: [`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<[`Innertube`](Innertube.md)\>

#### Defined in

[src/Innertube.ts:69](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/Innertube.ts#L69)

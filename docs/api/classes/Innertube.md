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

[src/Innertube.ts:66](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L66)

## Accessors

### account

> `get` **account**(): [`AccountManager`](../namespaces/Managers/classes/AccountManager.md)

An interface for managing and retrieving account information.

#### Returns

[`AccountManager`](../namespaces/Managers/classes/AccountManager.md)

#### Defined in

[src/Innertube.ts:603](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L603)

***

### actions

> `get` **actions**(): [`Actions`](Actions.md)

An internal class used to dispatch requests.

#### Returns

[`Actions`](Actions.md)

#### Defined in

[src/Innertube.ts:624](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L624)

***

### interact

> `get` **interact**(): [`InteractionManager`](../namespaces/Managers/classes/InteractionManager.md)

An interface for directly interacting with certain YouTube features.

#### Returns

[`InteractionManager`](../namespaces/Managers/classes/InteractionManager.md)

#### Defined in

[src/Innertube.ts:617](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L617)

***

### kids

> `get` **kids**(): [`Kids`](../namespaces/Clients/classes/Kids.md)

An interface for interacting with YouTube Kids.

#### Returns

[`Kids`](../namespaces/Clients/classes/Kids.md)

#### Defined in

[src/Innertube.ts:596](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L596)

***

### music

> `get` **music**(): [`Music`](../namespaces/Clients/classes/Music.md)

An interface for interacting with YouTube Music.

#### Returns

[`Music`](../namespaces/Clients/classes/Music.md)

#### Defined in

[src/Innertube.ts:582](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L582)

***

### playlist

> `get` **playlist**(): [`PlaylistManager`](../namespaces/Managers/classes/PlaylistManager.md)

An interface for managing playlists.

#### Returns

[`PlaylistManager`](../namespaces/Managers/classes/PlaylistManager.md)

#### Defined in

[src/Innertube.ts:610](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L610)

***

### session

> `get` **session**(): [`Session`](Session.md)

The session used by this instance.

#### Returns

[`Session`](Session.md)

#### Defined in

[src/Innertube.ts:631](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L631)

***

### studio

> `get` **studio**(): [`Studio`](../namespaces/Clients/classes/Studio.md)

An interface for interacting with YouTube Studio.

#### Returns

[`Studio`](../namespaces/Clients/classes/Studio.md)

#### Defined in

[src/Innertube.ts:589](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L589)

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

[src/Innertube.ts:573](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L573)

#### call(endpoint, args)

> **call**(`endpoint`, `args`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Parameters

• **endpoint**: [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **args?**

• **args.parse?**: `false`

##### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Defined in

[src/Innertube.ts:574](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L574)

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

[src/Innertube.ts:471](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L471)

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

[src/Innertube.ts:559](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L559)

***

### getBasicInfo()

> **getBasicInfo**(`video_id`, `options`?): `Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

• **options?**: [`GetVideoInfoOptions`](../namespaces/Types/interfaces/GetVideoInfoOptions.md)

#### Returns

`Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Defined in

[src/Innertube.ts:123](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L123)

***

### getChannel()

> **getChannel**(`id`): `Promise`\<[`Channel`](../namespaces/YT/classes/Channel.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`Channel`](../namespaces/YT/classes/Channel.md)\>

#### Defined in

[src/Innertube.ts:390](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L390)

***

### getChannelsFeed()

> **getChannelsFeed**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:384](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L384)

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

[src/Innertube.ts:305](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L305)

***

### getCourses()

> **getCourses**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:372](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L372)

***

### getGuide()

> **getGuide**(): `Promise`\<[`Guide`](../namespaces/YT/classes/Guide.md)\>

#### Returns

`Promise`\<[`Guide`](../namespaces/YT/classes/Guide.md)\>

#### Defined in

[src/Innertube.ts:349](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L349)

***

### getHashtag()

> **getHashtag**(`hashtag`): `Promise`\<[`HashtagFeed`](../namespaces/YT/classes/HashtagFeed.md)\>

#### Parameters

• **hashtag**: `string`

#### Returns

`Promise`\<[`HashtagFeed`](../namespaces/YT/classes/HashtagFeed.md)\>

#### Defined in

[src/Innertube.ts:430](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L430)

***

### getHistory()

> **getHistory**(): `Promise`\<[`History`](../namespaces/YT/classes/History.md)\>

#### Returns

`Promise`\<[`History`](../namespaces/YT/classes/History.md)\>

#### Defined in

[src/Innertube.ts:360](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L360)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../namespaces/YT/classes/HomeFeed.md)\>

#### Returns

`Promise`\<[`HomeFeed`](../namespaces/YT/classes/HomeFeed.md)\>

#### Defined in

[src/Innertube.ts:343](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L343)

***

### getInfo()

> **getInfo**(`target`, `options`?): `Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Parameters

• **target**: `string` \| [`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)

• **options?**: [`GetVideoInfoOptions`](../namespaces/Types/interfaces/GetVideoInfoOptions.md)

#### Returns

`Promise`\<[`VideoInfo`](../namespaces/YT/classes/VideoInfo.md)\>

#### Defined in

[src/Innertube.ts:74](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L74)

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../namespaces/YT/classes/Library.md)\>

#### Returns

`Promise`\<[`Library`](../namespaces/YT/classes/Library.md)\>

#### Defined in

[src/Innertube.ts:354](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L354)

***

### getNotifications()

> **getNotifications**(): `Promise`\<[`NotificationsMenu`](../namespaces/YT/classes/NotificationsMenu.md)\>

#### Returns

`Promise`\<[`NotificationsMenu`](../namespaces/YT/classes/NotificationsMenu.md)\>

#### Defined in

[src/Innertube.ts:397](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L397)

***

### getPlaylist()

> **getPlaylist**(`id`): `Promise`\<[`Playlist`](../namespaces/YT/classes/Playlist.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`Playlist`](../namespaces/YT/classes/Playlist.md)\>

#### Defined in

[src/Innertube.ts:417](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L417)

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

Retrieves the user's playlists.

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:411](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L411)

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

[src/Innertube.ts:491](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L491)

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

[src/Innertube.ts:512](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L512)

***

### getSearchSuggestions()

> **getSearchSuggestions**(`query`, `previous_query`?): `Promise`\<`string`[]\>

#### Parameters

• **query**: `string`

• **previous\_query?**: `string`

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/Innertube.ts:276](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L276)

***

### getShortsVideoInfo()

> **getShortsVideoInfo**(`video_id`, `client`?): `Promise`\<[`ShortFormVideoInfo`](../namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

• **client?**: [`InnerTubeClient`](../namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`ShortFormVideoInfo`](../namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

#### Defined in

[src/Innertube.ts:165](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L165)

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

[src/Innertube.ts:456](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L456)

***

### getSubscriptionsFeed()

> **getSubscriptionsFeed**(): `Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`Feed`](../namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:378](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L378)

***

### getTrending()

> **getTrending**(): `Promise`\<[`TabbedFeed`](../namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Returns

`Promise`\<[`TabbedFeed`](../namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Defined in

[src/Innertube.ts:366](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L366)

***

### getUnseenNotificationsCount()

> **getUnseenNotificationsCount**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/Innertube.ts:402](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L402)

***

### resolveURL()

> **resolveURL**(`url`): `Promise`\<[`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)\>

Resolves the given URL.

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<[`NavigationEndpoint`](../namespaces/YTNodes/classes/NavigationEndpoint.md)\>

#### Defined in

[src/Innertube.ts:479](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L479)

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../namespaces/YT/classes/Search.md)\>

#### Parameters

• **query**: `string`

• **filters**: [`SearchFilters`](../namespaces/Types/type-aliases/SearchFilters.md) = `{}`

#### Returns

`Promise`\<[`Search`](../namespaces/YT/classes/Search.md)\>

#### Defined in

[src/Innertube.ts:200](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L200)

***

### create()

> `static` **create**(`config`): `Promise`\<[`Innertube`](Innertube.md)\>

#### Parameters

• **config**: [`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<[`Innertube`](Innertube.md)\>

#### Defined in

[src/Innertube.ts:70](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/Innertube.ts#L70)

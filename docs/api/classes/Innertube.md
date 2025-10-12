[youtubei.js](../README.md) / Innertube

# Class: Innertube

Defined in: [src/Innertube.ts:64](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L64)

Provides access to various services and modules in the YouTube API.

## Example

```ts
import { Innertube, UniversalCache } from 'youtubei.js';
const innertube = await Innertube.create({ cache: new UniversalCache(true)});
```

## Constructors

### Constructor

> **new Innertube**(`session`): `Innertube`

Defined in: [src/Innertube.ts:67](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L67)

#### Parameters

##### session

[`Session`](Session.md)

#### Returns

`Innertube`

## Accessors

### account

#### Get Signature

> **get** **account**(): [`AccountManager`](../youtubei.js/namespaces/Managers/classes/AccountManager.md)

Defined in: [src/Innertube.ts:609](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L609)

An interface for managing and retrieving account information.

##### Returns

[`AccountManager`](../youtubei.js/namespaces/Managers/classes/AccountManager.md)

***

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](Actions.md)

Defined in: [src/Innertube.ts:630](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L630)

An internal class used to dispatch requests.

##### Returns

[`Actions`](Actions.md)

***

### interact

#### Get Signature

> **get** **interact**(): [`InteractionManager`](../youtubei.js/namespaces/Managers/classes/InteractionManager.md)

Defined in: [src/Innertube.ts:623](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L623)

An interface for directly interacting with certain YouTube features.

##### Returns

[`InteractionManager`](../youtubei.js/namespaces/Managers/classes/InteractionManager.md)

***

### kids

#### Get Signature

> **get** **kids**(): [`Kids`](../youtubei.js/namespaces/Clients/classes/Kids.md)

Defined in: [src/Innertube.ts:602](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L602)

An interface for interacting with YouTube Kids.

##### Returns

[`Kids`](../youtubei.js/namespaces/Clients/classes/Kids.md)

***

### music

#### Get Signature

> **get** **music**(): [`Music`](../youtubei.js/namespaces/Clients/classes/Music.md)

Defined in: [src/Innertube.ts:588](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L588)

An interface for interacting with YouTube Music.

##### Returns

[`Music`](../youtubei.js/namespaces/Clients/classes/Music.md)

***

### playlist

#### Get Signature

> **get** **playlist**(): [`PlaylistManager`](../youtubei.js/namespaces/Managers/classes/PlaylistManager.md)

Defined in: [src/Innertube.ts:616](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L616)

An interface for managing playlists.

##### Returns

[`PlaylistManager`](../youtubei.js/namespaces/Managers/classes/PlaylistManager.md)

***

### session

#### Get Signature

> **get** **session**(): [`Session`](Session.md)

Defined in: [src/Innertube.ts:637](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L637)

The session used by this instance.

##### Returns

[`Session`](Session.md)

***

### studio

#### Get Signature

> **get** **studio**(): [`Studio`](../youtubei.js/namespaces/Clients/classes/Studio.md)

Defined in: [src/Innertube.ts:595](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L595)

An interface for interacting with YouTube Studio.

##### Returns

[`Studio`](../youtubei.js/namespaces/Clients/classes/Studio.md)

## Methods

### call()

#### Call Signature

> **call**\<`T`\>(`endpoint`, `args`): `Promise`\<`T`\>

Defined in: [src/Innertube.ts:579](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L579)

Utility method to call an endpoint without having to use [Actions](Actions.md).

##### Type Parameters

###### T

`T` *extends* [`IParsedResponse`](../interfaces/IParsedResponse.md)

##### Parameters

###### endpoint

[`NavigationEndpoint`](../youtubei.js/namespaces/YTNodes/classes/NavigationEndpoint.md)

###### args

###### parse

`true`

##### Returns

`Promise`\<`T`\>

#### Call Signature

> **call**(`endpoint`, `args?`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

Defined in: [src/Innertube.ts:580](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L580)

Utility method to call an endpoint without having to use [Actions](Actions.md).

##### Parameters

###### endpoint

[`NavigationEndpoint`](../youtubei.js/namespaces/YTNodes/classes/NavigationEndpoint.md)

###### args?

###### parse?

`false`

##### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

***

### download()

> **download**(`video_id`, `options?`): `Promise`\<`ReadableStream`\<`Uint8Array`\>\>

Defined in: [src/Innertube.ts:477](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L477)

Downloads a given video. If all you need the direct download link, see [getStreamingData](#getstreamingdata).
If you wish to retrieve the video info too, have a look at [getBasicInfo](#getbasicinfo) or [getInfo](#getinfo).

#### Parameters

##### video\_id

`string`

The video id.

##### options?

[`DownloadOptions`](../youtubei.js/namespaces/Types/interfaces/DownloadOptions.md)

Download options.

#### Returns

`Promise`\<`ReadableStream`\<`Uint8Array`\>\>

***

### getAttestationChallenge()

> **getAttestationChallenge**(`engagement_type`, `ids?`): `Promise`\<[`IGetChallengeResponse`](../type-aliases/IGetChallengeResponse.md)\>

Defined in: [src/Innertube.ts:565](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L565)

Fetches an attestation challenge.

#### Parameters

##### engagement\_type

[`EngagementType`](../youtubei.js/namespaces/Types/type-aliases/EngagementType.md)

##### ids?

`Record`\<`string`, `any`\>[]

#### Returns

`Promise`\<[`IGetChallengeResponse`](../type-aliases/IGetChallengeResponse.md)\>

***

### getBasicInfo()

> **getBasicInfo**(`video_id`, `options?`): `Promise`\<[`VideoInfo`](../youtubei.js/namespaces/YT/classes/VideoInfo.md)\>

Defined in: [src/Innertube.ts:124](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L124)

#### Parameters

##### video\_id

`string`

##### options?

[`GetVideoInfoOptions`](../youtubei.js/namespaces/Types/interfaces/GetVideoInfoOptions.md)

#### Returns

`Promise`\<[`VideoInfo`](../youtubei.js/namespaces/YT/classes/VideoInfo.md)\>

***

### getChannel()

> **getChannel**(`id`): `Promise`\<[`Channel`](../youtubei.js/namespaces/YT/classes/Channel.md)\>

Defined in: [src/Innertube.ts:391](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L391)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`Channel`](../youtubei.js/namespaces/YT/classes/Channel.md)\>

***

### getChannelsFeed()

> **getChannelsFeed**(): `Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/Innertube.ts:385](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L385)

#### Returns

`Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

***

### getComments()

> **getComments**(`video_id`, `sort_by?`, `comment_id?`): `Promise`\<[`Comments`](../youtubei.js/namespaces/YT/classes/Comments.md)\>

Defined in: [src/Innertube.ts:306](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L306)

#### Parameters

##### video\_id

`string`

##### sort\_by?

`"TOP_COMMENTS"` | `"NEWEST_FIRST"`

##### comment\_id?

`string`

#### Returns

`Promise`\<[`Comments`](../youtubei.js/namespaces/YT/classes/Comments.md)\>

***

### getCourses()

> **getCourses**(): `Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/Innertube.ts:373](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L373)

#### Returns

`Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

***

### getGuide()

> **getGuide**(): `Promise`\<[`Guide`](../youtubei.js/namespaces/YT/classes/Guide.md)\>

Defined in: [src/Innertube.ts:350](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L350)

#### Returns

`Promise`\<[`Guide`](../youtubei.js/namespaces/YT/classes/Guide.md)\>

***

### getHashtag()

> **getHashtag**(`hashtag`): `Promise`\<[`HashtagFeed`](../youtubei.js/namespaces/YT/classes/HashtagFeed.md)\>

Defined in: [src/Innertube.ts:436](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L436)

#### Parameters

##### hashtag

`string`

#### Returns

`Promise`\<[`HashtagFeed`](../youtubei.js/namespaces/YT/classes/HashtagFeed.md)\>

***

### getHistory()

> **getHistory**(): `Promise`\<[`History`](../youtubei.js/namespaces/YT/classes/History.md)\>

Defined in: [src/Innertube.ts:361](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L361)

#### Returns

`Promise`\<[`History`](../youtubei.js/namespaces/YT/classes/History.md)\>

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../youtubei.js/namespaces/YT/classes/HomeFeed.md)\>

Defined in: [src/Innertube.ts:344](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L344)

#### Returns

`Promise`\<[`HomeFeed`](../youtubei.js/namespaces/YT/classes/HomeFeed.md)\>

***

### getInfo()

> **getInfo**(`target`, `options?`): `Promise`\<[`VideoInfo`](../youtubei.js/namespaces/YT/classes/VideoInfo.md)\>

Defined in: [src/Innertube.ts:75](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L75)

#### Parameters

##### target

`string` | [`NavigationEndpoint`](../youtubei.js/namespaces/YTNodes/classes/NavigationEndpoint.md)

##### options?

[`GetVideoInfoOptions`](../youtubei.js/namespaces/Types/interfaces/GetVideoInfoOptions.md)

#### Returns

`Promise`\<[`VideoInfo`](../youtubei.js/namespaces/YT/classes/VideoInfo.md)\>

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../youtubei.js/namespaces/YT/classes/Library.md)\>

Defined in: [src/Innertube.ts:355](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L355)

#### Returns

`Promise`\<[`Library`](../youtubei.js/namespaces/YT/classes/Library.md)\>

***

### getNotifications()

> **getNotifications**(): `Promise`\<[`NotificationsMenu`](../youtubei.js/namespaces/YT/classes/NotificationsMenu.md)\>

Defined in: [src/Innertube.ts:403](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L403)

#### Returns

`Promise`\<[`NotificationsMenu`](../youtubei.js/namespaces/YT/classes/NotificationsMenu.md)\>

***

### getPlaylist()

> **getPlaylist**(`id`): `Promise`\<[`Playlist`](../youtubei.js/namespaces/YT/classes/Playlist.md)\>

Defined in: [src/Innertube.ts:423](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L423)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`Playlist`](../youtubei.js/namespaces/YT/classes/Playlist.md)\>

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/Innertube.ts:417](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L417)

Retrieves the user's playlists.

#### Returns

`Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

***

### getPost()

> **getPost**(`post_id`, `channel_id`): `Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/Innertube.ts:497](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L497)

Gets a post page given a post id and the channel id

#### Parameters

##### post\_id

`string`

##### channel\_id

`string`

#### Returns

`Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

***

### getPostComments()

> **getPostComments**(`post_id`, `channel_id`, `sort_by?`): `Promise`\<[`Comments`](../youtubei.js/namespaces/YT/classes/Comments.md)\>

Defined in: [src/Innertube.ts:518](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L518)

Gets the comments of a post.

#### Parameters

##### post\_id

`string`

##### channel\_id

`string`

##### sort\_by?

`"TOP_COMMENTS"` | `"NEWEST_FIRST"`

#### Returns

`Promise`\<[`Comments`](../youtubei.js/namespaces/YT/classes/Comments.md)\>

***

### getSearchSuggestions()

> **getSearchSuggestions**(`query`, `previous_query?`): `Promise`\<`string`[]\>

Defined in: [src/Innertube.ts:277](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L277)

#### Parameters

##### query

`string`

##### previous\_query?

`string`

#### Returns

`Promise`\<`string`[]\>

***

### getShortsVideoInfo()

> **getShortsVideoInfo**(`video_id`, `client?`): `Promise`\<[`ShortFormVideoInfo`](../youtubei.js/namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

Defined in: [src/Innertube.ts:166](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L166)

#### Parameters

##### video\_id

`string`

##### client?

[`InnerTubeClient`](../youtubei.js/namespaces/Types/type-aliases/InnerTubeClient.md)

#### Returns

`Promise`\<[`ShortFormVideoInfo`](../youtubei.js/namespaces/YTShorts/classes/ShortFormVideoInfo.md)\>

***

### getStreamingData()

> **getStreamingData**(`video_id`, `options`): `Promise`\<[`Format`](../youtubei.js/namespaces/Misc/classes/Format.md)\>

Defined in: [src/Innertube.ts:462](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L462)

An alternative to [download](#download).
Returns deciphered streaming data.

If you wish to retrieve the video info too, have a look at [getBasicInfo](#getbasicinfo) or [getInfo](#getinfo).

#### Parameters

##### video\_id

`string`

The video id.

##### options

[`FormatOptions`](../youtubei.js/namespaces/Types/interfaces/FormatOptions.md) = `{}`

Format options.

#### Returns

`Promise`\<[`Format`](../youtubei.js/namespaces/Misc/classes/Format.md)\>

***

### getSubscriptionsFeed()

> **getSubscriptionsFeed**(): `Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/Innertube.ts:379](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L379)

#### Returns

`Promise`\<[`Feed`](../youtubei.js/namespaces/Mixins/classes/Feed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

***

### getTrending()

> **getTrending**(): `Promise`\<[`TabbedFeed`](../youtubei.js/namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/Innertube.ts:367](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L367)

#### Returns

`Promise`\<[`TabbedFeed`](../youtubei.js/namespaces/Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../type-aliases/IBrowseResponse.md)\>\>

***

### getUnseenNotificationsCount()

> **getUnseenNotificationsCount**(): `Promise`\<`number`\>

Defined in: [src/Innertube.ts:408](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L408)

#### Returns

`Promise`\<`number`\>

***

### resolveURL()

> **resolveURL**(`url`): `Promise`\<[`NavigationEndpoint`](../youtubei.js/namespaces/YTNodes/classes/NavigationEndpoint.md)\>

Defined in: [src/Innertube.ts:485](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L485)

Resolves the given URL.

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`NavigationEndpoint`](../youtubei.js/namespaces/YTNodes/classes/NavigationEndpoint.md)\>

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../youtubei.js/namespaces/YT/classes/Search.md)\>

Defined in: [src/Innertube.ts:201](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L201)

#### Parameters

##### query

`string`

##### filters

[`SearchFilters`](../youtubei.js/namespaces/Types/type-aliases/SearchFilters.md) = `{}`

#### Returns

`Promise`\<[`Search`](../youtubei.js/namespaces/YT/classes/Search.md)\>

***

### create()

> `static` **create**(`config`): `Promise`\<`Innertube`\>

Defined in: [src/Innertube.ts:71](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/Innertube.ts#L71)

#### Parameters

##### config

[`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<`Innertube`\>

[youtubei.js](../../../../README.md) / [YT](../README.md) / VideoInfo

# Class: VideoInfo

Defined in: [src/parser/youtube/VideoInfo.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L38)

## Extends

- [`MediaInfo`](../../Mixins/classes/MediaInfo.md)

## Constructors

### Constructor

> **new VideoInfo**(`data`, `actions`, `cpn`): `VideoInfo`

Defined in: [src/parser/youtube/VideoInfo.ts:54](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L54)

#### Parameters

##### data

\[[`ApiResponse`](../../../../interfaces/ApiResponse.md), [`ApiResponse`](../../../../interfaces/ApiResponse.md)?\]

##### actions

[`Actions`](../../../../classes/Actions.md)

##### cpn

`string`

#### Returns

`VideoInfo`

#### Overrides

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`constructor`](../../Mixins/classes/MediaInfo.md#constructor)

## Properties

### annotations?

> `optional` **annotations**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`PlayerAnnotationsExpanded`](../../YTNodes/classes/PlayerAnnotationsExpanded.md)\>

Defined in: [src/core/mixins/MediaInfo.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L40)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`annotations`](../../Mixins/classes/MediaInfo.md#annotations)

***

### autoplay?

> `optional` **autoplay**: `object`

Defined in: [src/parser/youtube/VideoInfo.ts:49](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L49)

#### count\_down\_secs?

> `optional` **count\_down\_secs**: `number`

#### modified\_sets?

> `optional` **modified\_sets**: `AutoplaySet`[]

#### sets

> **sets**: `AutoplaySet`[]

***

### basic\_info

> **basic\_info**: `object`

Defined in: [src/core/mixins/MediaInfo.ts:39](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L39)

#### allow\_ratings?

> `optional` **allow\_ratings**: `boolean`

#### author?

> `optional` **author**: `string`

#### category

> **category**: `string` \| `null`

#### channel

> **channel**: \{ `id`: `string`; `name`: `string`; `url`: `string`; \} \| `null`

#### channel\_id?

> `optional` **channel\_id**: `string`

#### duration?

> `optional` **duration**: `number`

#### embed

> **embed**: \{ `flash_secure_url`: `string`; `flash_url`: `string`; `height`: `any`; `iframe_url`: `string`; `width`: `any`; \} \| `null` \| `undefined`

#### end\_timestamp

> **end\_timestamp**: `Date` \| `null`

#### has\_ypc\_metadata

> **has\_ypc\_metadata**: `boolean` \| `null`

#### id?

> `optional` **id**: `string`

#### is\_crawlable?

> `optional` **is\_crawlable**: `boolean`

#### is\_disliked

> **is\_disliked**: `boolean` \| `undefined`

#### is\_family\_safe

> **is\_family\_safe**: `boolean` \| `undefined` = `info.microformat.is_family_safe`

#### is\_liked

> **is\_liked**: `boolean` \| `undefined`

#### is\_live?

> `optional` **is\_live**: `boolean`

#### is\_live\_content?

> `optional` **is\_live\_content**: `boolean`

#### is\_live\_dvr\_enabled?

> `optional` **is\_live\_dvr\_enabled**: `boolean`

#### is\_low\_latency\_live\_stream?

> `optional` **is\_low\_latency\_live\_stream**: `boolean`

#### is\_owner\_viewing?

> `optional` **is\_owner\_viewing**: `boolean`

#### is\_post\_live\_dvr?

> `optional` **is\_post\_live\_dvr**: `boolean`

#### is\_private?

> `optional` **is\_private**: `boolean`

#### is\_unlisted

> **is\_unlisted**: `boolean` \| `undefined` = `info.microformat.is_unlisted`

#### is\_upcoming?

> `optional` **is\_upcoming**: `boolean`

#### keywords?

> `optional` **keywords**: `string`[]

#### like\_count

> **like\_count**: `number` \| `undefined`

#### live\_chunk\_readahead?

> `optional` **live\_chunk\_readahead**: `number`

#### short\_description?

> `optional` **short\_description**: `string`

#### start\_timestamp

> **start\_timestamp**: `Date` \| `null`

#### tags

> **tags**: `string`[] \| `null`

#### thumbnail?

> `optional` **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### title?

> `optional` **title**: `string`

#### url\_canonical

> **url\_canonical**: `string` \| `null`

#### view\_count

> **view\_count**: `number` \| `undefined`

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`basic_info`](../../Mixins/classes/MediaInfo.md#basic_info)

***

### captions?

> `optional` **captions**: [`PlayerCaptionsTracklist`](../../YTNodes/classes/PlayerCaptionsTracklist.md)

Defined in: [src/core/mixins/MediaInfo.ts:43](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L43)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`captions`](../../Mixins/classes/MediaInfo.md#captions)

***

### cards?

> `optional` **cards**: [`CardCollection`](../../YTNodes/classes/CardCollection.md)

Defined in: [src/core/mixins/MediaInfo.ts:44](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L44)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`cards`](../../Mixins/classes/MediaInfo.md#cards)

***

### comments\_entry\_point\_header?

> `optional` **comments\_entry\_point\_header**: [`CommentsEntryPointHeader`](../../YTNodes/classes/CommentsEntryPointHeader.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:47](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L47)

***

### endscreen?

> `optional` **endscreen**: [`Endscreen`](../../YTNodes/classes/Endscreen.md)

Defined in: [src/core/mixins/MediaInfo.ts:42](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L42)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`endscreen`](../../Mixins/classes/MediaInfo.md#endscreen)

***

### game\_info?

> `optional` **game\_info**: `object`

Defined in: [src/parser/youtube/VideoInfo.ts:42](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L42)

#### release\_year

> **release\_year**: [`Text`](../../Misc/classes/Text.md) \| `undefined`

#### title

> **title**: [`Text`](../../Misc/classes/Text.md) \| `undefined`

***

### heat\_map?

> `optional` **heat\_map**: [`Heatmap`](../../YTNodes/classes/Heatmap.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:50](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L50)

***

### livechat?

> `optional` **livechat**: [`LiveChat`](../../YTNodes/classes/LiveChat.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:48](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L48)

***

### merchandise?

> `optional` **merchandise**: [`MerchandiseShelf`](../../YTNodes/classes/MerchandiseShelf.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:43](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L43)

***

### playability\_status?

> `optional` **playability\_status**: [`IPlayabilityStatus`](../../../../interfaces/IPlayabilityStatus.md)

Defined in: [src/core/mixins/MediaInfo.ts:46](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L46)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`playability_status`](../../Mixins/classes/MediaInfo.md#playability_status)

***

### player\_config?

> `optional` **player\_config**: [`IPlayerConfig`](../../../../interfaces/IPlayerConfig.md)

Defined in: [src/core/mixins/MediaInfo.ts:47](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L47)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`player_config`](../../Mixins/classes/MediaInfo.md#player_config)

***

### player\_overlays?

> `optional` **player\_overlays**: [`PlayerOverlay`](../../YTNodes/classes/PlayerOverlay.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:46](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L46)

***

### playlist?

> `optional` **playlist**: `object`

Defined in: [src/parser/youtube/VideoInfo.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L41)

#### author

> **author**: [`Text`](../../Misc/classes/Text.md) \| [`Author`](../../Misc/classes/Author.md)

#### contents

> **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### current\_index

> **current\_index**: `number`

#### id

> **id**: `string`

#### is\_infinite

> **is\_infinite**: `boolean`

#### menu

> **menu**: [`Menu`](../../YTNodes/classes/Menu.md) \| `null`

#### title

> **title**: `string`

***

### primary\_info?

> `optional` **primary\_info**: [`VideoPrimaryInfo`](../../YTNodes/classes/VideoPrimaryInfo.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:39](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L39)

***

### related\_chip\_cloud?

> `optional` **related\_chip\_cloud**: [`ChipCloud`](../../YTNodes/classes/ChipCloud.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:44](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L44)

***

### secondary\_info?

> `optional` **secondary\_info**: [`VideoSecondaryInfo`](../../YTNodes/classes/VideoSecondaryInfo.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L40)

***

### storyboards?

> `optional` **storyboards**: [`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md) \| [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md)

Defined in: [src/core/mixins/MediaInfo.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L41)

#### Inherited from

[`ShortFormVideoInfo`](../../YTShorts/classes/ShortFormVideoInfo.md).[`storyboards`](../../YTShorts/classes/ShortFormVideoInfo.md#storyboards)

***

### streaming\_data?

> `optional` **streaming\_data**: [`IStreamingData`](../../../../interfaces/IStreamingData.md)

Defined in: [src/core/mixins/MediaInfo.ts:45](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L45)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`streaming_data`](../../Mixins/classes/MediaInfo.md#streaming_data)

***

### watch\_next\_feed?

> `optional` **watch\_next\_feed**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\> \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:45](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L45)

## Accessors

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](../../../../classes/Actions.md)

Defined in: [src/core/mixins/MediaInfo.ts:247](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L247)

##### Returns

[`Actions`](../../../../classes/Actions.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`actions`](../../Mixins/classes/MediaInfo.md#actions)

***

### autoplay\_video\_endpoint

#### Get Signature

> **get** **autoplay\_video\_endpoint**(): [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:410](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L410)

Gets the endpoint of the autoplay video

##### Returns

[`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md) \| `null`

***

### cpn

#### Get Signature

> **get** **cpn**(): `string`

Defined in: [src/core/mixins/MediaInfo.ts:254](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L254)

Content Playback Nonce.

##### Returns

`string`

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`cpn`](../../Mixins/classes/MediaInfo.md#cpn)

***

### filters

#### Get Signature

> **get** **filters**(): `string`[]

Defined in: [src/parser/youtube/VideoInfo.ts:396](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L396)

Watch next feed filters.

##### Returns

`string`[]

***

### has\_trailer

#### Get Signature

> **get** **has\_trailer**(): `boolean`

Defined in: [src/parser/youtube/VideoInfo.ts:417](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L417)

Checks if trailer is available.

##### Returns

`boolean`

***

### music\_tracks

#### Get Signature

> **get** **music\_tracks**(): `object`[]

Defined in: [src/parser/youtube/VideoInfo.ts:424](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L424)

Get songs used in the video.

##### Returns

`object`[]

***

### page

#### Get Signature

> **get** **page**(): \[[`IPlayerResponse`](../../../../type-aliases/IPlayerResponse.md), [`INextResponse`](../../../../type-aliases/INextResponse.md)?\]

Defined in: [src/core/mixins/MediaInfo.ts:261](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L261)

Parsed InnerTube response.

##### Returns

\[[`IPlayerResponse`](../../../../type-aliases/IPlayerResponse.md), [`INextResponse`](../../../../type-aliases/INextResponse.md)?\]

#### Inherited from

[`ShortFormVideoInfo`](../../YTShorts/classes/ShortFormVideoInfo.md).[`page`](../../YTShorts/classes/ShortFormVideoInfo.md#page)

***

### wn\_has\_continuation

#### Get Signature

> **get** **wn\_has\_continuation**(): `boolean`

Defined in: [src/parser/youtube/VideoInfo.ts:403](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L403)

Checks if continuation is available for the watch next feed.

##### Returns

`boolean`

## Methods

### addToWatchHistory()

> **addToWatchHistory**(): `Promise`\<`Response`\>

Defined in: [src/parser/youtube/VideoInfo.ts:195](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L195)

Adds video to the watch history.

#### Returns

`Promise`\<`Response`\>

#### Overrides

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`addToWatchHistory`](../../Mixins/classes/MediaInfo.md#addtowatchhistory)

***

### chooseFormat()

> **chooseFormat**(`options`): [`Format`](../../Misc/classes/Format.md)

Defined in: [src/core/mixins/MediaInfo.ts:161](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L161)

Selects the format that best matches the given options.

#### Parameters

##### options

[`FormatOptions`](../../Types/interfaces/FormatOptions.md)

Options

#### Returns

[`Format`](../../Misc/classes/Format.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`chooseFormat`](../../Mixins/classes/MediaInfo.md#chooseformat)

***

### dislike()

> **dislike**(): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/parser/youtube/VideoInfo.ts:272](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L272)

Dislikes the video.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### download()

> **download**(`options`): `Promise`\<`ReadableStream`\<`Uint8Array`\>\>

Defined in: [src/core/mixins/MediaInfo.ts:169](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L169)

Downloads the video.

#### Parameters

##### options

[`DownloadOptions`](../../Types/interfaces/DownloadOptions.md) = `{}`

Download options.

#### Returns

`Promise`\<`ReadableStream`\<`Uint8Array`\>\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`download`](../../Mixins/classes/MediaInfo.md#download)

***

### getLiveChat()

> **getLiveChat**(): [`LiveChat`](LiveChat.md)

Defined in: [src/parser/youtube/VideoInfo.ts:367](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L367)

Retrieves Live Chat if available.

#### Returns

[`LiveChat`](LiveChat.md)

***

### getStreamingInfo()

> **getStreamingInfo**(`url_transformer?`, `format_filter?`): `Promise`\<`StreamingInfo`\>

Defined in: [src/core/mixins/MediaInfo.ts:144](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L144)

Get a cleaned up representation of the adaptive_formats

#### Parameters

##### url\_transformer?

[`URLTransformer`](../../Types/type-aliases/URLTransformer.md)

##### format\_filter?

[`FormatFilter`](../../Types/type-aliases/FormatFilter.md)

#### Returns

`Promise`\<`StreamingInfo`\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`getStreamingInfo`](../../Mixins/classes/MediaInfo.md#getstreaminginfo)

***

### getTrailerInfo()

> **getTrailerInfo**(): `VideoInfo` \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:377](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L377)

Retrieves trailer info if available (typically for non-purchased movies or films).

#### Returns

`VideoInfo` \| `null`

`VideoInfo` for the trailer, or `null` if none.

***

### getTranscript()

> **getTranscript**(): `Promise`\<[`TranscriptInfo`](TranscriptInfo.md)\>

Defined in: [src/core/mixins/MediaInfo.ts:182](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L182)

Retrieves the video's transcript.

#### Returns

`Promise`\<[`TranscriptInfo`](TranscriptInfo.md)\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`getTranscript`](../../Mixins/classes/MediaInfo.md#gettranscript)

***

### getWatchNextContinuation()

> **getWatchNextContinuation**(): `Promise`\<`VideoInfo`\>

Defined in: [src/parser/youtube/VideoInfo.ts:209](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L209)

Retrieves watch next feed continuation.

#### Returns

`Promise`\<`VideoInfo`\>

***

### like()

> **like**(): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/parser/youtube/VideoInfo.ts:232](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L232)

Likes the video.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### removeRating()

> **removeRating**(): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/parser/youtube/VideoInfo.ts:312](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L312)

Removes like/dislike.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### selectFilter()

> **selectFilter**(`target_filter`): `Promise`\<`VideoInfo`\>

Defined in: [src/parser/youtube/VideoInfo.ts:161](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L161)

Applies given filter to the watch next feed. Use [filters](#filters) to get available filters.

#### Parameters

##### target\_filter

Filter to apply.

`string` | [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md) | `undefined`

#### Returns

`Promise`\<`VideoInfo`\>

***

### toDash()

> **toDash**(`options`): `Promise`\<`string`\>

Defined in: [src/core/mixins/MediaInfo.ts:104](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L104)

Generates a DASH manifest from the streaming data.

#### Parameters

##### options

###### format_filter?

[`FormatFilter`](../../Types/type-aliases/FormatFilter.md)

###### manifest_options?

`DashOptions`

###### url_transformer?

[`URLTransformer`](../../Types/type-aliases/URLTransformer.md)

#### Returns

`Promise`\<`string`\>

DASH manifest

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`toDash`](../../Mixins/classes/MediaInfo.md#todash)

***

### updateWatchTime()

> **updateWatchTime**(`startTime`): `Promise`\<`Response`\>

Defined in: [src/parser/youtube/VideoInfo.ts:202](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/VideoInfo.ts#L202)

Updates watch time for the video.

#### Parameters

##### startTime

`number`

#### Returns

`Promise`\<`Response`\>

#### Overrides

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`updateWatchTime`](../../Mixins/classes/MediaInfo.md#updatewatchtime)

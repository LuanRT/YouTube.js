[youtubei.js](../../../../README.md) / [YT](../README.md) / VideoInfo

# Class: VideoInfo

Defined in: [src/parser/youtube/VideoInfo.ts:39](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L39)

## Extends

- [`MediaInfo`](../../Mixins/classes/MediaInfo.md)

## Constructors

### Constructor

> **new VideoInfo**(`data`, `actions`, `cpn`): `VideoInfo`

Defined in: [src/parser/youtube/VideoInfo.ts:56](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L56)

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

> `optional` **annotations?**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`PlayerAnnotationsExpanded`](../../YTNodes/classes/PlayerAnnotationsExpanded.md)\>

Defined in: [src/core/mixins/MediaInfo.ts:40](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L40)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`annotations`](../../Mixins/classes/MediaInfo.md#annotations)

***

### autoplay?

> `optional` **autoplay?**: `object`

Defined in: [src/parser/youtube/VideoInfo.ts:50](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L50)

#### count\_down\_secs?

> `optional` **count\_down\_secs?**: `number`

#### modified\_sets?

> `optional` **modified\_sets?**: `AutoplaySet`[]

#### sets

> **sets**: `AutoplaySet`[]

***

### basic\_info

> **basic\_info**: `object`

Defined in: [src/core/mixins/MediaInfo.ts:39](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L39)

#### allow\_ratings?

> `optional` **allow\_ratings?**: `boolean`

#### author?

> `optional` **author?**: `string`

#### category

> **category**: `string` \| `null`

#### channel

> **channel**: \{ `id`: `string`; `name`: `string`; `url`: `string`; \} \| `null`

#### channel\_id?

> `optional` **channel\_id?**: `string`

#### duration?

> `optional` **duration?**: `number`

#### embed

> **embed**: \{ `flash_secure_url`: `string`; `flash_url`: `string`; `height`: `any`; `iframe_url`: `string`; `width`: `any`; \} \| `null` \| `undefined`

#### end\_timestamp

> **end\_timestamp**: `Date` \| `null`

#### has\_ypc\_metadata

> **has\_ypc\_metadata**: `boolean` \| `null`

#### id?

> `optional` **id?**: `string`

#### is\_crawlable?

> `optional` **is\_crawlable?**: `boolean`

#### is\_disliked

> **is\_disliked**: `boolean` \| `undefined`

#### is\_family\_safe

> **is\_family\_safe**: `boolean` \| `undefined` = `info.microformat.is_family_safe`

#### is\_liked

> **is\_liked**: `boolean` \| `undefined`

#### is\_live?

> `optional` **is\_live?**: `boolean`

#### is\_live\_content?

> `optional` **is\_live\_content?**: `boolean`

#### is\_live\_dvr\_enabled?

> `optional` **is\_live\_dvr\_enabled?**: `boolean`

#### is\_low\_latency\_live\_stream?

> `optional` **is\_low\_latency\_live\_stream?**: `boolean`

#### is\_owner\_viewing?

> `optional` **is\_owner\_viewing?**: `boolean`

#### is\_post\_live\_dvr?

> `optional` **is\_post\_live\_dvr?**: `boolean`

#### is\_private?

> `optional` **is\_private?**: `boolean`

#### is\_unlisted

> **is\_unlisted**: `boolean` \| `undefined` = `info.microformat.is_unlisted`

#### is\_upcoming?

> `optional` **is\_upcoming?**: `boolean`

#### keywords?

> `optional` **keywords?**: `string`[]

#### like\_count

> **like\_count**: `number` \| `undefined`

#### live\_chunk\_readahead?

> `optional` **live\_chunk\_readahead?**: `number`

#### publish\_date

> **publish\_date**: `string` \| `null`

#### short\_description?

> `optional` **short\_description?**: `string`

#### start\_timestamp

> **start\_timestamp**: `Date` \| `null`

#### tags

> **tags**: `string`[] \| `null`

#### thumbnail?

> `optional` **thumbnail?**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### title?

> `optional` **title?**: `string`

#### upload\_date

> **upload\_date**: `string` \| `null`

#### url\_canonical

> **url\_canonical**: `string` \| `null`

#### view\_count

> **view\_count**: `number` \| `undefined`

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`basic_info`](../../Mixins/classes/MediaInfo.md#basic_info)

***

### captions?

> `optional` **captions?**: [`PlayerCaptionsTracklist`](../../YTNodes/classes/PlayerCaptionsTracklist.md)

Defined in: [src/core/mixins/MediaInfo.ts:43](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L43)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`captions`](../../Mixins/classes/MediaInfo.md#captions)

***

### cards?

> `optional` **cards?**: [`CardCollection`](../../YTNodes/classes/CardCollection.md)

Defined in: [src/core/mixins/MediaInfo.ts:44](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L44)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`cards`](../../Mixins/classes/MediaInfo.md#cards)

***

### comments\_entry\_point\_header?

> `optional` **comments\_entry\_point\_header?**: [`CommentsEntryPointHeader`](../../YTNodes/classes/CommentsEntryPointHeader.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:48](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L48)

***

### endscreen?

> `optional` **endscreen?**: [`Endscreen`](../../YTNodes/classes/Endscreen.md)

Defined in: [src/core/mixins/MediaInfo.ts:42](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L42)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`endscreen`](../../Mixins/classes/MediaInfo.md#endscreen)

***

### engagement\_panels?

> `optional` **engagement\_panels?**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`EngagementPanelSectionList`](../../YTNodes/classes/EngagementPanelSectionList.md)\>

Defined in: [src/parser/youtube/VideoInfo.ts:52](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L52)

***

### game\_info?

> `optional` **game\_info?**: `object`

Defined in: [src/parser/youtube/VideoInfo.ts:43](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L43)

#### release\_year

> **release\_year**: [`Text`](../../Misc/classes/Text.md) \| `undefined`

#### title

> **title**: [`Text`](../../Misc/classes/Text.md) \| `undefined`

***

### heat\_map?

> `optional` **heat\_map?**: [`Heatmap`](../../YTNodes/classes/Heatmap.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:51](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L51)

***

### livechat?

> `optional` **livechat?**: [`LiveChat`](../../YTNodes/classes/LiveChat.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:49](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L49)

***

### merchandise?

> `optional` **merchandise?**: [`MerchandiseShelf`](../../YTNodes/classes/MerchandiseShelf.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:44](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L44)

***

### playability\_status?

> `optional` **playability\_status?**: [`IPlayabilityStatus`](../../../../interfaces/IPlayabilityStatus.md)

Defined in: [src/core/mixins/MediaInfo.ts:46](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L46)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`playability_status`](../../Mixins/classes/MediaInfo.md#playability_status)

***

### player\_config?

> `optional` **player\_config?**: [`IPlayerConfig`](../../../../interfaces/IPlayerConfig.md)

Defined in: [src/core/mixins/MediaInfo.ts:47](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L47)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`player_config`](../../Mixins/classes/MediaInfo.md#player_config)

***

### player\_overlays?

> `optional` **player\_overlays?**: [`PlayerOverlay`](../../YTNodes/classes/PlayerOverlay.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:47](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L47)

***

### playlist?

> `optional` **playlist?**: `object`

Defined in: [src/parser/youtube/VideoInfo.ts:42](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L42)

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

> `optional` **primary\_info?**: [`VideoPrimaryInfo`](../../YTNodes/classes/VideoPrimaryInfo.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:40](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L40)

***

### related\_chip\_cloud?

> `optional` **related\_chip\_cloud?**: [`ChipCloud`](../../YTNodes/classes/ChipCloud.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:45](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L45)

***

### secondary\_info?

> `optional` **secondary\_info?**: [`VideoSecondaryInfo`](../../YTNodes/classes/VideoSecondaryInfo.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:41](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L41)

***

### storyboards?

> `optional` **storyboards?**: [`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md) \| [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md)

Defined in: [src/core/mixins/MediaInfo.ts:41](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L41)

#### Inherited from

[`ShortFormVideoInfo`](../../YTShorts/classes/ShortFormVideoInfo.md).[`storyboards`](../../YTShorts/classes/ShortFormVideoInfo.md#storyboards)

***

### streaming\_data?

> `optional` **streaming\_data?**: [`IStreamingData`](../../../../interfaces/IStreamingData.md)

Defined in: [src/core/mixins/MediaInfo.ts:45](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L45)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`streaming_data`](../../Mixins/classes/MediaInfo.md#streaming_data)

***

### watch\_next\_feed?

> `optional` **watch\_next\_feed?**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\> \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:46](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L46)

## Accessors

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](../../../../classes/Actions.md)

Defined in: [src/core/mixins/MediaInfo.ts:249](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L249)

##### Returns

[`Actions`](../../../../classes/Actions.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`actions`](../../Mixins/classes/MediaInfo.md#actions)

***

### autoplay\_video\_endpoint

#### Get Signature

> **get** **autoplay\_video\_endpoint**(): [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md) \| `null`

Defined in: [src/parser/youtube/VideoInfo.ts:413](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L413)

Gets the endpoint of the autoplay video

##### Returns

[`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md) \| `null`

***

### cpn

#### Get Signature

> **get** **cpn**(): `string`

Defined in: [src/core/mixins/MediaInfo.ts:256](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L256)

Content Playback Nonce.

##### Returns

`string`

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`cpn`](../../Mixins/classes/MediaInfo.md#cpn)

***

### filters

#### Get Signature

> **get** **filters**(): `string`[]

Defined in: [src/parser/youtube/VideoInfo.ts:399](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L399)

Watch next feed filters.

##### Returns

`string`[]

***

### has\_trailer

#### Get Signature

> **get** **has\_trailer**(): `boolean`

Defined in: [src/parser/youtube/VideoInfo.ts:420](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L420)

Checks if trailer is available.

##### Returns

`boolean`

***

### music\_tracks

#### Get Signature

> **get** **music\_tracks**(): `object`[]

Defined in: [src/parser/youtube/VideoInfo.ts:427](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L427)

Get songs used in the video.

##### Returns

`object`[]

***

### page

#### Get Signature

> **get** **page**(): \[[`IPlayerResponse`](../../../../type-aliases/IPlayerResponse.md), [`INextResponse`](../../../../type-aliases/INextResponse.md)?\]

Defined in: [src/core/mixins/MediaInfo.ts:263](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L263)

Parsed InnerTube response.

##### Returns

\[[`IPlayerResponse`](../../../../type-aliases/IPlayerResponse.md), [`INextResponse`](../../../../type-aliases/INextResponse.md)?\]

#### Inherited from

[`ShortFormVideoInfo`](../../YTShorts/classes/ShortFormVideoInfo.md).[`page`](../../YTShorts/classes/ShortFormVideoInfo.md#page)

***

### wn\_has\_continuation

#### Get Signature

> **get** **wn\_has\_continuation**(): `boolean`

Defined in: [src/parser/youtube/VideoInfo.ts:406](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L406)

Checks if continuation is available for the watch next feed.

##### Returns

`boolean`

## Methods

### addToWatchHistory()

> **addToWatchHistory**(): `Promise`\<`Response`\>

Defined in: [src/parser/youtube/VideoInfo.ts:198](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L198)

Adds video to the watch history.

#### Returns

`Promise`\<`Response`\>

#### Overrides

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`addToWatchHistory`](../../Mixins/classes/MediaInfo.md#addtowatchhistory)

***

### chooseFormat()

> **chooseFormat**(`options`): [`Format`](../../Misc/classes/Format.md)

Defined in: [src/core/mixins/MediaInfo.ts:163](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L163)

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

Defined in: [src/parser/youtube/VideoInfo.ts:275](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L275)

Dislikes the video.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### download()

> **download**(`options?`): `Promise`\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>

Defined in: [src/core/mixins/MediaInfo.ts:171](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L171)

Downloads the video.

#### Parameters

##### options?

[`DownloadOptions`](../../Types/interfaces/DownloadOptions.md) = `{}`

Download options.

#### Returns

`Promise`\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`download`](../../Mixins/classes/MediaInfo.md#download)

***

### getLiveChat()

> **getLiveChat**(): [`LiveChat`](LiveChat.md)

Defined in: [src/parser/youtube/VideoInfo.ts:370](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L370)

Retrieves Live Chat if available.

#### Returns

[`LiveChat`](LiveChat.md)

***

### getStreamingInfo()

> **getStreamingInfo**(`url_transformer?`, `format_filter?`): `Promise`\<`StreamingInfo`\>

Defined in: [src/core/mixins/MediaInfo.ts:146](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L146)

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

Defined in: [src/parser/youtube/VideoInfo.ts:380](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L380)

Retrieves trailer info if available (typically for non-purchased movies or films).

#### Returns

`VideoInfo` \| `null`

`VideoInfo` for the trailer, or `null` if none.

***

### getTranscript()

> **getTranscript**(): `Promise`\<[`TranscriptInfo`](TranscriptInfo.md)\>

Defined in: [src/core/mixins/MediaInfo.ts:184](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L184)

Retrieves the video's transcript.

#### Returns

`Promise`\<[`TranscriptInfo`](TranscriptInfo.md)\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`getTranscript`](../../Mixins/classes/MediaInfo.md#gettranscript)

***

### getWatchNextContinuation()

> **getWatchNextContinuation**(): `Promise`\<`VideoInfo`\>

Defined in: [src/parser/youtube/VideoInfo.ts:212](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L212)

Retrieves watch next feed continuation.

#### Returns

`Promise`\<`VideoInfo`\>

***

### like()

> **like**(): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/parser/youtube/VideoInfo.ts:235](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L235)

Likes the video.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### removeRating()

> **removeRating**(): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/parser/youtube/VideoInfo.ts:315](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L315)

Removes like/dislike.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### selectFilter()

> **selectFilter**(`target_filter`): `Promise`\<`VideoInfo`\>

Defined in: [src/parser/youtube/VideoInfo.ts:164](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L164)

Applies given filter to the watch next feed. Use [filters](#filters) to get available filters.

#### Parameters

##### target\_filter

`string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md) \| `undefined`

Filter to apply.

#### Returns

`Promise`\<`VideoInfo`\>

***

### toDash()

> **toDash**(`options?`): `Promise`\<`string`\>

Defined in: [src/core/mixins/MediaInfo.ts:106](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/MediaInfo.ts#L106)

Generates a DASH manifest from the streaming data.

#### Parameters

##### options?

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

Defined in: [src/parser/youtube/VideoInfo.ts:205](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/VideoInfo.ts#L205)

Updates watch time for the video.

#### Parameters

##### startTime

`number`

#### Returns

`Promise`\<`Response`\>

#### Overrides

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`updateWatchTime`](../../Mixins/classes/MediaInfo.md#updatewatchtime)

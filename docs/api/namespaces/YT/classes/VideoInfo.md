[youtubei.js](../../../README.md) / [YT](../README.md) / VideoInfo

# Class: VideoInfo

## Extends

- [`MediaInfo`](../../Mixins/classes/MediaInfo.md)

## Constructors

### new VideoInfo()

> **new VideoInfo**(`data`, `actions`, `cpn`): [`VideoInfo`](VideoInfo.md)

#### Parameters

• **data**: [[`ApiResponse`](../../../interfaces/ApiResponse.md), `ApiResponse?`]

API response.

• **actions**: [`Actions`](../../../classes/Actions.md)

Actions instance.

• **cpn**: `string`

Client Playback Nonce.

#### Returns

[`VideoInfo`](VideoInfo.md)

#### Overrides

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`constructor`](../../Mixins/classes/MediaInfo.md#constructors)

#### Defined in

[src/parser/youtube/VideoInfo.ts:51](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L51)

## Properties

### annotations?

> `optional` **annotations**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`PlayerAnnotationsExpanded`](../../YTNodes/classes/PlayerAnnotationsExpanded.md)\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`annotations`](../../Mixins/classes/MediaInfo.md#annotations)

#### Defined in

[src/core/mixins/MediaInfo.ts:31](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L31)

***

### autoplay?

> `optional` **autoplay**: `object`

#### count\_down\_secs?

> `optional` **count\_down\_secs**: `number`

#### modified\_sets?

> `optional` **modified\_sets**: `AutoplaySet`[]

#### sets

> **sets**: `AutoplaySet`[]

#### Defined in

[src/parser/youtube/VideoInfo.ts:44](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L44)

***

### basic\_info

> **basic\_info**: `object`

#### allow\_ratings?

> `optional` **allow\_ratings**: `boolean`

#### author?

> `optional` **author**: `string`

#### category

> **category**: `null` \| `string`

#### channel

> **channel**: `null` \| `object`

#### channel\_id?

> `optional` **channel\_id**: `string`

#### duration?

> `optional` **duration**: `number`

#### embed

> **embed**: `undefined` \| `null` \| `object`

#### end\_timestamp

> **end\_timestamp**: `null` \| `Date`

#### has\_ypc\_metadata

> **has\_ypc\_metadata**: `null` \| `boolean`

#### id?

> `optional` **id**: `string`

#### is\_crawlable?

> `optional` **is\_crawlable**: `boolean`

#### is\_disliked

> **is\_disliked**: `undefined` \| `boolean`

#### is\_family\_safe

> **is\_family\_safe**: `undefined` \| `boolean` = `info.microformat.is_family_safe`

#### is\_liked

> **is\_liked**: `undefined` \| `boolean`

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

> **is\_unlisted**: `undefined` \| `boolean` = `info.microformat.is_unlisted`

#### is\_upcoming?

> `optional` **is\_upcoming**: `boolean`

#### keywords?

> `optional` **keywords**: `string`[]

#### like\_count

> **like\_count**: `undefined` \| `number`

#### live\_chunk\_readahead?

> `optional` **live\_chunk\_readahead**: `number`

#### short\_description?

> `optional` **short\_description**: `string`

#### start\_timestamp

> **start\_timestamp**: `null` \| `Date`

#### tags

> **tags**: `null` \| `string`[]

#### thumbnail?

> `optional` **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### title?

> `optional` **title**: `string`

#### url\_canonical

> **url\_canonical**: `null` \| `string`

#### view\_count

> **view\_count**: `undefined` \| `number`

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`basic_info`](../../Mixins/classes/MediaInfo.md#basic_info)

#### Defined in

[src/core/mixins/MediaInfo.ts:30](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L30)

***

### captions?

> `optional` **captions**: [`PlayerCaptionsTracklist`](../../YTNodes/classes/PlayerCaptionsTracklist.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`captions`](../../Mixins/classes/MediaInfo.md#captions)

#### Defined in

[src/core/mixins/MediaInfo.ts:34](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L34)

***

### cards?

> `optional` **cards**: [`CardCollection`](../../YTNodes/classes/CardCollection.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`cards`](../../Mixins/classes/MediaInfo.md#cards)

#### Defined in

[src/core/mixins/MediaInfo.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L35)

***

### comments\_entry\_point\_header?

> `optional` **comments\_entry\_point\_header**: `null` \| [`CommentsEntryPointHeader`](../../YTNodes/classes/CommentsEntryPointHeader.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:42](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L42)

***

### endscreen?

> `optional` **endscreen**: [`Endscreen`](../../YTNodes/classes/Endscreen.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`endscreen`](../../Mixins/classes/MediaInfo.md#endscreen)

#### Defined in

[src/core/mixins/MediaInfo.ts:33](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L33)

***

### game\_info?

> `optional` **game\_info**: `object`

#### release\_year

> **release\_year**: `undefined` \| [`Text`](../../Misc/classes/Text.md)

#### title

> **title**: `undefined` \| [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:37](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L37)

***

### livechat?

> `optional` **livechat**: `null` \| [`LiveChat`](../../YTNodes/classes/LiveChat.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:43](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L43)

***

### merchandise?

> `optional` **merchandise**: `null` \| [`MerchandiseShelf`](../../YTNodes/classes/MerchandiseShelf.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:38](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L38)

***

### playability\_status?

> `optional` **playability\_status**: [`IPlayabilityStatus`](../../APIResponseTypes/interfaces/IPlayabilityStatus.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`playability_status`](../../Mixins/classes/MediaInfo.md#playability_status)

#### Defined in

[src/core/mixins/MediaInfo.ts:37](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L37)

***

### player\_config?

> `optional` **player\_config**: [`IPlayerConfig`](../../APIResponseTypes/interfaces/IPlayerConfig.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`player_config`](../../Mixins/classes/MediaInfo.md#player_config)

#### Defined in

[src/core/mixins/MediaInfo.ts:38](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L38)

***

### player\_overlays?

> `optional` **player\_overlays**: `null` \| [`PlayerOverlay`](../../YTNodes/classes/PlayerOverlay.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:41](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L41)

***

### playlist?

> `optional` **playlist**: `object`

#### author

> **author**: [`Text`](../../Misc/classes/Text.md) \| [`Author`](../../Misc/classes/Author.md)

#### contents

> **contents**: [`YTNode`](../../Helpers/classes/YTNode.md)[]

#### current\_index

> **current\_index**: `number`

#### id

> **id**: `string`

#### is\_infinite

> **is\_infinite**: `boolean`

#### menu

> **menu**: `null` \| [`Menu`](../../YTNodes/classes/Menu.md)

#### title

> **title**: `string`

#### Defined in

[src/parser/youtube/VideoInfo.ts:36](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L36)

***

### primary\_info?

> `optional` **primary\_info**: `null` \| [`VideoPrimaryInfo`](../../YTNodes/classes/VideoPrimaryInfo.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:34](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L34)

***

### related\_chip\_cloud?

> `optional` **related\_chip\_cloud**: `null` \| [`ChipCloud`](../../YTNodes/classes/ChipCloud.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:39](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L39)

***

### secondary\_info?

> `optional` **secondary\_info**: `null` \| [`VideoSecondaryInfo`](../../YTNodes/classes/VideoSecondaryInfo.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L35)

***

### storyboards?

> `optional` **storyboards**: [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md) \| [`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`storyboards`](../../Mixins/classes/MediaInfo.md#storyboards)

#### Defined in

[src/core/mixins/MediaInfo.ts:32](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L32)

***

### streaming\_data?

> `optional` **streaming\_data**: [`IStreamingData`](../../APIResponseTypes/interfaces/IStreamingData.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`streaming_data`](../../Mixins/classes/MediaInfo.md#streaming_data)

#### Defined in

[src/core/mixins/MediaInfo.ts:36](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L36)

***

### watch\_next\_feed?

> `optional` **watch\_next\_feed**: `null` \| [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/youtube/VideoInfo.ts:40](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L40)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

Actions instance.

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`actions`](../../Mixins/classes/MediaInfo.md#actions)

#### Defined in

[src/core/mixins/MediaInfo.ts:223](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L223)

***

### autoplay\_video\_endpoint

> `get` **autoplay\_video\_endpoint**(): `null` \| [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

Gets the endpoint of the autoplay video

#### Returns

`null` \| [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:379](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L379)

***

### cpn

> `get` **cpn**(): `string`

Content Playback Nonce.

#### Returns

`string`

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`cpn`](../../Mixins/classes/MediaInfo.md#cpn)

#### Defined in

[src/core/mixins/MediaInfo.ts:230](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L230)

***

### filters

> `get` **filters**(): `string`[]

Watch next feed filters.

#### Returns

`string`[]

#### Defined in

[src/parser/youtube/VideoInfo.ts:365](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L365)

***

### has\_trailer

> `get` **has\_trailer**(): `boolean`

Checks if trailer is available.

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/VideoInfo.ts:386](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L386)

***

### music\_tracks

> `get` **music\_tracks**(): `object`[]

Get songs used in the video.

#### Returns

`object`[]

#### Defined in

[src/parser/youtube/VideoInfo.ts:393](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L393)

***

### page

> `get` **page**(): [[`IPlayerResponse`](../../APIResponseTypes/type-aliases/IPlayerResponse.md), `INextResponse?`]

Original parsed InnerTube response.

#### Returns

[[`IPlayerResponse`](../../APIResponseTypes/type-aliases/IPlayerResponse.md), `INextResponse?`]

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`page`](../../Mixins/classes/MediaInfo.md#page)

#### Defined in

[src/core/mixins/MediaInfo.ts:237](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L237)

***

### wn\_has\_continuation

> `get` **wn\_has\_continuation**(): `boolean`

Checks if continuation is available for the watch next feed.

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/VideoInfo.ts:372](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L372)

## Methods

### addToWatchHistory()

> **addToWatchHistory**(): `Promise`\<`Response`\>

Adds video to the watch history.

#### Returns

`Promise`\<`Response`\>

#### Overrides

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`addToWatchHistory`](../../Mixins/classes/MediaInfo.md#addtowatchhistory)

#### Defined in

[src/parser/youtube/VideoInfo.ts:174](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L174)

***

### chooseFormat()

> **chooseFormat**(`options`): [`Format`](../../Misc/classes/Format.md)

Selects the format that best matches the given options.

#### Parameters

• **options**: [`FormatOptions`](../../Types/interfaces/FormatOptions.md)

Options

#### Returns

[`Format`](../../Misc/classes/Format.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`chooseFormat`](../../Mixins/classes/MediaInfo.md#chooseformat)

#### Defined in

[src/core/mixins/MediaInfo.ts:149](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L149)

***

### dislike()

> **dislike**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Dislikes the video.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/youtube/VideoInfo.ts:245](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L245)

***

### download()

> **download**(`options`): `Promise`\<`ReadableStream`\<`Uint8Array`\>\>

Downloads the video.

#### Parameters

• **options**: [`DownloadOptions`](../../Types/interfaces/DownloadOptions.md) = `{}`

Download options.

#### Returns

`Promise`\<`ReadableStream`\<`Uint8Array`\>\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`download`](../../Mixins/classes/MediaInfo.md#download)

#### Defined in

[src/core/mixins/MediaInfo.ts:157](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L157)

***

### getLiveChat()

> **getLiveChat**(): [`LiveChat`](LiveChat.md)

Retrieves Live Chat if available.

#### Returns

[`LiveChat`](LiveChat.md)

#### Defined in

[src/parser/youtube/VideoInfo.ts:342](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L342)

***

### getStreamingInfo()

> **getStreamingInfo**(`url_transformer`?, `format_filter`?): `StreamingInfo`

Get a cleaned up representation of the adaptive_formats

#### Parameters

• **url\_transformer?**: [`URLTransformer`](../../Types/type-aliases/URLTransformer.md)

• **format\_filter?**: [`FormatFilter`](../../Types/type-aliases/FormatFilter.md)

#### Returns

`StreamingInfo`

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`getStreamingInfo`](../../Mixins/classes/MediaInfo.md#getstreaminginfo)

#### Defined in

[src/core/mixins/MediaInfo.ts:132](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L132)

***

### getTrailerInfo()

> **getTrailerInfo**(): `null` \| [`VideoInfo`](VideoInfo.md)

Retrieves trailer info if available (typically for non-purchased movies or films).

#### Returns

`null` \| [`VideoInfo`](VideoInfo.md)

`VideoInfo` for the trailer, or `null` if none.

#### Defined in

[src/parser/youtube/VideoInfo.ts:352](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L352)

***

### getTranscript()

> **getTranscript**(): `Promise`\<[`TranscriptInfo`](TranscriptInfo.md)\>

Retrieves the video's transcript.

#### Returns

`Promise`\<[`TranscriptInfo`](TranscriptInfo.md)\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`getTranscript`](../../Mixins/classes/MediaInfo.md#gettranscript)

#### Defined in

[src/core/mixins/MediaInfo.ts:170](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L170)

***

### getWatchNextContinuation()

> **getWatchNextContinuation**(): `Promise`\<[`VideoInfo`](VideoInfo.md)\>

Retrieves watch next feed continuation.

#### Returns

`Promise`\<[`VideoInfo`](VideoInfo.md)\>

#### Defined in

[src/parser/youtube/VideoInfo.ts:181](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L181)

***

### like()

> **like**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Likes the video.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/youtube/VideoInfo.ts:204](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L204)

***

### removeRating()

> **removeRating**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Removes like/dislike.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/youtube/VideoInfo.ts:286](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L286)

***

### selectFilter()

> **selectFilter**(`target_filter`): `Promise`\<[`VideoInfo`](VideoInfo.md)\>

Applies given filter to the watch next feed. Use [filters](VideoInfo.md#filters) to get available filters.

#### Parameters

• **target\_filter**: `undefined` \| `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

Filter to apply.

#### Returns

`Promise`\<[`VideoInfo`](VideoInfo.md)\>

#### Defined in

[src/parser/youtube/VideoInfo.ts:142](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/VideoInfo.ts#L142)

***

### toDash()

> **toDash**(`url_transformer`?, `format_filter`?, `options`?): `Promise`\<`string`\>

Generates a DASH manifest from the streaming data.

#### Parameters

• **url\_transformer?**: [`URLTransformer`](../../Types/type-aliases/URLTransformer.md)

Function to transform the URLs.

• **format\_filter?**: [`FormatFilter`](../../Types/type-aliases/FormatFilter.md)

Function to filter the formats.

• **options?**: `DashOptions` = `...`

Additional options to customise the manifest generation

#### Returns

`Promise`\<`string`\>

DASH manifest

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`toDash`](../../Mixins/classes/MediaInfo.md#todash)

#### Defined in

[src/core/mixins/MediaInfo.ts:97](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L97)

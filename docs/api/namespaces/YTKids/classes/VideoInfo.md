[youtubei.js](../../../README.md) / [YTKids](../README.md) / VideoInfo

# Class: VideoInfo

## Extends

- [`MediaInfo`](../../Mixins/classes/MediaInfo.md)

## Constructors

### new VideoInfo()

> **new VideoInfo**(`data`, `actions`, `cpn`): [`VideoInfo`](VideoInfo.md)

#### Parameters

• **data**: [[`ApiResponse`](../../../interfaces/ApiResponse.md), `ApiResponse?`]

• **actions**: [`Actions`](../../../classes/Actions.md)

• **cpn**: `string`

#### Returns

[`VideoInfo`](VideoInfo.md)

#### Overrides

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`constructor`](../../Mixins/classes/MediaInfo.md#constructors)

#### Defined in

[src/parser/ytkids/VideoInfo.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytkids/VideoInfo.ts#L17)

## Properties

### annotations?

> `optional` **annotations**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`PlayerAnnotationsExpanded`](../../YTNodes/classes/PlayerAnnotationsExpanded.md)\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`annotations`](../../Mixins/classes/MediaInfo.md#annotations)

#### Defined in

[src/core/mixins/MediaInfo.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L40)

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

[src/core/mixins/MediaInfo.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L39)

***

### captions?

> `optional` **captions**: [`PlayerCaptionsTracklist`](../../YTNodes/classes/PlayerCaptionsTracklist.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`captions`](../../Mixins/classes/MediaInfo.md#captions)

#### Defined in

[src/core/mixins/MediaInfo.ts:43](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L43)

***

### cards?

> `optional` **cards**: [`CardCollection`](../../YTNodes/classes/CardCollection.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`cards`](../../Mixins/classes/MediaInfo.md#cards)

#### Defined in

[src/core/mixins/MediaInfo.ts:44](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L44)

***

### current\_video\_endpoint?

> `optional` **current\_video\_endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

#### Defined in

[src/parser/ytkids/VideoInfo.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytkids/VideoInfo.ts#L14)

***

### endscreen?

> `optional` **endscreen**: [`Endscreen`](../../YTNodes/classes/Endscreen.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`endscreen`](../../Mixins/classes/MediaInfo.md#endscreen)

#### Defined in

[src/core/mixins/MediaInfo.ts:42](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L42)

***

### playability\_status?

> `optional` **playability\_status**: [`IPlayabilityStatus`](../../APIResponseTypes/interfaces/IPlayabilityStatus.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`playability_status`](../../Mixins/classes/MediaInfo.md#playability_status)

#### Defined in

[src/core/mixins/MediaInfo.ts:46](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L46)

***

### player\_config?

> `optional` **player\_config**: [`IPlayerConfig`](../../APIResponseTypes/interfaces/IPlayerConfig.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`player_config`](../../Mixins/classes/MediaInfo.md#player_config)

#### Defined in

[src/core/mixins/MediaInfo.ts:47](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L47)

***

### player\_overlays?

> `optional` **player\_overlays**: [`PlayerOverlay`](../../YTNodes/classes/PlayerOverlay.md)

#### Defined in

[src/parser/ytkids/VideoInfo.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytkids/VideoInfo.ts#L15)

***

### slim\_video\_metadata?

> `optional` **slim\_video\_metadata**: [`SlimVideoMetadata`](../../YTNodes/classes/SlimVideoMetadata.md)

#### Defined in

[src/parser/ytkids/VideoInfo.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytkids/VideoInfo.ts#L12)

***

### storyboards?

> `optional` **storyboards**: [`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md) \| [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`storyboards`](../../Mixins/classes/MediaInfo.md#storyboards)

#### Defined in

[src/core/mixins/MediaInfo.ts:41](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L41)

***

### streaming\_data?

> `optional` **streaming\_data**: [`IStreamingData`](../../APIResponseTypes/interfaces/IStreamingData.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`streaming_data`](../../Mixins/classes/MediaInfo.md#streaming_data)

#### Defined in

[src/core/mixins/MediaInfo.ts:45](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L45)

***

### watch\_next\_feed?

> `optional` **watch\_next\_feed**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/ytkids/VideoInfo.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytkids/VideoInfo.ts#L13)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`actions`](../../Mixins/classes/MediaInfo.md#actions)

#### Defined in

[src/core/mixins/MediaInfo.ts:227](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L227)

***

### cpn

> `get` **cpn**(): `string`

Content Playback Nonce.

#### Returns

`string`

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`cpn`](../../Mixins/classes/MediaInfo.md#cpn)

#### Defined in

[src/core/mixins/MediaInfo.ts:234](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L234)

***

### page

> `get` **page**(): [[`IPlayerResponse`](../../APIResponseTypes/type-aliases/IPlayerResponse.md), `INextResponse?`]

Parsed InnerTube response.

#### Returns

[[`IPlayerResponse`](../../APIResponseTypes/type-aliases/IPlayerResponse.md), `INextResponse?`]

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`page`](../../Mixins/classes/MediaInfo.md#page)

#### Defined in

[src/core/mixins/MediaInfo.ts:241](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L241)

## Methods

### addToWatchHistory()

> **addToWatchHistory**(`client_name`, `client_version`, `replacement`): `Promise`\<`Response`\>

Adds video to the watch history.

#### Parameters

• **client\_name**: `string` = `Constants.CLIENTS.WEB.NAME`

• **client\_version**: `string` = `Constants.CLIENTS.WEB.VERSION`

• **replacement**: `string` = `'https://www.'`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`addToWatchHistory`](../../Mixins/classes/MediaInfo.md#addtowatchhistory)

#### Defined in

[src/core/mixins/MediaInfo.ts:208](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L208)

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

[src/core/mixins/MediaInfo.ts:158](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L158)

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

[src/core/mixins/MediaInfo.ts:166](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L166)

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

[src/core/mixins/MediaInfo.ts:141](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L141)

***

### getTranscript()

> **getTranscript**(): `Promise`\<[`TranscriptInfo`](../../YT/classes/TranscriptInfo.md)\>

Retrieves the video's transcript.

#### Returns

`Promise`\<[`TranscriptInfo`](../../YT/classes/TranscriptInfo.md)\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`getTranscript`](../../Mixins/classes/MediaInfo.md#gettranscript)

#### Defined in

[src/core/mixins/MediaInfo.ts:179](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L179)

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

[src/core/mixins/MediaInfo.ts:106](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/MediaInfo.ts#L106)

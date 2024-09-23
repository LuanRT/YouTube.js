[youtubei.js](../../../README.md) / [Mixins](../README.md) / MediaInfo

# Class: MediaInfo

## Extended by

- [`VideoInfo`](../../YT/classes/VideoInfo.md)
- [`TrackInfo`](../../YTMusic/classes/TrackInfo.md)
- [`VideoInfo`](../../YTKids/classes/VideoInfo.md)
- [`ShortFormVideoInfo`](../../YTShorts/classes/ShortFormVideoInfo.md)

## Constructors

### new MediaInfo()

> **new MediaInfo**(`data`, `actions`, `cpn`): [`MediaInfo`](MediaInfo.md)

#### Parameters

• **data**: [[`ApiResponse`](../../../interfaces/ApiResponse.md), `ApiResponse?`]

• **actions**: [`Actions`](../../../classes/Actions.md)

• **cpn**: `string`

#### Returns

[`MediaInfo`](MediaInfo.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:40](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L40)

## Properties

### annotations?

> `optional` **annotations**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`PlayerAnnotationsExpanded`](../../YTNodes/classes/PlayerAnnotationsExpanded.md)\>

#### Defined in

[src/core/mixins/MediaInfo.ts:31](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L31)

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

#### Defined in

[src/core/mixins/MediaInfo.ts:30](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L30)

***

### captions?

> `optional` **captions**: [`PlayerCaptionsTracklist`](../../YTNodes/classes/PlayerCaptionsTracklist.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:34](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L34)

***

### cards?

> `optional` **cards**: [`CardCollection`](../../YTNodes/classes/CardCollection.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L35)

***

### endscreen?

> `optional` **endscreen**: [`Endscreen`](../../YTNodes/classes/Endscreen.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:33](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L33)

***

### playability\_status?

> `optional` **playability\_status**: [`IPlayabilityStatus`](../../APIResponseTypes/interfaces/IPlayabilityStatus.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:37](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L37)

***

### player\_config?

> `optional` **player\_config**: [`IPlayerConfig`](../../APIResponseTypes/interfaces/IPlayerConfig.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:38](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L38)

***

### storyboards?

> `optional` **storyboards**: [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md) \| [`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:32](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L32)

***

### streaming\_data?

> `optional` **streaming\_data**: [`IStreamingData`](../../APIResponseTypes/interfaces/IStreamingData.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:36](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L36)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

Actions instance.

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:223](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L223)

***

### cpn

> `get` **cpn**(): `string`

Content Playback Nonce.

#### Returns

`string`

#### Defined in

[src/core/mixins/MediaInfo.ts:230](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L230)

***

### page

> `get` **page**(): [[`IPlayerResponse`](../../APIResponseTypes/type-aliases/IPlayerResponse.md), `INextResponse?`]

Original parsed InnerTube response.

#### Returns

[[`IPlayerResponse`](../../APIResponseTypes/type-aliases/IPlayerResponse.md), `INextResponse?`]

#### Defined in

[src/core/mixins/MediaInfo.ts:237](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L237)

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

#### Defined in

[src/core/mixins/MediaInfo.ts:199](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L199)

***

### chooseFormat()

> **chooseFormat**(`options`): [`Format`](../../Misc/classes/Format.md)

Selects the format that best matches the given options.

#### Parameters

• **options**: [`FormatOptions`](../../Types/interfaces/FormatOptions.md)

Options

#### Returns

[`Format`](../../Misc/classes/Format.md)

#### Defined in

[src/core/mixins/MediaInfo.ts:149](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L149)

***

### download()

> **download**(`options`): `Promise`\<`ReadableStream`\<`Uint8Array`\>\>

Downloads the video.

#### Parameters

• **options**: [`DownloadOptions`](../../Types/interfaces/DownloadOptions.md) = `{}`

Download options.

#### Returns

`Promise`\<`ReadableStream`\<`Uint8Array`\>\>

#### Defined in

[src/core/mixins/MediaInfo.ts:157](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L157)

***

### getStreamingInfo()

> **getStreamingInfo**(`url_transformer`?, `format_filter`?): `StreamingInfo`

Get a cleaned up representation of the adaptive_formats

#### Parameters

• **url\_transformer?**: [`URLTransformer`](../../Types/type-aliases/URLTransformer.md)

• **format\_filter?**: [`FormatFilter`](../../Types/type-aliases/FormatFilter.md)

#### Returns

`StreamingInfo`

#### Defined in

[src/core/mixins/MediaInfo.ts:132](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L132)

***

### getTranscript()

> **getTranscript**(): `Promise`\<[`TranscriptInfo`](../../YT/classes/TranscriptInfo.md)\>

Retrieves the video's transcript.

#### Returns

`Promise`\<[`TranscriptInfo`](../../YT/classes/TranscriptInfo.md)\>

#### Defined in

[src/core/mixins/MediaInfo.ts:170](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L170)

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

#### Defined in

[src/core/mixins/MediaInfo.ts:97](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/mixins/MediaInfo.ts#L97)

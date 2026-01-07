[youtubei.js](../../../../README.md) / [YTKids](../README.md) / VideoInfo

# Class: VideoInfo

Defined in: [src/parser/ytkids/VideoInfo.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytkids/VideoInfo.ts#L11)

## Extends

- [`MediaInfo`](../../Mixins/classes/MediaInfo.md)

## Constructors

### Constructor

> **new VideoInfo**(`data`, `actions`, `cpn`): `VideoInfo`

Defined in: [src/parser/ytkids/VideoInfo.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytkids/VideoInfo.ts#L17)

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

### current\_video\_endpoint?

> `optional` **current\_video\_endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

Defined in: [src/parser/ytkids/VideoInfo.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytkids/VideoInfo.ts#L14)

***

### endscreen?

> `optional` **endscreen**: [`Endscreen`](../../YTNodes/classes/Endscreen.md)

Defined in: [src/core/mixins/MediaInfo.ts:42](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L42)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`endscreen`](../../Mixins/classes/MediaInfo.md#endscreen)

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

> `optional` **player\_overlays**: [`PlayerOverlay`](../../YTNodes/classes/PlayerOverlay.md)

Defined in: [src/parser/ytkids/VideoInfo.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytkids/VideoInfo.ts#L15)

***

### slim\_video\_metadata?

> `optional` **slim\_video\_metadata**: [`SlimVideoMetadata`](../../YTNodes/classes/SlimVideoMetadata.md)

Defined in: [src/parser/ytkids/VideoInfo.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytkids/VideoInfo.ts#L12)

***

### storyboards?

> `optional` **storyboards**: [`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md) \| [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md)

Defined in: [src/core/mixins/MediaInfo.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L41)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`storyboards`](../../Mixins/classes/MediaInfo.md#storyboards)

***

### streaming\_data?

> `optional` **streaming\_data**: [`IStreamingData`](../../../../interfaces/IStreamingData.md)

Defined in: [src/core/mixins/MediaInfo.ts:45](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L45)

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`streaming_data`](../../Mixins/classes/MediaInfo.md#streaming_data)

***

### watch\_next\_feed?

> `optional` **watch\_next\_feed**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/ytkids/VideoInfo.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytkids/VideoInfo.ts#L13)

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

### page

#### Get Signature

> **get** **page**(): \[[`IPlayerResponse`](../../../../type-aliases/IPlayerResponse.md), [`INextResponse`](../../../../type-aliases/INextResponse.md)?\]

Defined in: [src/core/mixins/MediaInfo.ts:261](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L261)

Parsed InnerTube response.

##### Returns

\[[`IPlayerResponse`](../../../../type-aliases/IPlayerResponse.md), [`INextResponse`](../../../../type-aliases/INextResponse.md)?\]

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`page`](../../Mixins/classes/MediaInfo.md#page)

## Methods

### addToWatchHistory()

> **addToWatchHistory**(`client_name?`, `client_version?`, `replacement?`): `Promise`\<`Response`\>

Defined in: [src/core/mixins/MediaInfo.ts:208](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L208)

#### Parameters

##### client\_name?

`string`

##### client\_version?

`string`

##### replacement?

`string` = `'https://www.'`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

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

### getTranscript()

> **getTranscript**(): `Promise`\<[`TranscriptInfo`](../../YT/classes/TranscriptInfo.md)\>

Defined in: [src/core/mixins/MediaInfo.ts:182](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L182)

Retrieves the video's transcript.

#### Returns

`Promise`\<[`TranscriptInfo`](../../YT/classes/TranscriptInfo.md)\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`getTranscript`](../../Mixins/classes/MediaInfo.md#gettranscript)

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

> **updateWatchTime**(`startTime`, `client_name`, `client_version`, `replacement`): `Promise`\<`Response`\>

Defined in: [src/core/mixins/MediaInfo.ts:227](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/MediaInfo.ts#L227)

#### Parameters

##### startTime

`number`

##### client\_name

`string` = `Constants.CLIENTS.WEB.NAME`

##### client\_version

`string` = `Constants.CLIENTS.WEB.VERSION`

##### replacement

`string` = `'https://www.'`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

[`MediaInfo`](../../Mixins/classes/MediaInfo.md).[`updateWatchTime`](../../Mixins/classes/MediaInfo.md#updatewatchtime)

[youtubei.js](../../../README.md) / [YT](../README.md) / TranscriptInfo

# Class: TranscriptInfo

## Constructors

### new TranscriptInfo()

> **new TranscriptInfo**(`actions`, `response`): [`TranscriptInfo`](TranscriptInfo.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

#### Returns

[`TranscriptInfo`](TranscriptInfo.md)

#### Defined in

[src/parser/youtube/TranscriptInfo.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/TranscriptInfo.ts#L12)

## Properties

### transcript

> **transcript**: [`Transcript`](../../YTNodes/classes/Transcript.md)

#### Defined in

[src/parser/youtube/TranscriptInfo.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/TranscriptInfo.ts#L10)

## Accessors

### languages

> `get` **languages**(): `string`[]

Returns available languages.

#### Returns

`string`[]

#### Defined in

[src/parser/youtube/TranscriptInfo.ts:45](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/TranscriptInfo.ts#L45)

***

### page

> `get` **page**(): [`IGetTranscriptResponse`](../../APIResponseTypes/type-aliases/IGetTranscriptResponse.md)

#### Returns

[`IGetTranscriptResponse`](../../APIResponseTypes/type-aliases/IGetTranscriptResponse.md)

#### Defined in

[src/parser/youtube/TranscriptInfo.ts:56](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/TranscriptInfo.ts#L56)

***

### selectedLanguage

> `get` **selectedLanguage**(): `string`

Returns the currently selected language.

#### Returns

`string`

#### Defined in

[src/parser/youtube/TranscriptInfo.ts:52](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/TranscriptInfo.ts#L52)

## Methods

### selectLanguage()

> **selectLanguage**(`language`): `Promise`\<[`TranscriptInfo`](TranscriptInfo.md)\>

Selects a language from the language menu and returns the updated transcript.

#### Parameters

• **language**: `string`

Language to select.

#### Returns

`Promise`\<[`TranscriptInfo`](TranscriptInfo.md)\>

#### Defined in

[src/parser/youtube/TranscriptInfo.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/TranscriptInfo.ts#L26)

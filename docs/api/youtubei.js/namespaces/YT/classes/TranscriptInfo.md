[youtubei.js](../../../../README.md) / [YT](../README.md) / TranscriptInfo

# Class: TranscriptInfo

Defined in: [src/parser/youtube/TranscriptInfo.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/TranscriptInfo.ts#L7)

## Constructors

### Constructor

> **new TranscriptInfo**(`actions`, `response`): `TranscriptInfo`

Defined in: [src/parser/youtube/TranscriptInfo.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/TranscriptInfo.ts#L12)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

#### Returns

`TranscriptInfo`

## Properties

### transcript

> **transcript**: [`Transcript`](../../YTNodes/classes/Transcript.md)

Defined in: [src/parser/youtube/TranscriptInfo.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/TranscriptInfo.ts#L10)

## Accessors

### languages

#### Get Signature

> **get** **languages**(): `string`[]

Defined in: [src/parser/youtube/TranscriptInfo.ts:45](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/TranscriptInfo.ts#L45)

Returns available languages.

##### Returns

`string`[]

***

### page

#### Get Signature

> **get** **page**(): [`IGetTranscriptResponse`](../../../../type-aliases/IGetTranscriptResponse.md)

Defined in: [src/parser/youtube/TranscriptInfo.ts:56](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/TranscriptInfo.ts#L56)

##### Returns

[`IGetTranscriptResponse`](../../../../type-aliases/IGetTranscriptResponse.md)

***

### selectedLanguage

#### Get Signature

> **get** **selectedLanguage**(): `string`

Defined in: [src/parser/youtube/TranscriptInfo.ts:52](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/TranscriptInfo.ts#L52)

Returns the currently selected language.

##### Returns

`string`

## Methods

### selectLanguage()

> **selectLanguage**(`language`): `Promise`\<`TranscriptInfo`\>

Defined in: [src/parser/youtube/TranscriptInfo.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/TranscriptInfo.ts#L26)

Selects a language from the language menu and returns the updated transcript.

#### Parameters

##### language

`string`

Language to select.

#### Returns

`Promise`\<`TranscriptInfo`\>

[youtubei.js](../../../README.md) / [YTMusic](../README.md) / Search

# Class: Search

## Constructors

### new Search()

> **new Search**(`response`, `actions`, `is_filtered`?): [`Search`](Search.md)

#### Parameters

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

• **is\_filtered?**: `boolean`

#### Returns

[`Search`](Search.md)

#### Defined in

[src/parser/ytmusic/Search.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L28)

## Properties

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ItemSection`](../../YTNodes/classes/ItemSection.md) \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| [`MusicCardShelf`](../../YTNodes/classes/MusicCardShelf.md)\>

#### Defined in

[src/parser/ytmusic/Search.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L26)

***

### header?

> `optional` **header**: [`ChipCloud`](../../YTNodes/classes/ChipCloud.md)

#### Defined in

[src/parser/ytmusic/Search.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L25)

## Accessors

### albums

> `get` **albums**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:137](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L137)

***

### artists

> `get` **artists**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:141](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L141)

***

### did\_you\_mean

> `get` **did\_you\_mean**(): `undefined` \| [`DidYouMean`](../../YTNodes/classes/DidYouMean.md)

#### Returns

`undefined` \| [`DidYouMean`](../../YTNodes/classes/DidYouMean.md)

#### Defined in

[src/parser/ytmusic/Search.ts:117](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L117)

***

### filters

> `get` **filters**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/ytmusic/Search.ts:109](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L109)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/Search.ts:113](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L113)

***

### message

> `get` **message**(): `undefined` \| [`Message`](../../YTNodes/classes/Message.md)

#### Returns

`undefined` \| [`Message`](../../YTNodes/classes/Message.md)

#### Defined in

[src/parser/ytmusic/Search.ts:125](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L125)

***

### page

> `get` **page**(): [`ISearchResponse`](../../APIResponseTypes/type-aliases/ISearchResponse.md)

#### Returns

[`ISearchResponse`](../../APIResponseTypes/type-aliases/ISearchResponse.md)

#### Defined in

[src/parser/ytmusic/Search.ts:149](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L149)

***

### playlists

> `get` **playlists**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:145](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L145)

***

### showing\_results\_for

> `get` **showing\_results\_for**(): `undefined` \| [`ShowingResultsFor`](../../YTNodes/classes/ShowingResultsFor.md)

#### Returns

`undefined` \| [`ShowingResultsFor`](../../YTNodes/classes/ShowingResultsFor.md)

#### Defined in

[src/parser/ytmusic/Search.ts:121](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L121)

***

### songs

> `get` **songs**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:129](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L129)

***

### videos

> `get` **videos**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:133](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L133)

## Methods

### applyFilter()

> **applyFilter**(`target_filter`): `Promise`\<[`Search`](Search.md)\>

Applies given filter to the search.

#### Parameters

• **target\_filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<[`Search`](Search.md)\>

#### Defined in

[src/parser/ytmusic/Search.ts:86](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L86)

***

### getContinuation()

> **getContinuation**(): `Promise`\<`SearchContinuation`\>

Retrieves search continuation. Only available for filtered searches and shelf continuations.

#### Returns

`Promise`\<`SearchContinuation`\>

#### Defined in

[src/parser/ytmusic/Search.ts:71](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L71)

***

### getMore()

> **getMore**(`shelf`): `Promise`\<[`Search`](Search.md)\>

Loads more items for the given shelf.

#### Parameters

• **shelf**: `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`Promise`\<[`Search`](Search.md)\>

#### Defined in

[src/parser/ytmusic/Search.ts:56](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Search.ts#L56)

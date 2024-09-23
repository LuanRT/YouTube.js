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

[src/parser/ytmusic/Search.ts:29](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L29)

## Properties

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ItemSection`](../../YTNodes/classes/ItemSection.md) \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| [`MusicCardShelf`](../../YTNodes/classes/MusicCardShelf.md)\>

#### Defined in

[src/parser/ytmusic/Search.ts:27](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L27)

***

### header?

> `optional` **header**: [`ChipCloud`](../../YTNodes/classes/ChipCloud.md)

#### Defined in

[src/parser/ytmusic/Search.ts:26](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L26)

## Accessors

### albums

> `get` **albums**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:138](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L138)

***

### artists

> `get` **artists**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:142](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L142)

***

### did\_you\_mean

> `get` **did\_you\_mean**(): `undefined` \| [`DidYouMean`](../../YTNodes/classes/DidYouMean.md)

#### Returns

`undefined` \| [`DidYouMean`](../../YTNodes/classes/DidYouMean.md)

#### Defined in

[src/parser/ytmusic/Search.ts:118](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L118)

***

### filters

> `get` **filters**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/ytmusic/Search.ts:110](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L110)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/Search.ts:114](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L114)

***

### message

> `get` **message**(): `undefined` \| [`Message`](../../YTNodes/classes/Message.md)

#### Returns

`undefined` \| [`Message`](../../YTNodes/classes/Message.md)

#### Defined in

[src/parser/ytmusic/Search.ts:126](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L126)

***

### page

> `get` **page**(): [`ISearchResponse`](../../APIResponseTypes/type-aliases/ISearchResponse.md)

#### Returns

[`ISearchResponse`](../../APIResponseTypes/type-aliases/ISearchResponse.md)

#### Defined in

[src/parser/ytmusic/Search.ts:164](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L164)

***

### playlists

> `get` **playlists**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:146](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L146)

***

### results

> `get` **results**(): `undefined` \| [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

#### Deprecated

Use [Search.contents](Search.md#contents) instead.

#### Returns

`undefined` \| [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

#### Defined in

[src/parser/ytmusic/Search.ts:153](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L153)

***

### sections

> `get` **sections**(): `undefined` \| [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicShelf`](../../YTNodes/classes/MusicShelf.md)\>

#### Deprecated

Use [Search.contents](Search.md#contents) instead.

#### Returns

`undefined` \| [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicShelf`](../../YTNodes/classes/MusicShelf.md)\>

#### Defined in

[src/parser/ytmusic/Search.ts:160](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L160)

***

### showing\_results\_for

> `get` **showing\_results\_for**(): `undefined` \| [`ShowingResultsFor`](../../YTNodes/classes/ShowingResultsFor.md)

#### Returns

`undefined` \| [`ShowingResultsFor`](../../YTNodes/classes/ShowingResultsFor.md)

#### Defined in

[src/parser/ytmusic/Search.ts:122](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L122)

***

### songs

> `get` **songs**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:130](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L130)

***

### videos

> `get` **videos**(): `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Defined in

[src/parser/ytmusic/Search.ts:134](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L134)

## Methods

### applyFilter()

> **applyFilter**(`target_filter`): `Promise`\<[`Search`](Search.md)\>

Applies given filter to the search.

#### Parameters

• **target\_filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<[`Search`](Search.md)\>

#### Defined in

[src/parser/ytmusic/Search.ts:87](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L87)

***

### getContinuation()

> **getContinuation**(): `Promise`\<`SearchContinuation`\>

Retrieves search continuation. Only available for filtered searches and shelf continuations.

#### Returns

`Promise`\<`SearchContinuation`\>

#### Defined in

[src/parser/ytmusic/Search.ts:72](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L72)

***

### getMore()

> **getMore**(`shelf`): `Promise`\<[`Search`](Search.md)\>

Loads more items for the given shelf.

#### Parameters

• **shelf**: `undefined` \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)

#### Returns

`Promise`\<[`Search`](Search.md)\>

#### Defined in

[src/parser/ytmusic/Search.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Search.ts#L57)

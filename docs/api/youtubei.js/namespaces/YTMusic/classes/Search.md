[youtubei.js](../../../../README.md) / [YTMusic](../README.md) / Search

# Class: Search

Defined in: [src/parser/ytmusic/Search.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L20)

## Constructors

### Constructor

> **new Search**(`response`, `actions`, `is_filtered?`): `Search`

Defined in: [src/parser/ytmusic/Search.ts:28](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L28)

#### Parameters

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

##### actions

[`Actions`](../../../../classes/Actions.md)

##### is\_filtered?

`boolean`

#### Returns

`Search`

## Properties

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ItemSection`](../../YTNodes/classes/ItemSection.md) \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| [`MusicCardShelf`](../../YTNodes/classes/MusicCardShelf.md)\>

Defined in: [src/parser/ytmusic/Search.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L26)

***

### header?

> `optional` **header**: [`ChipCloud`](../../YTNodes/classes/ChipCloud.md)

Defined in: [src/parser/ytmusic/Search.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L25)

## Accessors

### albums

#### Get Signature

> **get** **albums**(): [`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

Defined in: [src/parser/ytmusic/Search.ts:137](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L137)

##### Returns

[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

***

### artists

#### Get Signature

> **get** **artists**(): [`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

Defined in: [src/parser/ytmusic/Search.ts:141](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L141)

##### Returns

[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

***

### did\_you\_mean

#### Get Signature

> **get** **did\_you\_mean**(): [`DidYouMean`](../../YTNodes/classes/DidYouMean.md) \| `undefined`

Defined in: [src/parser/ytmusic/Search.ts:117](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L117)

##### Returns

[`DidYouMean`](../../YTNodes/classes/DidYouMean.md) \| `undefined`

***

### filters

#### Get Signature

> **get** **filters**(): `string`[]

Defined in: [src/parser/ytmusic/Search.ts:109](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L109)

##### Returns

`string`[]

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/ytmusic/Search.ts:113](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L113)

##### Returns

`boolean`

***

### message

#### Get Signature

> **get** **message**(): [`Message`](../../YTNodes/classes/Message.md) \| `undefined`

Defined in: [src/parser/ytmusic/Search.ts:125](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L125)

##### Returns

[`Message`](../../YTNodes/classes/Message.md) \| `undefined`

***

### page

#### Get Signature

> **get** **page**(): [`ISearchResponse`](../../../../type-aliases/ISearchResponse.md)

Defined in: [src/parser/ytmusic/Search.ts:149](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L149)

##### Returns

[`ISearchResponse`](../../../../type-aliases/ISearchResponse.md)

***

### playlists

#### Get Signature

> **get** **playlists**(): [`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

Defined in: [src/parser/ytmusic/Search.ts:145](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L145)

##### Returns

[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

***

### showing\_results\_for

#### Get Signature

> **get** **showing\_results\_for**(): [`ShowingResultsFor`](../../YTNodes/classes/ShowingResultsFor.md) \| `undefined`

Defined in: [src/parser/ytmusic/Search.ts:121](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L121)

##### Returns

[`ShowingResultsFor`](../../YTNodes/classes/ShowingResultsFor.md) \| `undefined`

***

### songs

#### Get Signature

> **get** **songs**(): [`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

Defined in: [src/parser/ytmusic/Search.ts:129](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L129)

##### Returns

[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

***

### videos

#### Get Signature

> **get** **videos**(): [`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

Defined in: [src/parser/ytmusic/Search.ts:133](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L133)

##### Returns

[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| `undefined`

## Methods

### applyFilter()

> **applyFilter**(`target_filter`): `Promise`\<`Search`\>

Defined in: [src/parser/ytmusic/Search.ts:86](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L86)

Applies given filter to the search.

#### Parameters

##### target\_filter

`string` | [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<`Search`\>

***

### getContinuation()

> **getContinuation**(): `Promise`\<`SearchContinuation`\>

Defined in: [src/parser/ytmusic/Search.ts:71](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L71)

Retrieves search continuation. Only available for filtered searches and shelf continuations.

#### Returns

`Promise`\<`SearchContinuation`\>

***

### getMore()

> **getMore**(`shelf`): `Promise`\<`Search`\>

Defined in: [src/parser/ytmusic/Search.ts:56](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Search.ts#L56)

Loads more items for the given shelf.

#### Parameters

##### shelf

[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) | `undefined`

#### Returns

`Promise`\<`Search`\>

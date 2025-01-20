[youtubei.js](../../../README.md) / [YTMusic](../README.md) / Library

# Class: Library

## Constructors

### new Library()

> **new Library**(`response`, `actions`): [`Library`](Library.md)

#### Parameters

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`Library`](Library.md)

#### Defined in

[src/parser/ytmusic/Library.ts:29](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L29)

## Properties

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| [`Grid`](../../YTNodes/classes/Grid.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L27)

***

### header?

> `optional` **header**: [`MusicSideAlignedItem`](../../YTNodes/classes/MusicSideAlignedItem.md)

#### Defined in

[src/parser/ytmusic/Library.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L26)

## Accessors

### filters

> `get` **filters**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/ytmusic/Library.ts:142](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L142)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/Library.ts:132](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L132)

***

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/Library.ts:146](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L146)

***

### sort\_options

> `get` **sort\_options**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/ytmusic/Library.ts:136](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L136)

## Methods

### applyFilter()

> **applyFilter**(`filter`): `Promise`\<[`Library`](Library.md)\>

Applies given filter to the library.

#### Parameters

• **filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<[`Library`](Library.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:94](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L94)

***

### applySort()

> **applySort**(`sort_by`): `Promise`\<[`Library`](Library.md)\>

Applies given sort option to the library items.

#### Parameters

• **sort\_by**: `string` \| [`MusicMultiSelectMenuItem`](../../YTNodes/classes/MusicMultiSelectMenuItem.md)

#### Returns

`Promise`\<[`Library`](Library.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:44](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L44)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

Retrieves continuation of the library items.

#### Returns

`Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:120](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Library.ts#L120)

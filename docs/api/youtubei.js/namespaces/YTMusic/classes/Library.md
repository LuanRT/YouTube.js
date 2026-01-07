[youtubei.js](../../../../README.md) / [YTMusic](../README.md) / Library

# Class: Library

Defined in: [src/parser/ytmusic/Library.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L21)

## Constructors

### Constructor

> **new Library**(`response`, `actions`): `Library`

Defined in: [src/parser/ytmusic/Library.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L29)

#### Parameters

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`Library`

## Properties

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| [`Grid`](../../YTNodes/classes/Grid.md)\>

Defined in: [src/parser/ytmusic/Library.ts:27](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L27)

***

### header?

> `optional` **header**: [`MusicSideAlignedItem`](../../YTNodes/classes/MusicSideAlignedItem.md)

Defined in: [src/parser/ytmusic/Library.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L26)

## Accessors

### filters

#### Get Signature

> **get** **filters**(): `string`[]

Defined in: [src/parser/ytmusic/Library.ts:142](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L142)

##### Returns

`string`[]

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/ytmusic/Library.ts:132](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L132)

##### Returns

`boolean`

***

### page

#### Get Signature

> **get** **page**(): [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

Defined in: [src/parser/ytmusic/Library.ts:146](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L146)

##### Returns

[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

***

### sort\_options

#### Get Signature

> **get** **sort\_options**(): `string`[]

Defined in: [src/parser/ytmusic/Library.ts:136](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L136)

##### Returns

`string`[]

## Methods

### applyFilter()

> **applyFilter**(`filter`): `Promise`\<`Library`\>

Defined in: [src/parser/ytmusic/Library.ts:94](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L94)

Applies given filter to the library.

#### Parameters

##### filter

`string` | [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<`Library`\>

***

### applySort()

> **applySort**(`sort_by`): `Promise`\<`Library`\>

Defined in: [src/parser/ytmusic/Library.ts:44](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L44)

Applies given sort option to the library items.

#### Parameters

##### sort\_by

`string` | [`MusicMultiSelectMenuItem`](../../YTNodes/classes/MusicMultiSelectMenuItem.md)

#### Returns

`Promise`\<`Library`\>

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

Defined in: [src/parser/ytmusic/Library.ts:120](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L120)

Retrieves continuation of the library items.

#### Returns

`Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

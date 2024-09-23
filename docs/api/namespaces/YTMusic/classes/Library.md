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

[src/parser/ytmusic/Library.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L28)

## Properties

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicShelf`](../../YTNodes/classes/MusicShelf.md) \| [`Grid`](../../YTNodes/classes/Grid.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:26](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L26)

***

### header?

> `optional` **header**: [`MusicSideAlignedItem`](../../YTNodes/classes/MusicSideAlignedItem.md)

#### Defined in

[src/parser/ytmusic/Library.ts:25](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L25)

## Accessors

### filters

> `get` **filters**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/ytmusic/Library.ts:141](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L141)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/Library.ts:131](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L131)

***

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/Library.ts:145](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L145)

***

### sort\_options

> `get` **sort\_options**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/ytmusic/Library.ts:135](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L135)

## Methods

### applyFilter()

> **applyFilter**(`filter`): `Promise`\<[`Library`](Library.md)\>

Applies given filter to the library.

#### Parameters

• **filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<[`Library`](Library.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:93](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L93)

***

### applySort()

> **applySort**(`sort_by`): `Promise`\<[`Library`](Library.md)\>

Applies given sort option to the library items.

#### Parameters

• **sort\_by**: `string` \| [`MusicMultiSelectMenuItem`](../../YTNodes/classes/MusicMultiSelectMenuItem.md)

#### Returns

`Promise`\<[`Library`](Library.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:43](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L43)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

Retrieves continuation of the library items.

#### Returns

`Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:119](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Library.ts#L119)

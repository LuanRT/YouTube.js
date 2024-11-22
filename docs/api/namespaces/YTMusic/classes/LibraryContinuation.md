[youtubei.js](../../../README.md) / [YTMusic](../README.md) / LibraryContinuation

# Class: LibraryContinuation

## Constructors

### new LibraryContinuation()

> **new LibraryContinuation**(`response`, `actions`): [`LibraryContinuation`](LibraryContinuation.md)

#### Parameters

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`LibraryContinuation`](LibraryContinuation.md)

#### Defined in

[src/parser/ytmusic/Library.ts:157](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/ytmusic/Library.ts#L157)

## Properties

### contents

> **contents**: [`MusicShelfContinuation`](../../../classes/MusicShelfContinuation.md) \| [`GridContinuation`](../../../classes/GridContinuation.md)

#### Defined in

[src/parser/ytmusic/Library.ts:155](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/ytmusic/Library.ts#L155)

## Accessors

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/Library.ts:181](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/ytmusic/Library.ts#L181)

***

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/Library.ts:185](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/ytmusic/Library.ts#L185)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

#### Returns

`Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:169](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/ytmusic/Library.ts#L169)

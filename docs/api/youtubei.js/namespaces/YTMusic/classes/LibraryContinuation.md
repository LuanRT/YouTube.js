[youtubei.js](../../../../README.md) / [YTMusic](../README.md) / LibraryContinuation

# Class: LibraryContinuation

Defined in: [src/parser/ytmusic/Library.ts:151](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L151)

## Constructors

### Constructor

> **new LibraryContinuation**(`response`, `actions`): `LibraryContinuation`

Defined in: [src/parser/ytmusic/Library.ts:158](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L158)

#### Parameters

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`LibraryContinuation`

## Properties

### contents

> **contents**: [`MusicShelfContinuation`](../../../../classes/MusicShelfContinuation.md) \| [`GridContinuation`](../../../../classes/GridContinuation.md)

Defined in: [src/parser/ytmusic/Library.ts:156](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L156)

## Accessors

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/ytmusic/Library.ts:182](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L182)

##### Returns

`boolean`

***

### page

#### Get Signature

> **get** **page**(): [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

Defined in: [src/parser/ytmusic/Library.ts:186](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L186)

##### Returns

[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<`LibraryContinuation`\>

Defined in: [src/parser/ytmusic/Library.ts:170](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Library.ts#L170)

#### Returns

`Promise`\<`LibraryContinuation`\>

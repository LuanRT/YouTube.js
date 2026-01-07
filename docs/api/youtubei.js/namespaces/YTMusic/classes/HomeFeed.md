[youtubei.js](../../../../README.md) / [YTMusic](../README.md) / HomeFeed

# Class: HomeFeed

Defined in: [src/parser/ytmusic/HomeFeed.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L14)

## Constructors

### Constructor

> **new HomeFeed**(`response`, `actions`): `HomeFeed`

Defined in: [src/parser/ytmusic/HomeFeed.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L22)

#### Parameters

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`HomeFeed`

## Properties

### header?

> `optional` **header**: [`ChipCloud`](../../YTNodes/classes/ChipCloud.md)

Defined in: [src/parser/ytmusic/HomeFeed.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L20)

***

### sections?

> `optional` **sections**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md) \| [`MusicTastebuilderShelf`](../../YTNodes/classes/MusicTastebuilderShelf.md)\>

Defined in: [src/parser/ytmusic/HomeFeed.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L19)

## Accessors

### filters

#### Get Signature

> **get** **filters**(): `string`[]

Defined in: [src/parser/ytmusic/HomeFeed.ts:84](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L84)

##### Returns

`string`[]

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/ytmusic/HomeFeed.ts:88](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L88)

##### Returns

`boolean`

***

### page

#### Get Signature

> **get** **page**(): [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

Defined in: [src/parser/ytmusic/HomeFeed.ts:92](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L92)

##### Returns

[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

## Methods

### applyFilter()

> **applyFilter**(`target_filter`): `Promise`\<`HomeFeed`\>

Defined in: [src/parser/ytmusic/HomeFeed.ts:61](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L61)

#### Parameters

##### target\_filter

`string` | [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<`HomeFeed`\>

***

### getContinuation()

> **getContinuation**(): `Promise`\<`HomeFeed`\>

Defined in: [src/parser/ytmusic/HomeFeed.ts:49](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/HomeFeed.ts#L49)

Retrieves home feed continuation.

#### Returns

`Promise`\<`HomeFeed`\>

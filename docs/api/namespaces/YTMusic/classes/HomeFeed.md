[youtubei.js](../../../README.md) / [YTMusic](../README.md) / HomeFeed

# Class: HomeFeed

## Constructors

### new HomeFeed()

> **new HomeFeed**(`response`, `actions`): [`HomeFeed`](HomeFeed.md)

#### Parameters

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`HomeFeed`](HomeFeed.md)

#### Defined in

[src/parser/ytmusic/HomeFeed.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/HomeFeed.ts#L22)

## Properties

### header?

> `optional` **header**: [`ChipCloud`](../../YTNodes/classes/ChipCloud.md)

#### Defined in

[src/parser/ytmusic/HomeFeed.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/HomeFeed.ts#L20)

***

### sections?

> `optional` **sections**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md) \| [`MusicTastebuilderShelf`](../../YTNodes/classes/MusicTastebuilderShelf.md)\>

#### Defined in

[src/parser/ytmusic/HomeFeed.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/HomeFeed.ts#L19)

## Accessors

### filters

> `get` **filters**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/ytmusic/HomeFeed.ts:84](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/HomeFeed.ts#L84)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/HomeFeed.ts:88](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/HomeFeed.ts#L88)

***

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/HomeFeed.ts:92](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/HomeFeed.ts#L92)

## Methods

### applyFilter()

> **applyFilter**(`target_filter`): `Promise`\<[`HomeFeed`](HomeFeed.md)\>

#### Parameters

• **target\_filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<[`HomeFeed`](HomeFeed.md)\>

#### Defined in

[src/parser/ytmusic/HomeFeed.ts:61](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/HomeFeed.ts#L61)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`HomeFeed`](HomeFeed.md)\>

Retrieves home feed continuation.

#### Returns

`Promise`\<[`HomeFeed`](HomeFeed.md)\>

#### Defined in

[src/parser/ytmusic/HomeFeed.ts:49](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/HomeFeed.ts#L49)

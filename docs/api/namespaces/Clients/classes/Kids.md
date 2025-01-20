[youtubei.js](../../../README.md) / [Clients](../README.md) / Kids

# Class: Kids

## Constructors

### new Kids()

> **new Kids**(`session`): [`Kids`](Kids.md)

#### Parameters

• **session**: [`Session`](../../../classes/Session.md)

#### Returns

[`Kids`](Kids.md)

#### Defined in

[src/core/clients/Kids.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Kids.ts#L12)

## Methods

### blockChannel()

> **blockChannel**(`channel_id`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)[]\>

Retrieves the list of supervised accounts that the signed-in user has
access to, and blocks the given channel for each of them.

#### Parameters

• **channel\_id**: `string`

The channel id to block.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)[]\>

A list of API responses.

#### Defined in

[src/core/clients/Kids.ts:73](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Kids.ts#L73)

***

### getChannel()

> **getChannel**(`channel_id`): `Promise`\<[`Channel`](../../YTKids/classes/Channel.md)\>

#### Parameters

• **channel\_id**: `string`

#### Returns

`Promise`\<[`Channel`](../../YTKids/classes/Channel.md)\>

#### Defined in

[src/core/clients/Kids.ts:55](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Kids.ts#L55)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../../YTKids/classes/HomeFeed.md)\>

#### Returns

`Promise`\<[`HomeFeed`](../../YTKids/classes/HomeFeed.md)\>

#### Defined in

[src/core/clients/Kids.ts:61](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Kids.ts#L61)

***

### getInfo()

> **getInfo**(`video_id`): `Promise`\<[`VideoInfo`](../../YTKids/classes/VideoInfo.md)\>

#### Parameters

• **video\_id**: `string`

#### Returns

`Promise`\<[`VideoInfo`](../../YTKids/classes/VideoInfo.md)\>

#### Defined in

[src/core/clients/Kids.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Kids.ts#L22)

***

### search()

> **search**(`query`): `Promise`\<[`Search`](../../YTKids/classes/Search.md)\>

#### Parameters

• **query**: `string`

#### Returns

`Promise`\<[`Search`](../../YTKids/classes/Search.md)\>

#### Defined in

[src/core/clients/Kids.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Kids.ts#L16)

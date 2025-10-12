[youtubei.js](../../../../README.md) / [Clients](../README.md) / Kids

# Class: Kids

Defined in: [src/core/clients/Kids.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Kids.ts#L9)

## Constructors

### Constructor

> **new Kids**(`session`): `Kids`

Defined in: [src/core/clients/Kids.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Kids.ts#L12)

#### Parameters

##### session

[`Session`](../../../../classes/Session.md)

#### Returns

`Kids`

## Methods

### blockChannel()

> **blockChannel**(`channel_id`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)[]\>

Defined in: [src/core/clients/Kids.ts:79](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Kids.ts#L79)

Retrieves the list of supervised accounts that the signed-in user has
access to, and blocks the given channel for each of them.

#### Parameters

##### channel\_id

`string`

The channel id to block.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)[]\>

A list of API responses.

***

### getChannel()

> **getChannel**(`channel_id`): `Promise`\<[`Channel`](../../YTKids/classes/Channel.md)\>

Defined in: [src/core/clients/Kids.ts:61](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Kids.ts#L61)

#### Parameters

##### channel\_id

`string`

#### Returns

`Promise`\<[`Channel`](../../YTKids/classes/Channel.md)\>

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../../YTKids/classes/HomeFeed.md)\>

Defined in: [src/core/clients/Kids.ts:67](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Kids.ts#L67)

#### Returns

`Promise`\<[`HomeFeed`](../../YTKids/classes/HomeFeed.md)\>

***

### getInfo()

> **getInfo**(`video_id`, `options?`): `Promise`\<[`VideoInfo`](../../YTKids/classes/VideoInfo.md)\>

Defined in: [src/core/clients/Kids.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Kids.ts#L22)

#### Parameters

##### video\_id

`string`

##### options?

`Omit`\<[`GetVideoInfoOptions`](../../Types/interfaces/GetVideoInfoOptions.md), `"client"`\>

#### Returns

`Promise`\<[`VideoInfo`](../../YTKids/classes/VideoInfo.md)\>

***

### search()

> **search**(`query`): `Promise`\<[`Search`](../../YTKids/classes/Search.md)\>

Defined in: [src/core/clients/Kids.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Kids.ts#L16)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`Search`](../../YTKids/classes/Search.md)\>

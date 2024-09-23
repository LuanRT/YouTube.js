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

[src/core/clients/Kids.ts:18](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Kids.ts#L18)

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

[src/core/clients/Kids.ts:91](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Kids.ts#L91)

***

### getChannel()

> **getChannel**(`channel_id`): `Promise`\<[`Channel`](../../YTKids/classes/Channel.md)\>

Retrieves the contents of the given channel.

#### Parameters

• **channel\_id**: `string`

The channel id.

#### Returns

`Promise`\<[`Channel`](../../YTKids/classes/Channel.md)\>

#### Defined in

[src/core/clients/Kids.ts:62](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Kids.ts#L62)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../../YTKids/classes/HomeFeed.md)\>

Retrieves the home feed.

#### Returns

`Promise`\<[`HomeFeed`](../../YTKids/classes/HomeFeed.md)\>

#### Defined in

[src/core/clients/Kids.ts:75](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Kids.ts#L75)

***

### getInfo()

> **getInfo**(`video_id`): `Promise`\<[`VideoInfo`](../../YTKids/classes/VideoInfo.md)\>

Retrieves video info.

#### Parameters

• **video\_id**: `string`

The video id.

#### Returns

`Promise`\<[`VideoInfo`](../../YTKids/classes/VideoInfo.md)\>

#### Defined in

[src/core/clients/Kids.ts:37](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Kids.ts#L37)

***

### search()

> **search**(`query`): `Promise`\<[`Search`](../../YTKids/classes/Search.md)\>

Searches the given query.

#### Parameters

• **query**: `string`

The query.

#### Returns

`Promise`\<[`Search`](../../YTKids/classes/Search.md)\>

#### Defined in

[src/core/clients/Kids.ts:26](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Kids.ts#L26)

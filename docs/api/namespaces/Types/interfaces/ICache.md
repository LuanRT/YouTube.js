[youtubei.js](../../../README.md) / [Types](../README.md) / ICache

# Interface: ICache

## Properties

### cache\_dir

> **cache\_dir**: `string`

#### Defined in

[src/types/Cache.ts:2](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/Cache.ts#L2)

## Methods

### get()

> **get**(`key`): `Promise`\<`undefined` \| `ArrayBuffer`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`undefined` \| `ArrayBuffer`\>

#### Defined in

[src/types/Cache.ts:3](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/Cache.ts#L3)

***

### remove()

> **remove**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/Cache.ts:5](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/Cache.ts#L5)

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string`

• **value**: `ArrayBuffer`

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/Cache.ts:4](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/Cache.ts#L4)

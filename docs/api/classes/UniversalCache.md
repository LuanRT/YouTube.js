[youtubei.js](../README.md) / UniversalCache

# Class: UniversalCache

## Implements

- [`ICache`](../namespaces/Types/interfaces/ICache.md)

## Constructors

### new UniversalCache()

> **new UniversalCache**(`persistent`, `persistent_directory`?): [`UniversalCache`](UniversalCache.md)

#### Parameters

• **persistent**: `boolean`

• **persistent\_directory?**: `string`

#### Returns

[`UniversalCache`](UniversalCache.md)

#### Defined in

[src/utils/Cache.ts:6](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/Cache.ts#L6)

## Accessors

### cache\_dir

> `get` **cache\_dir**(): `string`

#### Returns

`string`

#### Implementation of

[`ICache`](../namespaces/Types/interfaces/ICache.md).[`cache_dir`](../namespaces/Types/interfaces/ICache.md#cache_dir)

#### Defined in

[src/utils/Cache.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/Cache.ts#L9)

## Methods

### get()

> **get**(`key`): `Promise`\<`undefined` \| `ArrayBuffer`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`undefined` \| `ArrayBuffer`\>

#### Implementation of

[`ICache`](../namespaces/Types/interfaces/ICache.md).[`get`](../namespaces/Types/interfaces/ICache.md#get)

#### Defined in

[src/utils/Cache.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/Cache.ts#L12)

***

### remove()

> **remove**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ICache`](../namespaces/Types/interfaces/ICache.md).[`remove`](../namespaces/Types/interfaces/ICache.md#remove)

#### Defined in

[src/utils/Cache.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/Cache.ts#L18)

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string`

• **value**: `ArrayBuffer`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ICache`](../namespaces/Types/interfaces/ICache.md).[`set`](../namespaces/Types/interfaces/ICache.md#set)

#### Defined in

[src/utils/Cache.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/Cache.ts#L15)

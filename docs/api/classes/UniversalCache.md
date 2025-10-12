[youtubei.js](../README.md) / UniversalCache

# Class: UniversalCache

Defined in: [src/utils/Cache.ts:4](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/Cache.ts#L4)

## Implements

- [`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

## Constructors

### Constructor

> **new UniversalCache**(`persistent`, `persistent_directory?`): `UniversalCache`

Defined in: [src/utils/Cache.ts:6](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/Cache.ts#L6)

#### Parameters

##### persistent

`boolean`

##### persistent\_directory?

`string`

#### Returns

`UniversalCache`

## Accessors

### cache\_dir

#### Get Signature

> **get** **cache\_dir**(): `string`

Defined in: [src/utils/Cache.ts:9](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/Cache.ts#L9)

##### Returns

`string`

#### Implementation of

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md).[`cache_dir`](../youtubei.js/namespaces/Types/interfaces/ICache.md#cache_dir)

## Methods

### get()

> **get**(`key`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/utils/Cache.ts:12](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/Cache.ts#L12)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md).[`get`](../youtubei.js/namespaces/Types/interfaces/ICache.md#get)

***

### remove()

> **remove**(`key`): `Promise`\<`void`\>

Defined in: [src/utils/Cache.ts:18](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/Cache.ts#L18)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md).[`remove`](../youtubei.js/namespaces/Types/interfaces/ICache.md#remove)

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

Defined in: [src/utils/Cache.ts:15](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/Cache.ts#L15)

#### Parameters

##### key

`string`

##### value

`ArrayBuffer`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md).[`set`](../youtubei.js/namespaces/Types/interfaces/ICache.md#set)

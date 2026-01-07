[youtubei.js](../../../../README.md) / [Types](../README.md) / ICache

# Interface: ICache

Defined in: [src/types/Cache.ts:1](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/Cache.ts#L1)

## Properties

### cache\_dir

> **cache\_dir**: `string`

Defined in: [src/types/Cache.ts:2](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/Cache.ts#L2)

## Methods

### get()

> **get**(`key`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/types/Cache.ts:3](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/Cache.ts#L3)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

***

### remove()

> **remove**(`key`): `Promise`\<`void`\>

Defined in: [src/types/Cache.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/Cache.ts#L5)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

Defined in: [src/types/Cache.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/Cache.ts#L4)

#### Parameters

##### key

`string`

##### value

`ArrayBuffer`

#### Returns

`Promise`\<`void`\>

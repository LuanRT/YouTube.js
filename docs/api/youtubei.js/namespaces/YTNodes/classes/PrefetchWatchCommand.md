[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / PrefetchWatchCommand

# Class: PrefetchWatchCommand

Defined in: [src/parser/classes/endpoints/PrefetchWatchCommand.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/PrefetchWatchCommand.ts#L4)

## Extends

- [`WatchEndpoint`](WatchEndpoint.md)

## Constructors

### Constructor

> **new PrefetchWatchCommand**(`data`): `PrefetchWatchCommand`

Defined in: [src/parser/classes/endpoints/PrefetchWatchCommand.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/PrefetchWatchCommand.ts#L7)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`PrefetchWatchCommand`

#### Overrides

[`WatchEndpoint`](WatchEndpoint.md).[`constructor`](WatchEndpoint.md#constructor)

## Properties

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`type`](WatchEndpoint.md#type)

***

### type

> `static` **type**: `string` = `'PrefetchWatchCommand'`

Defined in: [src/parser/classes/endpoints/PrefetchWatchCommand.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/PrefetchWatchCommand.ts#L5)

#### Overrides

[`WatchEndpoint`](WatchEndpoint.md).[`type`](WatchEndpoint.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L29)

Cast to one of the given types.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`as`](WatchEndpoint.md#as)

***

### buildRequest()

> **buildRequest**(): [`WatchRequest`](../../../../type-aliases/WatchRequest.md)

Defined in: [src/parser/classes/endpoints/WatchEndpoint.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/WatchEndpoint.ts#L20)

#### Returns

[`WatchRequest`](../../../../type-aliases/WatchRequest.md)

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`buildRequest`](WatchEndpoint.md#buildrequest)

***

### getApiPath()

> **getApiPath**(): `string`

Defined in: [src/parser/classes/endpoints/WatchEndpoint.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/WatchEndpoint.ts#L16)

#### Returns

`string`

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`getApiPath`](WatchEndpoint.md#getapipath)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is PrefetchWatchCommand & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L41)

Check for a key without asserting the type.

#### Type Parameters

##### T

`T` *extends* `string`

##### R

`R` = `any`

#### Parameters

##### key

`T`

The key to check

#### Returns

`this is PrefetchWatchCommand & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`hasKey`](WatchEndpoint.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L19)

Check if the node is of the given type.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`is`](WatchEndpoint.md#is)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L51)

Assert that the node has the given key and return it.

#### Type Parameters

##### T

`T` *extends* `string`

##### R

`R` = `any`

#### Parameters

##### key

`T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`key`](WatchEndpoint.md#key)

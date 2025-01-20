[youtubei.js](../../../README.md) / [YTNodes](../README.md) / PrefetchWatchCommand

# Class: PrefetchWatchCommand

## Extends

- [`WatchEndpoint`](WatchEndpoint.md)

## Constructors

### new PrefetchWatchCommand()

> **new PrefetchWatchCommand**(`data`): [`PrefetchWatchCommand`](PrefetchWatchCommand.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`PrefetchWatchCommand`](PrefetchWatchCommand.md)

#### Overrides

[`WatchEndpoint`](WatchEndpoint.md).[`constructor`](WatchEndpoint.md#constructors)

#### Defined in

[src/parser/classes/endpoints/PrefetchWatchCommand.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/endpoints/PrefetchWatchCommand.ts#L7)

## Properties

### type

> `readonly` **type**: `string`

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`type`](WatchEndpoint.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'PrefetchWatchCommand'`

#### Overrides

[`WatchEndpoint`](WatchEndpoint.md).[`type`](WatchEndpoint.md#type-1)

#### Defined in

[src/parser/classes/endpoints/PrefetchWatchCommand.ts:5](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/endpoints/PrefetchWatchCommand.ts#L5)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`as`](WatchEndpoint.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### buildRequest()

> **buildRequest**(): [`WatchRequest`](../../APIResponseTypes/type-aliases/WatchRequest.md)

#### Returns

[`WatchRequest`](../../APIResponseTypes/type-aliases/WatchRequest.md)

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`buildRequest`](WatchEndpoint.md#buildrequest)

#### Defined in

[src/parser/classes/endpoints/WatchEndpoint.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/endpoints/WatchEndpoint.ts#L20)

***

### getApiPath()

> **getApiPath**(): `string`

#### Returns

`string`

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`getApiPath`](WatchEndpoint.md#getapipath)

#### Defined in

[src/parser/classes/endpoints/WatchEndpoint.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/endpoints/WatchEndpoint.ts#L16)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is PrefetchWatchCommand & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is PrefetchWatchCommand & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`hasKey`](WatchEndpoint.md#haskey)

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L50)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Check if the node is of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`is`](WatchEndpoint.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L28)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Assert that the node has the given key and return it.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`WatchEndpoint`](WatchEndpoint.md).[`key`](WatchEndpoint.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

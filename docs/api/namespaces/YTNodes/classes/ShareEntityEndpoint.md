[youtubei.js](../../../README.md) / [YTNodes](../README.md) / ShareEntityEndpoint

# Class: ShareEntityEndpoint

## Extends

- [`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md)

## Constructors

### new ShareEntityEndpoint()

> **new ShareEntityEndpoint**(`data`): [`ShareEntityEndpoint`](ShareEntityEndpoint.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`ShareEntityEndpoint`](ShareEntityEndpoint.md)

#### Overrides

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`constructor`](ShareEntityServiceEndpoint.md#constructors)

#### Defined in

[src/parser/classes/endpoints/ShareEntityEndpoint.ts:7](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/endpoints/ShareEntityEndpoint.ts#L7)

## Properties

### type

> `readonly` **type**: `string`

#### Inherited from

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`type`](ShareEntityServiceEndpoint.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'ShareEntityEndpoint'`

#### Overrides

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`type`](ShareEntityServiceEndpoint.md#type-1)

#### Defined in

[src/parser/classes/endpoints/ShareEntityEndpoint.ts:5](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/endpoints/ShareEntityEndpoint.ts#L5)

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

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`as`](ShareEntityServiceEndpoint.md#as)

#### Defined in

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L29)

***

### buildRequest()

> **buildRequest**(): [`ShareEntityServiceRequest`](../../APIResponseTypes/type-aliases/ShareEntityServiceRequest.md)

#### Returns

[`ShareEntityServiceRequest`](../../APIResponseTypes/type-aliases/ShareEntityServiceRequest.md)

#### Inherited from

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`buildRequest`](ShareEntityServiceEndpoint.md#buildrequest)

#### Defined in

[src/parser/classes/endpoints/ShareEntityServiceEndpoint.ts:20](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/endpoints/ShareEntityServiceEndpoint.ts#L20)

***

### getApiPath()

> **getApiPath**(): `string`

#### Returns

`string`

#### Inherited from

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`getApiPath`](ShareEntityServiceEndpoint.md#getapipath)

#### Defined in

[src/parser/classes/endpoints/ShareEntityServiceEndpoint.ts:16](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/endpoints/ShareEntityServiceEndpoint.ts#L16)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is ShareEntityEndpoint & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is ShareEntityEndpoint & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`hasKey`](ShareEntityServiceEndpoint.md#haskey)

#### Defined in

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L41)

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

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`is`](ShareEntityServiceEndpoint.md#is)

#### Defined in

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L19)

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

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`key`](ShareEntityServiceEndpoint.md#key)

#### Defined in

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L51)

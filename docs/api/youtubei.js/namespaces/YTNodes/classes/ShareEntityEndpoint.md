[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / ShareEntityEndpoint

# Class: ShareEntityEndpoint

Defined in: [src/parser/classes/endpoints/ShareEntityEndpoint.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/ShareEntityEndpoint.ts#L4)

## Extends

- [`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md)

## Constructors

### Constructor

> **new ShareEntityEndpoint**(`data`): `ShareEntityEndpoint`

Defined in: [src/parser/classes/endpoints/ShareEntityEndpoint.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/ShareEntityEndpoint.ts#L7)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`ShareEntityEndpoint`

#### Overrides

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`constructor`](ShareEntityServiceEndpoint.md#constructor)

## Properties

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`type`](ShareEntityServiceEndpoint.md#type)

***

### type

> `static` **type**: `string` = `'ShareEntityEndpoint'`

Defined in: [src/parser/classes/endpoints/ShareEntityEndpoint.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/ShareEntityEndpoint.ts#L5)

#### Overrides

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`type`](ShareEntityServiceEndpoint.md#type-1)

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

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`as`](ShareEntityServiceEndpoint.md#as)

***

### buildRequest()

> **buildRequest**(): [`ShareEntityServiceRequest`](../../../../type-aliases/ShareEntityServiceRequest.md)

Defined in: [src/parser/classes/endpoints/ShareEntityServiceEndpoint.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/ShareEntityServiceEndpoint.ts#L20)

#### Returns

[`ShareEntityServiceRequest`](../../../../type-aliases/ShareEntityServiceRequest.md)

#### Inherited from

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`buildRequest`](ShareEntityServiceEndpoint.md#buildrequest)

***

### getApiPath()

> **getApiPath**(): `string`

Defined in: [src/parser/classes/endpoints/ShareEntityServiceEndpoint.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/ShareEntityServiceEndpoint.ts#L16)

#### Returns

`string`

#### Inherited from

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`getApiPath`](ShareEntityServiceEndpoint.md#getapipath)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is ShareEntityEndpoint & { [k in string]: R }`

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

`this is ShareEntityEndpoint & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`hasKey`](ShareEntityServiceEndpoint.md#haskey)

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

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`is`](ShareEntityServiceEndpoint.md#is)

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

[`ShareEntityServiceEndpoint`](ShareEntityServiceEndpoint.md).[`key`](ShareEntityServiceEndpoint.md#key)

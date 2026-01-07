[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / AddToPlaylistEndpoint

# Class: AddToPlaylistEndpoint

Defined in: [src/parser/classes/endpoints/AddToPlaylistEndpoint.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/AddToPlaylistEndpoint.ts#L4)

## Extends

- [`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md)

## Constructors

### Constructor

> **new AddToPlaylistEndpoint**(`data`): `AddToPlaylistEndpoint`

Defined in: [src/parser/classes/endpoints/AddToPlaylistEndpoint.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/AddToPlaylistEndpoint.ts#L7)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`AddToPlaylistEndpoint`

#### Overrides

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`constructor`](AddToPlaylistServiceEndpoint.md#constructor)

## Properties

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`type`](AddToPlaylistServiceEndpoint.md#type)

***

### type

> `static` **type**: `string` = `'AddToPlaylistEndpoint'`

Defined in: [src/parser/classes/endpoints/AddToPlaylistEndpoint.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/AddToPlaylistEndpoint.ts#L5)

#### Overrides

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`type`](AddToPlaylistServiceEndpoint.md#type-1)

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

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`as`](AddToPlaylistServiceEndpoint.md#as)

***

### buildRequest()

> **buildRequest**(): [`AddToPlaylistServiceRequest`](../../../../type-aliases/AddToPlaylistServiceRequest.md)

Defined in: [src/parser/classes/endpoints/AddToPlaylistServiceEndpoint.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/AddToPlaylistServiceEndpoint.ts#L19)

#### Returns

[`AddToPlaylistServiceRequest`](../../../../type-aliases/AddToPlaylistServiceRequest.md)

#### Inherited from

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`buildRequest`](AddToPlaylistServiceEndpoint.md#buildrequest)

***

### getApiPath()

> **getApiPath**(): `string`

Defined in: [src/parser/classes/endpoints/AddToPlaylistServiceEndpoint.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/endpoints/AddToPlaylistServiceEndpoint.ts#L15)

#### Returns

`string`

#### Inherited from

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`getApiPath`](AddToPlaylistServiceEndpoint.md#getapipath)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is AddToPlaylistEndpoint & { [k in string]: R }`

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

`this is AddToPlaylistEndpoint & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`hasKey`](AddToPlaylistServiceEndpoint.md#haskey)

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

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`is`](AddToPlaylistServiceEndpoint.md#is)

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

[`AddToPlaylistServiceEndpoint`](AddToPlaylistServiceEndpoint.md).[`key`](AddToPlaylistServiceEndpoint.md#key)

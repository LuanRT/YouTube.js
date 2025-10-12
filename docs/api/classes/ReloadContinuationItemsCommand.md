[youtubei.js](../README.md) / ReloadContinuationItemsCommand

# Class: ReloadContinuationItemsCommand

Defined in: [src/parser/continuations.ts:50](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/continuations.ts#L50)

## Extends

- [`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new ReloadContinuationItemsCommand**(`data`): `ReloadContinuationItemsCommand`

Defined in: [src/parser/continuations.ts:57](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/continuations.ts#L57)

#### Parameters

##### data

[`RawNode`](../type-aliases/RawNode.md)

#### Returns

`ReloadContinuationItemsCommand`

#### Overrides

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`constructor`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#constructor)

## Properties

### contents

> **contents**: [`ObservedArray`](../youtubei.js/namespaces/Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md)\> \| `null`

Defined in: [src/parser/continuations.ts:54](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/continuations.ts#L54)

***

### slot?

> `optional` **slot**: `string`

Defined in: [src/parser/continuations.ts:55](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/continuations.ts#L55)

***

### target\_id

> **target\_id**: `string`

Defined in: [src/parser/continuations.ts:53](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/continuations.ts#L53)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`type`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#type)

***

### type

> `readonly` `static` **type**: `"reloadContinuationItemsCommand"` = `'reloadContinuationItemsCommand'`

Defined in: [src/parser/continuations.ts:51](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/continuations.ts#L51)

#### Overrides

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`type`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/helpers.ts#L29)

Cast to one of the given types.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../youtubei.js/namespaces/Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

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

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`as`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is ReloadContinuationItemsCommand & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/helpers.ts#L41)

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

`this is ReloadContinuationItemsCommand & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`hasKey`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/helpers.ts#L19)

Check if the node is of the given type.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../youtubei.js/namespaces/Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`is`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#is)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../youtubei.js/namespaces/Helpers/classes/Maybe.md)

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/parser/helpers.ts#L51)

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

[`Maybe`](../youtubei.js/namespaces/Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`key`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#key)

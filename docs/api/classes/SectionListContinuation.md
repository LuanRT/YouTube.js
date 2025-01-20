[youtubei.js](../README.md) / SectionListContinuation

# Class: SectionListContinuation

## Extends

- [`YTNode`](../namespaces/Helpers/classes/YTNode.md)

## Constructors

### new SectionListContinuation()

> **new SectionListContinuation**(`data`): [`SectionListContinuation`](SectionListContinuation.md)

#### Parameters

• **data**: [`RawNode`](../namespaces/APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`SectionListContinuation`](SectionListContinuation.md)

#### Overrides

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`constructor`](../namespaces/Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/continuations.ts:71](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L71)

## Properties

### contents

> **contents**: `null` \| [`ObservedArray`](../namespaces/Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../namespaces/Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/continuations.ts:69](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L69)

***

### continuation

> **continuation**: `string`

#### Defined in

[src/parser/continuations.ts:68](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L68)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`type`](../namespaces/Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `readonly` `static` **type**: `"sectionListContinuation"` = `'sectionListContinuation'`

#### Overrides

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`type`](../namespaces/Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/continuations.ts:66](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L66)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../namespaces/Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../namespaces/Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`as`](../namespaces/Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is SectionListContinuation & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is SectionListContinuation & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`hasKey`](../namespaces/Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L50)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Check if the node is of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](../namespaces/Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../namespaces/Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`is`](../namespaces/Helpers/classes/YTNode.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L28)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../namespaces/Helpers/classes/Maybe.md)

Assert that the node has the given key and return it.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

[`Maybe`](../namespaces/Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`key`](../namespaces/Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

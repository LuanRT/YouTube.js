[youtubei.js](../../../README.md) / [YTNodes](../README.md) / GuideSubscriptionsSection

# Class: GuideSubscriptionsSection

## Extends

- [`GuideSection`](GuideSection.md)

## Constructors

### new GuideSubscriptionsSection()

> **new GuideSubscriptionsSection**(`data`): [`GuideSubscriptionsSection`](GuideSubscriptionsSection.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`GuideSubscriptionsSection`](GuideSubscriptionsSection.md)

#### Inherited from

[`GuideSection`](GuideSection.md).[`constructor`](GuideSection.md#constructors)

#### Defined in

[src/parser/classes/GuideSection.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideSection.ts#L12)

## Properties

### items

> **items**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`GuideSection`](GuideSection.md).[`items`](GuideSection.md#items)

#### Defined in

[src/parser/classes/GuideSection.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideSection.ts#L10)

***

### title?

> `optional` **title**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`GuideSection`](GuideSection.md).[`title`](GuideSection.md#title)

#### Defined in

[src/parser/classes/GuideSection.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideSection.ts#L9)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`GuideSection`](GuideSection.md).[`type`](GuideSection.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'GuideSubscriptionsSection'`

#### Overrides

[`GuideSection`](GuideSection.md).[`type`](GuideSection.md#type-1)

#### Defined in

[src/parser/classes/GuideSubscriptionsSection.ts:4](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideSubscriptionsSection.ts#L4)

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

[`GuideSection`](GuideSection.md).[`as`](GuideSection.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is GuideSubscriptionsSection & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is GuideSubscriptionsSection & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`GuideSection`](GuideSection.md).[`hasKey`](GuideSection.md#haskey)

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

[`GuideSection`](GuideSection.md).[`is`](GuideSection.md#is)

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

[`GuideSection`](GuideSection.md).[`key`](GuideSection.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

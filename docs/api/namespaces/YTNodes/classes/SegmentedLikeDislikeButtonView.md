[youtubei.js](../../../README.md) / [YTNodes](../README.md) / SegmentedLikeDislikeButtonView

# Class: SegmentedLikeDislikeButtonView

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new SegmentedLikeDislikeButtonView()

> **new SegmentedLikeDislikeButtonView**(`data`): [`SegmentedLikeDislikeButtonView`](SegmentedLikeDislikeButtonView.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`SegmentedLikeDislikeButtonView`](SegmentedLikeDislikeButtonView.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L25)

## Properties

### dislike\_button

> **dislike\_button**: `null` \| [`DislikeButtonView`](DislikeButtonView.md)

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L10)

***

### dynamic\_like\_count\_update\_data

> **dynamic\_like\_count\_update\_data**: `object`

#### placeholder\_like\_count\_values\_key

> **placeholder\_like\_count\_values\_key**: `string`

#### update\_delay\_loop\_id

> **update\_delay\_loop\_id**: `string`

#### update\_delay\_sec

> **update\_delay\_sec**: `number`

#### update\_status\_key

> **update\_status\_key**: `string`

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L15)

***

### icon\_type

> **icon\_type**: `string`

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L11)

***

### like\_button

> **like\_button**: `null` \| [`LikeButtonView`](LikeButtonView.md)

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L9)

***

### like\_count?

> `optional` **like\_count**: `number`

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L22)

***

### like\_count\_entity

> **like\_count\_entity**: `object`

#### key

> **key**: `string`

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L12)

***

### short\_like\_count?

> `optional` **short\_like\_count**: `string`

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L23)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'SegmentedLikeDislikeButtonView'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/SegmentedLikeDislikeButtonView.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L7)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is SegmentedLikeDislikeButtonView & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is SegmentedLikeDislikeButtonView & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

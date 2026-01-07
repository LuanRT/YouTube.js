[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / SegmentedLikeDislikeButtonView

# Class: SegmentedLikeDislikeButtonView

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:6](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L6)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new SegmentedLikeDislikeButtonView**(`data`): `SegmentedLikeDislikeButtonView`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L25)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`SegmentedLikeDislikeButtonView`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### dislike\_button

> **dislike\_button**: [`DislikeButtonView`](DislikeButtonView.md) \| `null`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L10)

***

### dynamic\_like\_count\_update\_data

> **dynamic\_like\_count\_update\_data**: `object`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L15)

#### placeholder\_like\_count\_values\_key

> **placeholder\_like\_count\_values\_key**: `string`

#### update\_delay\_loop\_id

> **update\_delay\_loop\_id**: `string`

#### update\_delay\_sec

> **update\_delay\_sec**: `number`

#### update\_status\_key

> **update\_status\_key**: `string`

***

### icon\_type

> **icon\_type**: `string`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L11)

***

### like\_button

> **like\_button**: [`LikeButtonView`](LikeButtonView.md) \| `null`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L9)

***

### like\_count?

> `optional` **like\_count**: `number`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L22)

***

### like\_count\_entity

> **like\_count\_entity**: `object`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L12)

#### key

> **key**: `string`

***

### short\_like\_count?

> `optional` **short\_like\_count**: `string`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L23)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'SegmentedLikeDislikeButtonView'`

Defined in: [src/parser/classes/SegmentedLikeDislikeButtonView.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SegmentedLikeDislikeButtonView.ts#L7)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is SegmentedLikeDislikeButtonView & { [k in string]: R }`

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

`this is SegmentedLikeDislikeButtonView & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

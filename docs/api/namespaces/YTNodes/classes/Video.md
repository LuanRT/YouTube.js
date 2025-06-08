[youtubei.js](../../../README.md) / [YTNodes](../README.md) / Video

# Class: Video

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Extended by

- [`VideoCard`](VideoCard.md)

## Constructors

### new Video()

> **new Video**(`data`): [`Video`](Video.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`Video`](Video.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/Video.ts:44](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L44)

## Properties

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/Video.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L27)

***

### badges

> **badges**: [`MetadataBadge`](MetadataBadge.md)[]

#### Defined in

[src/parser/classes/Video.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L28)

***

### byline\_text?

> `optional` **byline\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:41](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L41)

***

### description\_snippet?

> `optional` **description\_snippet**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L18)

***

### duration

> **duration**: `object`

#### seconds

> **seconds**: `number`

#### text

> **text**: `string`

#### Defined in

[src/parser/classes/Video.ts:34](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L34)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/Video.ts:29](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L29)

***

### expandable\_metadata

> **expandable\_metadata**: `null` \| [`ExpandableMetadata`](ExpandableMetadata.md)

#### Defined in

[src/parser/classes/Video.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[src/parser/classes/Video.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L16)

***

### is\_watched

> **is\_watched**: `boolean`

#### Defined in

[src/parser/classes/Video.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L39)

***

### menu

> **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/Video.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L40)

***

### published

> **published**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:30](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L30)

***

### rich\_thumbnail?

> `optional` **rich\_thumbnail**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/classes/Video.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L26)

***

### search\_video\_result\_entity\_key?

> `optional` **search\_video\_result\_entity\_key**: `string`

#### Defined in

[src/parser/classes/Video.ts:42](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L42)

***

### short\_view\_count

> **short\_view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:32](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L32)

***

### show\_action\_menu

> **show\_action\_menu**: `boolean`

#### Defined in

[src/parser/classes/Video.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L38)

***

### snippets?

> `optional` **snippets**: `object`[]

#### Defined in

[src/parser/classes/Video.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L19)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/classes/Video.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L25)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/Video.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L24)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L17)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### upcoming?

> `optional` **upcoming**: `Date`

#### Defined in

[src/parser/classes/Video.ts:33](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L33)

***

### view\_count

> **view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:31](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L31)

***

### type

> `static` **type**: `string` = `'Video'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/Video.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L14)

## Accessors

### best\_thumbnail

> `get` **best\_thumbnail**(): `undefined` \| [`Thumbnail`](../../Misc/classes/Thumbnail.md)

#### Returns

`undefined` \| [`Thumbnail`](../../Misc/classes/Thumbnail.md)

#### Defined in

[src/parser/classes/Video.ts:132](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L132)

***

### description

> `get` **description**(): `string`

#### Returns

`string`

#### Defined in

[src/parser/classes/Video.ts:101](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L101)

***

### has\_captions

> `get` **has\_captions**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/Video.ts:128](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L128)

***

### is\_4k

> `get` **is\_4k**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/Video.ts:124](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L124)

***

### is\_live

> `get` **is\_live**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/Video.ts:109](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L109)

***

### is\_premiere

> `get` **is\_premiere**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/Video.ts:120](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L120)

***

### is\_upcoming

> `get` **is\_upcoming**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/parser/classes/Video.ts:116](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L116)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is Video & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is Video & { [k in string]: R }`

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

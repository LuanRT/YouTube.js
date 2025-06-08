[youtubei.js](../../../README.md) / [YTNodes](../README.md) / StructuredDescriptionPlaylistLockup

# Class: StructuredDescriptionPlaylistLockup

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new StructuredDescriptionPlaylistLockup()

> **new StructuredDescriptionPlaylistLockup**(`data`): [`StructuredDescriptionPlaylistLockup`](StructuredDescriptionPlaylistLockup.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`StructuredDescriptionPlaylistLockup`](StructuredDescriptionPlaylistLockup.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L21)

## Properties

### aspect\_ratio

> **aspect\_ratio**: `number`

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L16)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L14)

***

### max\_lines\_short\_byline\_text

> **max\_lines\_short\_byline\_text**: `number`

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L18)

***

### max\_lines\_title

> **max\_lines\_title**: `number`

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L17)

***

### overlay\_position

> **overlay\_position**: `string`

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L19)

***

### short\_byline\_text

> **short\_byline\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L12)

***

### thumbnail

> **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L10)

***

### thumbnail\_width

> **thumbnail\_width**: `number`

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L15)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L11)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### video\_count\_short\_text

> **video\_count\_short\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L13)

***

### type

> `static` **type**: `string` = `'StructuredDescriptionPlaylistLockup'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/StructuredDescriptionPlaylistLockup.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/StructuredDescriptionPlaylistLockup.ts#L8)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is StructuredDescriptionPlaylistLockup & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is StructuredDescriptionPlaylistLockup & { [k in string]: R }`

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

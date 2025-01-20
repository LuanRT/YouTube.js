[youtubei.js](../../../README.md) / [YTNodes](../README.md) / LiveChatAuthorBadge

# Class: LiveChatAuthorBadge

## Extends

- [`MetadataBadge`](MetadataBadge.md)

## Constructors

### new LiveChatAuthorBadge()

> **new LiveChatAuthorBadge**(`data`): [`LiveChatAuthorBadge`](LiveChatAuthorBadge.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`LiveChatAuthorBadge`](LiveChatAuthorBadge.md)

#### Overrides

[`MetadataBadge`](MetadataBadge.md).[`constructor`](MetadataBadge.md#constructors)

#### Defined in

[src/parser/classes/LiveChatAuthorBadge.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/LiveChatAuthorBadge.ts#L10)

## Properties

### custom\_thumbnail

> **custom\_thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/LiveChatAuthorBadge.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/LiveChatAuthorBadge.ts#L8)

***

### icon\_type?

> `optional` **icon\_type**: `string`

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`icon_type`](MetadataBadge.md#icon_type)

#### Defined in

[src/parser/classes/MetadataBadge.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MetadataBadge.ts#L7)

***

### label?

> `optional` **label**: `string`

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`label`](MetadataBadge.md#label)

#### Defined in

[src/parser/classes/MetadataBadge.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MetadataBadge.ts#L9)

***

### style?

> `optional` **style**: `string`

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`style`](MetadataBadge.md#style)

#### Defined in

[src/parser/classes/MetadataBadge.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MetadataBadge.ts#L8)

***

### tooltip?

> `optional` **tooltip**: `string`

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`tooltip`](MetadataBadge.md#tooltip)

#### Defined in

[src/parser/classes/MetadataBadge.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MetadataBadge.ts#L10)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`type`](MetadataBadge.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'LiveChatAuthorBadge'`

#### Overrides

[`MetadataBadge`](MetadataBadge.md).[`type`](MetadataBadge.md#type-1)

#### Defined in

[src/parser/classes/LiveChatAuthorBadge.ts:6](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/LiveChatAuthorBadge.ts#L6)

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

[`MetadataBadge`](MetadataBadge.md).[`as`](MetadataBadge.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatAuthorBadge & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is LiveChatAuthorBadge & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`hasKey`](MetadataBadge.md#haskey)

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

[`MetadataBadge`](MetadataBadge.md).[`is`](MetadataBadge.md#is)

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

[`MetadataBadge`](MetadataBadge.md).[`key`](MetadataBadge.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

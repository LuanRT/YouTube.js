[youtubei.js](../../../README.md) / [YTNodes](../README.md) / PlayerMicroformat

# Class: PlayerMicroformat

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new PlayerMicroformat()

> **new PlayerMicroformat**(`data`): [`PlayerMicroformat`](PlayerMicroformat.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`PlayerMicroformat`](PlayerMicroformat.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:41](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L41)

## Properties

### available\_countries

> **available\_countries**: `string`[]

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:37](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L37)

***

### category

> **category**: `string`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:34](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L34)

***

### channel

> **channel**: `object`

#### id

> **id**: `string`

#### name

> **name**: `string`

#### url

> **url**: `string`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L24)

***

### description

> **description**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L10)

***

### embed?

> `optional` **embed**: `object`

#### flash\_secure\_url

> **flash\_secure\_url**: `string`

#### flash\_url

> **flash\_url**: `string`

#### height

> **height**: `any`

#### iframe\_url

> **iframe\_url**: `string`

#### width

> **width**: `any`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L13)

***

### end\_timestamp

> **end\_timestamp**: `null` \| `Date`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L39)

***

### has\_ypc\_metadata

> **has\_ypc\_metadata**: `boolean`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:32](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L32)

***

### is\_family\_safe

> **is\_family\_safe**: `boolean`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:30](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L30)

***

### is\_unlisted

> **is\_unlisted**: `boolean`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:31](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L31)

***

### length\_seconds

> **length\_seconds**: `number`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L22)

***

### publish\_date

> **publish\_date**: `string`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:35](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L35)

***

### start\_timestamp

> **start\_timestamp**: `null` \| `Date`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L38)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L11)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L9)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### upload\_date

> **upload\_date**: `string`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:36](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L36)

***

### view\_count

> **view\_count**: `number`

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:33](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L33)

***

### type

> `static` **type**: `string` = `'PlayerMicroformat'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/PlayerMicroformat.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlayerMicroformat.ts#L7)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is PlayerMicroformat & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is PlayerMicroformat & { [k in string]: R }`

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

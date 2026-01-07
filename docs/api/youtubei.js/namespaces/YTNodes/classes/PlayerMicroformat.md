[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / PlayerMicroformat

# Class: PlayerMicroformat

Defined in: [src/parser/classes/PlayerMicroformat.ts:6](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L6)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new PlayerMicroformat**(`data`): `PlayerMicroformat`

Defined in: [src/parser/classes/PlayerMicroformat.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L41)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`PlayerMicroformat`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### available\_countries

> **available\_countries**: `string`[]

Defined in: [src/parser/classes/PlayerMicroformat.ts:37](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L37)

***

### category

> **category**: `string`

Defined in: [src/parser/classes/PlayerMicroformat.ts:34](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L34)

***

### channel

> **channel**: `object`

Defined in: [src/parser/classes/PlayerMicroformat.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L24)

#### id

> **id**: `string`

#### name

> **name**: `string`

#### url

> **url**: `string`

***

### description

> **description**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/PlayerMicroformat.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L10)

***

### embed?

> `optional` **embed**: `object`

Defined in: [src/parser/classes/PlayerMicroformat.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L13)

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

***

### end\_timestamp

> **end\_timestamp**: `Date` \| `null`

Defined in: [src/parser/classes/PlayerMicroformat.ts:39](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L39)

***

### has\_ypc\_metadata

> **has\_ypc\_metadata**: `boolean`

Defined in: [src/parser/classes/PlayerMicroformat.ts:32](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L32)

***

### is\_family\_safe

> **is\_family\_safe**: `boolean`

Defined in: [src/parser/classes/PlayerMicroformat.ts:30](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L30)

***

### is\_unlisted

> **is\_unlisted**: `boolean`

Defined in: [src/parser/classes/PlayerMicroformat.ts:31](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L31)

***

### length\_seconds

> **length\_seconds**: `number`

Defined in: [src/parser/classes/PlayerMicroformat.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L22)

***

### publish\_date

> **publish\_date**: `string`

Defined in: [src/parser/classes/PlayerMicroformat.ts:35](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L35)

***

### start\_timestamp

> **start\_timestamp**: `Date` \| `null`

Defined in: [src/parser/classes/PlayerMicroformat.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L38)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/PlayerMicroformat.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L11)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/PlayerMicroformat.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L9)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### upload\_date

> **upload\_date**: `string`

Defined in: [src/parser/classes/PlayerMicroformat.ts:36](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L36)

***

### view\_count

> **view\_count**: `number`

Defined in: [src/parser/classes/PlayerMicroformat.ts:33](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L33)

***

### type

> `static` **type**: `string` = `'PlayerMicroformat'`

Defined in: [src/parser/classes/PlayerMicroformat.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerMicroformat.ts#L7)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is PlayerMicroformat & { [k in string]: R }`

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

`this is PlayerMicroformat & { [k in string]: R }`

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

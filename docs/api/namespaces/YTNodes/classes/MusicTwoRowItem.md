[youtubei.js](../../../README.md) / [YTNodes](../README.md) / MusicTwoRowItem

# Class: MusicTwoRowItem

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new MusicTwoRowItem()

> **new MusicTwoRowItem**(`data`): [`MusicTwoRowItem`](MusicTwoRowItem.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`MusicTwoRowItem`](MusicTwoRowItem.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:42](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L42)

## Properties

### artists?

> `optional` **artists**: `object`[]

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L26)

***

### author?

> `optional` **author**: `object`

#### channel\_id

> **channel\_id**: `undefined` \| `string`

#### endpoint

> **endpoint**: `undefined` \| [`NavigationEndpoint`](NavigationEndpoint.md)

#### name

> **name**: `string`

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:32](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L32)

***

### badges

> **badges**: `null` \| [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L19)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L16)

***

### id

> **id**: `undefined` \| `string`

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L17)

***

### item\_count?

> `optional` **item\_count**: `null` \| `string`

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L22)

***

### item\_type

> **item\_type**: `string`

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L20)

***

### menu

> **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L40)

***

### subscribers?

> `optional` **subscribers**: `string`

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L21)

***

### subtitle

> **subtitle**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L18)

***

### thumbnail

> **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L38)

***

### thumbnail\_overlay

> **thumbnail\_overlay**: `null` \| [`MusicItemThumbnailOverlay`](MusicItemThumbnailOverlay.md)

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L39)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L15)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### views?

> `optional` **views**: `string`

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L24)

***

### year?

> `optional` **year**: `string`

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L23)

***

### type

> `static` **type**: `string` = `'MusicTwoRowItem'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/MusicTwoRowItem.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicTwoRowItem.ts#L13)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is MusicTwoRowItem & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is MusicTwoRowItem & { [k in string]: R }`

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

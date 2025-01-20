[youtubei.js](../../../README.md) / [YTNodes](../README.md) / MusicResponsiveHeader

# Class: MusicResponsiveHeader

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new MusicResponsiveHeader()

> **new MusicResponsiveHeader**(`data`): [`MusicResponsiveHeader`](MusicResponsiveHeader.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`MusicResponsiveHeader`](MusicResponsiveHeader.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L28)

## Properties

### buttons

> **buttons**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Button`](Button.md) \| [`DownloadButton`](DownloadButton.md) \| [`ToggleButton`](ToggleButton.md) \| [`Menu`](Menu.md) \| [`MusicPlayButton`](MusicPlayButton.md)\>

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L19)

***

### description?

> `optional` **description**: `null` \| [`MusicDescriptionShelf`](MusicDescriptionShelf.md)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L26)

***

### second\_subtitle

> **second\_subtitle**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L24)

***

### strapline\_text\_one

> **strapline\_text\_one**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L22)

***

### strapline\_thumbnail

> **strapline\_thumbnail**: `null` \| [`MusicThumbnail`](MusicThumbnail.md)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L23)

***

### subtitle

> **subtitle**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L21)

***

### subtitle\_badge?

> `optional` **subtitle\_badge**: `null` \| [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicInlineBadge`](MusicInlineBadge.md)\>

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L25)

***

### thumbnail

> **thumbnail**: `null` \| [`MusicThumbnail`](MusicThumbnail.md)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L18)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L20)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'MusicResponsiveHeader'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/MusicResponsiveHeader.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveHeader.ts#L16)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is MusicResponsiveHeader & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is MusicResponsiveHeader & { [k in string]: R }`

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

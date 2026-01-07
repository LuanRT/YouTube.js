[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / MusicResponsiveHeader

# Class: MusicResponsiveHeader

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L15)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new MusicResponsiveHeader**(`data`): `MusicResponsiveHeader`

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:28](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L28)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`MusicResponsiveHeader`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### buttons

> **buttons**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Button`](Button.md) \| [`ToggleButton`](ToggleButton.md) \| [`DownloadButton`](DownloadButton.md) \| [`Menu`](Menu.md) \| [`MusicPlayButton`](MusicPlayButton.md)\>

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L19)

***

### description?

> `optional` **description**: [`MusicDescriptionShelf`](MusicDescriptionShelf.md) \| `null`

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L26)

***

### second\_subtitle

> **second\_subtitle**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L24)

***

### strapline\_text\_one

> **strapline\_text\_one**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L22)

***

### strapline\_thumbnail

> **strapline\_thumbnail**: [`MusicThumbnail`](MusicThumbnail.md) \| `null`

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L23)

***

### subtitle

> **subtitle**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L21)

***

### subtitle\_badge?

> `optional` **subtitle\_badge**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicInlineBadge`](MusicInlineBadge.md)\>

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L25)

***

### thumbnail

> **thumbnail**: [`MusicThumbnail`](MusicThumbnail.md) \| `null`

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L18)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L20)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'MusicResponsiveHeader'`

Defined in: [src/parser/classes/MusicResponsiveHeader.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveHeader.ts#L16)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is MusicResponsiveHeader & { [k in string]: R }`

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

`this is MusicResponsiveHeader & { [k in string]: R }`

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

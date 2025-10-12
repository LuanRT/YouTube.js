[youtubei.js](../../../README.md) / [YTNodes](../README.md) / MusicImmersiveHeader

# Class: MusicImmersiveHeader

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new MusicImmersiveHeader()

> **new MusicImmersiveHeader**(`data`): [`MusicImmersiveHeader`](MusicImmersiveHeader.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`MusicImmersiveHeader`](MusicImmersiveHeader.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:26](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L26)

## Properties

### description

> **description**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:23](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L23)

***

### menu

> **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:17](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L17)

***

### more\_button

> **more\_button**: `null` \| [`ToggleButton`](ToggleButton.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:18](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L18)

***

### play\_button

> **play\_button**: `null` \| [`Button`](Button.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:19](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L19)

***

### share\_endpoint?

> `optional` **share\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:20](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L20)

***

### start\_radio\_button

> **start\_radio\_button**: `null` \| [`Button`](Button.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:21](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L21)

***

### subscription\_button

> **subscription\_button**: `null` \| [`SubscribeButton`](SubscribeButton.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:22](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L22)

***

### thumbnail

> **thumbnail**: `null` \| [`MusicThumbnail`](MusicThumbnail.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:24](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L24)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:16](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L16)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'MusicImmersiveHeader'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/MusicImmersiveHeader.ts:14](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/MusicImmersiveHeader.ts#L14)

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

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L29)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is MusicImmersiveHeader & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is MusicImmersiveHeader & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L19)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L51)

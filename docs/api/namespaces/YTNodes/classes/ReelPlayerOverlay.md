[youtubei.js](../../../README.md) / [YTNodes](../README.md) / ReelPlayerOverlay

# Class: ReelPlayerOverlay

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new ReelPlayerOverlay()

> **new ReelPlayerOverlay**(`data`): [`ReelPlayerOverlay`](ReelPlayerOverlay.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`ReelPlayerOverlay`](ReelPlayerOverlay.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L26)

## Properties

### info\_panel

> **info\_panel**: `null` \| [`InfoPanelContainer`](InfoPanelContainer.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L24)

***

### like\_button

> **like\_button**: `null` \| [`LikeButton`](LikeButton.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L14)

***

### menu

> **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L16)

***

### next\_item\_button

> **next\_item\_button**: `null` \| [`Button`](Button.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L17)

***

### pivot\_button

> **pivot\_button**: `null` \| [`PivotButton`](PivotButton.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L23)

***

### prev\_item\_button

> **prev\_item\_button**: `null` \| [`Button`](Button.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L18)

***

### reel\_player\_header\_supported\_renderers

> **reel\_player\_header\_supported\_renderers**: `null` \| [`ReelPlayerHeader`](ReelPlayerHeader.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L15)

***

### share\_button

> **share\_button**: `null` \| [`Button`](Button.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L22)

***

### style

> **style**: `string`

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L20)

***

### subscribe\_button\_renderer

> **subscribe\_button\_renderer**: `null` \| [`Button`](Button.md) \| [`SubscribeButton`](SubscribeButton.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L19)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### view\_comments\_button

> **view\_comments\_button**: `null` \| [`Button`](Button.md)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L21)

***

### type

> `static` **type**: `string` = `'ReelPlayerOverlay'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/ReelPlayerOverlay.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ReelPlayerOverlay.ts#L12)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is ReelPlayerOverlay & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is ReelPlayerOverlay & { [k in string]: R }`

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

[youtubei.js](../../../README.md) / [YTNodes](../README.md) / PlaylistVideo

# Class: PlaylistVideo

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new PlaylistVideo()

> **new PlaylistVideo**(`data`): [`PlaylistVideo`](PlaylistVideo.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`PlaylistVideo`](PlaylistVideo.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/PlaylistVideo.ts:33](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L33)

## Properties

### accessibility\_label?

> `optional` **accessibility\_label**: `string`

#### Defined in

[src/parser/classes/PlaylistVideo.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L25)

***

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/PlaylistVideo.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L16)

***

### duration

> **duration**: `object`

#### seconds

> **seconds**: `number`

#### text

> **text**: `string`

#### Defined in

[src/parser/classes/PlaylistVideo.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L28)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/PlaylistVideo.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L20)

***

### id

> **id**: `string`

#### Defined in

[src/parser/classes/PlaylistVideo.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L13)

***

### index

> **index**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/PlaylistVideo.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L14)

***

### is\_playable

> **is\_playable**: `boolean`

#### Defined in

[src/parser/classes/PlaylistVideo.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L21)

***

### menu

> **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/PlaylistVideo.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L22)

***

### set\_video\_id

> **set\_video\_id**: `undefined` \| `string`

#### Defined in

[src/parser/classes/PlaylistVideo.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L19)

***

### style?

> `optional` **style**: `string`

#### Defined in

[src/parser/classes/PlaylistVideo.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L26)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/classes/PlaylistVideo.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L18)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/PlaylistVideo.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L17)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/PlaylistVideo.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L15)

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

[src/parser/classes/PlaylistVideo.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L23)

***

### video\_info

> **video\_info**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/PlaylistVideo.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L24)

***

### type

> `static` **type**: `string` = `'PlaylistVideo'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/PlaylistVideo.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L11)

## Accessors

### is\_live

> `get` **is\_live**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/PlaylistVideo.ts:63](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L63)

***

### is\_upcoming

> `get` **is\_upcoming**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/PlaylistVideo.ts:67](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/PlaylistVideo.ts#L67)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is PlaylistVideo & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is PlaylistVideo & { [k in string]: R }`

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

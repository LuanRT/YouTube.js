[youtubei.js](../../../README.md) / [YTNodes](../README.md) / AboutChannelView

# Class: AboutChannelView

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new AboutChannelView()

> **new AboutChannelView**(`data`): [`AboutChannelView`](AboutChannelView.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`AboutChannelView`](AboutChannelView.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/AboutChannelView.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L26)

## Properties

### additional\_info\_label?

> `optional` **additional\_info\_label**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/AboutChannelView.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L20)

***

### canonical\_channel\_url?

> `optional` **canonical\_channel\_url**: `string`

#### Defined in

[src/parser/classes/AboutChannelView.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L18)

***

### channel\_id?

> `optional` **channel\_id**: `string`

#### Defined in

[src/parser/classes/AboutChannelView.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L19)

***

### country?

> `optional` **country**: `string`

#### Defined in

[src/parser/classes/AboutChannelView.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L13)

***

### custom\_links\_label?

> `optional` **custom\_links\_label**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/AboutChannelView.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L14)

***

### custom\_url\_on\_tap?

> `optional` **custom\_url\_on\_tap**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/AboutChannelView.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L21)

***

### description?

> `optional` **description**: `string`

#### Defined in

[src/parser/classes/AboutChannelView.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L11)

***

### description\_label?

> `optional` **description\_label**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/AboutChannelView.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L12)

***

### joined\_date?

> `optional` **joined\_date**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/AboutChannelView.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L17)

***

### links

> **links**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ChannelExternalLinkView`](ChannelExternalLinkView.md)\>

#### Defined in

[src/parser/classes/AboutChannelView.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L24)

***

### sign\_in\_for\_business\_email?

> `optional` **sign\_in\_for\_business\_email**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/AboutChannelView.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L23)

***

### subscriber\_count?

> `optional` **subscriber\_count**: `string`

#### Defined in

[src/parser/classes/AboutChannelView.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L15)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### video\_count?

> `optional` **video\_count**: `string`

#### Defined in

[src/parser/classes/AboutChannelView.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L22)

***

### view\_count?

> `optional` **view\_count**: `string`

#### Defined in

[src/parser/classes/AboutChannelView.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L16)

***

### type

> `static` **type**: `string` = `'AboutChannelView'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/AboutChannelView.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/AboutChannelView.ts#L9)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is AboutChannelView & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is AboutChannelView & { [k in string]: R }`

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

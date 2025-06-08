[youtubei.js](../../../README.md) / [YTNodes](../README.md) / ChannelAboutFullMetadata

# Class: ChannelAboutFullMetadata

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new ChannelAboutFullMetadata()

> **new ChannelAboutFullMetadata**(`data`): [`ChannelAboutFullMetadata`](ChannelAboutFullMetadata.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`ChannelAboutFullMetadata`](ChannelAboutFullMetadata.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:30](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L30)

## Properties

### avatar

> **avatar**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L13)

***

### buttons

> **buttons**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Button`](Button.md)\>

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L28)

***

### can\_reveal\_email

> **can\_reveal\_email**: `boolean`

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L26)

***

### canonical\_channel\_url

> **canonical\_channel\_url**: `string`

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L14)

***

### country

> **country**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L27)

***

### description

> **description**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L24)

***

### email\_reveal

> **email\_reveal**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L11)

***

### joined\_date

> **joined\_date**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L23)

***

### name

> **name**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L12)

***

### primary\_links

> **primary\_links**: `object`[]

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L16)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### view\_count

> **view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L22)

***

### type

> `static` **type**: `string` = `'ChannelAboutFullMetadata'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/ChannelAboutFullMetadata.ts#L9)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is ChannelAboutFullMetadata & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is ChannelAboutFullMetadata & { [k in string]: R }`

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

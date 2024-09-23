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

[src/parser/classes/ChannelAboutFullMetadata.ts:31](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L31)

## Properties

### avatar

> **avatar**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:14](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L14)

***

### buttons

> **buttons**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Button`](Button.md)\>

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:29](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L29)

***

### can\_reveal\_email

> **can\_reveal\_email**: `boolean`

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:27](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L27)

***

### canonical\_channel\_url

> **canonical\_channel\_url**: `string`

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:15](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L15)

***

### country

> **country**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L28)

***

### description

> **description**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:25](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L25)

***

### email\_reveal

> **email\_reveal**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:26](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L26)

***

### id

> **id**: `string`

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:12](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L12)

***

### joined\_date

> **joined\_date**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:24](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L24)

***

### name

> **name**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:13](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L13)

***

### primary\_links

> **primary\_links**: `object`[]

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:17](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L17)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L8)

***

### view\_count

> **view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:23](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L23)

***

### type

> `static` **type**: `string` = `'ChannelAboutFullMetadata'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:10](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L10)

## Accessors

### joined

> `get` **joined**(): [`Text`](../../Misc/classes/Text.md)

#### Deprecated

This will be removed in a future release.
Please use [ChannelAboutFullMetadata.joined_date](ChannelAboutFullMetadata.md#joined_date) instead.

#### Returns

[`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:68](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L68)

***

### views

> `get` **views**(): [`Text`](../../Misc/classes/Text.md)

#### Deprecated

This will be removed in a future release.
Please use [ChannelAboutFullMetadata.view_count](ChannelAboutFullMetadata.md#view_count) instead.

#### Returns

[`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelAboutFullMetadata.ts:58](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/ChannelAboutFullMetadata.ts#L58)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

`InstanceType`\<`K`\[`number`\]\>

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L35)

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

[src/parser/helpers.ts:47](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L47)

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

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L28)

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

[src/parser/helpers.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L57)

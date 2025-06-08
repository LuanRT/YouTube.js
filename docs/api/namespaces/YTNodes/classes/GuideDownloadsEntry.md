[youtubei.js](../../../README.md) / [YTNodes](../README.md) / GuideDownloadsEntry

# Class: GuideDownloadsEntry

## Extends

- [`GuideEntry`](GuideEntry.md)

## Constructors

### new GuideDownloadsEntry()

> **new GuideDownloadsEntry**(`data`): [`GuideDownloadsEntry`](GuideDownloadsEntry.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`GuideDownloadsEntry`](GuideDownloadsEntry.md)

#### Overrides

[`GuideEntry`](GuideEntry.md).[`constructor`](GuideEntry.md#constructors)

#### Defined in

[src/parser/classes/GuideDownloadsEntry.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideDownloadsEntry.ts#L9)

## Properties

### always\_show

> **always\_show**: `boolean`

#### Defined in

[src/parser/classes/GuideDownloadsEntry.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideDownloadsEntry.ts#L7)

***

### badges?

> `optional` **badges**: `any`

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`badges`](GuideEntry.md#badges)

#### Defined in

[src/parser/classes/GuideEntry.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideEntry.ts#L14)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`endpoint`](GuideEntry.md#endpoint)

#### Defined in

[src/parser/classes/GuideEntry.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideEntry.ts#L11)

***

### icon\_type?

> `optional` **icon\_type**: `string`

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`icon_type`](GuideEntry.md#icon_type)

#### Defined in

[src/parser/classes/GuideEntry.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideEntry.ts#L12)

***

### is\_primary

> **is\_primary**: `boolean`

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`is_primary`](GuideEntry.md#is_primary)

#### Defined in

[src/parser/classes/GuideEntry.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideEntry.ts#L15)

***

### thumbnails?

> `optional` **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`thumbnails`](GuideEntry.md#thumbnails)

#### Defined in

[src/parser/classes/GuideEntry.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideEntry.ts#L13)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`title`](GuideEntry.md#title)

#### Defined in

[src/parser/classes/GuideEntry.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideEntry.ts#L10)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`type`](GuideEntry.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'GuideDownloadsEntry'`

#### Overrides

[`GuideEntry`](GuideEntry.md).[`type`](GuideEntry.md#type-1)

#### Defined in

[src/parser/classes/GuideDownloadsEntry.ts:5](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/GuideDownloadsEntry.ts#L5)

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

[`GuideEntry`](GuideEntry.md).[`as`](GuideEntry.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is GuideDownloadsEntry & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is GuideDownloadsEntry & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`hasKey`](GuideEntry.md#haskey)

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

[`GuideEntry`](GuideEntry.md).[`is`](GuideEntry.md#is)

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

[`GuideEntry`](GuideEntry.md).[`key`](GuideEntry.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / GuideDownloadsEntry

# Class: GuideDownloadsEntry

Defined in: [src/parser/classes/GuideDownloadsEntry.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideDownloadsEntry.ts#L4)

## Extends

- [`GuideEntry`](GuideEntry.md)

## Constructors

### Constructor

> **new GuideDownloadsEntry**(`data`): `GuideDownloadsEntry`

Defined in: [src/parser/classes/GuideDownloadsEntry.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideDownloadsEntry.ts#L9)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`GuideDownloadsEntry`

#### Overrides

[`GuideEntry`](GuideEntry.md).[`constructor`](GuideEntry.md#constructor)

## Properties

### always\_show

> **always\_show**: `boolean`

Defined in: [src/parser/classes/GuideDownloadsEntry.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideDownloadsEntry.ts#L7)

***

### badges?

> `optional` **badges**: `any`

Defined in: [src/parser/classes/GuideEntry.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideEntry.ts#L14)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`badges`](GuideEntry.md#badges)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/GuideEntry.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideEntry.ts#L11)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`endpoint`](GuideEntry.md#endpoint)

***

### icon\_type?

> `optional` **icon\_type**: `string`

Defined in: [src/parser/classes/GuideEntry.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideEntry.ts#L12)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`icon_type`](GuideEntry.md#icon_type)

***

### is\_primary

> **is\_primary**: `boolean`

Defined in: [src/parser/classes/GuideEntry.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideEntry.ts#L15)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`is_primary`](GuideEntry.md#is_primary)

***

### thumbnails?

> `optional` **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/GuideEntry.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideEntry.ts#L13)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`thumbnails`](GuideEntry.md#thumbnails)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/GuideEntry.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideEntry.ts#L10)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`title`](GuideEntry.md#title)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`type`](GuideEntry.md#type)

***

### type

> `static` **type**: `string` = `'GuideDownloadsEntry'`

Defined in: [src/parser/classes/GuideDownloadsEntry.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideDownloadsEntry.ts#L5)

#### Overrides

[`GuideEntry`](GuideEntry.md).[`type`](GuideEntry.md#type-1)

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

[`GuideEntry`](GuideEntry.md).[`as`](GuideEntry.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is GuideDownloadsEntry & { [k in string]: R }`

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

`this is GuideDownloadsEntry & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`GuideEntry`](GuideEntry.md).[`hasKey`](GuideEntry.md#haskey)

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

[`GuideEntry`](GuideEntry.md).[`is`](GuideEntry.md#is)

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

[`GuideEntry`](GuideEntry.md).[`key`](GuideEntry.md#key)

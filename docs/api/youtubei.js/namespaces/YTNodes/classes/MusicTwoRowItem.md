[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / MusicTwoRowItem

# Class: MusicTwoRowItem

Defined in: [src/parser/classes/MusicTwoRowItem.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L12)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new MusicTwoRowItem**(`data`): `MusicTwoRowItem`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:42](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L42)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`MusicTwoRowItem`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### artists?

> `optional` **artists**: `object`[]

Defined in: [src/parser/classes/MusicTwoRowItem.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L26)

#### channel\_id

> **channel\_id**: `string` \| `undefined`

#### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md) \| `undefined`

#### name

> **name**: `string`

***

### author?

> `optional` **author**: `object`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:32](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L32)

#### channel\_id

> **channel\_id**: `string` \| `undefined`

#### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md) \| `undefined`

#### name

> **name**: `string`

***

### badges

> **badges**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\> \| `null`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L19)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/MusicTwoRowItem.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L16)

***

### id

> **id**: `string` \| `undefined`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L17)

***

### item\_count?

> `optional` **item\_count**: `string` \| `null`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L22)

***

### item\_type

> **item\_type**: `string`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L20)

***

### menu

> **menu**: [`Menu`](Menu.md) \| `null`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L40)

***

### subscribers?

> `optional` **subscribers**: `string`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L21)

***

### subtitle

> **subtitle**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/MusicTwoRowItem.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L18)

***

### thumbnail

> **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/MusicTwoRowItem.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L38)

***

### thumbnail\_overlay

> **thumbnail\_overlay**: [`MusicItemThumbnailOverlay`](MusicItemThumbnailOverlay.md) \| `null`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:39](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L39)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/MusicTwoRowItem.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L15)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### views?

> `optional` **views**: `string`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L24)

***

### year?

> `optional` **year**: `string`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L23)

***

### type

> `static` **type**: `string` = `'MusicTwoRowItem'`

Defined in: [src/parser/classes/MusicTwoRowItem.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicTwoRowItem.ts#L13)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is MusicTwoRowItem & { [k in string]: R }`

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

`this is MusicTwoRowItem & { [k in string]: R }`

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

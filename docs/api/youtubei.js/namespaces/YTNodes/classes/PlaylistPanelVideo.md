[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / PlaylistPanelVideo

# Class: PlaylistPanelVideo

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L9)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new PlaylistPanelVideo**(`data`): `PlaylistPanelVideo`

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:42](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L42)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`PlaylistPanelVideo`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### album?

> `optional` **album**: `object`

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L25)

#### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### id?

> `optional` **id**: `string`

#### name

> **name**: `string`

#### year?

> `optional` **year**: `string`

***

### artists?

> `optional` **artists**: `object`[]

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:32](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L32)

#### channel\_id?

> `optional` **channel\_id**: `string`

#### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### name

> **name**: `string`

***

### author

> **author**: `string`

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L23)

***

### badges

> **badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L38)

***

### duration

> **duration**: `object`

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L18)

#### seconds

> **seconds**: `number`

#### text

> **text**: `string`

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L14)

***

### menu

> **menu**: [`YTNode`](../../Helpers/classes/YTNode.md)

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:39](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L39)

***

### selected

> **selected**: `boolean`

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L15)

***

### set\_video\_id?

> `optional` **set\_video\_id**: `string`

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L40)

***

### thumbnail

> **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L13)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L12)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### video\_id

> **video\_id**: `string`

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L16)

***

### type

> `static` **type**: `string` = `'PlaylistPanelVideo'`

Defined in: [src/parser/classes/PlaylistPanelVideo.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlaylistPanelVideo.ts#L10)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is PlaylistPanelVideo & { [k in string]: R }`

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

`this is PlaylistPanelVideo & { [k in string]: R }`

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

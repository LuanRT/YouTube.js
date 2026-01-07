[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / PlayerLegacyDesktopYpcTrailer

# Class: PlayerLegacyDesktopYpcTrailer

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L5)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new PlayerLegacyDesktopYpcTrailer**(`data`): `PlayerLegacyDesktopYpcTrailer`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L18)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`PlayerLegacyDesktopYpcTrailer`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### offer\_button\_text

> **offer\_button\_text**: `string`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L14)

***

### offer\_description

> **offer\_description**: `string`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L12)

***

### offer\_headline

> **offer\_headline**: `string`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L11)

***

### offer\_id

> **offer\_id**: `string`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L13)

***

### thumbnail

> **thumbnail**: `string`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L10)

***

### title

> **title**: `string`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L9)

***

### trailer

> **trailer**: [`YpcTrailer`](YpcTrailer.md) \| `null`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L16)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### video\_id

> **video\_id**: `string`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L8)

***

### video\_message

> **video\_message**: `string`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L15)

***

### type

> `static` **type**: `string` = `'PlayerLegacyDesktopYpcTrailer'`

Defined in: [src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts:6](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/PlayerLegacyDesktopYpcTrailer.ts#L6)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is PlayerLegacyDesktopYpcTrailer & { [k in string]: R }`

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

`this is PlayerLegacyDesktopYpcTrailer & { [k in string]: R }`

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

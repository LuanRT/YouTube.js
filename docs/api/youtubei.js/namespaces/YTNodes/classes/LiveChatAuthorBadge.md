[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / LiveChatAuthorBadge

# Class: LiveChatAuthorBadge

Defined in: [src/parser/classes/LiveChatAuthorBadge.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/LiveChatAuthorBadge.ts#L5)

## Extends

- [`MetadataBadge`](MetadataBadge.md)

## Constructors

### Constructor

> **new LiveChatAuthorBadge**(`data`): `LiveChatAuthorBadge`

Defined in: [src/parser/classes/LiveChatAuthorBadge.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/LiveChatAuthorBadge.ts#L10)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`LiveChatAuthorBadge`

#### Overrides

[`MetadataBadge`](MetadataBadge.md).[`constructor`](MetadataBadge.md#constructor)

## Properties

### custom\_thumbnail

> **custom\_thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/LiveChatAuthorBadge.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/LiveChatAuthorBadge.ts#L8)

***

### icon\_type?

> `optional` **icon\_type**: `string`

Defined in: [src/parser/classes/MetadataBadge.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MetadataBadge.ts#L7)

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`icon_type`](MetadataBadge.md#icon_type)

***

### label?

> `optional` **label**: `string`

Defined in: [src/parser/classes/MetadataBadge.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MetadataBadge.ts#L9)

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`label`](MetadataBadge.md#label)

***

### style?

> `optional` **style**: `string`

Defined in: [src/parser/classes/MetadataBadge.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MetadataBadge.ts#L8)

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`style`](MetadataBadge.md#style)

***

### tooltip?

> `optional` **tooltip**: `string`

Defined in: [src/parser/classes/MetadataBadge.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MetadataBadge.ts#L10)

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`tooltip`](MetadataBadge.md#tooltip)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`type`](MetadataBadge.md#type)

***

### type

> `static` **type**: `string` = `'LiveChatAuthorBadge'`

Defined in: [src/parser/classes/LiveChatAuthorBadge.ts:6](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/LiveChatAuthorBadge.ts#L6)

#### Overrides

[`MetadataBadge`](MetadataBadge.md).[`type`](MetadataBadge.md#type-1)

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

[`MetadataBadge`](MetadataBadge.md).[`as`](MetadataBadge.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatAuthorBadge & { [k in string]: R }`

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

`this is LiveChatAuthorBadge & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`MetadataBadge`](MetadataBadge.md).[`hasKey`](MetadataBadge.md#haskey)

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

[`MetadataBadge`](MetadataBadge.md).[`is`](MetadataBadge.md#is)

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

[`MetadataBadge`](MetadataBadge.md).[`key`](MetadataBadge.md#key)

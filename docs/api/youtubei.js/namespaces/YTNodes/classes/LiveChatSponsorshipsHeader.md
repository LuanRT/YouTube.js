[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / LiveChatSponsorshipsHeader

# Class: LiveChatSponsorshipsHeader

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L10)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new LiveChatSponsorshipsHeader**(`data`): `LiveChatSponsorshipsHeader`

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L21)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`LiveChatSponsorshipsHeader`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### author\_badges

> **author\_badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`LiveChatAuthorBadge`](LiveChatAuthorBadge.md)\>

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L15)

***

### author\_name

> **author\_name**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L13)

***

### author\_photo

> **author\_photo**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L14)

***

### context\_menu\_accessibility\_label

> **context\_menu\_accessibility\_label**: `string`

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L18)

***

### image

> **image**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L19)

***

### menu\_endpoint

> **menu\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L17)

***

### primary\_text

> **primary\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L16)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'LiveChatSponsorshipsHeader'`

Defined in: [src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L11)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatSponsorshipsHeader & { [k in string]: R }`

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

`this is LiveChatSponsorshipsHeader & { [k in string]: R }`

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

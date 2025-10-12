[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / LiveChatMembershipItem

# Class: LiveChatMembershipItem

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L7)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new LiveChatMembershipItem**(`data`): `LiveChatMembershipItem`

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L21)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`LiveChatMembershipItem`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L17)

***

### context\_menu\_accessibility\_label

> **context\_menu\_accessibility\_label**: `string`

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L19)

***

### header\_primary\_text?

> `optional` **header\_primary\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L14)

***

### header\_subtext

> **header\_subtext**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L15)

***

### id

> **id**: `string`

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L10)

***

### menu\_endpoint

> **menu\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L18)

***

### message?

> `optional` **message**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L16)

***

### timestamp

> **timestamp**: `number`

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L11)

***

### timestamp\_text?

> `optional` **timestamp\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L13)

***

### timestamp\_usec

> **timestamp\_usec**: `string`

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L12)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'LiveChatMembershipItem'`

Defined in: [src/parser/classes/livechat/items/LiveChatMembershipItem.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatMembershipItem.ts#L8)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatMembershipItem & { [k in string]: R }`

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

`this is LiveChatMembershipItem & { [k in string]: R }`

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

[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / LiveChatViewerEngagementMessage

# Class: LiveChatViewerEngagementMessage

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L7)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new LiveChatViewerEngagementMessage**(`data`): `LiveChatViewerEngagementMessage`

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L19)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`LiveChatViewerEngagementMessage`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### action\_button

> **action\_button**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L15)

***

### context\_menu\_accessibility\_label?

> `optional` **context\_menu\_accessibility\_label**: `string`

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L17)

***

### icon\_type?

> `optional` **icon\_type**: `string`

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L13)

***

### id

> **id**: `string`

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L10)

***

### menu\_endpoint?

> `optional` **menu\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L16)

***

### message

> **message**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L14)

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L11)

***

### timestamp\_usec?

> `optional` **timestamp\_usec**: `string`

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L12)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'LiveChatViewerEngagementMessage'`

Defined in: [src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L8)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatViewerEngagementMessage & { [k in string]: R }`

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

`this is LiveChatViewerEngagementMessage & { [k in string]: R }`

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

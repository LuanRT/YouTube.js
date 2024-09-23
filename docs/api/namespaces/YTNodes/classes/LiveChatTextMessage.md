[youtubei.js](../../../README.md) / [YTNodes](../README.md) / LiveChatTextMessage

# Class: LiveChatTextMessage

## Extends

- `LiveChatMessageBase`

## Constructors

### new LiveChatTextMessage()

> **new LiveChatTextMessage**(`data`): [`LiveChatTextMessage`](LiveChatTextMessage.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`LiveChatTextMessage`](LiveChatTextMessage.md)

#### Overrides

`LiveChatMessageBase.constructor`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:32](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L32)

## Properties

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:29](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L29)

***

### id

> **id**: `string`

#### Inherited from

`LiveChatMessageBase.id`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:15](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L15)

***

### inline\_action\_buttons

> **inline\_action\_buttons**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Button`](Button.md)\>

#### Inherited from

`LiveChatMessageBase.inline_action_buttons`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:13](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L13)

***

### menu\_endpoint

> **menu\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:30](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L30)

***

### message

> **message**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

`LiveChatMessageBase.message`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:12](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L12)

***

### timestamp

> **timestamp**: `number`

#### Inherited from

`LiveChatMessageBase.timestamp`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:14](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L14)

***

### type

> `readonly` **type**: `string`

#### Inherited from

`LiveChatMessageBase.type`

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'LiveChatTextMessage'`

#### Overrides

`LiveChatMessageBase.type`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:27](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L27)

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

`LiveChatMessageBase.as`

#### Defined in

[src/parser/helpers.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L35)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatTextMessage & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is LiveChatTextMessage & { [k in string]: R }`

Whether the node has the key

#### Inherited from

`LiveChatMessageBase.hasKey`

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

`LiveChatMessageBase.is`

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

`LiveChatMessageBase.key`

#### Defined in

[src/parser/helpers.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L57)

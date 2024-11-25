[youtubei.js](../../../README.md) / [YTNodes](../README.md) / LiveChatViewerEngagementMessage

# Class: LiveChatViewerEngagementMessage

## Extends

- `LiveChatMessageBase`

## Constructors

### new LiveChatViewerEngagementMessage()

> **new LiveChatViewerEngagementMessage**(`data`): [`LiveChatViewerEngagementMessage`](LiveChatViewerEngagementMessage.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`LiveChatViewerEngagementMessage`](LiveChatViewerEngagementMessage.md)

#### Overrides

`LiveChatMessageBase.constructor`

#### Defined in

[src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:12](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L12)

## Properties

### action\_button

> **action\_button**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:10](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L10)

***

### icon\_type?

> `optional` **icon\_type**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:9](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L9)

***

### id

> **id**: `string`

#### Inherited from

`LiveChatMessageBase.id`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:15](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L15)

***

### inline\_action\_buttons

> **inline\_action\_buttons**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Button`](Button.md)\>

#### Inherited from

`LiveChatMessageBase.inline_action_buttons`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:13](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L13)

***

### message

> **message**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

`LiveChatMessageBase.message`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:12](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L12)

***

### timestamp

> **timestamp**: `number`

#### Inherited from

`LiveChatMessageBase.timestamp`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTextMessage.ts:14](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatTextMessage.ts#L14)

***

### type

> `readonly` **type**: `string`

#### Inherited from

`LiveChatMessageBase.type`

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'LiveChatViewerEngagementMessage'`

#### Overrides

`LiveChatMessageBase.type`

#### Defined in

[src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts:7](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.ts#L7)

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

`LiveChatMessageBase.as`

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatViewerEngagementMessage & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is LiveChatViewerEngagementMessage & { [k in string]: R }`

Whether the node has the key

#### Inherited from

`LiveChatMessageBase.hasKey`

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L50)

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

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L28)

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

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L60)

[youtubei.js](../README.md) / LiveChatContinuation

# Class: LiveChatContinuation

## Extends

- [`YTNode`](../namespaces/Helpers/classes/YTNode.md)

## Constructors

### new LiveChatContinuation()

> **new LiveChatContinuation**(`data`): [`LiveChatContinuation`](LiveChatContinuation.md)

#### Parameters

• **data**: [`RawNode`](../namespaces/APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`LiveChatContinuation`](LiveChatContinuation.md)

#### Overrides

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`constructor`](../namespaces/Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/continuations.ts:174](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L174)

## Properties

### action\_panel

> **action\_panel**: `null` \| [`YTNode`](../namespaces/Helpers/classes/YTNode.md)

#### Defined in

[src/parser/continuations.ts:160](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L160)

***

### actions

> **actions**: [`ObservedArray`](../namespaces/Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../namespaces/Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/continuations.ts:159](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L159)

***

### continuation

> **continuation**: [`Continuation`](Continuation.md)

#### Defined in

[src/parser/continuations.ts:171](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L171)

***

### emojis

> **emojis**: `object`[]

#### Defined in

[src/parser/continuations.ts:165](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L165)

***

### header

> **header**: `null` \| [`LiveChatHeader`](../namespaces/YTNodes/classes/LiveChatHeader.md)

#### Defined in

[src/parser/continuations.ts:162](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L162)

***

### item\_list

> **item\_list**: `null` \| [`LiveChatItemList`](../namespaces/YTNodes/classes/LiveChatItemList.md)

#### Defined in

[src/parser/continuations.ts:161](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L161)

***

### participants\_list

> **participants\_list**: `null` \| [`LiveChatParticipantsList`](../namespaces/YTNodes/classes/LiveChatParticipantsList.md)

#### Defined in

[src/parser/continuations.ts:163](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L163)

***

### popout\_message

> **popout\_message**: `null` \| [`Message`](../namespaces/YTNodes/classes/Message.md)

#### Defined in

[src/parser/continuations.ts:164](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L164)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`type`](../namespaces/Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### viewer\_name

> **viewer\_name**: `string`

#### Defined in

[src/parser/continuations.ts:172](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L172)

***

### type

> `readonly` `static` **type**: `"liveChatContinuation"` = `'liveChatContinuation'`

#### Overrides

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`type`](../namespaces/Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/continuations.ts:157](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/continuations.ts#L157)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../namespaces/Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../namespaces/Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`as`](../namespaces/Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatContinuation & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is LiveChatContinuation & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`hasKey`](../namespaces/Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L50)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Check if the node is of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](../namespaces/Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../namespaces/Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`is`](../namespaces/Helpers/classes/YTNode.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L28)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../namespaces/Helpers/classes/Maybe.md)

Assert that the node has the given key and return it.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

[`Maybe`](../namespaces/Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`YTNode`](../namespaces/Helpers/classes/YTNode.md).[`key`](../namespaces/Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

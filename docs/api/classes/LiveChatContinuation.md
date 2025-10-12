[youtubei.js](../README.md) / LiveChatContinuation

# Class: LiveChatContinuation

Defined in: [src/parser/continuations.ts:156](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L156)

## Extends

- [`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new LiveChatContinuation**(`data`): `LiveChatContinuation`

Defined in: [src/parser/continuations.ts:174](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L174)

#### Parameters

##### data

[`RawNode`](../type-aliases/RawNode.md)

#### Returns

`LiveChatContinuation`

#### Overrides

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`constructor`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#constructor)

## Properties

### action\_panel

> **action\_panel**: [`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/continuations.ts:160](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L160)

***

### actions

> **actions**: [`ObservedArray`](../youtubei.js/namespaces/Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md)\>

Defined in: [src/parser/continuations.ts:159](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L159)

***

### continuation

> **continuation**: [`Continuation`](Continuation.md)

Defined in: [src/parser/continuations.ts:171](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L171)

***

### emojis

> **emojis**: `object`[]

Defined in: [src/parser/continuations.ts:165](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L165)

#### emoji\_id

> **emoji\_id**: `string`

#### image

> **image**: [`Thumbnail`](../youtubei.js/namespaces/Misc/classes/Thumbnail.md)[]

#### search\_terms

> **search\_terms**: `string`[]

#### shortcuts

> **shortcuts**: `string`[]

***

### header

> **header**: [`LiveChatHeader`](../youtubei.js/namespaces/YTNodes/classes/LiveChatHeader.md) \| `null`

Defined in: [src/parser/continuations.ts:162](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L162)

***

### item\_list

> **item\_list**: [`LiveChatItemList`](../youtubei.js/namespaces/YTNodes/classes/LiveChatItemList.md) \| `null`

Defined in: [src/parser/continuations.ts:161](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L161)

***

### participants\_list

> **participants\_list**: [`LiveChatParticipantsList`](../youtubei.js/namespaces/YTNodes/classes/LiveChatParticipantsList.md) \| `null`

Defined in: [src/parser/continuations.ts:163](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L163)

***

### popout\_message

> **popout\_message**: [`Message`](../youtubei.js/namespaces/YTNodes/classes/Message.md) \| `null`

Defined in: [src/parser/continuations.ts:164](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L164)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`type`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#type)

***

### viewer\_name

> **viewer\_name**: `string`

Defined in: [src/parser/continuations.ts:172](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L172)

***

### type

> `readonly` `static` **type**: `"liveChatContinuation"` = `'liveChatContinuation'`

Defined in: [src/parser/continuations.ts:157](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/continuations.ts#L157)

#### Overrides

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`type`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L29)

Cast to one of the given types.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../youtubei.js/namespaces/Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

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

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`as`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatContinuation & { [k in string]: R }`

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

`this is LiveChatContinuation & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`hasKey`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L19)

Check if the node is of the given type.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../youtubei.js/namespaces/Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`is`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#is)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../youtubei.js/namespaces/Helpers/classes/Maybe.md)

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

[`Maybe`](../youtubei.js/namespaces/Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`YTNode`](../youtubei.js/namespaces/Helpers/classes/YTNode.md).[`key`](../youtubei.js/namespaces/Helpers/classes/YTNode.md#key)

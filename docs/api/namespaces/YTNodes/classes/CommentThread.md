[youtubei.js](../../../README.md) / [YTNodes](../README.md) / CommentThread

# Class: CommentThread

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new CommentThread()

> **new CommentThread**(`data`): [`CommentThread`](CommentThread.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`CommentThread`](CommentThread.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/comments/CommentThread.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L26)

## Properties

### comment

> **comment**: `null` \| [`CommentView`](CommentView.md)

#### Defined in

[src/parser/classes/comments/CommentThread.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L17)

***

### comment\_replies\_data

> **comment\_replies\_data**: `null` \| [`CommentReplies`](CommentReplies.md)

#### Defined in

[src/parser/classes/comments/CommentThread.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L19)

***

### has\_replies

> **has\_replies**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentThread.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L21)

***

### is\_moderated\_elq\_comment

> **is\_moderated\_elq\_comment**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentThread.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L20)

***

### replies?

> `optional` **replies**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CommentView`](CommentView.md)\>

#### Defined in

[src/parser/classes/comments/CommentThread.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L18)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'CommentThread'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/comments/CommentThread.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L15)

## Accessors

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/comments/CommentThread.ts:34](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L34)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`CommentThread`](CommentThread.md)\>

Retrieves next batch of replies.

#### Returns

`Promise`\<[`CommentThread`](CommentThread.md)\>

#### Defined in

[src/parser/classes/comments/CommentThread.ts:69](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L69)

***

### getReplies()

> **getReplies**(): `Promise`\<[`CommentThread`](CommentThread.md)\>

Retrieves replies to this comment thread.

#### Returns

`Promise`\<[`CommentThread`](CommentThread.md)\>

#### Defined in

[src/parser/classes/comments/CommentThread.ts:43](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L43)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is CommentThread & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is CommentThread & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L50)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L28)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

***

### setActions()

> **setActions**(`actions`): `void`

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

`void`

#### Defined in

[src/parser/classes/comments/CommentThread.ts:95](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentThread.ts#L95)

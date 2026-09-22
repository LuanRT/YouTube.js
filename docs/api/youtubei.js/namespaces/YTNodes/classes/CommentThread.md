[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / CommentThread

# Class: CommentThread

Defined in: [src/parser/classes/comments/CommentThread.ts:15](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L15)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new CommentThread**(`data`): `CommentThread`

Defined in: [src/parser/classes/comments/CommentThread.ts:35](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L35)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`CommentThread`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### comment

> **comment**: [`CommentView`](CommentView.md) \| `null`

Defined in: [src/parser/classes/comments/CommentThread.ts:18](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L18)

***

### comment\_replies\_data

> **comment\_replies\_data**: [`CommentReplies`](CommentReplies.md) \| `null`

Defined in: [src/parser/classes/comments/CommentThread.ts:20](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L20)

***

### has\_replies

> **has\_replies**: `boolean`

Defined in: [src/parser/classes/comments/CommentThread.ts:22](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L22)

***

### is\_moderated\_elq\_comment

> **is\_moderated\_elq\_comment**: `boolean`

Defined in: [src/parser/classes/comments/CommentThread.ts:21](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L21)

***

### rendering\_priority?

> `optional` **rendering\_priority?**: `"RENDERING_PRIORITY_UNKNOWN"` \| `"RENDERING_PRIORITY_PINNED_COMMENT"` \| `"RENDERING_PRIORITY_LINKED_COMMENT"` \| `"RENDERING_PRIORITY_REALTIME_COMMENT"` \| `"RENDERING_PRIORITY_COMMUNITY_GUIDELINES_BELOW_HEADER"` \| `"RENDERING_PRIORITY_FAN_COMMUNITY_SETUP_CARD"` \| `"RENDERING_PRIORITY_COMMENT_HEADER"`

Defined in: [src/parser/classes/comments/CommentThread.ts:23](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L23)

***

### replies?

> `optional` **replies?**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`CommentThread`\>

Defined in: [src/parser/classes/comments/CommentThread.ts:19](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L19)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'CommentThread'`

Defined in: [src/parser/classes/comments/CommentThread.ts:16](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L16)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Accessors

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/classes/comments/CommentThread.ts:47](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L47)

Indicates whether this comment thread has more replies that can be fetched.

##### Returns

`boolean`

***

### is\_prepopulated

#### Get Signature

> **get** **is\_prepopulated**(): `boolean`

Defined in: [src/parser/classes/comments/CommentThread.ts:56](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L56)

Indicates whether this comment thread has prepopulated reply data. If false, you will need to call [CommentThread.getReplies](#getreplies) to fetch the initial batch of replies.

##### Returns

`boolean`

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L29)

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

### getContinuation()

> **getContinuation**(): `Promise`\<[`CommentsContinuation`](../../Misc/classes/CommentsContinuation.md)\>

Defined in: [src/parser/classes/comments/CommentThread.ts:99](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L99)

Retrieves next batch of replies.

#### Returns

`Promise`\<[`CommentsContinuation`](../../Misc/classes/CommentsContinuation.md)\>

***

### getReplies()

> **getReplies**(): `Promise`\<`CommentThread`\>

Defined in: [src/parser/classes/comments/CommentThread.ts:63](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L63)

Retrieves replies to this comment thread.

#### Returns

`Promise`\<`CommentThread`\>

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is CommentThread & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L41)

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

`this is CommentThread & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L19)

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

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L51)

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

***

### processRepliesData()

> **processRepliesData**(): `void`

Defined in: [src/parser/classes/comments/CommentThread.ts:129](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L129)

**`Internal`**

#### Returns

`void`

***

### setActions()

> **setActions**(`actions`): `void`

Defined in: [src/parser/classes/comments/CommentThread.ts:122](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/comments/CommentThread.ts#L122)

**`Internal`**

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`void`

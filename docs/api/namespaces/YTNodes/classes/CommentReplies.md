[youtubei.js](../../../README.md) / [YTNodes](../README.md) / CommentReplies

# Class: CommentReplies

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new CommentReplies()

> **new CommentReplies**(`data`): [`CommentReplies`](CommentReplies.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`CommentReplies`](CommentReplies.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/comments/CommentReplies.ts:17](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/CommentReplies.ts#L17)

## Properties

### contents

> **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/classes/comments/CommentReplies.ts:11](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/CommentReplies.ts#L11)

***

### has\_channel\_owner\_replied

> **has\_channel\_owner\_replied**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentReplies.ts:15](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/CommentReplies.ts#L15)

***

### hide\_replies

> **hide\_replies**: `null` \| [`Button`](Button.md)

#### Defined in

[src/parser/classes/comments/CommentReplies.ts:13](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/CommentReplies.ts#L13)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L8)

***

### view\_replies

> **view\_replies**: `null` \| [`Button`](Button.md)

#### Defined in

[src/parser/classes/comments/CommentReplies.ts:12](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/CommentReplies.ts#L12)

***

### view\_replies\_creator\_thumbnail

> **view\_replies\_creator\_thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/comments/CommentReplies.ts:14](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/CommentReplies.ts#L14)

***

### type

> `static` **type**: `string` = `'CommentReplies'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/comments/CommentReplies.ts:9](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/CommentReplies.ts#L9)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L35)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is CommentReplies & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is CommentReplies & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L57)

[youtubei.js](../../../README.md) / [YTNodes](../README.md) / Post

# Class: Post

## Extends

- [`BackstagePost`](BackstagePost.md)

## Constructors

### new Post()

> **new Post**(`data`): [`Post`](Post.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`Post`](Post.md)

#### Overrides

[`BackstagePost`](BackstagePost.md).[`constructor`](BackstagePost.md#constructors)

#### Defined in

[src/parser/classes/Post.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Post.ts#L7)

## Properties

### action\_buttons?

> `optional` **action\_buttons**: `null` \| [`CommentActionButtons`](CommentActionButtons.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`action_buttons`](BackstagePost.md#action_buttons)

#### Defined in

[src/parser/classes/BackstagePost.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L21)

***

### attachment

> **attachment**: `undefined` \| [`YTNode`](../../Helpers/classes/YTNode.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`attachment`](BackstagePost.md#attachment)

#### Defined in

[src/parser/classes/BackstagePost.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L25)

***

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`author`](BackstagePost.md#author)

#### Defined in

[src/parser/classes/BackstagePost.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L14)

***

### content

> **content**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`content`](BackstagePost.md#content)

#### Defined in

[src/parser/classes/BackstagePost.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L15)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`endpoint`](BackstagePost.md#endpoint)

#### Defined in

[src/parser/classes/BackstagePost.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L24)

***

### id

> **id**: `string`

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`id`](BackstagePost.md#id)

#### Defined in

[src/parser/classes/BackstagePost.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L13)

***

### menu?

> `optional` **menu**: `null` \| [`Menu`](Menu.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`menu`](BackstagePost.md#menu)

#### Defined in

[src/parser/classes/BackstagePost.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L20)

***

### poll\_status?

> `optional` **poll\_status**: `string`

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`poll_status`](BackstagePost.md#poll_status)

#### Defined in

[src/parser/classes/BackstagePost.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L17)

***

### published

> **published**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`published`](BackstagePost.md#published)

#### Defined in

[src/parser/classes/BackstagePost.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L16)

***

### surface

> **surface**: `string`

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`surface`](BackstagePost.md#surface)

#### Defined in

[src/parser/classes/BackstagePost.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L23)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`type`](BackstagePost.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### vote\_button?

> `optional` **vote\_button**: `null` \| [`Button`](Button.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`vote_button`](BackstagePost.md#vote_button)

#### Defined in

[src/parser/classes/BackstagePost.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L22)

***

### vote\_count?

> `optional` **vote\_count**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`vote_count`](BackstagePost.md#vote_count)

#### Defined in

[src/parser/classes/BackstagePost.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L19)

***

### vote\_status?

> `optional` **vote\_status**: `string`

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`vote_status`](BackstagePost.md#vote_status)

#### Defined in

[src/parser/classes/BackstagePost.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/BackstagePost.ts#L18)

***

### type

> `static` **type**: `string` = `'Post'`

#### Overrides

[`BackstagePost`](BackstagePost.md).[`type`](BackstagePost.md#type-1)

#### Defined in

[src/parser/classes/Post.ts:5](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Post.ts#L5)

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

[`BackstagePost`](BackstagePost.md).[`as`](BackstagePost.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is Post & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is Post & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`hasKey`](BackstagePost.md#haskey)

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

[`BackstagePost`](BackstagePost.md).[`is`](BackstagePost.md#is)

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

[`BackstagePost`](BackstagePost.md).[`key`](BackstagePost.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / Post

# Class: Post

Defined in: [src/parser/classes/Post.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Post.ts#L4)

## Extends

- [`BackstagePost`](BackstagePost.md)

## Constructors

### Constructor

> **new Post**(`data`): `Post`

Defined in: [src/parser/classes/Post.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Post.ts#L7)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`Post`

#### Overrides

[`BackstagePost`](BackstagePost.md).[`constructor`](BackstagePost.md#constructor)

## Properties

### action\_buttons?

> `optional` **action\_buttons**: [`CommentActionButtons`](CommentActionButtons.md) \| `null`

Defined in: [src/parser/classes/BackstagePost.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L21)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`action_buttons`](BackstagePost.md#action_buttons)

***

### attachment

> **attachment**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `undefined`

Defined in: [src/parser/classes/BackstagePost.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L25)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`attachment`](BackstagePost.md#attachment)

***

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

Defined in: [src/parser/classes/BackstagePost.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L14)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`author`](BackstagePost.md#author)

***

### content

> **content**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/BackstagePost.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L15)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`content`](BackstagePost.md#content)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/BackstagePost.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L24)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`endpoint`](BackstagePost.md#endpoint)

***

### id

> **id**: `string`

Defined in: [src/parser/classes/BackstagePost.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L13)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`id`](BackstagePost.md#id)

***

### menu?

> `optional` **menu**: [`Menu`](Menu.md) \| `null`

Defined in: [src/parser/classes/BackstagePost.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L20)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`menu`](BackstagePost.md#menu)

***

### poll\_status?

> `optional` **poll\_status**: `string`

Defined in: [src/parser/classes/BackstagePost.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L17)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`poll_status`](BackstagePost.md#poll_status)

***

### published

> **published**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/BackstagePost.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L16)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`published`](BackstagePost.md#published)

***

### surface

> **surface**: `string`

Defined in: [src/parser/classes/BackstagePost.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L23)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`surface`](BackstagePost.md#surface)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`type`](BackstagePost.md#type)

***

### vote\_button?

> `optional` **vote\_button**: [`Button`](Button.md) \| `null`

Defined in: [src/parser/classes/BackstagePost.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L22)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`vote_button`](BackstagePost.md#vote_button)

***

### vote\_count?

> `optional` **vote\_count**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/BackstagePost.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L19)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`vote_count`](BackstagePost.md#vote_count)

***

### vote\_status?

> `optional` **vote\_status**: `string`

Defined in: [src/parser/classes/BackstagePost.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/BackstagePost.ts#L18)

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`vote_status`](BackstagePost.md#vote_status)

***

### type

> `static` **type**: `string` = `'Post'`

Defined in: [src/parser/classes/Post.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Post.ts#L5)

#### Overrides

[`BackstagePost`](BackstagePost.md).[`type`](BackstagePost.md#type-1)

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

[`BackstagePost`](BackstagePost.md).[`as`](BackstagePost.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is Post & { [k in string]: R }`

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

`this is Post & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`BackstagePost`](BackstagePost.md).[`hasKey`](BackstagePost.md#haskey)

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

[`BackstagePost`](BackstagePost.md).[`is`](BackstagePost.md#is)

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

[`BackstagePost`](BackstagePost.md).[`key`](BackstagePost.md#key)

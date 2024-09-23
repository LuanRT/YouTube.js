[youtubei.js](../../../README.md) / [YTNodes](../README.md) / Comment

# Class: Comment

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new Comment()

> **new Comment**(`data`): [`Comment`](Comment.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`Comment`](Comment.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/comments/Comment.ts:47](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L47)

## Properties

### action\_buttons

> **action\_buttons**: `null` \| [`CommentActionButtons`](CommentActionButtons.md)

#### Defined in

[src/parser/classes/comments/Comment.ts:36](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L36)

***

### action\_menu

> **action\_menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/comments/Comment.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L35)

***

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/comments/Comment.ts:34](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L34)

***

### author\_badge

> **author\_badge**: `null` \| [`AuthorCommentBadge`](AuthorCommentBadge.md)

#### Defined in

[src/parser/classes/comments/Comment.ts:33](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L33)

***

### author\_is\_channel\_owner

> **author\_is\_channel\_owner**: `boolean`

#### Defined in

[src/parser/classes/comments/Comment.ts:29](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L29)

***

### comment\_id

> **comment\_id**: `string`

#### Defined in

[src/parser/classes/comments/Comment.ts:37](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L37)

***

### content

> **content**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/comments/Comment.ts:27](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L27)

***

### current\_user\_reply\_thumbnail

> **current\_user\_reply\_thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/comments/Comment.ts:30](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L30)

***

### is\_disliked

> **is\_disliked**: `boolean`

#### Defined in

[src/parser/classes/comments/Comment.ts:42](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L42)

***

### is\_hearted

> **is\_hearted**: `boolean`

#### Defined in

[src/parser/classes/comments/Comment.ts:43](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L43)

***

### is\_liked

> **is\_liked**: `boolean`

#### Defined in

[src/parser/classes/comments/Comment.ts:41](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L41)

***

### is\_member

> **is\_member**: `boolean`

#### Defined in

[src/parser/classes/comments/Comment.ts:45](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L45)

***

### is\_pinned

> **is\_pinned**: `boolean`

#### Defined in

[src/parser/classes/comments/Comment.ts:44](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L44)

***

### paid\_comment\_chip

> **paid\_comment\_chip**: `null` \| [`PdgCommentChip`](PdgCommentChip.md)

#### Defined in

[src/parser/classes/comments/Comment.ts:32](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L32)

***

### published

> **published**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/comments/Comment.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L28)

***

### reply\_count

> **reply\_count**: `number`

#### Defined in

[src/parser/classes/comments/Comment.ts:40](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L40)

***

### sponsor\_comment\_badge

> **sponsor\_comment\_badge**: `null` \| [`SponsorCommentBadge`](SponsorCommentBadge.md)

#### Defined in

[src/parser/classes/comments/Comment.ts:31](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L31)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L8)

***

### vote\_count

> **vote\_count**: `string`

#### Defined in

[src/parser/classes/comments/Comment.ts:39](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L39)

***

### vote\_status

> **vote\_status**: `string`

#### Defined in

[src/parser/classes/comments/Comment.ts:38](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L38)

***

### type

> `static` **type**: `string` = `'Comment'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/comments/Comment.ts:23](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L23)

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

### dislike()

> **dislike**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Dislikes the comment.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/classes/comments/Comment.ts:101](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L101)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is Comment & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is Comment & { [k in string]: R }`

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

***

### like()

> **like**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Likes the comment.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/classes/comments/Comment.ts:82](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L82)

***

### reply()

> **reply**(`text`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Creates a reply to the comment.

#### Parameters

• **text**: `string`

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/classes/comments/Comment.ts:121](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L121)

***

### setActions()

> **setActions**(`actions`): `void`

#### Parameters

• **actions**: `undefined` \| [`Actions`](../../../classes/Actions.md)

#### Returns

`void`

#### Defined in

[src/parser/classes/comments/Comment.ts:179](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L179)

***

### translate()

> **translate**(`target_language`): `Promise`\<`object`\>

Translates the comment to a given language.

#### Parameters

• **target\_language**: `string`

Ex; en, ja

#### Returns

`Promise`\<`object`\>

##### content

> **content**: `any`

##### data

> **data**: `any`

##### status\_code

> **status\_code**: `number`

##### success

> **success**: `boolean`

#### Defined in

[src/parser/classes/comments/Comment.ts:151](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/comments/Comment.ts#L151)

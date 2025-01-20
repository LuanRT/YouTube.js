[youtubei.js](../../../README.md) / [YTNodes](../README.md) / CommentView

# Class: CommentView

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new CommentView()

> **new CommentView**(`data`): [`CommentView`](CommentView.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`CommentView`](CommentView.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/comments/CommentView.ts:55](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L55)

## Properties

### author?

> `optional` **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:49](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L49)

***

### author\_is\_channel\_owner?

> `optional` **author\_is\_channel\_owner**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:44](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L44)

***

### comment\_id

> **comment\_id**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L38)

***

### content?

> `optional` **content**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:42](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L42)

***

### dislike\_command?

> `optional` **dislike\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:33](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L33)

***

### is\_disliked?

> `optional` **is\_disliked**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:52](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L52)

***

### is\_hearted?

> `optional` **is\_hearted**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:53](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L53)

***

### is\_liked?

> `optional` **is\_liked**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:51](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L51)

***

### is\_member?

> `optional` **is\_member**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:47](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L47)

***

### is\_pinned

> **is\_pinned**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L39)

***

### keys

> **keys**: `CommentKeys`

#### Defined in

[src/parser/classes/comments/CommentView.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L40)

***

### like\_command?

> `optional` **like\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:32](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L32)

***

### like\_count?

> `optional` **like\_count**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:45](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L45)

***

### member\_badge?

> `optional` **member\_badge**: `MemberBadge`

#### Defined in

[src/parser/classes/comments/CommentView.ts:48](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L48)

***

### published\_time?

> `optional` **published\_time**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:43](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L43)

***

### reply\_command?

> `optional` **reply\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:36](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L36)

***

### reply\_count?

> `optional` **reply\_count**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:46](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L46)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### undislike\_command?

> `optional` **undislike\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:35](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L35)

***

### unlike\_command?

> `optional` **unlike\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:34](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L34)

***

### type

> `static` **type**: `string` = `'CommentView'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/comments/CommentView.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L28)

## Methods

### applyMutations()

> **applyMutations**(`comment`?, `toolbar_state`?, `toolbar_surface`?): `void`

#### Parameters

• **comment?**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

• **toolbar\_state?**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

• **toolbar\_surface?**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

`void`

#### Defined in

[src/parser/classes/comments/CommentView.ts:70](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L70)

***

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

### dislike()

> **dislike**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Dislikes the comment.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

A promise that resolves to the API response.

#### Throws

If the Actions instance is not set for this comment or if the dislike command is not found.

#### Defined in

[src/parser/classes/comments/CommentView.ts:132](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L132)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is CommentView & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is CommentView & { [k in string]: R }`

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

### like()

> **like**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Likes the comment.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

A promise that resolves to the API response.

#### Throws

If the Actions instance is not set for this comment or if the like command is not found.

#### Defined in

[src/parser/classes/comments/CommentView.ts:114](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L114)

***

### reply()

> **reply**(`comment_text`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Replies to the comment.

#### Parameters

• **comment\_text**: `string`

The text of the reply.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

A promise that resolves to the API response.

#### Throws

If the Actions instance is not set for this comment or if the reply command is not found.

#### Defined in

[src/parser/classes/comments/CommentView.ts:187](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L187)

***

### setActions()

> **setActions**(`actions`): `void`

#### Parameters

• **actions**: `undefined` \| [`Actions`](../../../classes/Actions.md)

#### Returns

`void`

#### Defined in

[src/parser/classes/comments/CommentView.ts:238](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L238)

***

### translate()

> **translate**(`target_language`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md) & `object`\>

Translates the comment to the specified target language.

#### Parameters

• **target\_language**: `string`

The target language to translate the comment to, e.g. 'en', 'ja'.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md) & `object`\>

Resolves to an ApiResponse object with the translated content, if available.

#### Throws

if the Actions instance is not set for this comment or if the comment content is not found.

#### Defined in

[src/parser/classes/comments/CommentView.ts:216](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L216)

***

### undislike()

> **undislike**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Undislikes the comment.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

A promise that resolves to the API response.

#### Throws

If the Actions instance is not set for this comment or if the undislike command is not found.

#### Defined in

[src/parser/classes/comments/CommentView.ts:168](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L168)

***

### unlike()

> **unlike**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Unlikes the comment.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

A promise that resolves to the API response.

#### Throws

If the Actions instance is not set for this comment or if the unlike command is not found.

#### Defined in

[src/parser/classes/comments/CommentView.ts:150](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/comments/CommentView.ts#L150)

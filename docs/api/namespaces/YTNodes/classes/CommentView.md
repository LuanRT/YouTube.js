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

[src/parser/classes/comments/CommentView.ts:66](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L66)

## Properties

### author?

> `optional` **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:60](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L60)

***

### author\_is\_channel\_owner?

> `optional` **author\_is\_channel\_owner**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:45](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L45)

***

### comment\_id

> **comment\_id**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:39](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L39)

***

### content?

> `optional` **content**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:43](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L43)

***

### creator\_thumbnail\_url?

> `optional` **creator\_thumbnail\_url**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:46](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L46)

***

### dislike\_active\_tooltip?

> `optional` **dislike\_active\_tooltip**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:53](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L53)

***

### dislike\_command?

> `optional` **dislike\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:33](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L33)

***

### dislike\_inactive\_tooltip?

> `optional` **dislike\_inactive\_tooltip**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:54](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L54)

***

### heart\_active\_tooltip?

> `optional` **heart\_active\_tooltip**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:55](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L55)

***

### is\_disliked?

> `optional` **is\_disliked**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:63](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L63)

***

### is\_hearted?

> `optional` **is\_hearted**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:64](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L64)

***

### is\_liked?

> `optional` **is\_liked**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:62](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L62)

***

### is\_member?

> `optional` **is\_member**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:58](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L58)

***

### is\_pinned

> **is\_pinned**: `boolean`

#### Defined in

[src/parser/classes/comments/CommentView.ts:40](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L40)

***

### keys

> **keys**: `CommentKeys`

#### Defined in

[src/parser/classes/comments/CommentView.ts:41](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L41)

***

### like\_active\_tooltip?

> `optional` **like\_active\_tooltip**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:51](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L51)

***

### like\_button\_a11y?

> `optional` **like\_button\_a11y**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:47](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L47)

***

### like\_command?

> `optional` **like\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:32](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L32)

***

### like\_count?

> `optional` **like\_count**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:48](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L48)

***

### like\_count\_a11y?

> `optional` **like\_count\_a11y**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:50](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L50)

***

### like\_count\_liked?

> `optional` **like\_count\_liked**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:49](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L49)

***

### like\_inactive\_tooltip?

> `optional` **like\_inactive\_tooltip**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:52](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L52)

***

### member\_badge?

> `optional` **member\_badge**: `MemberBadge`

#### Defined in

[src/parser/classes/comments/CommentView.ts:59](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L59)

***

### prepare\_account\_command?

> `optional` **prepare\_account\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:37](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L37)

***

### published\_time?

> `optional` **published\_time**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:44](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L44)

***

### reply\_command?

> `optional` **reply\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:36](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L36)

***

### reply\_count?

> `optional` **reply\_count**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:56](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L56)

***

### reply\_count\_a11y?

> `optional` **reply\_count\_a11y**: `string`

#### Defined in

[src/parser/classes/comments/CommentView.ts:57](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L57)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L8)

***

### undislike\_command?

> `optional` **undislike\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:35](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L35)

***

### unlike\_command?

> `optional` **unlike\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/comments/CommentView.ts:34](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L34)

***

### type

> `static` **type**: `string` = `'CommentView'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/comments/CommentView.ts:28](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L28)

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

[src/parser/classes/comments/CommentView.ts:81](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L81)

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

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L29)

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

[src/parser/classes/comments/CommentView.ts:157](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L157)

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

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L19)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L51)

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

[src/parser/classes/comments/CommentView.ts:139](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L139)

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

[src/parser/classes/comments/CommentView.ts:212](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L212)

***

### setActions()

> **setActions**(`actions`): `void`

#### Parameters

• **actions**: `undefined` \| [`Actions`](../../../classes/Actions.md)

#### Returns

`void`

#### Defined in

[src/parser/classes/comments/CommentView.ts:263](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L263)

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

[src/parser/classes/comments/CommentView.ts:241](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L241)

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

[src/parser/classes/comments/CommentView.ts:193](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L193)

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

[src/parser/classes/comments/CommentView.ts:175](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/comments/CommentView.ts#L175)

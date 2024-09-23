[youtubei.js](../../../README.md) / [YT](../README.md) / Comments

# Class: Comments

## Constructors

### new Comments()

> **new Comments**(`actions`, `data`, `already_parsed`): [`Comments`](Comments.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **data**: `any`

• **already\_parsed**: `boolean` = `false`

#### Returns

[`Comments`](Comments.md)

#### Defined in

[src/parser/youtube/Comments.ts:22](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/Comments.ts#L22)

## Properties

### contents

> **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CommentThread`](../../YTNodes/classes/CommentThread.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:20](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/Comments.ts#L20)

***

### header?

> `optional` **header**: [`CommentsHeader`](../../YTNodes/classes/CommentsHeader.md)

#### Defined in

[src/parser/youtube/Comments.ts:19](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/Comments.ts#L19)

## Accessors

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Comments.ts:117](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/Comments.ts#L117)

***

### page

> `get` **page**(): [`INextResponse`](../../APIResponseTypes/type-aliases/INextResponse.md)

#### Returns

[`INextResponse`](../../APIResponseTypes/type-aliases/INextResponse.md)

#### Defined in

[src/parser/youtube/Comments.ts:121](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/Comments.ts#L121)

## Methods

### applySort()

> **applySort**(`sort`): `Promise`\<[`Comments`](Comments.md)\>

Applies given sort option to the comments.

#### Parameters

• **sort**: `"TOP_COMMENTS"` \| `"NEWEST_FIRST"`

Sort type.

#### Returns

`Promise`\<[`Comments`](Comments.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:51](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/Comments.ts#L51)

***

### createComment()

> **createComment**(`text`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Creates a top-level comment.

#### Parameters

• **text**: `string`

Comment text.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:78](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/Comments.ts#L78)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`Comments`](Comments.md)\>

Retrieves next batch of comments.

#### Returns

`Promise`\<[`Comments`](Comments.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:98](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/Comments.ts#L98)
